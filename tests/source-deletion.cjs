const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const os=require('node:os');
const {parseRequest,deleteSourceQuestion,evaluateFile}=require('../scripts/question-store.cjs');
const {processRequest}=require('../scripts/delete-question-action.cjs');
function fixture(t){
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'studyroom-source-test-'));
  t.after(()=>{const resolved=fs.realpathSync(root);assert.ok(resolved.startsWith(fs.realpathSync(os.tmpdir())+path.sep));assert.ok(path.basename(resolved).startsWith('studyroom-source-test-'));fs.rmSync(resolved,{recursive:true});});
  fs.mkdirSync(path.join(root,'data/subjects/sample'),{recursive:true});
  const bank={id:'sample',title:'테스트 과목',weeks:['입문'],questions:[{id:'q-1',type:'short',week:1,prompt:'문제1',answers:['a'],explanation:'해설1'},{id:'q-2',type:'short',week:1,prompt:'문제2',answers:['b'],explanation:'해설2'}]};
  fs.writeFileSync(path.join(root,'data/subjects.js'),`window.STUDY_SUBJECTS=[{id:'sample',script:'data/subjects/sample/questions.js'}];`);
  fs.writeFileSync(path.join(root,'data/subjects/sample/questions.js'),`window.STUDY_BANKS.push(${JSON.stringify(bank)});`);
  fs.writeFileSync(path.join(root,'data/overrides.js'),`window.STUDY_OVERRIDES=[${JSON.stringify(bank)}];`);
  fs.writeFileSync(path.join(root,'data/deletions.js'),'window.STUDY_REMOVED={};');
  fs.writeFileSync(path.join(root,'index.html'),'<script src="assets/js/app.js?v=old"></script>');
  return root;
}
const body='<!-- studyroom-delete:v1 -->\n```json\n{"subjectId":"sample","questionId":"q-1"}\n```';
const event=(author='owner')=>({action:'opened',repository:{owner:{login:'owner'},name:'study',default_branch:'main'},sender:{login:author},issue:{number:1,state:'open',body,user:{login:author}}});
test('request parsing requires explicit marker and validated identifiers',()=>{
  assert.deepEqual(parseRequest(body),{subjectId:'sample',questionId:'q-1'});assert.equal(parseRequest('일반 질문'),null);assert.throws(()=>parseRequest('<!-- studyroom-delete:v1 -->\n```json\n{"subjectId":"__proto__","questionId":"x"}\n```'));
});
test('removes the question from both published sources and records a global exclusion',t=>{
  const root=fixture(t);const result=deleteSourceQuestion(root,parseRequest(body));assert.equal(result.remaining,1);
  const bank=evaluateFile(path.join(root,'data/subjects/sample/questions.js'),{STUDY_BANKS:[]}).STUDY_BANKS[0];assert.deepEqual(bank.questions.map(q=>q.id),['q-2']);assert.equal(bank.questions[0].explanation,'해설2');
  assert.deepEqual(evaluateFile(path.join(root,'data/overrides.js')).STUDY_OVERRIDES[0].questions.map(q=>q.id),['q-2']);assert.deepEqual(evaluateFile(path.join(root,'data/deletions.js')).STUDY_REMOVED,{sample:['q-1']});
  assert.match(fs.readFileSync(path.join(root,'index.html'),'utf8'),/v=source-delete-/);assert.equal(deleteSourceQuestion(root,parseRequest(body)).changed,false);
});
test('dry run and unknown IDs do not modify files',t=>{
  const root=fixture(t);const file=path.join(root,'data/subjects/sample/questions.js');const before=fs.readFileSync(file,'utf8');assert.equal(deleteSourceQuestion(root,parseRequest(body),{dryRun:true}).remaining,1);assert.equal(fs.readFileSync(file,'utf8'),before);assert.throws(()=>deleteSourceQuestion(root,{subjectId:'sample',questionId:'unknown'}));assert.equal(fs.readFileSync(file,'utf8'),before);
});
test('catalog paths cannot escape the subjects directory',t=>{
  const root=fixture(t);fs.writeFileSync(path.join(root,'data/subjects.js'),`window.STUDY_SUBJECTS=[{id:'sample',script:'data/overrides.js'}];`);assert.throws(()=>deleteSourceQuestion(root,parseRequest(body)),/허용되지 않은/);
});
test('ordinary visitor request waits for approval and performs no git mutation',async t=>{
  const root=fixture(t),calls=[];const result=await processRequest({event:event('visitor'),root,api:async(method,url)=>{calls.push([method,url]);return {permission:'read'};},git:()=>assert.fail('비승인 요청이 git을 호출함')});assert.equal(result.status,'approval-required');assert.equal(evaluateFile(path.join(root,'data/subjects/sample/questions.js'),{STUDY_BANKS:[]}).STUDY_BANKS[0].questions.length,2);
});
test('owner request commits, pushes, requests Pages build, and closes the request',async t=>{
  const root=fixture(t),calls=[],git=[];const result=await processRequest({event:event(),root,api:async(method,url,data)=>{calls.push({method,url,data});return {};},git:args=>git.push(args)});assert.equal(result.status,'deleted');assert.ok(git.some(args=>args[0]==='push'));assert.ok(calls.some(c=>c.method==='POST'&&c.url.endsWith('/pages/builds')));assert.ok(calls.some(c=>c.method==='PATCH'&&c.data.state==='closed'));
});
test('maintainer approval can approve a visitor request',async t=>{
  const root=fixture(t);const input=event('visitor');input.action='labeled';input.label={name:'source-delete-approved'};input.sender.login='owner';const result=await processRequest({event:input,root,api:async()=>({}),git:()=>{}});assert.equal(result.status,'deleted');
});
test('visitor adding an approval label does not authorize deletion',async t=>{
  const root=fixture(t);const input=event('visitor');input.action='labeled';input.label={name:'source-delete-approved'};const result=await processRequest({event:input,root,api:async()=>({permission:'read'}),git:()=>assert.fail('비승인 요청이 git을 호출함')});assert.equal(result.status,'approval-required');
});
