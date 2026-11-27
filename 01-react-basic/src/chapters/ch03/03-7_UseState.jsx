import { useState } from "react";
/**
 * const [state, setState] = useState()
 * const [현재값, 값을 변경하는 함수(이름규칙 : set+변수) = useState(초기값)
 *
 * HOOK(훅) : 리액트의 상태관리나 생명주기 같은 핵심 기능을 연결해서 사용할 수 있게 만들어주는 함수이다.
 * **/
export default function UseState() {
  // 함수형 컴포넌트에서 혹은 항상 최상단에서 호출해야한다. (if문 for문 일반함수 안에서 사용하면 안된다.)
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="stack">
      <div className="box">
        <h3>숫자 state</h3>
        <div className="row">
          <button className="btn" onClick={() => setCount(count - 1)}>
            -
          </button>
          <b style={{ minWidth: 40, textAlign: "center" }}>{count}</b>
          <button className="btn" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>

      <div className="box">
        <h3>문자열 state</h3>
        <p>
          안녕하세요, <b>{name}</b>!
        </p>
        <div className="row">
          <button className="btn" onClick={() => setName("React")}>
            React
          </button>
          <button className="btn" onClick={() => setName("Vite")}>
            Vite
          </button>
          <button className="btn" onClick={() => setName("JavaScript")}>
            JavaScript
          </button>
        </div>
      </div>

      {/*
       반영에 대한 생각할 점
      1. 어떻게 변경할 것인가?
      2. 어느 시점에서 변경될 것인가? -> 이벤트 (변경될 상태값) 
      */}
      <div
        className="box"
        style={{
          background: isDark ? "#23272f" : "#fff",
          color: isDark ? "#fff" : "inherit",
        }}
      >
        <h3>불리언 state — 토글</h3>
        <p>현재 모드: {isDark ? "🌙 다크" : "☀️ 라이트"}</p>
        <button className="btn" onClick={() => setIsDark(!isDark)}>
          모드 전환
        </button>
      </div>
    </div>
  );
}
