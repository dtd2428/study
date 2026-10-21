const assert = require('node:assert/strict');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require('playwright');
const root = path.resolve(__dirname, '..');
global.window = {STUDY_BANKS: []};
require('../assets/js/question-schema.js');
require('../data/subjects/hacking/questions.js');
require('../data/subjects/network-security-midterm/questions.js');
const banks = window.STUDY_BANKS;
const choices = banks.flatMap(bank => bank.questions.filter(q => q.type === 'choice').map(q => ({bank, q})));
window.STUDY_VALIDATE_BANKS(banks);
assert.equal(choices.length, 111);
for (const {q} of choices) for (const option of q.options) assert.ok(option.explanation?.trim(), `${q.id}:${option.id}`);
const base = choices.find(({q}) => q.id === 'nsm-150');
for (const bad of ['', 123, {}]) {
  const q = structuredClone(base.q);
  q.options[0].explanation = bad;
  assert.throws(() => window.STUDY_VALIDATE_BANKS({...base.bank, questions: [q]}));
}

(async () => {
  const browser = await chromium.launch({channel: process.env.BROWSER_CHANNEL || 'chrome', headless: true});
  try {
    const page = await browser.newPage({viewport: {width: 390, height: 844}});
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(pathToFileURL(path.join(root, 'index.html')).href);
    await page.locator('#setup').waitFor();
    const seed = async (bank, q, mode = 'practice') => {
      const session = {id: 'choice-feedback', bankId: bank.id, title: bank.title, mode, started: Date.now(), deadline: null, index: 0, questions: [{...q, options: [...q.options].reverse()}], answers: {}, checked: {}, marks: {}, grades: {}};
      await page.evaluate(s => localStorage.setItem('studyroom-v1', JSON.stringify({custom: [], history: [], session: s})), session);
      await page.reload();
      await page.locator('#resume').click();
    };
    for (const id of ['nsm-150', 'nsm-074', 'hk-023']) {
      const {bank, q} = choices.find(({q}) => q.id === id);
      const wrong = q.options.find(o => o.id !== q.answer);
      await seed(bank, q);
      await page.locator(`[data-option="${wrong.id}"]`).click();
      assert.equal(await page.locator('.wrong-choice-feedback').count(), 0);
      await page.locator('#check').click();
      assert.equal(await page.locator('.wrong-choice-reason').innerText(), wrong.explanation);
      assert.match(await page.locator('.wrong-choice-answer').innerText(), new RegExp(wrong.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
      if (id === 'nsm-150') {
        assert.match(await page.locator('.wrong-choice-reason').innerText(), /네트워크 계층은 OSI 3계층/);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
        await page.screenshot({path: path.join(root, 'tmp/choice-feedback-mobile.png'), fullPage: true});
      }
      await page.reload();
      await page.locator('#resume').click();
      assert.equal(await page.locator('.wrong-choice-reason').innerText(), wrong.explanation);
      await page.locator('#retry-current').click();
      assert.equal(await page.locator('.wrong-choice-feedback').count(), 0);
      await page.locator(`[data-option="${q.answer}"]`).click();
      await page.locator('#check').click();
      assert.equal(await page.locator('.wrong-choice-feedback').count(), 0);
    }

    // 기존 저장 문제는 문제와 전체 보기가 같은 경우에만 해설을 보완합니다.
    const legacy = structuredClone(base.q);
    legacy.options.forEach(o => delete o.explanation);
    await seed(base.bank, legacy, 'exam');
    await page.locator('[data-option=a]').click();
    assert.equal(await page.locator('.wrong-choice-feedback, .feedback').count(), 0);
    await page.locator('#submit-exam').click();
    await page.locator('[data-confirm]').click();
    await page.locator('.result-hero').waitFor();
    assert.equal(await page.locator('.wrong-choice-reason').textContent(), base.q.options[0].explanation);
    const modified = structuredClone(legacy);
    modified.options[0].text = '사용자가 수정한 보기';
    await seed(base.bank, modified);
    await page.locator('[data-option=a]').click();
    await page.locator('#check').click();
    assert.equal(await page.locator('.wrong-choice-feedback').count(), 0);

    // 오답 333개를 저장된 결과로 표시해 보기 ID와 해설의 연결을 확인합니다.
    const questions = [], answers = {};
    for (const {q} of choices) for (const wrong of q.options.filter(o => o.id !== q.answer)) {
      const item = {...q, id: `${q.id}-${wrong.id}`, options: [...q.options].reverse()};
      questions.push(item);
      answers[item.id] = wrong.id;
    }
    const record = {id: 'all-wrong-choices', bankId: base.bank.id, title: '보기별 해설 검증', mode: 'exam', date: new Date().toISOString(), elapsed: 0, questions, answers, marks: {}, grades: {}, total: questions.length, correct: 0, wrong: questions.length, pending: 0, score: 0};
    await page.evaluate(r => localStorage.setItem('studyroom-v1', JSON.stringify({custom: [], history: [r], session: null})), record);
    await page.reload();
    await page.locator('[data-page=records]').click();
    await page.locator('[data-record="0"]').click();
    const reasons = await page.locator('.wrong-choice-reason').allTextContents();
    assert.equal(reasons.length, 333);
    assert.deepEqual(reasons, questions.map(q => q.options.find(o => o.id === answers[q.id]).explanation));

    const safe = structuredClone(base.q);
    safe.id = 'custom-choice';
    safe.options[0].explanation = '<img src=x onerror=alert(1)>';
    await seed(base.bank, safe);
    await page.locator('[data-option=a]').click();
    await page.locator('#check').click();
    assert.equal(await page.locator('.wrong-choice-reason').textContent(), safe.options[0].explanation);
    assert.equal(await page.locator('.wrong-choice-feedback img').count(), 0);

    await page.locator('[data-page=manage]').click();
    await page.locator('#new-title').fill('보기 해설 작성 테스트');
    await page.locator('#new-weeks').fill('1');
    await page.locator('#new-subject button[type=submit]').click();
    const customId = await page.evaluate(() => JSON.parse(localStorage.getItem('studyroom-v1')).custom[0].id);
    await page.locator(`[data-add="${customId}"]`).click();
    await page.locator('#q-prompt').fill('보기별 해설 작성 확인');
    await page.locator('#q-explanation').fill('공통 정답 해설');
    for (let i = 0; i < 4; i++) {
      await page.locator(`#q-option-${i}`).fill(`보기 ${i}`);
      await page.locator(`#q-option-explanation-${i}`).fill(`개별 설명 ${i}`);
    }
    await page.locator('#editor-form button[type=submit]').click();
    const created = await page.evaluate(() => JSON.parse(localStorage.getItem('studyroom-v1')).custom[0].questions[0]);
    assert.deepEqual(created.options.map(o => o.explanation), ['개별 설명 0', '개별 설명 1', '개별 설명 2', '개별 설명 3']);
    window.STUDY_VALIDATE_BANKS({...base.bank, questions: [created]});
    assert.deepEqual(errors, []);
    console.log('PASS: 111 choice questions, 333 wrong-option reasons, shuffled IDs, practice/exam timing, retry, reload, records, legacy matching, custom isolation, escaping, schema and mobile.');
  } finally {await browser.close();}
})().catch(e => {console.error(e); process.exitCode = 1;});
