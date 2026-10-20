(async () => {
  await window.STUDY_READY;
  if (!window.STUDY_BANKS?.length) {
    document.querySelector("#main").textContent = "과목을 불러오지 못했습니다. data/subjects.js의 과목 목록과 파일 경로를 확인해 주세요.";
    return;
  }
  'use strict';
  const $ = s => document.querySelector(s);
  const main = $('#main');
  const TYPES = {choice:'4지선다',short:'단답형',blanks:'빈칸형',essay:'서술형'};
  const validateBanks = window.STUDY_VALIDATE_BANKS;
  const KEY = 'studyroom-v1';
  const DELETION_KEY = 'studyroom-deletions-v1';
  const builtInBanks = JSON.parse(JSON.stringify(window.STUDY_BANKS));
  const builtInIds = new Set(builtInBanks.map(b=>b.id));
  const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const norm = x => String(x ?? '').normalize('NFKC').trim().replace(/\s+/g,' ');
  const shuffle = a => { const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b; };
  let storageOK = true, saved = {};
  try { saved=JSON.parse(localStorage.getItem(KEY)||'{}');if(!saved || typeof saved!=='object') saved={}; } catch { storageOK=false; }
  let custom = Array.isArray(saved.custom) ? saved.custom : [];
  let history = Array.isArray(saved.history) ? saved.history : [];
  let session = saved.session || null;
  let lastDeleted = saved.lastDeleted || null;
  let deletionState = readDeletionState();
  let result = null, page = 'home', resultFilter='all', timerInterval, toastTimer;
  const banks = () => [...window.STUDY_BANKS,...custom].map(b=>({...b,questions:b.questions.filter(q=>!deletedIds(b.id).includes(q.id))}));
  const getBank = id => banks().find(b=>b.id===id);
  const persist = () => {try{localStorage.setItem(KEY,JSON.stringify({custom,history,session,lastDeleted}));}catch{if(storageOK){storageOK=false;toast('브라우저 저장 공간을 사용할 수 없어 새로고침 시 기록이 사라질 수 있습니다.');}}};
  function toast(message){$('#toast').textContent=message;$('#toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').hidden=true,4500);}
  function setPage(name){page=name;clearInterval(timerInterval);document.querySelectorAll('[data-page]').forEach(b=>{b.classList.toggle('active',b.dataset.page===name);if(b.dataset.page===name)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});$('#breadcrumb').textContent=({home:'학습 홈',records:'학습 기록',manage:'과목 · 문제 관리',quiz:'문제 풀기',result:'시험 결과'})[name];}
  function focusMain(){main.focus();window.scrollTo({top:0,behavior:'instant'});}
  function go(name){setPage(name);({home:renderHome,records:renderRecords,manage:renderManage})[name]?.();focusMain();}
  document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>go(b.dataset.page));
  $('.brand').onclick=e=>{e.preventDefault();go('home');};
  const warning=()=>deletionNotice()+((window.STUDY_LOAD_ERRORS?.length)?'<div class="storage-warning">일부 과목 파일을 불러오지 못했습니다. 과목 목록과 경로를 확인해 주세요: '+window.STUDY_LOAD_ERRORS.map(esc).join(', ')+'</div>':'')+(!storageOK?'<div class="storage-warning">이 브라우저에서 저장 공간을 사용할 수 없습니다. 문제 풀이는 가능하지만 새로고침 후 학습 기록·추가 과목이 사라질 수 있습니다. 문제 관리에서 백업 파일을 내려받으세요.</div>':'');
  const intro=(tag,title,sub)=>`<div class="intro"><div><div class="eyebrow">${tag}</div><h1>${title}</h1><p>${sub}</p></div><span class="date-tag">나만의 속도로 공부하기 ↗</span></div>`;
  const bankOptions=()=>banks().map(b=>`<option value="${esc(b.id)}">${esc(b.title)}</option>`).join('');
  const completed = () => history.filter(h=>h.total>0);
  function renderHome(){
    const hs=completed();
    const best=hs.length?Math.max(...hs.map(h=>h.score)):null;
    main.innerHTML=warning()+intro('YOUR STUDY, YOUR PACE','오늘도 한 문제 더, 확실하게.','주차별로 가볍게 연습하고, 모의고사로 실력을 확인해 보세요.')+
    `<div class="stats"><div class="stat"><div><div class="stat-label">나의 학습 과목</div><div class="stat-value">${banks().length}<small>과목</small></div></div><span class="stat-icon">▤</span></div><div class="stat"><div><div class="stat-label">완료한 모의고사 · 연습</div><div class="stat-value">${hs.length}<small>회</small></div></div><span class="stat-icon">✓</span></div><div class="stat"><div><div class="stat-label">나의 최고 점수</div><div class="stat-value">${best===null?'—':best}<small>${best===null?'첫 도전을 기다려요':'점'}</small></div></div><span class="stat-icon">↗</span></div></div>`+
    (session?`<div class="resume"><div><b>풀고 있던 시험이 있어요</b><p>${esc(session.title)} · ${session.questions.length}문항 · 답안 자동 저장 중</p></div><div class="row"><button id="resume" class="primary">이어서 풀기 →</button><button id="discard" class="link-btn danger">저장된 시험 삭제</button></div></div>`:'')+
    `<div class="section-head"><h2>나의 과목 <span>${banks().length}</span></h2><button class="link-btn" id="manage-link">과목 추가 · 관리 ↗</button></div><div class="home-grid"><section class="subject-card"><div class="subject-banner"><div class="eyebrow">READY FOR YOUR NEXT EXAM</div><h2 id="subject-title"></h2><p id="subject-description"></p><div class="terminal-art" aria-hidden="true">&gt;_ <small>LEARN / REPEAT</small></div></div><form class="subject-body" id="setup"><div class="subject-select"><label for="subject" class="muted">학습 과목</label><select id="subject">${bankOptions()}</select></div><div class="chips" id="subject-chips"></div><div class="quick-start"><button id="quick-start" class="primary" type="button"><span>문제풀기</span><span aria-hidden="true">→</span></button><p id="quick-start-note" class="start-caption">전체 범위에서 무작위 30문항 · 문제와 선택지가 매번 섞여요.</p></div><details id="advanced-settings" class="advanced-settings"><summary>주차·유형별 맞춤 학습 설정</summary><label class="field-label">학습 범위</label><div class="week-grid" id="weeks"></div><div id="setuid-settings" class="topic-settings" hidden><label><input type="checkbox" id="setuid-only"> <strong>SetUID만 학습</strong><span>다섯 사례의 RUID·EUID 계산에 집중해요.</span></label></div><div class="field-label">문제 유형</div><div class="checks">${Object.entries(TYPES).map(([id,label])=>`<label><input type="checkbox" name="type" value="${id}" checked>${label}</label>`).join('')}</div><div id="basic-settings" class="topic-settings" hidden><label><input type="checkbox" id="basic-only"> <strong>기본개념문제</strong><span>체크하면 선택한 주차·유형 중 기본 개념 문제만 출제해요.</span></label></div><div class="row"><div><label class="field-label" for="count">출제 문항 수</label><select id="count"><option value="10">10문항</option><option value="20">20문항</option><option value="30" selected>30문항</option><option value="all">선택 범위 전체</option></select></div><div><label class="field-label" for="time">제한 시간</label><select id="time"><option value="0">시간 제한 없음</option><option value="15">15분</option><option value="30">30분</option><option value="60">60분</option></select></div></div><div class="field-label">풀이 방식</div><div class="mode-group"><label class="mode-option"><input type="radio" name="mode" value="practice" checked><span>✦ 연습 모드<small>한 문제씩 정답과 해설 확인</small></span></label><label class="mode-option"><input type="radio" name="mode" value="exam"><span>◷ 모의고사 모드<small>최종 제출 후 한 번에 채점</small></span></label></div><div class="start-area"><button class="primary" type="submit"><span id="start-label">학습 시작하기</span><span>→</span></button><p class="start-caption">문제와 보기 순서는 시작할 때마다 무작위로 섞여요.</p><p id="setup-error" class="error" role="alert"></p></div></details></form></section><aside class="home-aside"><div class="note-card green"><h3>암기보다 이해에 집중하세요.</h3><div class="feature"><span class="feature-icon">⤨</span><div><b>외웠던 번호는 잊어도 괜찮아요</b><p>같은 문제도 보기 위치가 바뀌어요.<br>답의 내용으로 실력을 확인하세요.</p></div></div><div class="feature"><span class="feature-icon">≡</span><div><b>정답에서 한 걸음 더</b><p>이유와 PDF 쪽수까지 함께 확인하고<br>헷갈린 개념을 다시 짚어보세요.</p></div></div><div class="feature"><span class="feature-icon">↻</span><div><b>틀린 문제는 다시 한 번</b><p>채점 후 오답만 모아서<br>새로운 순서로 재도전할 수 있어요.</p></div></div></div><div class="note-card"><div class="section-head"><h3 style="margin:0">최근 학습</h3><button class="link-btn" id="records-link">전체 보기 ↗</button></div>${hs.length?hs.slice(0,3).map(h=>`<div class="mini-history"><div><b>${esc(h.title)}</b><p>${formatDate(h.date)} · ${h.total}문항</p></div><span class="mini-score">${h.score}<small>점</small></span></div>`).join(''):'<div class="empty"><b>첫 번째 기록을 남겨보세요</b>한 문제씩 쌓이는 나만의 실력.</div>'}</div><div class="note-card source-note"><strong>이번 학습의 출발점</strong><span id="source-label"></span><br>PDF 기반 검토 문제은행입니다.<br>서술형은 모범답안으로 직접 채점해요.<br>새 PDF의 자동 AI 출제 기능은 없으며,<br>문제를 직접 추가하거나 JSON으로 가져올 수 있어요.<div><span class="chip">설치 없이</span> <span class="chip">서버 없이</span> <span class="chip">브라우저에서</span></div></div></aside></div>`;
    $('#manage-link').onclick=()=>go('manage');$('#records-link').onclick=()=>go('records');
    $('#subject').onchange=updateSubject;updateSubject();
    $('#setup').onchange=updateCount;
    $('#quick-start').onclick=()=>{const bank=getBank($('#subject').value);const pool=$('#setuid-only').checked||$('#basic-only').checked?filteredPool():bank.questions;if(!pool.length){toast($('#basic-only').checked?'선택한 주차·유형에 기본개념문제가 없습니다. 범위를 다시 선택해 주세요.':$('#setuid-only').checked?'선택한 주차·유형에 SetUID 문제가 없습니다. 7주차와 빈칸형을 선택해 주세요.':'아직 등록된 문제가 없습니다. 과목 · 문제 관리에서 문제를 추가해 주세요.');return;}startSession(bank,shuffle(pool).slice(0,30),'practice');};
    $('#setup').onsubmit=async e=>{e.preventDefault();const bank=getBank($('#subject').value);const pool=filteredPool();if(!pool.length){$('#setup-error').textContent='선택한 범위에 문제가 없습니다. 주차와 문제 유형을 확인해 주세요.';return;}if(session&&!await confirmDialog('새 시험을 시작할까요?','이전에 풀던 시험의 저장 답안은 삭제됩니다. 완료한 학습 기록은 유지됩니다.','새 시험 시작'))return;const count=$('#count').value==='all'?pool.length:Math.min(Number($('#count').value),pool.length);startSession(bank,shuffle(pool).slice(0,count),$('input[name=mode]:checked').value,Number($('#time').value));};
    if(session){$('#resume').onclick=()=>{if(session.deadline&&Date.now()>=session.deadline){finishSession(true);return;}renderQuiz();focusMain();};$('#discard').onclick=async()=>{if(await confirmDialog('저장된 시험을 삭제할까요?','현재 풀던 답안만 삭제됩니다.','삭제')){session=null;persist();renderHome();}};}
  }
  function updateSubject(){const b=getBank($('#subject').value);$('#setuid-settings').hidden=b.id!=='hacking';$('#setuid-only').checked=false;$('#basic-settings').hidden=!b.questions.some(q=>q.topics?.includes('basic'));$('#basic-only').checked=false;$('#subject-title').textContent=b.title;$('#quick-start-note').textContent=b.questions.length>=30?'전체 범위에서 무작위 30문항 · 문제와 선택지가 매번 섞여요.':b.questions.length?`등록된 전체 ${b.questions.length}문항 · 문제와 선택지가 매번 섞여요. (30문항 미만)`:'문제를 추가하면 바로 시작할 수 있어요.';$('#subject-description').textContent=b.description;$('#source-label').textContent=b.source||'직접 추가한 문제은행';$('#subject-chips').innerHTML=`<span class="chip">${b.weeks.length}개 주차</span><span class="chip">문제은행 ${b.questions.length}문항</span><span class="chip">해설 포함</span>`;$('#weeks').style.gridTemplateColumns=`repeat(${Math.min(7,b.weeks.length)},1fr)`;$('#weeks').innerHTML=b.weeks.map((w,i)=>`<label class="week-check" title="${esc(w)}"><input type="checkbox" name="week" value="${i+1}" checked><span>${i+1}주차</span></label>`).join('');updateCount();}
  function filteredPool(){const b=getBank($('#subject').value);const weeks=[...document.querySelectorAll('input[name=week]:checked')].map(e=>Number(e.value));const types=[...document.querySelectorAll('input[name=type]:checked')].map(e=>e.value);return b.questions.filter(q=>weeks.includes(q.week)&&types.includes(q.type)&&(!$('#setuid-only').checked||q.topics?.includes('setuid'))&&(!$('#basic-only').checked||q.topics?.includes('basic')));}
  function updateCount(){const pool=filteredPool();const n=$('#count').value==='all'?pool.length:Math.min(Number($('#count').value),pool.length);$('#start-label').textContent=`${n}문항 맞춤 학습 시작하기`;$('#setup-error').textContent='';const focused=$('#setuid-only').checked;const bank=getBank($('#subject').value);$('#quick-start-note').textContent=$('#basic-only').checked?`기본개념문제만 · 선택 범위 ${pool.length}문항 중 무작위 최대 30문항`:focused?`SetUID 집중 연습 · 선택 범위 ${pool.length}문항 중 무작위 최대 30문항`:bank.questions.length>=30?'전체 범위에서 무작위 30문항 · 문제와 선택지가 매번 섞여요.':`등록된 전체 ${bank.questions.length}문항 · 문제와 선택지가 매번 섞여요. (30문항 미만)`;}
  function startSession(bank,questions,mode='practice',minutes=0){session={id:globalThis.crypto?.randomUUID?.()||`s-${Date.now()}`,bankId:bank.id,title:bank.title,mode,started:Date.now(),deadline:minutes?Date.now()+minutes*60000:null,index:0,questions:questions.map(q=>({...q,options:q.type==='choice'?shuffle(q.options):undefined})),answers:{},checked:{},marks:{},grades:{}};persist();renderQuiz();focusMain();}
  const answered=q=>{const a=session.answers[q.id];return q.type==='blanks'?Array.isArray(a)&&a.length===q.fields.length&&a.every(v=>norm(v)!==''):norm(a)!=='';};
  const isOX = q => q.type==='short' && /^\[O\/X\]/i.test(q.prompt) && q.answers?.length>0 && q.answers.every(v=>/^[OX]$/i.test(norm(v)));
  const questionPrompt = q => isOX(q) ? q.prompt.replace(/\s*\(O 또는 X를 입력하세요\.\)$/, '') : q.prompt;
  function autoGrade(q,answers,grades){const a=answers[q.id];if(q.type==='essay')return grades[q.id]===true?true:grades[q.id]===false?false:null;if(q.type==='choice')return a===q.answer;if(q.type==='short')return q.answers.some(v=>norm(v)===norm(a));return Array.isArray(a)&&q.answers.every((v,i)=>norm(v)===norm(a[i]));}
  function correctText(q){if(q.type==='choice')return q.options.find(o=>o.id===q.answer)?.text||'';if(q.type==='short')return q.answers[0];if(q.type==='blanks')return q.fields.map((f,i)=>`${f}: ${q.answers[i]}`).join(' / ');return q.model;}
  function renderQuiz(){
    if(!session){go('home');return;}setPage('quiz');
    const q=session.questions[session.index], checked=!!session.checked[q.id], a=session.answers[q.id];
    const count=session.questions.filter(answered).length;
    main.innerHTML=warning()+`<div class="quiz-header"><div><span class="pill">${session.mode==='exam'?'◷ 모의고사':'✦ 연습 모드'}</span><h1>${esc(session.title)}</h1></div><div class="row"><span id="timer" class="timer" aria-label="남은 시간"></span><button id="save-exit" class="secondary">저장 후 나가기</button></div></div><div class="progress-line" aria-label="답안 작성 진행률"><span style="width:${count/session.questions.length*100}%"></span></div><div class="quiz-layout"><section class="question-card"><div class="q-meta"><span class="q-number">QUESTION ${String(session.index+1).padStart(2,'0')} <span class="muted">/ ${session.questions.length}</span></span><span>${q.week}주차 · ${isOX(q)?'O/X 선택형':TYPES[q.type]} <button id="mark" class="icon-btn ${session.marks[q.id]?'marked':''}" aria-label="나중에 다시 보기" aria-pressed="${!!session.marks[q.id]}">⚑</button></span></div><div class="question-tools"><button id="delete-current" class="secondary delete-local-btn" type="button" ${getBank(session.bankId)?.questions.some(item=>item.id===q.id)?'':'disabled'}>나만 제외</button>${sourceDeletionLink(session.bankId,q)}</div><p class="answer-note source-delete-note">‘문제 삭제’는 GitHub에 요청을 등록하면 전체 사이트 원본에 반영됩니다.</p><h2>${esc(questionPrompt(q))}</h2>${practiceHTML(q)}<div id="answer-area">${answerHTML(q,a,checked)}</div>${q.type==='essay'?'<p class="answer-note">서술형은 자동 채점하지 않습니다. 모범답안의 체크 항목과 비교해 직접 평가해 주세요.</p>':isOX(q)?'<p class="answer-note">O 또는 X를 선택하세요.</p>':q.type==='short'?`<p class="answer-note">앞뒤·연속 공백과 전각 문자를 정리해 채점합니다. 명령어의 대소문자는 구분합니다.${q.answers.every(noInternalSpaces)?' <strong>띄어쓰기 금지</strong> · 답안 중간에 공백을 넣지 마세요.':''}</p>`:q.type==='blanks'?'<p class="answer-note">문제의 조건과 각 칸의 항목에 맞춰 입력하세요. 한 문항의 모든 칸이 맞아야 정답입니다.</p>':''}<div id="feedback-area">${checked?feedbackHTML(q):''}</div><div class="quiz-actions"><button id="prev" class="secondary" ${session.index===0?'disabled':''}>← 이전</button><div>${session.mode==='practice'&&!checked?'<button id="check" class="secondary">정답 · 해설 확인</button>':''}<button id="next" class="primary">${session.index===session.questions.length-1?'답안 제출':'다음 문제 →'}</button></div></div><p class="answer-note">Alt + ← / → 로 문제 이동 · 답안은 자동 저장됩니다.</p></section><aside class="palette"><h3>문제 탐색</h3><p id="answered-count">${count} / ${session.questions.length}문항 답안 작성</p><div class="numbers">${session.questions.map((item,i)=>`<button class="number ${answered(item)?'filled':''} ${i===session.index?'current':''} ${session.marks[item.id]?'marked':''}" data-jump="${i}" aria-label="${i+1}번 문제${answered(item)?', 답안 작성됨':''}${session.marks[item.id]?', 다시 보기':''}" ${i===session.index?'aria-current="step"':''}>${i+1}</button>`).join('')}</div><div class="legend"><span><i></i>작성함</span><span><i class="book"></i>다시 보기</span></div><button id="submit-exam" class="primary">답안 제출하고 채점하기</button></aside></div>`;
    $('#save-exit').onclick=()=>{persist();go('home');};
    $('#delete-current').onclick=()=>{if(!removeQuestion(session.bankId,q.id))return;if(session){renderQuiz();focusMain();}else{go('home');}toast('문제를 삭제했습니다. 삭제 취소로 되돌릴 수 있어요.');};
    $('#mark').onclick=()=>{session.marks[q.id]=!session.marks[q.id];persist();renderQuiz();};
    document.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>jump(Number(b.dataset.jump)));
    $('#prev').onclick=()=>jump(session.index-1);$('#next').onclick=()=>session.index===session.questions.length-1?submitSession():jump(session.index+1);$('#submit-exam').onclick=submitSession;
    if(isOX(q))document.querySelectorAll('[data-ox]').forEach(b=>b.onclick=()=>{if(checked)return;session.answers[q.id]=q.answers.find(v=>norm(v).toUpperCase()===b.dataset.ox)||b.dataset.ox;persist();renderQuiz();});
    else if(q.type==='choice')document.querySelectorAll('[data-option]').forEach(b=>b.onclick=()=>{session.answers[q.id]=b.dataset.option;persist();renderQuiz();});
    else document.querySelectorAll('[data-answer]').forEach(input=>input.oninput=()=>{if(q.type==='blanks'){const values=Array.isArray(session.answers[q.id])?[...session.answers[q.id]]:q.fields.map(()=>'');values[Number(input.dataset.answer)]=input.value;session.answers[q.id]=values;}else session.answers[q.id]=input.value;persist();updateAnswered();});
    if($('#check'))$('#check').onclick=()=>{if(!answered(q)){toast('답안을 먼저 작성해 주세요.');return;}session.checked[q.id]=true;persist();renderQuiz();};
    bindSelfGrade(q);tick();timerInterval=setInterval(tick,1000);
  }
  function practiceHTML(q) {
    const p = q.practice;
    if (!p) return '';
    const suid = p.permission[3] === 's';
    const permission = p.permission.slice(0,3) + '<mark>' + esc(p.permission[3]) + '</mark>' + esc(p.permission.slice(4));
    return `<section class="uid-practice" aria-label="SetUID 실습 조건">
      <div class="uid-practice-head"><strong>실습 사례 ${esc(p.number)} / 5</strong><span class="uid-outcome ${p.outcome === '성공' ? 'success' : 'failure'}">${p.outcome === '성공' ? '✓' : '×'} ${esc(p.outcome)} <small>강의 기준</small></span></div>
      <div class="uid-terminal"><div class="uid-terminal-caption">파일 확인 · ls -al 주요 열</div><pre><span class="uid-shell"># ls -al</span>
<span class="uid-file-line"><span class="uid-permission">${permission}</span>  ${esc(p.owner)}  <span class="uid-filename">${esc(p.file)}</span></span></pre>
      <div class="uid-terminal-caption">실행 계정과 명령</div><pre><span class="uid-shell">${esc(p.actor)}@kali ${p.actorUid === '0' ? '#' : '$'} id -u</span>
${esc(p.actorUid)}
<span class="uid-shell">${esc(p.actor)}@kali ${p.actorUid === '0' ? '#' : '$'} ./${esc(p.file)}</span>
RUID: <span class="uid-slot">?</span>   EUID: <span class="uid-slot">?</span>   ← 호출 전
<span class="uid-call">setuid(${esc(p.target)})</span>
RUID: <span class="uid-slot">?</span>   EUID: <span class="uid-slot">?</span>   ← 호출 후</pre></div>
      <div class="uid-facts"><div><span>SetUID</span><strong>${suid ? '설정됨 · s' : '없음 · x'}</strong></div><div><span>파일 소유자</span><strong>${esc(p.owner)} · UID ${p.owner === 'root' ? '0' : '1000'}</strong></div><div><span>실행 계정</span><strong>${esc(p.actor)} · UID ${esc(p.actorUid)}</strong></div><div><span>숫자 권한</span><strong>${suid ? '4755' : '755'}</strong></div></div>
      <p class="uid-practice-note">성공·실패는 강의의 ‘두 UID를 목표값으로 변경’ 기준입니다. 실제 함수 반환값과 구분하세요.</p>
    </section>`;
  }
  const noInternalSpaces = value => !/\s/.test(norm(value));
  const blankResults = (q, answer) => q.fields.map((field, i) => ({field, expected:q.answers[i], actual:Array.isArray(answer)?answer[i]:'', correct:norm(answer?.[i])===norm(q.answers[i])}));
  function blanksHTML(q,a,locked){
    return `<div class="blanks-grid">${blankResults(q,a).map((r,i)=>{
      const hint=noInternalSpaces(r.expected);
      return `<label class="blank-field ${locked?(r.correct?'blank-correct':'blank-incorrect'):''}"><span class="blank-label">${esc(r.field)}${hint?`<small class="spacing-hint" id="blank-spacing-${i}">띄어쓰기 금지</small>`:''}</span><input aria-label="${esc(r.field)}" ${hint?`aria-describedby="blank-spacing-${i}"`:''} ${locked?`aria-invalid="${!r.correct}" disabled`:''} type="text" inputmode="${q.answers.every(v=>/^\d+$/.test(v))?'numeric':'text'}" autocomplete="off" data-answer="${i}" value="${esc(r.actual||'')}">${locked?`<span class="blank-status">${r.correct?'✓ 정답':'✗ 오답'}</span>`:''}</label>`;
    }).join('')}</div>`;
  }
  function blankFeedbackHTML(q,answer){
    const results=blankResults(q,answer), count=results.filter(r=>r.correct).length;
    return `<div class="blank-feedback"><p class="blank-summary">빈칸 ${results.length}개 중 ${count}개 정답 · ${results.length-count}개 오답</p><ul class="blank-results">${results.map(r=>`<li class="${r.correct?'is-correct':'is-incorrect'}"><strong>${esc(r.field)} · ${r.correct?'✓ 정답':'✗ 오답'}</strong><span>내 답안: <b>${norm(r.actual)?esc(r.actual):'미응답'}</b></span>${r.correct?'':`<span>정답: <b>${esc(r.expected)}</b></span>`}</li>`).join('')}</ul></div>`;
  }
  function answerHTML(q,a,locked){const disabled=locked?'disabled':'';if(isOX(q))return `<div class="options ox-options" role="group" aria-label="O/X 답안 선택">${['O','X'].map(value=>{const selected=norm(a).toUpperCase()===value;const correct=q.answers.some(v=>norm(v).toUpperCase()===value);return `<button type="button" data-ox="${value}" class="option ${selected?'selected':''} ${locked&&correct?'correct':''} ${locked&&selected&&!correct?'incorrect':''}" ${disabled} aria-pressed="${selected}"><span class="ox-symbol">${value}</span><span>${value==='O'?'맞다':'틀리다'}</span></button>`;}).join('')}</div>`;if(q.type==='choice')return `<div class="options">${q.options.map((o,i)=>`<button data-option="${esc(o.id)}" class="option ${a===o.id?'selected':''} ${locked&&o.id===q.answer?'correct':''} ${locked&&a===o.id&&a!==q.answer?'incorrect':''}" ${disabled} aria-pressed="${a===o.id}"><span class="letter">${i+1}</span><span class="option-text">${esc(o.text)}</span></button>`).join('')}</div>`;if(q.type==='blanks')return blanksHTML(q,a,locked);if(q.type==='essay')return `<label class="field-label" for="written">나의 답안</label><textarea id="written" data-answer="0" placeholder="개념과 이유를 자신의 말로 설명해 보세요." ${disabled}>${esc(a||'')}</textarea>`;return `<label class="field-label" for="written">나의 답안</label><input id="written" data-answer="0" type="text" autocomplete="off" spellcheck="false" placeholder="정답을 입력하세요" value="${esc(a||'')}" ${disabled}>`;}
  function updateAnswered(){const count=session.questions.filter(answered).length;$('#answered-count').textContent=`${count} / ${session.questions.length}문항 답안 작성`;$('.progress-line span').style.width=`${count/session.questions.length*100}%`;const q=session.questions[session.index];$(`[data-jump="${session.index}"]`).classList.toggle('filled',answered(q));}
  function feedbackHTML(q,answers=session.answers,grades=session.grades){const correct=autoGrade(q,answers,grades);return `<div class="feedback ${correct===false?'bad':''}"><h3>${q.type==='essay'?'모범답안 · 직접 채점':correct?'✓ 정답이에요':'다시 짚어볼 개념이에요'}</h3><div class="correct-answer">${q.type==='essay'||q.type==='blanks'?'':`정답: ${esc(correctText(q))}`}</div>${q.type==='blanks'?blankFeedbackHTML(q,answers[q.id]):''}<p class="explanation">${esc(q.explanation)}</p>${q.type==='essay'?`<ul class="rubric">${q.rubric.map(r=>`<li>${esc(r)}</li>`).join('')}</ul><div class="self-grade"><span>체크 항목을 충분히 설명했나요?</span><button class="secondary ${grades[q.id]===true?'active':''}" data-grade="yes" data-qid="${esc(q.id)}">충족 · 정답</button><button class="secondary ${grades[q.id]===false?'active':''}" data-grade="no" data-qid="${esc(q.id)}">미흡 · 복습</button></div>`:''}<p class="source-ref">출처: ${esc(q.source||'직접 추가한 문제')} · 원자료의 설명과 실습 조건 기준</p></div>`;}
  function bindSelfGrade(q){document.querySelectorAll('[data-grade]').forEach(b=>b.onclick=()=>{if(page==='quiz'&&session&&q){session.grades[q.id]=b.dataset.grade==='yes';persist();renderQuiz();}else if(result){result.grades[b.dataset.qid]=b.dataset.grade==='yes';refreshResultScore();renderResult();}});}
  function jump(i){if(i<0||i>=session.questions.length)return;session.index=i;persist();renderQuiz();focusMain();}
  function tick(){if(!session)return;if(session.deadline&&Date.now()>=session.deadline){finishSession(true);return;}const el=$('#timer');if(!el)return;const seconds=Math.max(0,Math.floor((session.deadline?session.deadline-Date.now():Date.now()-session.started)/1000));el.textContent=`${session.deadline?'':'↑ '}${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;el.classList.toggle('urgent',!!session.deadline&&seconds<60);}
  async function submitSession(){const empty=session.questions.filter(q=>!answered(q)).length;const s=session;if(!await confirmDialog('답안을 제출할까요?',`${empty?`아직 ${empty}문항의 답안이 비어 있어요. 미응답은 오답으로 처리됩니다. `:''}제출 후 전체 정답과 해설을 확인할 수 있습니다. 서술형은 직접 채점합니다.`,'제출하고 채점'))return;if(session!==s)return;finishSession(false);}
  function finishSession(timedOut){clearInterval(timerInterval);$('#confirmation')?.close(false);if(!session)return;result={...session,date:new Date().toISOString(),elapsed:Math.max(0,Math.round((Date.now()-session.started)/1000)),timedOut};session=null;history.unshift(result);history=history.slice(0,50);refreshResultScore();resultFilter='all';renderResult();focusMain();if(timedOut)toast('제한 시간이 끝나 답안을 자동 제출했습니다.');}
  function resultStats(r){const qs=r.questions;let correct=0,wrong=0,pending=0;for(const q of qs){const status=autoGrade(q,r.answers,r.grades);if(status===null)pending++;else if(status)correct++;else wrong++;}return {correct,wrong,pending,total:qs.length,score:Math.round(correct/qs.length*100)};}
  function refreshResultScore(){Object.assign(result,resultStats(result));persist();}
  function renderResult(){setPage('result');const s=resultStats(result);main.innerHTML=warning()+intro('A LITTLE BETTER THAN YESTERDAY','오늘 쌓은 실력을 확인해요.','정답의 이유를 이해하면, 다음 문제는 조금 더 쉬워져요.')+`<div class="result-hero"><div><span class="eyebrow">${esc(result.title)} · ${result.mode==='exam'?'모의고사':'연습'}</span><h1>${s.pending?'서술형 평가를 마무리해 주세요.':s.score>=80?'차근차근, 잘 쌓아가고 있어요.':'헷갈렸던 개념을 짚어볼 시간.'}</h1><p>정답 ${s.correct} · 오답 ${s.wrong}${s.pending?` · 직접 채점 대기 ${s.pending}`:''} / 전체 ${s.total}문항 · ${Math.floor(result.elapsed/60)}분 ${result.elapsed%60}초${result.timedOut?' · 시간 종료로 자동 제출':''}</p></div><div class="score">${s.score}<small> / 100${s.pending?' (임시)':''}</small></div></div><div class="result-actions"><button class="primary" id="retry-wrong">오답${s.pending?' · 미평가':''} 다시 풀기 ↻</button><button class="secondary" id="retry-all">전체 다시 풀기</button><button class="secondary" id="back-home">학습 홈으로</button></div><p class="answer-note">문항별 동일 배점 · 서술형 직접 채점 결과 포함${s.pending?' · 미평가 서술형은 아직 점수에 반영되지 않았습니다.':''}</p><div class="week-results">${[...new Set(result.questions.map(q=>q.week))].sort((a,b)=>a-b).map(w=>{const qs=result.questions.filter(q=>q.week===w);return `<span class="chip">${w}주차 ${qs.filter(q=>autoGrade(q,result.answers,result.grades)===true).length}/${qs.length}</span>`;}).join('')}</div><div class="result-filters">${[['all',`전체 ${s.total}`],['wrong',`오답 ${s.wrong}`],['pending',`평가 대기 ${s.pending}`],['marked','다시 보기']].map(([id,label])=>`<button data-filter="${id}" class="${resultFilter===id?'active':''}" aria-pressed="${resultFilter===id}">${label}</button>`).join('')}</div><div id="review-list"></div>`;
    const qs=result.questions.filter(q=>resultFilter==='all'||resultFilter==='wrong'&&autoGrade(q,result.answers,result.grades)===false||resultFilter==='pending'&&autoGrade(q,result.answers,result.grades)===null||resultFilter==='marked'&&result.marks[q.id]);
    $('#review-list').innerHTML=qs.length?qs.map(q=>{const status=autoGrade(q,result.answers,result.grades);return `<details class="review-card" ${resultFilter==='pending'?'open':''}><summary><span class="badge ${status===false?'bad':status===null?'pending':''}">${status===null?'평가 대기':status?'정답':'오답'}</span><span>${result.questions.indexOf(q)+1}. ${esc(q.prompt)}</span></summary><div class="review-answer">내 답안: ${esc(userAnswer(q,result.answers[q.id]))}</div>${feedbackHTML(q,result.answers,result.grades)}</details>`;}).join(''):'<div class="empty">해당하는 문제가 없습니다.</div>';
    document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{resultFilter=b.dataset.filter;renderResult();});
    $('#back-home').onclick=()=>go('home');$('#retry-all').onclick=()=>retry(result.questions);$('#retry-wrong').onclick=()=>{const pool=result.questions.filter(q=>autoGrade(q,result.answers,result.grades)!==true);if(!pool.length){toast('모든 문항을 맞혔어요. 전체 다시 풀기로 복습할 수 있습니다.');return;}retry(pool);};bindSelfGrade();
  }
  async function retry(qs){const b=getBank(result.bankId);const available=b?qs.filter(q=>b.questions.some(item=>item.id===q.id)):[];if(!available.length){toast('이 기록의 문제는 현재 문제은행에서 모두 삭제되었습니다.');return;}if(session&&!await confirmDialog('새 복습을 시작할까요?','현재 저장된 미완료 시험은 새 복습으로 대체됩니다.','복습 시작'))return;startSession(b,shuffle(available),'practice');}
  function userAnswer(q,a){if(q.type==='choice')return q.options.find(o=>o.id===a)?.text||'미응답';if(q.type==='blanks')return q.fields.map((f,i)=>`${f}: ${a?.[i]||'미응답'}`).join(' / ');return a||'미응답';}
  function formatDate(date){return new Date(date).toLocaleDateString('ko-KR',{month:'2-digit',day:'2-digit'});}
  function renderRecords(){main.innerHTML=warning()+intro('YOUR LEARNING JOURNEY','조금씩 쌓인 공부의 흔적','최근 50개의 기록과 답안·해설을 이 브라우저에 보관합니다.')+(history.length?`<div class="section-head"><h2>학습 기록 ${history.length}</h2><button id="clear-history" class="link-btn danger">기록 전체 삭제</button></div><div class="table-wrap"><table><thead><tr><th>날짜</th><th>과목</th><th>방식</th><th>문항</th><th>점수</th><th>결과</th></tr></thead><tbody>${history.map((h,i)=>`<tr><td>${formatDate(h.date)}</td><td>${esc(h.title)}</td><td>${h.mode==='exam'?'모의고사':'연습'}</td><td>${h.questions.length}</td><td>${resultStats(h).score}점 ${resultStats(h).pending?'(임시)':''}</td><td><button class="link-btn" data-record="${i}">답안 · 해설 →</button></td></tr>`).join('')}</tbody></table></div>`:'<div class="empty"><b>아직 완료한 학습이 없어요.</b>학습 홈에서 첫 시험을 시작해 보세요.</div>');document.querySelectorAll('[data-record]').forEach(b=>b.onclick=()=>{result=history[Number(b.dataset.record)];resultFilter='all';renderResult();focusMain();});if($('#clear-history'))$('#clear-history').onclick=async()=>{if(await confirmDialog('학습 기록을 모두 삭제할까요?','완료한 시험의 답안과 해설 기록을 삭제합니다. 이 작업은 되돌릴 수 없습니다.','기록 삭제')){history=[];result=null;persist();renderRecords();}};}

  function renderManage(){main.innerHTML=warning()+intro('MAKE ROOM FOR MORE','배울 과목은 계속 늘어나니까.','새 과목을 만들거나 문제은행을 가져와 나만의 학습 공간을 넓혀보세요.')+`<div class="manage-grid"><form class="note-card" id="new-subject"><h3>새 과목 만들기</h3><label class="field-label" for="new-title">과목 이름</label><input id="new-title" type="text" required maxlength="60" placeholder="예: 네트워크 보안"><label class="field-label" for="new-weeks">주차 수</label><input id="new-weeks" type="number" min="1" max="30" value="7" required><button class="primary" type="submit">과목 만들기 +</button><p>생성 후 문제를 직접 추가할 수 있습니다.</p></form><div class="note-card"><h3>문제은행 가져오기 · 백업</h3><p>다른 곳에서 만든 JSON 문제은행을 가져오거나, 현재 과목을 백업하세요. 같은 과목 ID는 교체 여부를 확인합니다.</p><label class="field-label" for="import-file">문제은행 JSON 파일</label><input class="upload" id="import-file" type="file" accept=".json,application/json"><p id="import-error" class="error" role="alert"></p><button id="export-all" class="secondary">모든 과목 JSON 내보내기 ↓</button><button id="sample-json" class="link-btn" style="margin-top:15px;display:block">새 과목 예시 파일 받기 ↗</button><p>추가한 문제는 이 브라우저에만 저장됩니다. GitHub 방문자 모두에게 제공하려면 README의 배포 방법을 참고하세요. PDF 자동 AI 출제는 포함되어 있지 않습니다.</p></div></div><div class="manage-list"><div class="section-head"><h2>등록된 과목</h2><span>${banks().length}과목</span></div>${banks().map(b=>`<div class="note-card"><div><h3>${esc(b.title)} ${builtInIds.has(b.id)?'<span class="chip">기본 과목</span>':''}</h3><p>${b.weeks.length}주차 · ${b.questions.length}문항 · ${esc(b.source||'직접 만든 문제')}</p></div><div class="row"><button class="secondary" data-add="${esc(b.id)}">문제 추가 +</button><button class="link-btn" data-export="${esc(b.id)}">내보내기</button><button class="link-btn" data-inspect="${esc(b.id)}">문제 목록</button>${builtInIds.has(b.id)?'':`<button class="link-btn danger" data-remove="${esc(b.id)}">삭제</button>`}</div></div>`).join('')}</div><div id="bank-preview"></div>`;
    $('#new-subject').onsubmit=e=>{e.preventDefault();const title=$('#new-title').value.trim();if(!title)return;const count=Number($('#new-weeks').value);custom.push({id:`subject-${Date.now()}`,title,description:'직접 만드는 나만의 문제은행',weeks:Array.from({length:count},(_,i)=>`${i+1}주차`),source:'직접 추가',questions:[]});persist();renderManage();toast('과목을 만들었습니다. 문제 추가 버튼으로 첫 문제를 등록하세요.');};
    $('#export-all').onclick=()=>download('studyroom-banks.json',banks());$('#sample-json').onclick=()=>download('sample-subject.json',[sampleBank()]);
    const deployButton=document.createElement('button');deployButton.className='link-btn';deployButton.style.display='block';deployButton.style.marginTop='12px';deployButton.textContent='GitHub 배포용 overrides.js 받기 ↓';deployButton.onclick=()=>download('overrides.js',banks(),true);$('#sample-json').after(deployButton);
    $('#import-file').onchange=importBanks;
    document.querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>openEditor(b.dataset.add));
    document.querySelectorAll('[data-export]').forEach(b=>b.onclick=()=>download(`${b.dataset.export}.json`,[getBank(b.dataset.export)]));
    document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=async()=>{if(await confirmDialog('과목을 삭제할까요?',`“${getBank(b.dataset.remove).title}”의 문제를 삭제합니다. 필요하다면 먼저 내보내기로 백업하세요. 완료한 학습 기록은 유지됩니다.`,'과목 삭제')){custom=custom.filter(s=>s.id!==b.dataset.remove);persist();renderManage();}});
    document.querySelectorAll('[data-inspect]').forEach(b=>b.onclick=()=>{const bank=getBank(b.dataset.inspect);$('#bank-preview').innerHTML=`<div class="note-card"><h3>${esc(bank.title)} · 문제 목록</h3><div class="bank-list">${bank.questions.map(q=>`<details><summary>${q.week}주차 · ${TYPES[q.type]} · ${esc(q.prompt)}</summary><p>정답: ${esc(correctText(q))}</p><p>${esc(q.explanation)}</p><p>${esc(q.source||'')}</p><button class="link-btn danger" data-delete-question="${esc(q.id)}">나만 제외</button></details>`).join('')||'<p>아직 문제가 없습니다.</p>'}</div></div>`;document.querySelectorAll('[data-delete-question]').forEach(del=>del.onclick=async()=>{if(await confirmDialog('문제를 삭제할까요?','이 브라우저의 문제은행에서 삭제합니다.','문제 삭제')){removeQuestion(bank.id,del.dataset.deleteQuestion);renderManage();}});$('#bank-preview').scrollIntoView({behavior:'smooth'});});
  }
  function ensureCustom(id){let b=custom.find(s=>s.id===id);if(!b){const original=window.STUDY_BANKS.find(s=>s.id===id);b=JSON.parse(JSON.stringify(original));custom.push(b);window.STUDY_BANKS=window.STUDY_BANKS.filter(s=>s.id!==id);}return b;}
  function sourceDeletionLink(bankId,q){
    const shared=builtInBanks.find(b=>b.id===bankId);
    const repo=window.STUDY_REPOSITORY;
    if(!repo||!shared?.questions.some(item=>item.id===q.id))return '';
    const payload=JSON.stringify({subjectId:bankId,questionId:q.id},null,2);
    const body=`<!-- studyroom-delete:v1 -->\n## 전체 사이트 문제 삭제 요청\n\n과목: ${shared.title}\n문제: ${q.prompt}\n\n\`\`\`json\n${payload}\n\`\`\`\n\n삭제 사유: 불필요한 문제\n\n저장소 소유자가 등록하면 자동 반영됩니다. 다른 이용자의 요청은 소유자 승인 후 반영됩니다.`;
    const url=new URL(`https://github.com/${repo}/issues/new`);
    url.searchParams.set('title',`[문제 삭제] ${shared.title} / ${q.id}`);
    url.searchParams.set('body',body);
    return `<a class="delete-question-btn source-delete-link" href="${esc(url.href)}" target="_blank" rel="noopener noreferrer">문제 삭제 ↗</a>`;
  }
  function readDeletionState(){
    try{
      const value=JSON.parse(localStorage.getItem(DELETION_KEY)||'{}');
      const deleted={};
      for(const [id,ids] of Object.entries(value?.deleted||{})){
        if(!['__proto__','constructor','prototype'].includes(id)&&Array.isArray(ids))deleted[id]=ids.filter(v=>typeof v==='string');
      }
      return {deleted,dismissed:typeof value?.dismissed==='string'?value.dismissed:null};
    }catch{return {deleted:{},dismissed:null};}
  }
  function deletedIds(bankId){return [...new Set([...(deletionState.deleted[bankId]||[]),...(window.STUDY_REMOVED?.[bankId]||[])])];}
  function deletionSignature(removed){return `${removed.bankId}:${removed.question.id}`;}
  function saveDeletionState(){
    try{localStorage.setItem(DELETION_KEY,JSON.stringify(deletionState));}
    catch{storageOK=false;toast('삭제 기록을 브라우저에 저장하지 못했습니다. 문제은행을 내보내 백업해 주세요.');}
  }
  function updateDeletionState(bankId,questionId,remove){
    deletionState=readDeletionState();
    const ids=new Set(deletionState.deleted[bankId]||[]);
    if(remove)ids.add(questionId);else ids.delete(questionId);
    deletionState.deleted[bankId]=[...ids];
    deletionState.dismissed=null;
    saveDeletionState();
  }
  function resetDeletionState(bankId){
    deletionState=readDeletionState();
    delete deletionState.deleted[bankId];
    saveDeletionState();
  }
  function dismissDeletionNotice(){
    if(!lastDeleted)return;
    deletionState=readDeletionState();
    deletionState.dismissed=deletionSignature(lastDeleted);
    saveDeletionState();
    $('.deletion-notice')?.remove();
  }
  function migrateLegacyDeletions(){
    let changed=false;
    for(const original of builtInBanks){
      const edited=custom.find(b=>b.id===original.id);
      if(!edited)continue;
      const present=new Set(edited.questions.map(q=>q.id));
      const missing=original.questions.filter(q=>!present.has(q.id)).map(q=>q.id);
      if(missing.length){deletionState.deleted[original.id]=[...new Set([...(deletionState.deleted[original.id]||[]),...missing])];changed=true;}
    }
    if(changed)saveDeletionState();
  }
  function reconcileDeletedSession(){
    if(!session)return;
    const excluded=new Set(deletedIds(session.bankId));
    const currentId=session.questions[session.index]?.id;
    session.questions=session.questions.filter(q=>!excluded.has(q.id));
    for(const field of ['answers','checked','marks','grades'])for(const id of excluded)delete session[field][id];
    if(!session.questions.length){session=null;clearInterval(timerInterval);return;}
    const index=session.questions.findIndex(q=>q.id===currentId);
    session.index=index>=0?index:Math.min(session.index,session.questions.length-1);
  }
  window.addEventListener('storage',e=>{
    if(e.key!==DELETION_KEY)return;
    deletionState=readDeletionState();
    reconcileDeletedSession();
    if(page==='quiz'){if(session)renderQuiz();else go('home');}
    else if(page==='home')renderHome();
    else if(page==='manage')renderManage();
    else if(page==='records')renderRecords();
    else if(page==='result')renderResult();
  });
  function deletionNotice(){
    if(!lastDeleted||deletionState.dismissed===deletionSignature(lastDeleted))return '';
    return `<div class="deletion-notice" role="status"><div><b>문제은행에서 삭제했습니다.</b><span>${esc(getBank(lastDeleted.bankId)?.title||'과목')} 문제은행 ${getBank(lastDeleted.bankId)?.questions.length??0}문항 · 다음 시험에서도 나오지 않아요.</span></div><div class="deletion-actions"><button type="button" class="secondary" data-undo-delete>삭제 취소</button><button type="button" class="icon-btn close-deletion-notice" data-dismiss-deletion aria-label="삭제 안내 닫기" title="안내만 닫기">✕</button></div></div>`;
  }
  function removeQuestion(bankId,questionId){
    const bank=getBank(bankId);
    const bankIndex=bank?.questions.findIndex(q=>q.id===questionId)??-1;
    if(bankIndex<0)return false;
    const removed={bankId,bankIndex,question:JSON.parse(JSON.stringify(bank.questions[bankIndex]))};
    // 시험의 답안·확인 상태·표시·직접 채점 정보도 함께 제거합니다.
    if(session?.bankId===bankId){
      const index=session.questions.findIndex(q=>q.id===questionId);
      if(index>=0){
        removed.sessionId=session.id;
        removed.sessionIndex=index;
        removed.sessionQuestion=JSON.parse(JSON.stringify(session.questions[index]));
        removed.values={};
        for(const field of ['answers','checked','marks','grades']){
          if(Object.hasOwn(session[field],questionId))removed.values[field]=session[field][questionId];
          delete session[field][questionId];
        }
        session.questions.splice(index,1);
        if(session.questions.length){
          if(index<session.index)session.index--;
          session.index=Math.min(session.index,session.questions.length-1);
        }else{
          removed.emptySession={...session};
          clearInterval(timerInterval);
          session=null;
        }
      }
    }
    const mutable=ensureCustom(bankId);
    mutable.questions=mutable.questions.filter(q=>q.id!==questionId);
    updateDeletionState(bankId,questionId,true);
    lastDeleted=removed;
    persist();
    return true;
  }
  function undoQuestionDeletion(){
    const removed=lastDeleted;
    if(!removed)return;
    if((window.STUDY_REMOVED?.[removed.bankId]||[]).includes(removed.question.id)){toast('사이트 원본에서 삭제된 문제는 이곳에서 복원할 수 없습니다.');return;}
    const bank=getBank(removed.bankId);
    if(!bank){toast('과목이 삭제되어 문제를 복원할 수 없습니다.');return;}
    const mutable=ensureCustom(bank.id);
    if(!mutable.questions.some(q=>q.id===removed.question.id)){
      mutable.questions.splice(Math.min(removed.bankIndex,mutable.questions.length),0,removed.question);
    }
    if(!session&&removed.emptySession&&(!removed.emptySession.deadline||Date.now()<removed.emptySession.deadline)){
      session=removed.emptySession;
    }
    if(session?.id===removed.sessionId&&!session.questions.some(q=>q.id===removed.question.id)){
      const index=Math.min(removed.sessionIndex,session.questions.length);
      session.questions.splice(index,0,removed.sessionQuestion);
      for(const [field,value] of Object.entries(removed.values))session[field][removed.question.id]=value;
      session.index=index;
    }
    updateDeletionState(removed.bankId,removed.question.id,false);
    lastDeleted=null;
    persist();
    if(page==='quiz'&&session)renderQuiz();
    else if(page==='home')renderHome();
    else if(page==='manage')renderManage();
    else if(page==='records')renderRecords();
    else if(page==='result')renderResult();
    toast('문제를 복원했습니다.');
  }
  document.addEventListener('click',e=>{if(e.target.closest('[data-undo-delete]'))undoQuestionDeletion();if(e.target.closest('[data-dismiss-deletion]'))dismissDeletionNotice();});
  // 오래된 브라우저 수정본에도 새 집중 학습 문제를 보충합니다.
  function syncSetuidPractice() {
    const original = builtInBanks.find(b => b.id === 'hacking');
    const edited = custom.find(b => b.id === 'hacking');
    if (!original || !edited) return;
    const focus = original.questions.filter(q => /^hk-setuid-0[1-5]$/.test(q.id) && q.topics?.includes('setuid'));
    const present = new Set(edited.questions.map(q => q.id));
    const removed = deletionState.deleted.hacking || [];
    // 이전 누락 추론이 다섯 신규 ID를 한꺼번에 삭제 처리한 경우만 복구합니다.
    // 실제 마지막 제외가 SetUID 문제라면 사용자의 제외 상태를 유지합니다.
    const missingAll = focus.length === 5 && focus.every(q => !present.has(q.id));
    const inferredBatch = missingAll && focus.every(q => removed.includes(q.id)) &&
      !(lastDeleted?.bankId === 'hacking' && /^hk-setuid-0[1-5]$/.test(lastDeleted.question?.id));
    if (inferredBatch) {
      const ids = new Set(focus.map(q => q.id));
      deletionState.deleted.hacking = removed.filter(id => !ids.has(id));
      saveDeletionState();
    }
    let changed = inferredBatch;
    for (const q of focus) if (!present.has(q.id)) {
      edited.questions.push(JSON.parse(JSON.stringify(q)));
      changed = true;
    }
    if (changed) persist();
  }
  syncSetuidPractice();
  // 모든 과목에 동일하게 브라우저의 수정본을 우선 적용합니다.
  window.STUDY_BANKS=window.STUDY_BANKS.filter(b=>!custom.some(c=>c.id===b.id));
  function download(name,data,script=false){const json=JSON.stringify(data,null,2);const url=URL.createObjectURL(new Blob([script?`/* 스터디룸 문제은행 */\nwindow.STUDY_OVERRIDES = ${json};\n`:json],{type:script?'text/javascript;charset=utf-8':'application/json;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  function sampleBank(){return {id:'network-basics',title:'네트워크 기초',description:'나만의 새 과목',source:'직접 작성',weeks:['네트워크 입문'],questions:[{id:'net-001',week:1,type:'choice',prompt:'다음 중 IP 주소와 MAC 주소의 대응을 확인하는 프로토콜은?',options:[{id:'a',text:'ARP'},{id:'b',text:'DNS'},{id:'c',text:'HTTP'},{id:'d',text:'SMTP'}],answer:'a',explanation:'ARP는 같은 네트워크에서 IPv4 주소에 대응하는 MAC 주소를 알아내는 데 사용합니다.',source:'직접 작성'}]};}
  async function importBanks(e){const file=e.target.files[0];if(!file)return;try{if(file.size>10*1024*1024)throw Error('파일은 10MB 이하로 가져와 주세요.');const list=validateBanks(JSON.parse(await file.text()));const collisions=list.filter(b=>getBank(b.id));if(collisions.length&&!await confirmDialog('기존 과목을 교체할까요?',`${collisions.map(b=>b.title).join(', ')}의 문제은행을 가져온 내용으로 바꿉니다. 기존 시험 기록은 유지됩니다.`,'교체하고 가져오기'))return;for(const b of list){resetDeletionState(b.id);custom=custom.filter(s=>s.id!==b.id);window.STUDY_BANKS=window.STUDY_BANKS.filter(s=>s.id!==b.id);custom.push(b);}persist();renderManage();toast(`${list.length}개 과목을 가져왔습니다.`);}catch(error){$('#import-error').textContent=`가져오기 실패: ${error.message}`;}finally{e.target.value='';}}
  let editingBank=null;
  function openEditor(id){editingBank=id;const bank=getBank(id);$('#editor-fields').innerHTML=`<label class="field-label" for="q-type">유형</label><select id="q-type">${Object.entries(TYPES).map(([id,label])=>`<option value="${id}">${label}</option>`).join('')}</select><label class="field-label" for="q-week">주차</label><select id="q-week">${bank.weeks.map((w,i)=>`<option value="${i+1}">${i+1}주차 · ${esc(w)}</option>`).join('')}</select><label class="field-label" for="q-prompt">문제</label><textarea id="q-prompt" required></textarea><div id="type-fields"></div><label class="field-label" for="q-explanation">해설 / 서술형 모범답안</label><textarea id="q-explanation" required></textarea><label class="field-label" for="q-source">출처 (선택)</label><input id="q-source" type="text" placeholder="예: 교재 12쪽">`;$('#q-type').onchange=renderTypeFields;renderTypeFields();$('#editor-error').textContent='';$('#editor').showModal();}
  function renderTypeFields(){const type=$('#q-type').value;$('#type-fields').innerHTML=type==='choice'?`<div class="field-label">보기 4개 · 정답을 선택하세요</div>${[0,1,2,3].map(i=>`<div class="row" style="margin:8px 0"><label style="white-space:nowrap"><input type="radio" name="q-correct" value="${i}" ${i===0?'checked':''}>${i+1}번</label><input type="text" id="q-option-${i}" required aria-label="보기 ${i+1}"></div>`).join('')}`:type==='short'?'<label class="field-label" for="q-answers">허용 정답 (한 줄에 하나씩)</label><textarea id="q-answers" required></textarea>':type==='blanks'?'<label class="field-label" for="q-fields">빈칸 라벨 (한 줄에 하나씩)</label><textarea id="q-fields" required>빈칸 1\n빈칸 2</textarea><label class="field-label" for="q-answers">정답 (라벨과 같은 순서, 한 줄에 하나씩)</label><textarea id="q-answers" required></textarea>':'<label class="field-label" for="q-rubric">직접 채점 기준 (한 줄에 하나씩)</label><textarea id="q-rubric" required></textarea>';}
  $('#close-editor').onclick=()=>$('#editor').close();
  $('#editor-form').onsubmit=e=>{e.preventDefault();try{const bank=getBank(editingBank);const q={id:`q-${Date.now()}`,week:Number($('#q-week').value),type:$('#q-type').value,prompt:$('#q-prompt').value.trim(),explanation:$('#q-explanation').value.trim(),source:$('#q-source').value.trim()||'직접 추가'};const lines=id=>$(id).value.split('\n').map(s=>s.trim()).filter(Boolean);if(q.type==='choice'){q.options=[0,1,2,3].map(i=>({id:`o${i}`,text:$(`#q-option-${i}`).value.trim()}));q.answer=`o${$('input[name=q-correct]:checked').value}`;}if(q.type==='short'||q.type==='blanks')q.answers=lines('#q-answers');if(q.type==='blanks')q.fields=lines('#q-fields');if(q.type==='essay'){q.model=q.explanation;q.rubric=lines('#q-rubric');}validateBanks({...bank,questions:[q]});ensureCustom(editingBank).questions.push(q);persist();$('#editor').close();renderManage();toast('문제를 저장했습니다.');}catch(error){$('#editor-error').textContent=error.message;}};
  function confirmDialog(title,message,label){return new Promise(resolve=>{const existing=$('#confirmation');if(existing){resolve(false);return;}const d=document.createElement('dialog');d.id='confirmation';d.className='confirm-box';d.innerHTML=`<h2>${esc(title)}</h2><p>${esc(message)}</p><div class="row"><button class="secondary" data-cancel>취소</button><button class="primary" data-confirm>${esc(label)}</button></div>`;document.body.append(d);d.addEventListener('close',()=>{const yes=d.returnValue==='yes';d.remove();resolve(yes);},{once:true});d.querySelector('[data-cancel]').onclick=()=>d.close('no');d.querySelector('[data-confirm]').onclick=()=>d.close('yes');d.showModal();});}
  document.addEventListener('keydown',e=>{if(page==='quiz'&&session&&e.altKey&&!document.querySelector('dialog[open]')){if(e.key==='ArrowRight'){e.preventDefault();jump(session.index+1);}if(e.key==='ArrowLeft'){e.preventDefault();jump(session.index-1);}}});
  // 화면을 떠나도 제한 시간은 계속 흘러갑니다.
  document.addEventListener('visibilitychange',()=>{if(!document.hidden&&session?.deadline&&Date.now()>=session.deadline)finishSession(true);});
  // 잘못된 사용자 문제은행은 기본 학습 화면이 열리는 것을 막지 않습니다.
  try{validateBanks(banks());}catch{custom=[];window.STUDY_BANKS=builtInBanks;toast('저장된 추가 과목의 형식을 확인해 주세요. 기본 문제은행을 불러옵니다.');}
  if(session&&(!Array.isArray(session.questions)||!session.questions.length||!session.answers||!session.grades)){session=null;persist();}
  migrateLegacyDeletions();
  reconcileDeletedSession();
  go('home');
  if(session?.deadline&&Date.now()>=session.deadline)finishSession(true);
  setInterval(()=>{if(session?.deadline&&Date.now()>=session.deadline)finishSession(true);},1000);
})();
