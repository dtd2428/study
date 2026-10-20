const assert=require('node:assert/strict');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const {chromium}=require('playwright');
global.window={STUDY_BANKS:[]};require('../data/subjects/hacking/questions.js');const bank=window.STUDY_BANKS[0];
const focus=bank.questions.filter(q=>q.topics?.includes('setuid'));const ids=focus.map(q=>q.id);
const legacy={...bank,questions:bank.questions.filter(q=>!ids.includes(q.id)&&q.id!=='hk-001')};legacy.questions[0]={...legacy.questions[0],prompt:'사용자가 편집한 문제'};
(async()=>{const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL||'chrome',headless:true});try{
 const page=await browser.newPage();await page.goto(pathToFileURL(path.resolve(__dirname,'../index.html')).href);await page.locator('#setup').waitFor();
 const seed=async(deleted,lastDeleted=null)=>{await page.evaluate(({legacy,deleted,lastDeleted})=>{localStorage.clear();localStorage.setItem('studyroom-v1',JSON.stringify({custom:[legacy],history:[],session:null,lastDeleted}));localStorage.setItem('studyroom-deletions-v1',JSON.stringify({deleted:{hacking:deleted},dismissed:null}));},{legacy,deleted,lastDeleted});await page.reload();await page.locator('#setup').waitFor();await page.locator('#advanced-settings summary').click();await page.locator('#setuid-only').check();};
 await seed(['hk-001',...ids]);assert.match(await page.locator('#start-label').innerText(),/5문항/);await page.locator('#quick-start').click();await page.locator('.question-card').waitFor();let saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('studyroom-v1')));assert.equal(saved.session.questions.length,5);assert.equal(saved.custom[0].questions[0].prompt,'사용자가 편집한 문제');assert.equal(saved.history.length,0);let deletion=await page.evaluate(()=>JSON.parse(localStorage.getItem('studyroom-deletions-v1')));assert.ok(deletion.deleted.hacking.includes('hk-001'));assert.ok(ids.every(id=>!deletion.deleted.hacking.includes(id)));
 await page.reload();await page.locator('#advanced-settings summary').click();await page.locator('#setuid-only').check();assert.match(await page.locator('#start-label').innerText(),/5문항/);saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('studyroom-v1')));assert.equal(saved.custom[0].questions.filter(q=>ids.includes(q.id)).length,5);assert.equal(saved.session.questions.length,5);
 await seed(['hk-001']);assert.match(await page.locator('#start-label').innerText(),/5문항/);
 await seed(['hk-001',ids[0]],{bankId:'hacking',question:focus[0]});assert.match(await page.locator('#start-label').innerText(),/4문항/);
 await seed(['hk-001',...ids],{bankId:'hacking',question:focus[4]});assert.match(await page.locator('#start-label').innerText(),/0문항/);
 console.log('PASS: old custom bank and inferred five-ID exclusion repaired; existing edits/deletions/session preserved; reload has no duplicates; explicit single/all focus exclusions respected.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
