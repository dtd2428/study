/* 다섯 SUID 사례의 권한/실행 계정/강의 판정 표시와 UID 입력 채점 검증. */
const assert=require('node:assert/strict');
const path=require('node:path');
const fs=require('node:fs');
const {pathToFileURL}=require('node:url');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..');
global.window={STUDY_BANKS:[]};
require('../data/subjects/hacking/questions.js');
require('../assets/js/question-schema.js');
const bank=window.STUDY_BANKS[0];
window.STUDY_VALIDATE_BANKS(bank);
const cases=bank.questions.filter(q=>q.practice);
assert.equal(cases.length,20);
for(const q of cases){
 assert.equal(q.practice.outcome,['성공','실패','성공','실패','실패'][q.practice.number-1]);
 if(q.type==='blanks')assert.equal(q.fields.length,4);
 assert.throws(()=>window.STUDY_VALIDATE_BANKS({...bank,questions:[{...q,practice:{...q.practice,permission:'invalid'}}]}));
}
(async()=>{
 const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL||'chrome',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1360,height:950}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(path.join(root,'index.html')).href);
  await page.locator('#setup').waitFor();
  await page.locator('#advanced-settings summary').click();
  await page.locator('#count').selectOption('all');
  await page.locator('#setup button[type=submit]').click();
  await page.locator('.question-card').waitFor();
  const session=await page.evaluate(()=>JSON.parse(localStorage.getItem('studyroom-v1')).session);
  const visit=async id=>{const i=session.questions.findIndex(q=>q.id===id);assert.ok(i>=0);await page.locator(`[data-jump="${i}"]`).click();};
  for(const q of cases){
   await visit(q.id);
   assert.equal(await page.locator('.uid-permission').innerText(),q.practice.permission);
   assert.match(await page.locator('.uid-outcome').innerText(),new RegExp(q.practice.outcome));
   assert.match(await page.locator('.uid-terminal').innerText(),new RegExp(q.practice.actor+'@kali'));
   assert.equal(await page.locator('.uid-slot').count(),4);
   if(q.type==='short')await page.locator('#written').fill(q.answers[0]);
   else for(let i=0;i<4;i++)await page.locator(`[data-answer="${i}"]`).fill(q.answers[i]);
   await page.locator('#check').click();assert.match(await page.locator('.feedback h3').innerText(),/정답/);
  }
  fs.mkdirSync(path.join(root,'tmp'),{recursive:true});
  await visit('hk-093');await page.locator('.uid-practice').screenshot({path:path.join(root,'tmp/uid-visual-desktop.png')});
  await page.setViewportSize({width:390,height:844});
  for(const q of cases.filter(q=>q.id.startsWith('hk-friend-'))){await visit(q.id);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
  await page.locator('.uid-practice').screenshot({path:path.join(root,'tmp/uid-visual-mobile.png')});
  await page.reload();await page.locator('#resume').click();await page.locator('.uid-practice').waitFor();assert.match(await page.locator('.uid-outcome').innerText(),/실패/);
  assert.deepEqual(errors,[]);
  console.log('PASS: five cases across 20 questions; permission/status/actor shown; four UID blanks; unchanged grading; desktop/mobile; reload; schema validation.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
