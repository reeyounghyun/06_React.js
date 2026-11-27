import { useState } from "react";
/**State : 컴포넌트가 스스로 기억하는 값, 데이터가 바뀌면화면이 다시 그려짐
 * -> 일반변수 같은 경우 값을 변경해도 리엑트가 모르기 때문에 => 랩핑을 해주면 알게됨
 *  화면을 그리지 않고, 컴포넌트 함수가 다시 실행되면 처음부터 시작된다.
 */

function VariableCounter() {
  let count = 0;

  function handleClick() {
    count = count + 1;
    console.log("일반 변수 count:", count);
  }

  return (
    <div className="box" style={{ flex: 1 }}>
      <h3 className="bad">✕ 일반 변수</h3>
      <p className="big-number">{count}</p>
      <button className="btn" onClick={handleClick}>
        +1
      </button>
      <p className="hint">화면은 그대로 0. Console을 열어 보자.</p>
    </div>
  );
}

function StateCounter() {
  const [count, setCount] = useState(0); // state
  // conut가 바뀌면 화면이 제 랜더링 진행함.

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="box" style={{ flex: 1 }}>
      <h3 className="good">○ State</h3>
      <p className="big-number">{count}</p>
      <button className="btn primary" onClick={handleClick}>
        +1
      </button>
      <p className="hint">setCount를 호출하면 화면이 다시 그려진다.</p>
    </div>
  );
}

export default function StateConcept() {
  return (
    <div className="row" style={{ alignItems: "stretch" }}>
      <VariableCounter />
      <StateCounter />
    </div>
  );
}
