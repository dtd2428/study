const assert = require('node:assert/strict');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require('playwright');

const root = path.resolve(__dirname, '..');
const url = pathToFileURL(path.join(root, 'index.html')).href;
const KEY = 'studyroom-v1';

(async () => {
  const browser = await chromium.launch({channel: process.env.BROWSER_CHANNEL || 'chrome', headless: true});
  try {
    const page = await browser.newPage({viewport: {width: 1280, height: 900}});
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));

    await page.goto(url);
    await page.locator('#setup').waitFor();
    await page.locator('#quick-start').click();
    await page.locator('.question-card').waitFor();

    const first = await page.evaluate(key => JSON.parse(localStorage.getItem(key)).session.questions[0], KEY);
    await page.keyboard.press('Alt+Enter');
    assert.equal(await page.locator('.feedback').count(), 1, 'Alt+Enter should reveal feedback without an answer');
    assert.equal((await page.evaluate(key => JSON.parse(localStorage.getItem(key)).session.checked, KEY))[first.id], true);
    assert.ok(await page.locator('.unanswered-note').count() >= 2, 'unanswered answer and feedback should be visibly labeled');
    assert.equal(await page.locator('.number.current.unanswered').count(), 1, 'current unanswered question should be marked in the palette');
    assert.match(await page.locator('.feedback').innerText(), /내 답안: 미응답/);

    await page.keyboard.press('Alt+Enter');
    assert.equal(await page.locator('.feedback').count(), 0, 'second Alt+Enter should retry the current question');
    assert.equal(await page.locator('#check').count(), 1);
    assert.equal((await page.evaluate(key => JSON.parse(localStorage.getItem(key)).session.checked, KEY))[first.id], undefined);
    await page.keyboard.press('Alt+Enter');
    assert.equal(await page.locator('.feedback').count(), 1);
    await page.dispatchEvent('body', 'keydown', {key: 'Enter', altKey: true, repeat: true, bubbles: true});
    assert.equal(await page.locator('.feedback').count(), 1, 'holding the shortcut should not repeatedly toggle');

    await page.locator('#next').click();
    if (await page.locator('[data-option]').count()) await page.locator('[data-option]').first().click();
    else if (await page.locator('[data-ox]').count()) await page.locator('[data-ox]').first().click();
    else if (await page.locator('[data-answer]').count()) {
      for (const input of await page.locator('[data-answer]').all()) await input.fill('작성한 답안');
    }
    await page.keyboard.press('Alt+Enter');
    assert.equal(await page.locator('.feedback').count(), 1, 'Alt+Enter should reveal feedback after answering');
    assert.equal(await page.locator('.number.current.unanswered').count(), 0, 'answered question should not remain marked unanswered');

    const beforeRetry = await page.evaluate(key => JSON.parse(localStorage.getItem(key)).session, KEY);
    const current = beforeRetry.questions[beforeRetry.index];
    if (current.type === 'essay') await page.locator('[data-grade=yes]').click();
    await page.keyboard.press('Alt+Enter');
    const afterRetry = await page.evaluate(key => JSON.parse(localStorage.getItem(key)).session, KEY);
    assert.equal(afterRetry.answers[current.id], undefined);
    assert.equal(afterRetry.checked[current.id], undefined);
    assert.equal(afterRetry.grades[current.id], undefined);
    assert.equal(afterRetry.checked[first.id], true);
    assert.equal(afterRetry.index, beforeRetry.index);
    assert.equal(afterRetry.deadline, beforeRetry.deadline);
    assert.deepEqual(afterRetry.questions, beforeRetry.questions);
    assert.equal(await page.locator('.feedback').count(), 0);
    await page.reload();
    await page.locator('#resume').click();
    assert.equal(await page.locator('.feedback').count(), 0, 'retry state should persist after reload');
    await page.keyboard.press('Alt+Enter');
    assert.equal(await page.locator('.feedback').count(), 1);

    await page.evaluate(key => {
      const data = JSON.parse(localStorage.getItem(key));
      data.session.mode = 'exam';
      data.session.checked = {};
      localStorage.setItem(key, JSON.stringify(data));
    }, KEY);
    await page.reload();
    await page.locator('#resume').click();
    await page.keyboard.press('Alt+Enter');
    assert.equal(await page.locator('.feedback').count(), 0, 'exam mode should not reveal or reset answers');
    await page.locator('#submit-exam').click();
    assert.match(await page.locator('#confirmation').innerText(), /문항의 답안이 비어 있어요/);
    await page.locator('[data-confirm]').click();
    await page.locator('.result-hero').waitFor();
    assert.ok(await page.locator('.review-card').filter({hasText: '내 답안: 미응답'}).count() > 0, 'result review should label unanswered answers');
    assert.deepEqual(errors, []);
    console.log('PASS: Alt+Enter reveal/retry toggle, repeat guard, clear current answer and grade only, preserve other checks/order/timer, reload, no exam toggle, unanswered submission.');
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
