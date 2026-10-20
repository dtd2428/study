const assert = require('node:assert/strict');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require('playwright');
const root = path.resolve(__dirname, '..');
global.window = {STUDY_BANKS: []};
require('../data/subjects/network-security-midterm/questions.js');
const bank = window.STUDY_BANKS[0];
const ids = ['nsm-119', 'nsm-101', 'nsm-061', 'nsm-008', 'nsm-085'];
(async () => {
  const browser = await chromium.launch({channel: process.env.BROWSER_CHANNEL || 'chrome', headless: true});
  try {
    const page = await browser.newPage({viewport: {width: 390, height: 844}});
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    const state = () => page.evaluate(() => JSON.parse(localStorage.getItem('studyroom-v1')));
    const fill = async q => {
      if (q.prompt.startsWith('[O/X]')) await page.locator(`[data-ox="${q.answers[0]}"]`).click();
      else if (q.type === 'choice') await page.locator(`[data-option="${q.answer}"]`).click();
      else if (q.type === 'blanks') for (const [i, value] of q.answers.entries()) await page.locator(`[data-answer="${i}"]`).fill(value);
      else await page.locator('#written').fill(q.type === 'essay' ? q.model : q.answers[0]);
    };
    await page.goto(pathToFileURL(path.join(root, 'index.html')).href);
    await page.locator('#setup').waitFor();
    for (const id of ids) {
      const q = bank.questions.find(q => q.id === id);
      const other = bank.questions.find(q => q.id === 'nsm-120');
      const session = {id: 'retry-test', bankId: bank.id, title: bank.title, mode: 'practice', started: Date.now(), deadline: Date.now() + 600000, index: 0, questions: [q, other], answers: {[other.id]: '128'}, checked: {[other.id]: true}, grades: {}, marks: {[q.id]: true}};
      await page.evaluate(s => localStorage.setItem('studyroom-v1', JSON.stringify({custom: [], history: [], session: s})), session);
      await page.reload();
      await page.locator('#resume').click();
      assert.equal(await page.locator('#retry-current').count(), 0);
      await fill(q);
      if (q.id === 'nsm-119') await page.locator('#written').fill('.');
      await page.locator('#check').click();
      if (q.id === 'nsm-119') assert.match(await page.locator('.feedback h3').innerText(), /다시 짚어볼/);
      if (q.type === 'essay') await page.locator('[data-grade=no]').click();
      assert.equal(await page.locator('#retry-current').count(), 1);
      await page.locator('#retry-current').click();
      let saved = (await state()).session;
      assert.equal(saved.answers[q.id], undefined);
      assert.equal(saved.checked[q.id], undefined);
      assert.equal(saved.grades[q.id], undefined);
      assert.equal(saved.answers[other.id], '128');
      assert.equal(saved.checked[other.id], true);
      assert.equal(saved.marks[q.id], true);
      assert.equal(saved.id, session.id);
      assert.equal(saved.deadline, session.deadline);
      assert.deepEqual(saved.questions, session.questions);
      assert.equal(await page.locator('.feedback').count(), 0);
      assert.equal(await page.locator('#check').count(), 1);
      assert.match(await page.locator('#answered-count').innerText(), /1 \/ 2/);
      await page.reload();
      await page.locator('#resume').click();
      assert.equal(await page.locator('.feedback').count(), 0);
      await fill(q);
      await page.locator('#check').click();
      if (q.type === 'essay') await page.locator('[data-grade=yes]').click();
      else assert.match(await page.locator('.feedback h3').innerText(), /정답이에요/);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      if (q.id === 'nsm-119') await page.screenshot({path: path.join(root, 'tmp/retry-current-mobile.png'), fullPage: true});
    }
    // 모의고사에서는 문제별 다시 풀기나 해설 확인을 제공하지 않습니다.
    await page.evaluate(() => {const saved = JSON.parse(localStorage.getItem('studyroom-v1')); saved.session.mode = 'exam'; saved.session.checked = {}; localStorage.setItem('studyroom-v1', JSON.stringify(saved));});
    await page.reload();
    await page.locator('#resume').click();
    assert.equal(await page.locator('#retry-current, #check, .feedback').count(), 0);
    assert.deepEqual(errors, []);
    console.log('PASS: retry current short, blanks, choice, O/X and essay; clears grades; preserves other answers, marks, order and timer; reload; no retry in exam; mobile.');
  } finally {await browser.close();}
})().catch(error => {console.error(error); process.exitCode = 1;});
