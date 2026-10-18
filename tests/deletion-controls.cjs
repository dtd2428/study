const assert=require('node:assert/strict');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const {chromium}=require('playwright');
const url=pathToFileURL(path.join(__dirname,'../index.html')).href;
(async()=>{
 const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL||'chrome',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:390,height:844}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(url);await page.locator('#quick-start').click();await page.locator('#delete-current').waitFor();
  const shared=page.locator('.source-delete-link');assert.equal(await shared.count(),1);const requestUrl=new URL(await shared.getAttribute('href'));assert.equal(requestUrl.origin,'https://github.com');assert.equal(requestUrl.pathname,'/dtd2428/study/issues/new');
  const body=requestUrl.searchParams.get('body');assert.match(body,/<!-- studyroom-delete:v1 -->/);const payload=JSON.parse(body.match(/```json\s*([\s\S]*?)```/)[1]);
  const initialCount=await page.evaluate(()=>window.STUDY_BANKS[0].questions.length);
  const before=await page.evaluate(()=>JSON.parse(localStorage.getItem('studyroom-v1')));const question=before.session.questions[before.session.index];assert.equal(payload.subjectId,'hacking');assert.equal(payload.questionId,question.id);
  await page.locator('#delete-current').click();await page.locator('.deletion-notice').waitFor();assert.match(await page.locator('.deletion-notice').innerText(),new RegExp(`${initialCount-1}문항`));
  const close=page.getByRole('button',{name:'삭제 안내 닫기'});await close.click();assert.equal(await page.locator('.deletion-notice').count(),0);assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('studyroom-v1')).session.questions.length),29);
  await page.reload();await page.locator('#setup').waitFor();assert.equal(await page.locator('.deletion-notice').count(),0);assert.match(await page.locator('#subject-chips').innerText(),new RegExp(`${initialCount-1}문항`));
  // 예전 탭이 옛 저장 형식을 덮어써도 삭제 목록은 별도 키에서 유지됩니다.
  await page.evaluate(value=>localStorage.setItem('studyroom-v1',JSON.stringify(value)),before);await page.reload();await page.locator('#setup').waitFor();assert.match(await page.locator('#subject-chips').innerText(),new RegExp(`${initialCount-1}문항`));await page.locator('#resume').click();await page.locator('#delete-current').waitFor();
  let state=await page.evaluate(()=>JSON.parse(localStorage.getItem('studyroom-v1')));await page.locator('#save-exit').click();state=await page.evaluate(()=>JSON.parse(localStorage.getItem('studyroom-v1')));assert.equal(state.session.questions.length,29);assert.ok(!state.session.questions.some(q=>q.id===question.id));
  await page.locator('#resume').click();await page.locator('#delete-current').click();await page.locator('.deletion-notice').waitFor();assert.match(await page.locator('.deletion-notice').innerText(),new RegExp(`${initialCount-2}문항`));assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await page.locator('[data-undo-delete]').click();await page.locator('#save-exit').click();assert.match(await page.locator('#subject-chips').innerText(),new RegExp(`${initialCount-1}문항`));assert.deepEqual(errors,[]);
  console.log('PASS: correct shared deletion URL/payload, X only dismisses notice, dismissal persists, local bank count updates, old-tab writes cannot revive deleted questions, new deletion shows a fresh notice, mobile layout.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
