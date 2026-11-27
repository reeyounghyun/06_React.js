import { useState } from "react";

// 단방향으로 데이터가 흐른다
// 데이터는 항상 부모 -> 아래로만 흐른다.
//
// [부모] props
//   - 해당 props를 수정할 수 있는 함수를 만들고
//   - 그 함수를 자식에게 전달
//      ↓
// [자식] props
//   - 읽기만 가능 (직접 수정 X)
//   - 바꾸고 싶으면 부모에게 받은 함수를 호출

function Display({ value }) {
  return <p className="big-number">{value}</p>;
}

// 자식 컴포넌트 : 수정할 수 있는 함수 onIncrease, onReset
function Controls({ onIncrease, onReset }) {
  return (
    <div className="row">
      <button className="btn primary" onClick={onIncrease}>
        +1 (부모에게 요청)
      </button>
      <button className="btn" onClick={onReset}>
        초기화
      </button>
    </div>
  );
}

// 부모 컴포넌트
export default function OneWayFlow() {
  const [score, setScore] = useState(0);

  return (
    <div className="box">
      <h3>부모(OneWayFlow)가 score를 가지고 있다</h3>

      {/* 자식 컴포넌트 : score를 읽기만 함 */}
      <Display value={score} />

      {/* 부모가 수정 함수를 만들어 자식에게 전달함 */}
      <Controls
        onIncrease={() => setScore(score + 1)}
        onReset={() => setScore(0)}
      />
      <p className="hint" style={{ marginTop: 8 }}>
        Controls는 score를 모른다. 받은 함수만 호출할 뿐이다. 실제 변경은 항상
        부모에서 일어난다.
      </p>
    </div>
  );
}
