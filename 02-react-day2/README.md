# 02-react-day2 · State 관리 · 폼 · Hooks

React의 **State 심화, 사용자 입력 처리, 컴포넌트 간 상태 공유, React Hooks**를 **챕터별 예제 → 미션 → 실습 프로젝트** 순서로 학습하는 Vite 기반 프로젝트입니다.
브라우저에서 레슨을 하나씩 선택해 **실행 결과**와 **소스 코드**를 함께 보고, 레슨별 **미션**으로 직접 연습할 수 있습니다.

## 기술 스택

| 구분 | 사용 기술 |
| --- | --- |
| 라이브러리 | React 19, React DOM 19 |
| 빌드 도구 | Vite 8 (`@vitejs/plugin-react`) |
| 린트 | oxlint (`react`, `oxc` 플러그인) |
| 스타일 | 일반 CSS, CSS Modules |

## 시작하기

```bash
# 1. 프로젝트 폴더로 이동
cd 02-react-day2

# 2. 패키지 설치
npm install

# 3. 개발 서버 실행 (기본 주소: http://localhost:5173)
npm run dev
```

### npm 스크립트

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 배포용 빌드 (`dist/` 생성) |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run lint` | oxlint로 코드 검사 |

## 사용 방법

- 왼쪽 목록에서 레슨을 선택하면 오른쪽에 **실행 결과**와 **소스 코드**가 표시됩니다.
- 미션이 있는 레슨은 **미션 탭**에서 직접 문제를 풀어볼 수 있습니다.
- 현재 레슨은 URL 해시에 저장됩니다. 예: `#08-4`, `#08-4/mission`
- **✏️ 연습장**(`src/playground/Playground.jsx`)에서 자유롭게 코드를 작성하며 라이브 코딩할 수 있습니다.
- `useEffect` 관련 레슨은 화면의 **📜 실행 기록** 패널에 effect 실행·정리 순서가 표시됩니다.

## 학습 내용

### CHAPTER 05. State 심화

| 번호 | 주제 | 미션 |
| --- | --- | :---: |
| 05-1 | State의 불변성 | ✅ |
| 05-2 | 객체 상태 업데이트 | ✅ |
| 05-3 | 배열 상태 추가 · 수정 · 삭제 | ✅ |
| 05-6 | 파생 상태와 중복 상태 | ✅ |
| 05-7 | 올바른 상태 설계 | |

### CHAPTER 06. 사용자 입력 처리

| 번호 | 주제 | 미션 |
| --- | --- | :---: |
| 06-1 | Input과 onChange | |
| 06-2 | 제어 컴포넌트 | ✅ |
| 06-3 | 비제어 컴포넌트 | |
| 06-4 | 여러 입력값 관리 | ✅ |
| 06-5 | Select와 Checkbox | |
| 06-6 | Form과 onSubmit | ✅ |
| 06-7 | 입력값 유효성 검사 | |

### CHAPTER 07. 컴포넌트 간 상태 공유

| 번호 | 주제 | 미션 |
| --- | --- | :---: |
| 07-1 | 단방향 데이터 흐름 | |
| 07-2 | Lifting State Up | ✅ |
| 07-3 | 자식에서 부모 상태 변경하기 | |
| 07-5 | Props Drilling과 문제점 | |

### CHAPTER 08. React Hooks

| 번호 | 주제 | 미션 |
| --- | --- | :---: |
| 08-1 | Hooks의 개념과 사용 규칙 | |
| 08-2 | useRef와 값의 참조 | |
| 08-3 | useRef와 DOM 접근 | ✅ |
| 08-4 | useEffect의 개념 | ✅ |
| 08-5 | 의존성 배열 | ✅ |
| 08-6 | Cleanup 함수 | ✅ |
| 08-7 | useEffect가 필요하지 않은 경우 | |
| 08-8 | useReducer를 활용한 상태 관리 | ✅ |
| 08-9 | Custom Hook 만들기 (`useToggle`, `useInput`, `useWindowWidth`) | ✅ |
| 08-10 | localStorage 활용하기 (`useLocalStorage`) | |
| 08-11 | 에러 메시지 읽기와 디버깅 도구 | ✅ |
| 08-12 | AI가 만든 코드 검증하기 | |

### 2일차 실습 프로젝트: Todo List

| 레슨 | 내용 | 주요 파일 |
| --- | --- | --- |
| ✍️ Todo (직접 짜기) | 시작 파일의 **TODO ①~⑤**를 채워 등록 · 완료 토글 · 삭제 · 필터 · 수정 기능 완성 (스타일은 CSS Modules로 준비됨) | `projects/todo/start/TodoStart.jsx` |
| 🤖 AI로 만들기 가이드 | 단계별 프롬프트(단일 컴포넌트 → 컴포넌트 분리 → Custom Hook 분리)를 복사해 AI로 Todo 앱을 만드는 가이드 | `projects/todo/ai/TodoAiGuide.jsx` |
| 🤖 내 AI Todo | 가이드를 따라 AI로 만든 결과물을 두는 자리 | `projects/todo/ai/MyTodo.jsx` |

## 폴더 구조

```
02-react-day2/
├── index.html
├── package.json
├── vite.config.js
├── .oxlintrc.json            # 린트 규칙
├── public/
└── src/
    ├── main.jsx              # 앱 진입점
    ├── App.jsx               # 레슨 목록 + 결과/소스/미션 화면
    ├── lessons.js            # 챕터·레슨 목록 정의
    ├── missions.js           # 미션·정답 파일 자동 매칭 (import.meta.glob)
    ├── sources.js            # 소스 코드 보기용 원본 파일 로딩
    ├── components/
    │   ├── SourceView.jsx    # 소스 코드 표시
    │   ├── MissionView.jsx   # 미션 화면
    │   ├── ErrorBoundary.jsx # 예제 오류가 앱 전체를 멈추지 않도록 처리
    │   ├── EffectLog.jsx     # useEffect 실행 기록 패널
    │   ├── effectLogger.js   # 실행 기록 출력 함수 (logEffect)
    │   └── CopyBox.jsx       # 프롬프트 복사 박스
    ├── chapters/             # 챕터별 학습 예제 (ch05 ~ ch08)
    │   └── ch08/hooks/       # Custom Hook 예제 (useToggle, useInput, useWindowWidth, useLocalStorage)
    ├── missions/             # 레슨별 미션 (ch05 ~ ch08)
    ├── projects/todo/        # 실습 프로젝트 (start: 직접 짜기, ai: AI로 만들기)
    └── playground/           # 라이브 코딩 연습장
```

## 새 레슨·미션 추가 방법

1. **레슨**: `src/chapters/chXX/` 에 컴포넌트를 만들고 `src/lessons.js` 목록에 추가합니다.
2. **미션**: `src/missions/chXX/{레슨ID}_Mission.jsx` 이름으로 파일을 만들면 해당 레슨에 자동으로 연결됩니다.
3. **정답(선택)**: `src/missions/answers/{레슨ID}_Answer.jsx` 로 만들면 미션 화면에서 정답을 확인할 수 있습니다.
