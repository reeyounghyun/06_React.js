# 01-react-basic · React 기초

React의 핵심 개념을 **챕터별 예제 → 미션 → 실습 프로젝트** 순서로 학습하는 Vite 기반 프로젝트입니다.
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
cd 01-react-basic

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
- 현재 레슨은 URL 해시에 저장됩니다. 예: `#03-7`, `#03-7/mission`
- **✏️ 연습장**(`src/playground/Playground.jsx`)에서 자유롭게 코드를 작성하며 라이브 코딩할 수 있습니다.

## 학습 내용

### CHAPTER 01. React 시작하기

| 번호 | 주제 |
| --- | --- |
| 01-1 | React란 무엇인가? |
| 01-2 | SPA의 개념 |
| 01-3 | DOM과 Virtual DOM |
| 01-4 | 명령형과 선언형 프로그래밍 |
| 01-5 | Node.js와 npm |
| 01-6 | Vite 개발 환경 구축 |
| 01-7 | React 프로젝트 구조 |

### CHAPTER 02. JSX와 컴포넌트

| 번호 | 주제 | 미션 |
| --- | --- | :---: |
| 02-1 | JSX 기본 문법 | ✅ |
| 02-2 | JSX에서 JavaScript 사용하기 | ✅ |
| 02-3 | Fragment 사용하기 | ✅ |
| 02-4 | 함수형 컴포넌트 | ✅ |
| 02-5 | 컴포넌트 분리 및 재사용 (`Avatar`, `Buttons`) | ✅ |
| 02-6 | 컴포넌트 합성 | ✅ |
| 02-7 | CSS와 CSS Modules (클래스 이름 충돌 비교) | ✅ |

### CHAPTER 03. Props와 State

| 번호 | 주제 | 미션 |
| --- | --- | :---: |
| 03-1 | Props의 개념 | ✅ |
| 03-2 | Props 전달하기 | ✅ |
| 03-3 | Props 구조 분해 할당 | ✅ |
| 03-4 | children 활용하기 | ✅ |
| 03-5 | 단방향 데이터 흐름 | ✅ |
| 03-6 | State의 개념 | ✅ |
| 03-7 | useState 사용하기 | ✅ |
| 03-8 | 렌더링과 리렌더링 | ✅ |
| 03-9 | 함수형 상태 업데이트 | ✅ |

### CHAPTER 04. 동적인 UI 구현

| 번호 | 주제 | 미션 |
| --- | --- | :---: |
| 04-1 | 이벤트 처리 | ✅ |
| 04-2 | 이벤트 핸들러 | ✅ |
| 04-3 | 조건부 렌더링 | ✅ |
| 04-4 | 리스트 렌더링 | ✅ |
| 04-5 | Key의 역할 | ✅ |
| 04-6 | 종합 실습 – 카페 메뉴판 | ✅ |

### 1일차 실습 프로젝트

시작 파일(`start/`)에 적힌 **TODO**를 순서대로 채우며 완성하는 실습입니다. 스타일(CSS Modules)은 미리 준비되어 있습니다.

| 프로젝트 | 내용 | 주요 파일 |
| --- | --- | --- |
| ① 프로필 카드 | 프로필 데이터 배열을 Props(구조 분해 할당)로 전달해 카드 목록 렌더링 — 아바타, 이름, 직무, 소개, 기술 태그, 온라인 상태 | `projects/profile-card/` |
| ② 카운터 앱 | `useState`와 함수형 업데이트로 증가·감소·초기화, 양수/음수 스타일과 짝수/홀수 표시 | `projects/counter/` |

## 폴더 구조

```
01-react-basic/
├── index.html
├── package.json
├── vite.config.js
├── .oxlintrc.json            # 린트 규칙
├── public/
│   └── vanilla/
│       └── imperative-counter.html   # 명령형(바닐라 JS) 카운터 비교 예제
└── src/
    ├── main.jsx              # 앱 진입점
    ├── App.jsx               # 레슨 목록 + 결과/소스/미션 화면
    ├── lessons.js            # 챕터·레슨 목록 정의
    ├── missions.js           # 미션·정답 파일 자동 매칭 (import.meta.glob)
    ├── sources.js            # 소스 코드 보기용 원본 파일 로딩
    ├── components/
    │   ├── SourceView.jsx    # 소스 코드 표시
    │   ├── MissionView.jsx   # 미션 화면
    │   └── ErrorBoundary.jsx # 예제 오류가 앱 전체를 멈추지 않도록 처리
    ├── chapters/             # 챕터별 학습 예제 (ch01 ~ ch04)
    ├── missions/             # 레슨별 미션 (ch02 ~ ch04)
    ├── projects/             # 실습 프로젝트 (profile-card, counter)
    └── playground/           # 라이브 코딩 연습장
```

## 새 레슨·미션 추가 방법

1. **레슨**: `src/chapters/chXX/` 에 컴포넌트를 만들고 `src/lessons.js` 목록에 추가합니다.
2. **미션**: `src/missions/chXX/{레슨ID}_Mission.jsx` 이름으로 파일을 만들면 해당 레슨에 자동으로 연결됩니다.
3. **정답(선택)**: `src/missions/answers/{레슨ID}_Answer.jsx` 로 만들면 미션 화면에서 정답을 확인할 수 있습니다.
