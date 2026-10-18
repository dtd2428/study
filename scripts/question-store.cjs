const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');

function evaluateFile(file,initial={}){
  const context=vm.createContext({window:initial},{codeGeneration:{strings:false,wasm:false}});
  vm.runInContext(fs.readFileSync(file,'utf8'),context,{timeout:1000,filename:path.basename(file)});
  return JSON.parse(JSON.stringify(context.window));
}
function subjectFile(root,entry){
  const target=fs.realpathSync(path.resolve(root,entry.script));
  const parent=fs.realpathSync(path.join(root,'data','subjects'))+path.sep;
  if(!target.startsWith(parent)||path.basename(target)!=='questions.js')throw Error('허용되지 않은 과목 파일 경로');
  return target;
}
function identifier(value){return typeof value==='string'&&value.length>0&&value.length<=100&&!['__proto__','constructor','prototype'].includes(value);}
function parseRequest(body){
  if(typeof body!=='string'||!body.includes('<!-- studyroom-delete:v1 -->'))return null;
  const match=body.match(/```json\s*([\s\S]*?)```/);
  if(!match)throw Error('삭제 요청의 JSON이 없습니다.');
  const value=JSON.parse(match[1]);
  if(!identifier(value.subjectId)||!identifier(value.questionId))throw Error('올바른 과목 ID와 문제 ID가 필요합니다.');
  return {subjectId:value.subjectId,questionId:value.questionId};
}
function deleteSourceQuestion(root,request,{dryRun=false}={}){
  if(!identifier(request.subjectId)||!identifier(request.questionId))throw Error('잘못된 요청');
  const catalog=evaluateFile(path.join(root,'data/subjects.js')).STUDY_SUBJECTS;
  const entry=catalog.find(b=>b.id===request.subjectId);
  const overridesFile=path.join(root,'data/overrides.js');
  const overrides=evaluateFile(overridesFile).STUDY_OVERRIDES||[];
  const override=overrides.find(b=>b.id===request.subjectId);
  let file=null,base=null;
  if(entry){file=subjectFile(root,entry);base=evaluateFile(file,{STUDY_BANKS:[]}).STUDY_BANKS[0];if(base?.id!==entry.id)throw Error('과목 ID 불일치');}
  const bank=override||base;
  if(!bank)throw Error('사이트에 등록되지 않은 과목입니다.');
  const deletionFile=path.join(root,'data/deletions.js');
  const removed=fs.existsSync(deletionFile)?evaluateFile(deletionFile).STUDY_REMOVED||{}:{};
  const alreadyRemoved=(removed[bank.id]||[]).includes(request.questionId);
  const exists=[base,override].some(b=>b?.questions.some(q=>q.id===request.questionId));
  if(!exists&&!alreadyRemoved)throw Error('등록된 문제 ID를 찾지 못했습니다.');
  if(alreadyRemoved)return {changed:false,subjectId:bank.id,remaining:bank.questions.length,paths:[]};
  const writes=[];
  if(base){base.questions=base.questions.filter(q=>q.id!==request.questionId);writes.push([file,`/* 전체 사이트 공통 문제은행 */\n(() => {\n  const bank = ${JSON.stringify(base,null,2)};\n  window.STUDY_BANKS.push(bank);\n})();\n`]);}
  if(override){override.questions=override.questions.filter(q=>q.id!==request.questionId);writes.push([overridesFile,`/* 배포용 문제은행 */\nwindow.STUDY_OVERRIDES = ${JSON.stringify(overrides,null,2)};\n`]);}
  removed[bank.id]=[...new Set([...(removed[bank.id]||[]),request.questionId])];
  writes.push([deletionFile,`/* 전체 사이트에서 삭제된 문제 ID */\nwindow.STUDY_REMOVED = ${JSON.stringify(removed,null,2)};\n`]);
  const indexFile=path.join(root,'index.html');
  if(fs.existsSync(indexFile))writes.push([indexFile,fs.readFileSync(indexFile,'utf8').replace(/\?v=[^"\s]+/g,`?v=source-delete-${Date.now()}`)]);
  if(!dryRun)for(const [target,content] of writes)fs.writeFileSync(target,content,'utf8');
  return {changed:true,subjectId:bank.id,remaining:bank.questions.length,paths:writes.map(([target])=>path.relative(root,target).replaceAll(path.sep,'/'))};
}
module.exports={parseRequest,deleteSourceQuestion,evaluateFile};
