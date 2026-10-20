/* 실제 등록 파일로 새 과목 로딩·출제·100문항 채점·Lecture 필터를 확인합니다. */
const assert = require('node:assert/strict');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require('playwright');
const root = path.resolve(__dirname, '..');
global.window = {STUDY_BANKS: []};
require('../assets/js/question-schema.js');
require('../data/subjects.js');
for (const entry of window.STUDY_SUBJECTS) require(path.join(root, entry.script));
window.STUDY_VALIDATE_BANKS(window.STUDY_BANKS);
const bank = window.STUDY_BANKS.find(b => b.id === 'network-security-midterm');
assert.equal(bank.title, '네트워크보안응용 중간고사');
assert.equal(bank.questions.length, 100);
assert.equal(new Set(bank.questions.map(q => q.prompt)).size, 100);
assert.ok(bank.questions.every(q => q.source && q.explanation));
assert.deepEqual(bank.weeks.map((_, i) => bank.questions.filter(q => q.week === i + 1).length), [18, 46, 19, 17]);

(async () => {
  const browser = await chromium.launch({channel: process.env.BROWSER_CHANNEL || 'chrome', headless: true});
  try {
    const page = await browser.newPage({viewport: {width: 1440, height: 1000}});
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    const state = () => page.evaluate(() => JSON.parse(localStorage.getItem('studyroom-v1')));
    await page.goto(pathToFileURL(path.join(root, 'index.html')).href);
    await page.locator('#setup').waitFor();
    assert.equal(await page.locator('#subject option').count(), window.STUDY_SUBJECTS.length);
    await page.locator('#subject').selectOption(bank.id);
    assert.match(await page.locator('#subject-chips').innerText(), /100문항/);
    await page.screenshot({path: path.join(root, 'tmp/network-home.png'), fullPage: true});
    await page.locator('#quick-start').click();
    await page.locator('.question-card').waitFor();
    let session = (await state()).session;
    assert.equal(session.bankId, bank.id);
    assert.equal(session.questions.length, 30);
    assert.equal(new Set(session.questions.map(q => q.id)).size, 30);
    assert.ok(session.questions.every(q => bank.questions.some(item => item.id === q.id)));
    await page.reload();
    await page.locator('#resume').click();
    await page.locator('.question-card').waitFor();
    assert.deepEqual((await state()).session.questions, session.questions);

    await page.locator('[data-page=home]').click();
    await page.locator('#subject').selectOption(bank.id);
    await page.locator('#advanced-settings summary').click();
    await page.locator('#count').selectOption('all');
    await page.locator('input[name=mode][value=practice]').check();
    await page.locator('#setup button[type=submit]').click();
    await page.locator('[data-confirm]').click();
    await page.locator('.question-card').waitFor();
    session = (await state()).session;
    assert.equal(session.questions.length, 100);
    const screenshots = new Set();
    for (const [i, q] of session.questions.entries()) {
      await page.locator(`[data-jump="${i}"]`).click();
      if (q.type === 'choice') await page.locator(`[data-option="${q.answer}"]`).click();
      else if (q.type === 'short' && q.prompt.startsWith('[O/X]')) {
        assert.equal(await page.locator('#written').count(), 0);
        assert.equal(await page.locator('[data-ox]').count(), 2);
        const correct = q.answers[0].toUpperCase();
        await page.locator(`[data-ox="${correct === 'O' ? 'X' : 'O'}"]`).click();
        await page.locator(`[data-ox="${correct}"]`).click();
        await page.reload();
        await page.locator('#resume').click();
        await page.locator('.question-card').waitFor();
        assert.equal(await page.locator(`[data-ox="${correct}"]`).getAttribute('aria-pressed'), 'true');
      }
      else if (q.type === 'short') await page.locator('#written').fill(q.answers[0]);
      else if (q.type === 'blanks') {
        for (const [j, answer] of q.answers.entries()) await page.locator(`[data-answer="${j}"]`).fill(answer);
      } else await page.locator('#written').fill(q.model);
      await page.locator('#check').click();
      if (q.type === 'essay') await page.locator('[data-grade=yes]').click();
      else assert.match(await page.locator('.feedback h3').innerText(), /정답이에요/, q.id);
      if (q.prompt.startsWith('[O/X]')) {
        assert.equal(await page.locator('[data-ox]:disabled').count(), 2);
        if (!screenshots.has('ox')) {
          await page.setViewportSize({width: 390, height: 844});
          assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
          await page.screenshot({path: path.join(root, 'tmp/network-ox-mobile.png'), fullPage: true});
          await page.setViewportSize({width: 1440, height: 1000});
          screenshots.add('ox');
        }
      }
      if (!screenshots.has(q.type)) {
        await page.screenshot({path: path.join(root, `tmp/network-${q.type}.png`), fullPage: true});
        screenshots.add(q.type);
      }
    }
    await page.locator('#submit-exam').click();
    await page.locator('[data-confirm]').click();
    await page.locator('.result-hero').waitFor();
    const record = (await state()).history[0];
    assert.equal(record.correct, 100);
    assert.equal(record.score, 100);
    assert.equal(record.pending, 0);

    // Lecture 4만 선택했을 때 다른 Lecture 문제가 섞이지 않아야 합니다.
    await page.locator('[data-page=home]').click();
    await page.locator('#subject').selectOption(bank.id);
    if (!await page.locator('#advanced-settings').evaluate(el => el.open)) await page.locator('#advanced-settings summary').click();
    for (const input of await page.locator('input[name=week]').all()) await input.setChecked(await input.getAttribute('value') === '4');
    await page.locator('#count').selectOption('all');
    await page.locator('#setup button[type=submit]').click();
    await page.locator('.question-card').waitFor();
    session = (await state()).session;
    assert.equal(session.questions.length, 17);
    assert.ok(session.questions.every(q => q.week === 4));
    await page.setViewportSize({width: 390, height: 844});
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await page.screenshot({path: path.join(root, 'tmp/network-mobile.png'), fullPage: true});

    // 변경 전의 문제 문구·소문자 답안이 저장된 시험도 버튼으로 복원합니다.
    const oldQuestion = {...bank.questions.find(q => q.id === 'nsm-008')};
    oldQuestion.prompt += ' (O 또는 X를 입력하세요.)';
    const legacy = {...session, index: 0, questions: [oldQuestion], answers: {[oldQuestion.id]: 'x'}, checked: {}, grades: {}};
    await page.evaluate(value => localStorage.setItem('studyroom-v1', JSON.stringify({custom: [], history: [], session: value})), legacy);
    await page.reload();
    await page.locator('#resume').click();
    assert.equal(await page.locator('[data-ox=X]').getAttribute('aria-pressed'), 'true');
    assert.doesNotMatch(await page.locator('.question-card h2').innerText(), /입력하세요/);
    await page.locator('[data-ox=O]').focus();
    await page.keyboard.press('Enter');
    await page.locator('#check').click();
    assert.match(await page.locator('.feedback h3').innerText(), /다시 짚어볼/);
    assert.equal(await page.locator('[data-ox=O].incorrect:disabled').count(), 1);
    assert.equal(await page.locator('[data-ox=X].correct:disabled').count(), 1);
    assert.deepEqual(errors, []);
    console.log('PASS: actual catalog, 100 source-linked questions, independent random 30, resume, all four answer types, full grading, Lecture filter, mobile layout.');
  } finally {
    await browser.close();
  }
})().catch(e => {console.error(e); process.exitCode = 1;});
