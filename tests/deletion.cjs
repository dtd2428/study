/* 풀이 중 삭제·복원, 시험 상태 정리, 기록 보존, 브라우저/과목별 격리 검증 */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..');
const url=pathToFileURL(path.join(root,'index.html')).href;
const KEY='studyroom-v1';
global.window={STUDY_BANKS:[]};require('../data/subjects/hacking/questions.js');
const bank=window.STUDY_BANKS[0];
const BANK_SIZE=bank.questions.length;
(async()=>{
 const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL||'chrome',headless:true});
 try{
  const context=await browser.newContext({viewport:{width:1280,height:1000}});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const read=()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)),KEY);
  const seed=async value=>{await page.evaluate(({key,value})=>localStorage.setItem(key,JSON.stringify(value)),{key:KEY,value});await page.reload();await page.locator('#setup').waitFor();};
  const start=async()=>{await page.locator('#quick-start').click();await page.locator('.question-card').waitFor();};
  await page.goto(url);await start();let data=await read();let s=data.session;
  const index=s.questions.findIndex(q=>q.type==='choice');assert.ok(index>=0);const q=s.questions[index];
  await page.locator(`[data-jump="${index}"]`).click();await page.locator(`[data-option="${q.answer}"]`).click();await page.locator('#mark').click();await page.locator('#check').click();
  const before=(await read()).session;await page.locator('#delete-current').click();await page.locator('.deletion-notice').waitFor();data=await read();
  assert.equal(data.custom.find(b=>b.id==='hacking').questions.length,BANK_SIZE-1);assert.equal(data.session.questions.length,29);assert.ok(!data.session.questions.some(item=>item.id===q.id));
  for(const field of ['answers','checked','marks','grades'])assert.equal(Object.hasOwn(data.session[field],q.id),false);
  assert.equal(data.history.length,0);fs.mkdirSync(path.join(root,'tmp'),{recursive:true});await page.screenshot({path:path.join(root,'tmp/delete-desktop.png'),fullPage:true});
  await page.reload();await page.locator('#resume').waitFor();assert.equal((await read()).session.questions.length,29);await page.locator('[data-undo-delete]').click();data=await read();
  assert.equal(data.custom.find(b=>b.id==='hacking').questions.length,BANK_SIZE);assert.equal(data.session.questions.length,30);assert.deepEqual(data.session.questions,before.questions);assert.equal(data.session.answers[q.id],q.answer);assert.equal(data.session.checked[q.id],true);assert.equal(data.session.marks[q.id],true);assert.equal(data.lastDeleted,null);
  await page.locator('#resume').click();await page.locator('.question-card').waitFor();assert.equal(await page.locator('.option.selected').count(),1);assert.equal(await page.locator('#check').count(),0);
  // 마지막 번호를 삭제해도 다음 유효한 문제 번호로 이동합니다.
  await page.locator('[data-jump="29"]').click();const last=(await read()).session.questions[29];await page.locator('#delete-current').click();data=await read();assert.equal(data.session.index,28);assert.equal(data.session.questions.length,29);
  await page.locator('[data-page=home]').click();await start();data=await read();assert.equal(data.session.questions.length,30);assert.ok(data.session.questions.every(item=>item.id!==last.id));const newQuestions=data.session.questions;
  // 새 시험을 시작한 뒤 복원해도 과거 시험 문항을 새 시험에 끼워 넣지 않습니다.
  await page.locator('[data-undo-delete]').click();data=await read();assert.deepEqual(data.session.questions,newQuestions);assert.equal(data.custom.find(b=>b.id==='hacking').questions.length,BANK_SIZE);
  const only=bank.questions.find(q=>q.type==='choice');const oneSession={id:'one-session',bankId:'hacking',title:bank.title,mode:'exam',started:Date.now(),deadline:null,index:0,questions:[only],answers:{[only.id]:only.answer},checked:{},marks:{},grades:{}};
  const record={...oneSession,id:'completed-record',date:new Date().toISOString(),elapsed:1,total:1,score:100,correct:1,wrong:0,pending:0};
  await seed({custom:[],history:[record],session:oneSession});await page.locator('#resume').click();await page.locator('#delete-current').click();await page.locator('#setup').waitFor();data=await read();assert.equal(data.session,null);assert.equal(data.history.length,1);assert.deepEqual(data.history[0],record);
  await page.locator('[data-page=records]').click();await page.locator('[data-record="0"]').click();await page.locator('.result-hero').waitFor();assert.match(await page.locator('.score').innerText(),/100/);await page.locator('#retry-all').click();assert.equal((await read()).session,null);assert.match(await page.locator('#toast').innerText(),/삭제/);
  await page.locator('[data-page=home]').click();await page.reload();await page.locator('[data-undo-delete]').click();data=await read();assert.equal(data.session.questions.length,1);assert.equal(data.session.answers[only.id],only.answer);await page.locator('#resume').click();await page.locator('.question-card').waitFor();
  // 관리 화면의 삭제도 진행 중인 시험을 함께 갱신합니다.
  await page.locator('[data-page=manage]').click();await page.locator('[data-inspect=hacking]').click();const detail=page.locator('#bank-preview details').filter({has:page.locator(`[data-delete-question="${only.id}"]`)});await detail.locator('summary').click();await page.locator(`[data-delete-question="${only.id}"]`).click();await page.locator('[data-confirm]').click();await page.locator('.deletion-notice').waitFor();data=await read();assert.equal(data.session,null);assert.equal(data.history[0].score,100);
  // 같은 문제 ID가 다른 과목에 있어도 해당 과목에서만 삭제합니다.
  const other={...bank,id:'another',title:'다른 과목',questions:[only]};await seed({custom:[other],history:[],session:null});await page.locator('#subject').selectOption('another');await start();await page.locator('#delete-current').click();await page.locator('#setup').waitFor();data=await read();assert.equal(data.custom.find(b=>b.id==='another').questions.length,0);assert.ok(!data.custom.some(b=>b.id==='hacking'));
  await page.locator('#subject').selectOption('another');await page.locator('#quick-start').click();assert.match(await page.locator('#toast').innerText(),/등록된 문제가 없습니다/);await page.locator('[data-undo-delete]').click();assert.equal((await read()).custom.find(b=>b.id==='another').questions.length,1);
  await page.locator('#resume').click();await page.setViewportSize({width:390,height:844});await page.locator('#delete-current').click();await page.locator('#setup').waitFor();assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await page.screenshot({path:path.join(root,'tmp/delete-mobile.png'),fullPage:true});
  const friend=await browser.newContext();const friendPage=await friend.newPage();await friendPage.goto(url);await friendPage.locator('#setup').waitFor();assert.equal(await friendPage.evaluate(()=>window.STUDY_BANKS[0].questions.length),BANK_SIZE);assert.equal(await friendPage.evaluate(k=>localStorage.getItem(k),KEY),null);await friend.close();
  assert.deepEqual(errors,[]);console.log('PASS: delete current/last item, remove all answer state, persist deletion, undo after reload, preserve shuffled options/answers, exclude from future exams/retries, preserve completed records, synchronize management deletion, isolate subjects and friends, handle empty banks, mobile layout.');
  await context.close();
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
