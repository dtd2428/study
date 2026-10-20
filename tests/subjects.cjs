/* 여러 과목의 순차 로딩, 오류 격리, 배포본/브라우저 수정본 우선순위와 이전 저장 형식 검증 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const {pathToFileURL} = require('node:url');
const {chromium} = require('playwright');
const root = path.resolve(__dirname, '..');
const KEY = 'studyroom-v1';
global.window = {STUDY_BANKS: []};
require('../data/subjects/hacking/questions.js');
const hacking = window.STUDY_BANKS[0];
const network = {
  id: 'network', title: '네트워크 테스트', description: '추가 과목 로딩 검증',
  weeks: ['기초'], source: '테스트 전용',
  questions: Array.from({length:35}, (_,i) => ({
    id:`net-${i}`, week:1, type:'short', prompt:`네트워크 테스트 ${i}`,
    answers:['test'], explanation:'테스트 해설', source:'테스트'
  }))
};
network.questions[0] = {
  id:'net-0', week:1, type:'blanks', prompt:'문자 빈칸 검증',
  fields:['프로토콜','기능'], answers:['ARP','주소 대응'], explanation:'문자 입력과 채점을 검증합니다.'
};
let badOverrides = false;
let globalRemoval = {};
const catalog = [
  {id:'hacking',script:'data/subjects/hacking/questions.js'},
  {id:'network',script:'data/subjects/network/questions.js'},
  {id:'broken',script:'data/subjects/broken/questions.js'},
  {id:'wanted',script:'data/subjects/mismatch/questions.js'},
  {id:'invalid',script:'data/subjects/invalid/questions.js'}
];
const server = http.createServer((req,res) => {
  const pathname = new URL(req.url,'http://localhost').pathname;
  const sendScript = code => {res.writeHead(200,{'Content-Type':'text/javascript;charset=utf-8'});res.end(code);};
  if(pathname==='/data/deletions.js')return sendScript(`window.STUDY_REMOVED=${JSON.stringify(globalRemoval)};`);
  if(pathname==='/data/subjects.js')return sendScript(`window.STUDY_SUBJECTS=${JSON.stringify(catalog)};`);
  if(pathname==='/data/subjects/network/questions.js')return sendScript(`window.STUDY_BANKS.push(${JSON.stringify(network)});`);
  if(pathname==='/data/subjects/mismatch/questions.js')return sendScript(`window.STUDY_BANKS.push(${JSON.stringify({...network,id:'unexpected'})});`);
  if(pathname==='/data/subjects/invalid/questions.js')return sendScript(`window.STUDY_BANKS.push(${JSON.stringify({...network,id:'invalid',questions:[{id:'bad',week:1,type:'choice',prompt:'잘못된 문제',explanation:'검증'}]})});`);
  if(pathname==='/data/overrides.js')return sendScript(`window.STUDY_OVERRIDES=${JSON.stringify(badOverrides?[{id:'bad'}]:[{...network,title:'서버 배포 네트워크'},{...network,id:'override-only',title:'배포본 추가 과목',questions:network.questions.slice(1,2)}])};`);
  const target=path.resolve(root,'.'+(pathname==='/'?'/index.html':decodeURIComponent(pathname)));
  if(!target.startsWith(root+path.sep)||!fs.existsSync(target)||!fs.statSync(target).isFile()){res.writeHead(404);res.end('Not found');return;}
  const types={'.html':'text/html','.js':'text/javascript','.css':'text/css'};
  res.writeHead(200,{'Content-Type':`${types[path.extname(target)]||'text/plain'};charset=utf-8`});res.end(fs.readFileSync(target));
});
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL||'chrome',headless:true});
 try{
  const context=await browser.newContext();const page=await context.newPage();const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(`http://127.0.0.1:${server.address().port}/`);await page.locator('#setup').waitFor();
  assert.deepEqual(await page.locator('#subject option').evaluateAll(items=>items.map(el=>el.value)),['hacking','network','override-only']);
  assert.match(await page.locator('#subject').innerText(),/서버 배포 네트워크/);
  assert.equal((await page.evaluate(()=>window.STUDY_LOAD_ERRORS)).length,3);
  assert.match(await page.locator('.storage-warning').innerText(),/broken/);
  await page.locator('#subject').selectOption('network');await page.locator('#quick-start').click();await page.locator('.question-card').waitFor();
  const readState=()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)),KEY);
  let state=await readState();assert.equal(state.session.bankId,'network');assert.equal(state.session.questions.length,30);assert.ok(state.session.questions.every(q=>q.id.startsWith('net-')));
  await page.locator('[data-page=home]').click();await page.locator('#subject').selectOption('network');await page.locator('#advanced-settings summary').click();
  for(const input of await page.locator('input[name=type]').all())await input.setChecked(await input.getAttribute('value')==='blanks');
  await page.locator('#setup button[type=submit]').click();await page.locator('[data-confirm]').click();await page.locator('.blanks-grid').waitFor();
  assert.equal(await page.locator('[data-answer="0"]').getAttribute('inputmode'),'text');
  await page.locator('[data-answer="0"]').fill('ARP');await page.locator('[data-answer="1"]').fill('주소 대응');await page.locator('#check').click();assert.match(await page.locator('.feedback h3').innerText(),/정답/);
  const q=hacking.questions.find(q=>q.type==='choice');
  const legacySession={id:'legacy-session',bankId:'hacking',title:'해킹실무',mode:'exam',started:Date.now(),deadline:null,index:0,questions:[q],answers:{[q.id]:q.answer},marks:{[q.id]:true},checked:{},grades:{}};
  const legacyRecord={...legacySession,id:'legacy-record',date:'2026-10-18T00:00:00Z',elapsed:60,total:1,correct:1,wrong:0,pending:0,score:100};
  const persisted={custom:[{...network,title:'브라우저 수정 네트워크'}],session:legacySession,history:[legacyRecord]};
  await page.evaluate(({key,value})=>localStorage.setItem(key,JSON.stringify(value)),{key:KEY,value:persisted});await page.reload();await page.locator('#setup').waitFor();
  assert.equal(await page.locator('#subject option[value=network]').count(),1);assert.match(await page.locator('#subject option[value=network]').innerText(),/브라우저 수정/);
  await page.locator('#resume').click();await page.locator('.question-card').waitFor();state=await readState();assert.deepEqual(state.session.questions[0],q);assert.equal(state.session.answers[q.id],q.answer);
  assert.equal(await page.locator('.option.selected').innerText().then(t=>t.includes(q.options.find(o=>o.id===q.answer).text)),true);
  await page.locator('[data-page=records]').click();await page.locator('[data-record="0"]').click();await page.locator('.result-hero').waitFor();assert.match(await page.locator('.score').innerText(),/100/);
  globalRemoval={network:['net-1']};
  await page.reload();await page.locator('#setup').waitFor();await page.locator('#subject').selectOption('network');assert.match(await page.locator('#subject-chips').innerText(),/34문항/);await page.locator('#quick-start').click();await page.locator('.question-card').waitFor();assert.ok((await readState()).session.questions.every(q=>q.id!=='net-1'));
  badOverrides=true;await page.evaluate(()=>localStorage.clear());await page.reload();await page.locator('#setup').waitFor();
  assert.equal(await page.locator('#subject option').count(),2);assert.match(await page.locator('#subject option[value=network]').innerText(),/네트워크 테스트/);assert.match(await page.locator('.storage-warning').innerText(),/overrides.js/);
  assert.deepEqual(errors,[]);await context.close();
  // 같은 로더가 서버 없이 파일을 직접 열 때도 정상 동작해야 합니다.
  const fileContext=await browser.newContext();const filePage=await fileContext.newPage();await filePage.goto(pathToFileURL(path.join(root,'index.html')).href);await filePage.locator('#setup').waitFor();assert.equal(await filePage.locator('#subject option').count(),2);await filePage.locator('#quick-start').click();await filePage.locator('.question-card').waitFor();assert.equal(await filePage.evaluate(k=>JSON.parse(localStorage.getItem(k)).session.questions.length,KEY),30);await fileContext.close();
  console.log('PASS: multiple subject files, catalog order, independent 30-question pools, generic text blanks, broken-file isolation, ID/schema validation, deployment overrides, custom overrides for every subject, legacy sessions/records, file:// without a server.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>server.close());
