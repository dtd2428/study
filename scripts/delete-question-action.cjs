const fs=require('node:fs');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const {parseRequest,deleteSourceQuestion}=require('./question-store.cjs');

async function processRequest({event,root,api,git,dryRun=false}){
  const issue=event.issue;
  if(!issue||issue.state==='closed')return {status:'ignored'};
  const request=parseRequest(issue.body);
  if(!request)return {status:'ignored'};
  const repository=event.repository;
  const owner=repository.owner.login;
  const repo=repository.name;
  const prefix=`/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`;
  async function canWrite(login){
    if(login===owner)return true;
    try{
      const data=await api('GET',`${prefix}/collaborators/${encodeURIComponent(login)}/permission`);
      return ['admin','maintain','write'].includes(data.permission);
    }catch(error){if([403,404].includes(error.status))return false;throw error;}
  }
  const approved=event.action==='labeled'&&event.label?.name==='source-delete-approved'&&await canWrite(event.sender.login);
  if(!approved&&!await canWrite(issue.user.login)){
    if(!dryRun)await api('POST',`${prefix}/issues/${issue.number}/comments`,{body:'원본 삭제 요청을 접수했습니다. 저장소 소유자가 이 Issue에 `source-delete-approved` 라벨을 붙이면 전체 사이트 문제은행에서 삭제하고 재배포합니다. 아직 원본은 변경하지 않았습니다.'});
    return {status:'approval-required'};
  }
  const result=deleteSourceQuestion(root,request,{dryRun});
  if(dryRun)return {status:'dry-run',...result};
  if(result.changed){
    git(['config','user.name','github-actions[bot]']);
    git(['config','user.email','41898282+github-actions[bot]@users.noreply.github.com']);
    git(['add','--',...result.paths]);
    git(['commit','-m',`Remove question from shared bank (#${issue.number})`]);
    git(['push','origin',`HEAD:${repository.default_branch}`]);
  }
  // GITHUB_TOKEN으로 만든 커밋은 Pages를 자동 실행하지 않으므로 명시적으로 빌드를 요청합니다.
  await api('POST',`${prefix}/pages/builds`,{});
  await api('POST',`${prefix}/issues/${issue.number}/comments`,{body:`전체 사이트 원본에서 삭제했습니다. 과목: ${request.subjectId}, 문제: ${request.questionId}, 남은 문항: ${result.remaining}개. GitHub Pages 재배포를 요청했습니다. 배포 완료 후 새로고침하면 친구에게도 반영됩니다.`});
  await api('PATCH',`${prefix}/issues/${issue.number}`,{state:'closed',state_reason:'completed'});
  return {status:'deleted',...result};
}

async function main(){
  const event=JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH,'utf8'));
  const token=process.env.GITHUB_TOKEN;
  if(!token)throw Error('GitHub Actions 토큰이 필요합니다.');
  const api=async(method,endpoint,body)=>{
    const response=await fetch(`https://api.github.com${endpoint}`,{method,headers:{Authorization:`Bearer ${token}`,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28','Content-Type':'application/json'},body:body===undefined?undefined:JSON.stringify(body)});
    if(!response.ok){const error=Error(`GitHub API ${method} ${endpoint}: ${response.status}`);error.status=response.status;throw error;}
    return response.status===204?{}:response.json();
  };
  const result=await processRequest({event,root:path.resolve(__dirname,'..'),api,git:args=>execFileSync('git',args,{stdio:'pipe'})});
  console.log(JSON.stringify(result));
}
if(require.main===module)main().catch(error=>{console.error(error.message);process.exitCode=1;});
module.exports={processRequest};
