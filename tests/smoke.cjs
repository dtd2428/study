/* 개발 검증 전용. 사이트 실행에는 Node/Playwright가 필요하지 않습니다. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {chromium} = require('playwright');
const root = path.resolve(__dirname,'..');
const url = pathToFileURL(path.join(root,'index.html')).href;
const KEY = 'studyroom-v1';
fs.mkdirSync(path.join(root,'tmp'),{recursive:true});
global.window={STUDY_BANKS:[]};require('../data/subjects/hacking/questions.js');
const bank=window.STUDY_BANKS[0];
assert.equal(bank.questions.length,92);
assert.equal(new Set(bank.questions.map(q=>q.id)).size,92);
for(const q of bank.questions){assert.ok(q.source&&q.explanation);if(q.type==='choice'){assert.equal(q.options.length,4);assert.equal(new Set(q.options.map(o=>o.text)).size,4);assert.ok(q.options.some(o=>o.id===q.answer));}}
const counts=bank.questions.reduce((a,q)=>(a[q.type]=(a[q.type]||0)+1,a),{});
console.log('Problem bank:', counts);
(async()=>{
 const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL||'chrome',headless:true});
 try {
  const context=await browser.newContext({viewport:{width:1440,height:1000}});
  const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(url);await page.locator('#setup').waitFor();
  const state=()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)),KEY);
  const clean=async()=>{await page.evaluate(()=>localStorage.clear());await page.reload();await page.locator('#setup').waitFor();};
  const openSettings=async()=>{if(!await page.locator('#advanced-settings').evaluate(el=>el.open))await page.locator('#advanced-settings summary').click();};
  const selectTypes=async types=>{await openSettings();for(const t of ['choice','short','blanks','essay'])await page.locator(`input[name=type][value=${t}]`).setChecked(types.includes(t));};
  const start=async(types,mode='practice')=>{await selectTypes(types);await page.locator('#count').selectOption('all');await page.locator(`input[name=mode][value=${mode}]`).check();await page.locator('#setup button[type=submit]').click();await page.locator('.question-card').waitFor();};
  await page.screenshot({path:path.join(root,'tmp/home-desktop.png'),fullPage:true});
  await page.locator('#quick-start').click();await page.locator('.question-card').waitFor();let quick=(await state()).session;assert.equal(quick.questions.length,30);assert.equal(new Set(quick.questions.map(q=>q.id)).size,30);const firstSet=quick.questions.map(q=>q.id).sort().join('|');await page.locator('[data-page=home]').click();await page.locator('#quick-start').click();await page.locator('.question-card').waitFor();quick=(await state()).session;assert.equal(quick.questions.length,30);assert.notEqual(quick.questions.map(q=>q.id).sort().join('|'),firstSet);await clean();
  await start(['choice'],'exam');let s=(await state()).session;assert.equal(s.questions.length,57);
  const firstOrder=s.questions.map(q=>q.options.map(o=>o.id).join('')).join('|');
  const first=s.questions[0];await page.locator(`[data-option="${first.answer}"]`).click();
  await page.locator('#mark').click();await page.reload();await page.locator('#resume').click();
  s=(await state()).session;assert.equal(s.answers[first.id],first.answer);assert.equal(s.marks[first.id],true);assert.equal(s.questions.map(q=>q.options.map(o=>o.id).join('')).join('|'),firstOrder);assert.equal(await page.locator('.feedback').count(),0);
  await page.screenshot({path:path.join(root,'tmp/quiz-desktop.png'),fullPage:true});
  // 모든 객관식 문항을 버튼으로 답하고, 섞인 보기의 ID로 채점되는지 확인.
  for(let i=0;i<s.questions.length;i++){await page.locator(`[data-jump="${i}"]`).click();const q=s.questions[i];await page.locator(`[data-option="${q.answer}"]`).click();}
  await page.locator('#submit-exam').click();await page.locator('[data-confirm]').click();await page.locator('.result-hero').waitFor();let data=await state();assert.equal(data.history[0].score,100);assert.equal(data.history[0].correct,57);
  await page.locator('#retry-all').click();s=(await state()).session;assert.notEqual(s.questions.map(q=>q.options.map(o=>o.id).join('')).join('|'),firstOrder);
  await clean();await start(['short']);s=(await state()).session;let q=s.questions[0];await page.locator('#written').fill('  '+q.answers[0]+'  ');await page.locator('#check').click();assert.match(await page.locator('.feedback h3').innerText(),/정답/);assert.equal(await page.locator('#written').isDisabled(),true);
  await clean();await start(['blanks']);s=(await state()).session;q=s.questions[0];for(let i=0;i<q.answers.length;i++)await page.locator(`[data-answer="${i}"]`).fill(q.answers[i]);await page.locator('#check').click();assert.match(await page.locator('.feedback h3').innerText(),/정답/);
  await clean();await start(['essay'],'exam');await page.locator('#written').fill('나의 설명');await page.locator('#submit-exam').click();await page.locator('[data-confirm]').click();await page.locator('[data-filter=pending]').click();assert.equal(await page.locator('[data-grade=yes]').count(),8);await page.locator('[data-grade=yes]').first().click();data=await state();assert.equal(data.history[0].correct,1);assert.equal(data.history[0].pending,7);
  await page.screenshot({path:path.join(root,'tmp/results-desktop.png'),fullPage:true});
  // 저장된 미완료 시험이 있어도 과거 서술형 기록을 독립적으로 평가할 수 있어야 함.
  await page.locator('[data-page=home]').click();await start(['choice']);const activeSession=(await state()).session.id;await page.locator('[data-page=records]').click();await page.locator('[data-record="0"]').click();await page.locator('[data-filter=pending]').click();await page.locator('[data-grade=yes]').first().click();assert.equal((await state()).history[0].correct,2);assert.equal((await state()).session.id,activeSession);
  await clean();await start(['choice'],'exam');s=(await state()).session;q=s.questions[0];await page.locator(`[data-option="${q.options.find(o=>o.id!==q.answer).id}"]`).click();await page.locator('#submit-exam').click();await page.locator('[data-confirm]').click();await page.locator('.result-hero').waitFor();assert.equal((await state()).history[0].wrong,57);await page.locator('#retry-wrong').click();await page.locator('.question-card').waitFor();assert.equal((await state()).session.questions.length,57);
  await clean();await openSettings();for(const check of await page.locator('input[name=week]').all())await check.uncheck();await page.locator('#setup button[type=submit]').click();assert.match(await page.locator('#setup-error').innerText(),/없습니다/);
  await clean();await page.locator('[data-page=manage]').click();await page.locator('#new-title').fill('테스트 과목');await page.locator('#new-weeks').fill('2');await page.locator('#new-subject button[type=submit]').click();data=await state();const newId=data.custom[0].id;await page.locator(`[data-add="${newId}"]`).click();await page.locator('#q-prompt').fill('테스트 문제');await page.locator('#q-explanation').fill('테스트 해설');for(let i=0;i<4;i++)await page.locator(`#q-option-${i}`).fill('보기 '+i);await page.locator('input[name=q-correct][value="2"]').check();await page.locator('#editor-form button[type=submit]').click();data=await state();assert.equal(data.custom[0].questions[0].answer,'o2');await page.reload();await page.locator('[data-page=manage]').click();assert.ok((await page.locator('.manage-list').innerText()).includes('테스트 과목'));
  const imported={id:'imported',title:'<img src=x onerror=alert(1)>',description:'테스트',weeks:['입문'],questions:[{id:'x',week:1,type:'short',prompt:'가져온 문제',answers:['test'],explanation:'해설',source:'자료'}]};
  await page.locator('#import-file').setInputFiles({name:'bank.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(imported))});await page.locator('[data-add=imported]').waitFor();assert.equal(await page.locator('main img').count(),0);assert.ok((await state()).custom.some(b=>b.id==='imported'));
  const invalid={...imported,id:'invalid',questions:[{...imported.questions[0],type:'choice',options:[],answer:'missing'}]};await page.locator('#import-file').setInputFiles({name:'bad.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(invalid))});await page.locator('#import-error').filter({hasText:'失敗'.replace('失敗','실패')}).waitFor();assert.ok(!(await state()).custom.some(b=>b.id==='invalid'));
  const [download]=await Promise.all([page.waitForEvent('download'),page.getByRole('button',{name:'GitHub 배포용 overrides.js 받기 ↓'}).click()]);await download.saveAs(path.join(root,'tmp/exported-bank.js'));const exported=fs.readFileSync(path.join(root,'tmp/exported-bank.js'),'utf8');assert.ok(exported.includes('window.STUDY_OVERRIDES ='));assert.ok(exported.includes('가져온 문제'));
  await clean();await openSettings();await page.locator('#time').selectOption('15');await start(['choice'],'exam');await page.evaluate(k=>{let d=JSON.parse(localStorage.getItem(k));d.session.deadline=Date.now()-100;localStorage.setItem(k,JSON.stringify(d));},KEY);await page.reload();await page.locator('.result-hero').waitFor();data=await state();assert.equal(data.session,null);assert.equal(data.history[0].timedOut,true);
  // 손상된 저장본과 저장소 사용 불가에서도 기본 화면이 열리는지 확인.
  await page.evaluate(k=>localStorage.setItem(k,'{broken'),KEY);await page.reload();await page.locator('#setup').waitFor();
  const noStorage=await browser.newContext();await noStorage.addInitScript(()=>Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked');}}));const np=await noStorage.newPage();await np.goto(url);await np.locator('#setup').waitFor();assert.equal(await np.locator('.storage-warning').count(),1);await noStorage.close();
  await clean();await page.setViewportSize({width:390,height:844});await page.screenshot({path:path.join(root,'tmp/home-mobile.png'),fullPage:true});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await start(['blanks']);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await page.screenshot({path:path.join(root,'tmp/quiz-mobile.png'),fullPage:true});
  assert.deepEqual(errors,[]);console.log('PASS: bank validation, all shuffled choices, resume, grading, short answers, UID blanks, essay self-grading, wrong retry, empty range, editor, imports, XSS escaping, deployment export, timeout, corrupt storage, blocked storage, desktop/mobile layout.');
  await context.close();
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
