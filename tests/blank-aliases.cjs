const assert = require('node:assert/strict');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require('playwright');
const root = path.resolve(__dirname, '..');
global.window = {STUDY_BANKS: []};
require('../assets/js/question-schema.js');
require('../data/subjects/network-security-midterm/questions.js');
const bank = window.STUDY_BANKS[0];
const question = bank.questions.find(q => q.id === 'nsm-045');
window.STUDY_VALIDATE_BANKS(bank);
const validateQuestion = q => window.STUDY_VALIDATE_BANKS({...bank, questions: [q]});
for (const bad of [[], [['벨만포드']], ['벨만포드', '다익스트라'], [[1], []], [[], [null]]]) {
  assert.throws(() => validateQuestion({...question, answerAliases: bad}));
}
const legacy = {...question};
delete legacy.answerAliases;
validateQuestion(legacy);
validateQuestion(JSON.parse(JSON.stringify(question)));

(async () => {
  const browser = await chromium.launch({channel: process.env.BROWSER_CHANNEL || 'chrome', headless: true});
  try {
    const page = await browser.newPage({viewport: {width: 390, height: 844}});
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(pathToFileURL(path.join(root, 'index.html')).href);
    await page.locator('#setup').waitFor();
    const cases = [
      ['벨만포드', '다익스트라', 2],
      ['벨만 포드', '다익스트라 알고리즘', 2],
      ['Bellman-Ford', 'Dijkstra', 2],
      ['bellman ford', '다익스트라', 2],
      ['다익스트라', '벨만포드', 0],
      ['벨만포드', 'RIP', 1]
    ];
    for (const [first, second, correct] of cases) {
      const session = {id: 'aliases-test', bankId: bank.id, title: bank.title, mode: 'practice', started: Date.now(), deadline: null, index: 0, questions: [question], answers: {}, checked: {}, marks: {}, grades: {}};
      await page.evaluate(s => localStorage.setItem('studyroom-v1', JSON.stringify({custom: [], history: [], session: s})), session);
      await page.reload();
      await page.locator('#resume').click();
      assert.equal(await page.locator('.spacing-hint').count(), 0);
      await page.locator('[data-answer="0"]').fill(first);
      await page.locator('[data-answer="1"]').fill(second);
      await page.locator('#check').click();
      assert.equal(await page.locator('.blank-correct').count(), correct);
      if (correct === 2) assert.match(await page.locator('.feedback h3').innerText(), /정답이에요/);
      else assert.match(await page.locator('.feedback h3').innerText(), /다시 짚어볼/);
      await page.reload();
      await page.locator('#resume').click();
      assert.equal(await page.locator('.blank-correct').count(), correct);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      if (first === '벨만포드' && correct === 2) await page.screenshot({path: path.join(root, 'tmp/blank-aliases-mobile.png'), fullPage: true});
      await page.locator('#submit-exam').click();
      await page.locator('[data-confirm]').click();
      await page.locator('.result-hero').waitFor();
      assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('studyroom-v1')).history[0].correct), correct === 2 ? 1 : 0);
      assert.equal(await page.locator('.blank-results .is-correct').count(), correct);
    }
    assert.deepEqual(errors, []);
    console.log('PASS: Korean/English aliases, spaced names, mixed answers, wrong/swapped rejection, per-field and total grading, reload, records, schema and mobile.');
  } finally {await browser.close();}
})().catch(e => {console.error(e); process.exitCode = 1;});
