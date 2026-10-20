const assert=require('node:assert/strict');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..');
(async()=>{
 const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL||'chrome',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:390,height:844}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const state=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('studyroom-v1')));
  const reset=async()=>{await page.evaluate(()=>localStorage.clear());await page.reload();await page.locator('#setup').waitFor();};
  await page.goto(pathToFileURL(path.join(root,'index.html')).href);await page.locator('#setup').waitFor();
  await page.locator('#advanced-settings summary').click();await page.locator('#setuid-only').check();
  assert.match(await page.locator('#start-label').innerText(),/5문항/);
  await page.locator('#setuid-settings').screenshot({path:path.join(root,'tmp/setuid-focus-mobile.png')});
  await page.locator('#quick-start').click();await page.locator('.question-card').waitFor();
  let session=(await state()).session;
  assert.equal(session.questions.length,5);assert.equal(new Set(session.questions.map(q=>q.id)).size,5);
  assert.ok(session.questions.every(q=>q.topics.includes('setuid')&&q.type==='blanks'&&q.fields.length===4));
  const q=session.questions[0];for(let i=0;i<4;i++)await page.locator(`[data-answer="${i}"]`).fill(q.answers[i]);await page.locator('#check').click();assert.match(await page.locator('.feedback h3').innerText(),/정답/);
  await page.reload();await page.locator('#resume').click();assert.equal((await state()).session.questions.length,5);
  await reset();await page.locator('#advanced-settings summary').click();await page.locator('#setuid-only').check();
  await page.locator('input[name=week][value="7"]').uncheck();assert.match(await page.locator('#start-label').innerText(),/0문항/);
  await page.locator('#setup button[type=submit]').click();assert.match(await page.locator('#setup-error').innerText(),/없습니다/);
  await page.locator('input[name=week][value="7"]').check();await page.locator('input[name=type][value=blanks]').uncheck();assert.match(await page.locator('#start-label').innerText(),/0문항/);
  await page.locator('input[name=type][value=blanks]').check();await page.locator('#setup button[type=submit]').click();await page.locator('.question-card').waitFor();assert.equal((await state()).session.questions.length,5);
  await reset();await page.locator('#quick-start').click();await page.locator('.question-card').waitFor();assert.equal((await state()).session.questions.length,30);
  await reset();await page.locator('[data-page=manage]').click();await page.locator('#new-title').fill('다른 과목');await page.locator('#new-weeks').fill('1');await page.locator('#new-subject button[type=submit]').click();await page.locator('[data-page=home]').click();
  const options=await page.locator('#subject option').evaluateAll(opts=>opts.map(o=>({value:o.value,text:o.textContent})));
  await page.locator('#subject').selectOption(options.find(o=>o.text.includes('다른 과목')).value);assert.equal(await page.locator('#setuid-only').isChecked(),false);assert.equal(await page.locator('#setuid-settings').isVisible(),false);
  await page.locator('#subject').selectOption('hacking');await page.locator('#advanced-settings summary').click();assert.equal(await page.locator('#setuid-settings').isVisible(),true);
  assert.deepEqual(errors,[]);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  console.log('PASS: SetUID checkbox selects five unique UID problems in both start flows; grading/reload; week/type intersections; uncheck restores full pool; other subjects unaffected; mobile.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
