# 전체 사이트에서 문제 삭제

GitHub Pages는 정적 사이트이므로 웹페이지 자체가 GitHub 파일을 바로 수정할 수 없습니다.
별도 서버나 사이트에 저장한 개인 토큰 없이, GitHub 로그인·저장소 권한과 Actions로 원본을 수정합니다.

## 문제를 풀다가 원본에서 삭제하기

1. 빨간 **문제 삭제 ↗**를 누릅니다.
2. GitHub의 새 Issue 화면이 열립니다. 문제 정보는 자동 입력됩니다.
3. GitHub에 로그인한 뒤 **Create / Submit new issue**를 누릅니다. 버튼을 누르기만 하고 Issue를 등록하지 않으면 삭제되지 않습니다.
4. 저장소 소유자(`dtd2428`) 또는 쓰기 권한이 있는 계정의 요청은 자동 처리합니다.
5. 원본 `questions.js`와 배포용 수정본에서 문항을 제거하고 삭제 ID를 `data/deletions.js`에 기록합니다. GitHub Pages 빌드도 명시적으로 요청합니다.
6. 배포가 끝난 뒤 새로고침하면 친구를 포함해 모두에게 적용됩니다. 이미 저장된 예전 문제은행에서도 해당 ID는 제외합니다.

처리 결과와 남은 문항 수는 요청 Issue의 댓글로 남기고 Issue를 닫습니다. 실패하면 [Actions](https://github.com/dtd2428/study/actions)의 **Delete shared question** 실행 로그를 확인하세요. 실패 원인을 해결한 뒤 Issue를 다시 열면 재시도합니다.

## 친구가 삭제 요청을 올렸을 때

친구는 원본 삭제를 요청할 수 있습니다. 저장소 소유자가 요청 Issue에 **`source-delete-approved`** 라벨을 붙이면 원본에 반영합니다. 라벨이 없으면 GitHub의 Issues → Labels에서 이 이름으로 만들면 됩니다.

일반 방문자가 스스로 승인 라벨을 요청 내용에 적는 것은 승인으로 처리하지 않습니다. 실제 라벨을 붙인 계정의 저장소 쓰기 권한을 확인합니다.

## 나에게만 필요 없는 문제라면

**나만 제외**를 누르면 그 브라우저의 전체 문제은행에서 제외합니다. 예를 들어 초기 92문항에서 한 개를 제외하면 91문항으로 줄고 다음 시험에서도 나오지 않습니다. 친구나 GitHub 원본은 바꾸지 않습니다.

안내의 **삭제 취소**는 마지막 로컬 제외를 되돌립니다. 오른쪽 **X**는 안내만 닫고 삭제는 유지합니다. 닫은 안내는 새로고침해도 나타나지 않으며, 새 문항을 제외할 때 새 안내가 뜹니다.

원본 삭제는 Git에 남는 공통 변경입니다. 되돌리려면 해당 삭제 커밋을 되돌려 문제 파일과 `data/deletions.js`를 함께 복원합니다. 이미 완료한 시험 기록과 해설은 보존합니다.

## 운영 주의

- 새 과목의 ID와 문제 ID를 유지해야 공통 삭제 목록과 기존 기록이 일치합니다.
- 원본 삭제 자동화가 커밋을 추가하므로, 다음 로컬 작업 전에 GitHub Desktop의 Fetch/Pull로 변경을 받아오세요.
- 브라우저의 오래된 전체 문제은행을 다시 배포하더라도 `data/deletions.js`를 유지하면 공통 삭제 ID는 출제하지 않습니다.
- GitHub Actions가 파일을 수정하고 Pages 빌드를 요청하므로 저장소에서 Actions 사용이 허용되어 있어야 합니다. 사이트 자체에 비밀번호나 개인 액세스 토큰을 넣지 않습니다.

공식 문서: [GITHUB_TOKEN으로 만든 커밋과 Pages 빌드](https://docs.github.com/en/actions/concepts/security/github_token), [Pages 빌드 요청 API](https://docs.github.com/en/rest/pages/pages#request-a-github-pages-build).
