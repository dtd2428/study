# 새 과목 추가하기

과목별 문제는 `data/subjects/`에, 공통 화면과 채점 기능은 `assets/`에 보관합니다.
새 과목을 추가할 때 공통 JavaScript나 HTML을 수정할 필요가 없습니다.

## 방법 1: 과목별 파일로 관리 (권장)

예를 들어 데이터베이스 과목을 추가한다면 다음처럼 만듭니다.

```text
data/subjects/
├─ hacking/
│  ├─ questions.js
│  └─ README.md
└─ database/
   └─ questions.js
```

1. `docs/templates/subject.js`를 `data/subjects/database/questions.js`로 복사합니다.
2. 파일 안의 `id`를 `database`, `title`을 실제 과목명으로 수정하고 주차·문제를 작성합니다.
3. `data/subjects.js`의 목록에 한 줄을 추가합니다.

```javascript
window.STUDY_SUBJECTS = [
  { id: 'hacking', script: 'data/subjects/hacking/questions.js' },
  { id: 'database', script: 'data/subjects/database/questions.js' }
];
```

4. `index.html`을 열어 새 과목 선택과 문제풀이를 확인합니다.
5. GitHub Desktop에서 Commit → Push origin을 하면 사이트에도 반영됩니다.

실제 준비된 문제가 있는 과목만 등록하세요. 과목 ID는 목록과 문제 파일에서 같아야 하고, 다른 과목과 중복되면 안 됩니다. 문제 ID는 과목 안에서 유일해야 합니다. 기존 ID를 유지하면 저장된 답안과 기록을 이어서 볼 수 있습니다.

## 방법 2: 웹에서 작성한 뒤 배포

1. 사이트의 **과목 · 문제 관리**에서 과목과 문제를 만듭니다. JSON 가져오기도 가능합니다.
2. **GitHub 배포용 overrides.js 받기**를 누릅니다.
3. 내려받은 파일로 저장소의 `data/overrides.js`를 교체합니다.
4. Commit → Push origin으로 배포합니다.

이 파일은 기본 과목 파일을 삭제하지 않고, 같은 ID는 교체하고 새 ID는 추가합니다. 목록 전체의 현재 상태를 담기 때문에 기존 과목과 새 과목을 함께 배포할 수 있습니다.

과목별 파일을 직접 수정했는데 반영되지 않으면 `data/overrides.js`에 같은 과목의 배포본이 남아 있는지 확인하세요. 직접 관리 방식으로 돌아갈 때는 필요한 내용을 과목별 파일에 옮기고 `window.STUDY_OVERRIDES = [];`로 비웁니다.

## 데이터 우선순위

1. `data/subjects.js`의 목록에 있는 과목별 기본 파일을 불러옵니다.
2. `data/overrides.js`에 같은 ID가 있으면 그 배포본으로 교체합니다.
3. 브라우저에서 직접 수정한 과목이 있으면 해당 브라우저의 수정본이 우선합니다.

공통 `localStorage` 키는 이전과 같은 `studyroom-v1`입니다. 기본 과목과 문제 ID도 유지했습니다. 배포 후에도 같은 주소·브라우저에서는 기존 학습 기록과 진행 중인 시험을 이어갈 수 있습니다. 과거 기록에는 당시의 문제와 해설이 보관됩니다.

서버·빌드 과정 없이 스크립트를 순서대로 불러오므로 파일을 직접 열어도 동작합니다. 새 과목이 30문항 이상이면 무작위 30문항을 출제하고, 미만이면 등록된 전체 문항을 사용합니다.

문제 필드와 JSON 형식은 [README](../README.md#json-가져오기)를 참고하세요. PDF를 자동으로 읽어 출제하는 기능은 포함되어 있지 않습니다.
