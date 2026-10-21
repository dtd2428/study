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

    await page.locator('#next').click();
    if (await page.locator('[data-option]').count()) await page.locator('[data-option]').first().click();
    else if (await page.locator('[data-ox]').count()) await page.locator('[data-ox]').first().click();
    else if (await page.locator('[data-answer]').count()) {
      for (const input of await page.locator('[data-answer]').all()) await input.fill('작성한 답안');
    }
    await page.keyboard.press('Alt+Enter');
    assert.equal(await page.locator('.feedback').count(), 1, 'Alt+Enter should reveal feedback after answering');
    assert.equal(await page.locator('.number.current.unanswered').count(), 0, 'answered question should not remain marked unanswered');

    await page.evaluate(key => {
      const data = JSON.parse(localStorage.getItem(key));
      data.session.mode = 'exam';
      data.session.checked = {};
      localStorage.setItem(key, JSON.stringify(data));
    }, KEY);
    await page.reload();
    await page.locator('#resume').click();
    await page.locator('#submit-exam').click();
    assert.match(await page.locator('#confirmation').innerText(), /문항의 답안이 비어 있어요/);
    await page.locator('[data-confirm]').click();
    await page.locator('.result-hero').waitFor();
    assert.ok(await page.locator('.review-card').filter({hasText: '내 답안: 미응답'}).count() > 0, 'result review should label unanswered answers');
    assert.deepEqual(errors, []);
    console.log('PASS: Alt+Enter reveals unanswered feedback, unanswered state is visible, and unanswered exam submission is allowed.');
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
