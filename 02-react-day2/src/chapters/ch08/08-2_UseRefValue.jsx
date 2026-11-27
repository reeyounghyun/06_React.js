import { useEffect, useRef, useState } from "react";

/*
useRef의 요점 => 값은 기억하는데, 화면은 안 바꾸고 싶을 때

useRef의 특징
1. 다시 그려도 값이 사라지지 않는다
2. 값을 바꿔도 화면을 다시 그리지 않는다.
  에시) 타이머id, 이전 값처럼 화면에 보여 줄 필요는 없지만 기억해야 하는값

useState와 useRef 차이점?
 - useState는 값이 변경되면 화면을 다시 그렸지만, useRef는 화면을 다시 그리지 않는다.
 *
 * 일반 변수 
 * - 리렌더링 하면 초기화 된다.
 *  => 값을 바꿔도 화면 변화가 없다.
 * 
 * useRef 
 * - 리렌더링 해도 값이 유지된다.
 *  => 값을 바꿔도 화면 변화가 없다.  예시) 타이머 id, 이전 값, 외부 객체를 보관할 때 사용한다.
 * 
 * useState 
 * - 리렌더링 해도 값이 유지된다. 
 * => 값을 바꿔도 화면 변화가 생긴다.
 */
function Compare() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0); // 일반 변수에 Ref를 붙여주는 형태 -> 값을 읽고 쓸 때는 변수명.current 로 사용한다.
  let varCount = 0;
  const [message, setMessage] = useState(""); // 결과를 화면에 보여주기 위한 state (set하면 리렌더링이 발생한다)

  return (
    <div className="box stack">
      <h3>① 일반 변수 vs useRef vs useState</h3>
      <div className="row">
        <button
          className="btn"
          onClick={() => {
            varCount += 1;
            setMessage(`일반 변수 = ${varCount}`);
          }}
        >
          변수 +1
        </button>
        <button
          className="btn"
          onClick={() => {
            refCount.current += 1;
            setMessage(
              `ref.current = ${refCount.current} (화면은 그대로였지만 값은 기억하고 있다)`,
            );
          }}
        >
          ref +1
        </button>
        <button
          className="btn primary"
          onClick={() => setStateCount(stateCount + 1)}
        >
          state +1 (리렌더링)
        </button>
      </div>
      <p>
        state: <b>{stateCount}</b>
      </p>
      <p className="hint">
        {message || "버튼을 눌러 보세요. 변수는 매번 1, ref는 계속 증가한다."}
      </p>
    </div>
  );
}

function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null); // 화면에 안보이지만 기억해야 스탑워치를 조작 가능하다

  function handleStart() {
    clearInterval(intervalRef.current);
    setStartTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => setNow(Date.now()), 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current); // 스탑워치의 id가 필요하다
    intervalRef.current = null;
  }

  useEffect(() => () => clearInterval(intervalRef.current), []); // 컴포넌트가 사라질때 타이머 없애기 (메모리상에 없애주기)

  const seconds = startTime && now ? (now - startTime) / 1000 : 0;

  return (
    <div className="box stack">
      <h3>② 스톱워치 — setInterval id를 useRef에 보관</h3>
      <p className="big-number">{seconds.toFixed(2)}초</p>
      <div className="row">
        <button className="btn primary" onClick={handleStart}>
          시작
        </button>
        <button className="btn" onClick={handleStop}>
          정지
        </button>
      </div>
      <p className="hint">
        id를 state에 두면 쓸데없는 리렌더링이, 일반 변수에 두면 다음 렌더링 때
        잃어버린다 → ref가 정답
      </p>
    </div>
  );
}

export default function UseRefValue() {
  return (
    <div className="stack">
      <Compare />
      <Stopwatch />
    </div>
  );
}
