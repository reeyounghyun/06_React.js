import { useState } from "react";

/**
 * 이벤트 핸들러
 * - 함수로 분리해서 이름을 붙임 : handle + 대상 + 동작
 * -> handleClick, handleNameChange, handleDeleteClick
 *
 * 핸들러도 함수이기 때문에 props로 전달할 수 있다.
 * - props 이름 : on + 동작 → onSelect, onDelete
 */

function FruitButton({ name, onSelect }) {
  return (
    // 주의할 점
    // 이벤트 핸들러는 "함수 자체"를 전달해야 한다.
    // onClick={onSelect(name)} 처럼 호출하면 렌더링할 때 바로 실행되어 결과만 전달된다.
    // → 인자를 넘겨야 할 때는 화살표 함수로 감싼다: onClick={() => onSelect(name)}
    <button className="btn" onClick={() => onSelect(name)}>
      {name}
    </button>
  );
}

export default function EventHandler() {
  const [selected, setSelected] = useState("");
  const [log, setLog] = useState("");

  function handleSelect(fruit) {
    setSelected(fruit);
  }

  function handleLinkClick(e) {
    e.preventDefault(); // 태그의 기본 동작(링크 이동) 막기
    setLog("링크 기본 동작(이동)을 막았다");
  }

  function handleParentClick() {
    setLog("부모 상자가 클릭됨 (버블링)");
  }

  /*
   * 버블링 : 자식을 클릭하면 이벤트가 부모에게도 전달되는 현상
   * - 부모 상자를 클릭하면 → 부모 이벤트만 발생
   * - 자식 버튼을 클릭하면 → 자식 + 부모 이벤트가 모두 발생
   * 그래서 e.stopPropagation()으로 전파를 막아 자식 버튼 이벤트만 발생하도록 한다.
   */
  function handleChildClick(e) {
    e.stopPropagation();
    setLog("자식 버튼만 클릭됨 (전파 중단)");
  }

  return (
    <div className="stack">
      <div className="box">
        <h3>인자 넘기기 + 핸들러를 props로 전달</h3>
        <div className="row">
          <FruitButton name="🍎 사과" onSelect={handleSelect} />
          <FruitButton name="🍌 바나나" onSelect={handleSelect} />
          <FruitButton name="🍇 포도" onSelect={handleSelect} />
        </div>
        <p style={{ marginTop: 8 }}>선택: {selected || "없음"}</p>
      </div>

      <div className="box">
        <h3>e.preventDefault()</h3>
        <a href="https://react.dev" onClick={handleLinkClick}>
          react.dev로 이동하는 링크 (클릭해도 이동하지 않음)
        </a>
      </div>

      <div
        className="box"
        onClick={handleParentClick}
        style={{ cursor: "pointer" }}
      >
        <h3>
          e.stopPropagation() — 상자(부모)를 클릭해 보고, 버튼(자식)도 클릭해
          보자
        </h3>
        <button className="btn primary" onClick={handleChildClick}>
          자식 버튼
        </button>
      </div>

      <p>📋 로그: {log || "-"}</p>
    </div>
  );
}
