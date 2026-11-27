import { useState } from "react";

const hooks = [
  ["useState", "컴포넌트의 기억(state)"],
  ["useRef", "DOM 참조, 렌더링과 무관한 값 보관"], // State  => 새로고침하면 화면이 다시그려져도 useRef로 등록하면 유지됨
  ["useEffect", "외부 시스템과 동기화 (타이머, 이벤트, 저장소)"], //부수효과를 등록하는 역할은 한다 // 사용범위 : 타이머, 이벤트 ,저장소 같은 다른 라이브러리를 사용
  ["useReducer", "복잡한 state 변경 로직을 한곳에"], //  useState가 여러 형태로 존재할때 useTeducer를 이용하여 관리하여, action dispatch로 분류할수 있다.
  ["useContext", "전역 데이터 읽기"],
  [
    "useMemo / useCallback",
    "계산 결과 / 함수 재사용 (최적화) — AI가 넣었다면 대부분 없어도 된다",
  ],
  ["Custom Hook", "내가 만든 use○○ — 로직 재사용"],
];

export default function HooksRules() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="stack">
      <table className="table">
        <thead>
          <tr>
            <th>Hook</th>
            <th>역할</th>
          </tr>
        </thead>
        <tbody>
          {hooks.map(([hook, role]) => (
            <tr key={hook}>
              <td>
                <code>{hook}</code>
              </td>
              <td>{role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row" style={{ alignItems: "stretch" }}>
        <div className="box" style={{ flex: 1 }}>
          <h3 className="bad">✕ 잘못된 예</h3>
          <div className="cmd">{`function Profile({ isOpen }) {
  if (isOpen) {
    const [name, setName] = useState('')
  }
  if (!isOpen) return null
  const [age, setAge] = useState(0) // early return 뒤
  ...
}`}</div>
        </div>
        <div className="box" style={{ flex: 1 }}>
          <h3 className="good">○ 올바른 예</h3>
          <div className="cmd">{`function Profile({ isOpen }) {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  if (!isOpen) return null  // Hook 호출 뒤에
  ...
}`}</div>
        </div>
      </div>

      <div className="box stack">
        <h3>조건은 Hook 호출이 아니라 "화면"에 건다</h3>
        <button className="btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "닫기" : "이름 입력 열기"}
        </button>
        {isOpen && (
          <input
            className="input"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <p className="hint">
          입력창을 닫았다 열어도 name state는 유지된다 (Hook은 항상 호출되고
          있으니까).
        </p>
      </div>

      <p className="hint">
        규칙을 어기면 린터(oxlint/ESLint의 rules-of-hooks)가 에디터에서 바로
        빨간 줄로 알려 준다.
      </p>
    </div>
  );
}
