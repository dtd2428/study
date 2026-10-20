const assert = require('node:assert/strict');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require('playwright');
const root = path.resolve(__dirname, '..');
global.window = {STUDY_BANKS: []};
require('../data/subjects/network-security-midterm/questions.js');
const bank = window.STUDY_BANKS[0];
const osi = bank.questions.find(q => q.id === 'nsm-101');
const controls = bank.questions.find(q => q.id === 'nsm-036');

(async () => {
  const browser = await chromium.launch({channel: process.env.BROWSER_CHANNEL || 'chrome', headless: true});
  try {
    const page = await browser.newPage({viewport: {width: 1440, height: 1000}});
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(pathToFileURL(path.join(root, 'index.html')).href);
    await page.locator('#setup').waitFor();
    const seed = async (question, mode = 'practice') => {
      const session = {id: 'blank-feedback-test', bankId: bank.id, title: bank.title, mode, started: Date.now(), deadline: null, index: 0, questions: [question], answers: {}, checked: {}, grades: {}, marks: {}};
      await page.evaluate(s => localStorage.setItem('studyroom-v1', JSON.stringify({custom: [], history: [], session: s})), session);
      await page.reload();
      await page.locator('#resume').click();
      await page.locator('.question-card').waitFor();
    };
    await seed(osi);
    assert.equal(await page.locator('.spacing-hint').count(), 7);
    assert.equal(await page.locator('.blank-results').count(), 0);
    assert.equal(await page.locator('.blank-status').count(), 0);
    // 첨부 화면처럼 내부 공백과 용어 오류를 각각 확인합니다.
    const supplied = ['물리', '데이터 링크', '네트워크', '전', '세션', '표현', '응용'];
    for (const [i, value] of supplied.entries()) await page.locator(`[data-answer="${i}"]`).fill(value);
    await page.locator('#check').click();
    assert.match(await page.locator('.blank-summary').innerText(), /7개 중 5개 정답 · 2개 오답/);
    assert.equal(await page.locator('.blank-correct').count(), 5);
    assert.equal(await page.locator('.blank-incorrect').count(), 2);
    assert.equal(await page.locator('.blank-results .is-correct').count(), 5);
    assert.equal(await page.locator('.blank-results .is-incorrect').count(), 2);
    assert.match(await page.locator('.blank-results li').nth(1).innerText(), /내 답안: 데이터 링크[\s\S]*정답: 데이터링크/);
    assert.match(await page.locator('.blank-results li').nth(3).innerText(), /내 답안: 전[\s\S]*정답: 전송/);
    assert.equal(await page.locator('[data-answer="1"]').getAttribute('aria-invalid'), 'true');
    assert.equal(await page.locator('[data-answer="0"]').getAttribute('aria-invalid'), 'false');
    assert.equal(await page.locator('[data-answer]:disabled').count(), 7);
    await page.screenshot({path: path.join(root, 'tmp/blanks-feedback-desktop.png'), fullPage: true});
    await page.setViewportSize({width: 390, height: 844});
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await page.screenshot({path: path.join(root, 'tmp/blanks-feedback-mobile.png'), fullPage: true});
    await page.reload();
    await page.locator('#resume').click();
    assert.equal(await page.locator('.blank-results .is-incorrect').count(), 2);
    await page.locator('#submit-exam').click();
    await page.locator('[data-confirm]').click();
    await page.locator('.result-hero').waitFor();
    assert.equal(await page.locator('.blank-results .is-incorrect').count(), 2);
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('studyroom-v1')).history[0].correct), 0);

    await seed(controls, 'exam');
    assert.equal(await page.locator('.spacing-hint').count(), 0);
    await page.locator('[data-answer="0"]').fill('흐름 제어');
    await page.locator('[data-answer="1"]').fill('혼잡 제어');
    assert.equal(await page.locator('.blank-results, .blank-status, .feedback').count(), 0);
    await page.locator('#submit-exam').click();
    await page.locator('[data-confirm]').click();
    await page.locator('.result-hero').waitFor();
    assert.equal(await page.locator('.blank-results .is-correct').count(), 2);
    assert.deepEqual(errors, []);
    console.log('PASS: per-field mixed grading, spacing hints, answer details, locked inputs, resume, results, no early exam feedback, spaced answers, mobile.');
  } finally {
    await browser.close();
  }
})().catch(error => {console.error(error); process.exitCode = 1;});
