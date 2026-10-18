/* 복사 후 과목 id·정보·문제를 수정하세요. 이 템플릿은 사이트에 자동 등록되지 않습니다. */
(() => {
  const bank = {
    id: 'new-subject',
    title: '새 과목',
    description: '과목 소개',
    source: '교재 또는 강의 이름',
    weeks: ['1주차 단원 이름'],
    questions: [
      {
        id: 'new-001', week: 1, type: 'choice',
        prompt: '여기에 문제를 작성하세요.',
        options: [
          { id: 'a', text: '정답 보기' },
          { id: 'b', text: '다른 보기 1' },
          { id: 'c', text: '다른 보기 2' },
          { id: 'd', text: '다른 보기 3' }
        ],
        answer: 'a',
        explanation: '정답이 되는 이유를 설명하세요.',
        source: '교재 1쪽'
      }
    ]
  };
  window.STUDY_BANKS.push(bank);
})();
