import { useState } from "react";

/*
 * 배열과 객체
- 같은 상자 = 같은 주소 → React가 바뀐 걸 모름 → 화면 그대로
- 새 상자 = 새 주소 → React가 알아챔 → 화면 다시 그림

 * Object.is (이전값 새값을 비교)
 * items -> 배열
 * items -: 주소값은 (items.add('바나나') -> setItems(items)) => 주소값이 같다는것은 변경은 일어나지만, 화면에는 리랜더링이 안되는 현상이 발생한다.
 */

/* 왼쪽 */
function MutateList() {
  const [items, setItems] = useState(["🍎"]); // 1. state에 저장된 기존 값

  /*
   * 2. push는 값(내용)은 변경되지만 주소는 변경되지 않는다 => 이말은 React는 새 주소인지 모르고 있고, 그래서 화면을 다시 그리지 않는다
   * 결론 : 화면에는 업데이트 전 모습이 그대로 남아 있게 된다.
   */
  function handleAdd() {
    items.push("🍌");
    setItems(items); // 같은 배열(주소)을 넘김 → React가 변경 없다고 판단
    console.log("items 실제 내용:", items);
  }

  return (
    <div className="box" style={{ flex: 1 }}>
      <h3 className="bad">✕ push 후 같은 배열을 set</h3>
      <p style={{ fontSize: 28, minHeight: 44 }}>{items.join(" ")}</p>
      <button className="btn" onClick={handleAdd}>
        바나나 추가
      </button>
      <p className="hint">
        화면이 안 바뀐다. Console에는 배열이 길어지는 게 보인다.
      </p>
    </div>
  );
}

/* 오른쪽 */
function ImmutableList() {
  const [items, setItems] = useState(["🍎"]); // 1. 왼쪽 카드와 동일하게, state에 저장된 기존값을 저장

  /*
   * 2. [...items, 새값]으로 새로운 배열을 만들면 주소가 변경되고, React가 이를 인지해서 리렌더링 된다.
   */
  function handleAdd() {
    setItems([...items, "🍌"]); // 기존 배열을 스프레드("...items")하고, 새로운거 추가한 새로운 배열을 만들어 변경해줌.
  }

  return (
    <div className="box" style={{ flex: 1 }}>
      <h3 className="good">○ 새 배열을 만들어 set</h3>
      <p style={{ fontSize: 28, minHeight: 44 }}>{items.join(" ")}</p>
      <button className="btn primary" onClick={handleAdd}>
        바나나 추가
      </button>
      <p className="hint">
        [...items, &apos;🍌&apos;] → 기존 배열은 그대로, 새 배열 생성
      </p>
    </div>
  );
}

export default function Immutability() {
  const a = [1, 2];
  const b = a;
  const c = [...a];

  return (
    <div className="stack">
      <div className="row" style={{ alignItems: "stretch" }}>
        <MutateList /> {/* push 후 같은 배열을 setItems을 넘긴다. */}
        <ImmutableList /> {/* 새 배열을 만들어 setItems을 넘긴다. */}
      </div>

      <div className="box">
        <h3>참조(주소) 비교 실험</h3>
        <div className="cmd">
          {`const a = [1, 2]
            const b = a        // 같은 배열을 가리킨다
            const c = [...a]   // 내용은 같지만 새 배열

            Object.is(a, b)  →  ${Object.is(a, b)}
            Object.is(a, c)  →  ${Object.is(a, c)}
          `}
        </div>
      </div>

      <div className="note">
        <h3>왜 불변성을 지킬까?</h3>
        <ul>
          <li>React가 변경을 빠르게 감지한다 (주소만 비교하면 끝)</li>
          <li>이전 상태가 보존된다 → 되돌리기(undo), 비교, 디버깅이 쉽다</li>
          <li>
            AI가 만든 코드에서 "화면이 안 바뀌는" 버그의 대표 원인이다 → 가장
            먼저 의심할 곳
          </li>
        </ul>
      </div>
    </div>
  );
}
