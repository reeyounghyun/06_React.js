import { useState } from "react";

const fruits = ["사과", "바나나", "포도", "복숭아", "파인애플", "바나나우유"];

function SearchBox() {
  const [keyword, setKeyword] = useState("");
  return (
    <div className="box" style={{ flex: 1 }}>
      <h3>SearchBox (keyword state 보유)</h3>
      <input
        className="input"
        placeholder="과일 검색"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <p className="hint">입력값: {keyword || "-"}</p>
    </div>
  );
}

function ResultList() {
  return (
    <div className="box" style={{ flex: 1 }}>
      <h3>ResultList (keyword를 모름)</h3>
      <ul style={{ margin: 0 }}>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default function OneWayFlow() {
  return (
    <div className="stack">
      <div className="row" style={{ alignItems: "stretch" }}>
        <SearchBox />
        <ResultList />
        {/* 
        1번 SearchBox : 검색어 입력 (keyword state를 자기 안에만 가지고 있음)
        2번 ResultList : 결과 목록을 보여줄 곳 (keyword를 모름)
          → 형제끼리는 값을 직접 주고받을 수 없어서, 입력해도 목록이 안 바뀐다 (단방향 흐름)
          → 해결: keyword state를 공통 부모(OneWayFlow)로 끌어올린다 (참고: 07-2) 
        */}
      </div>
      <div className="note">
        <h3>문제</h3>
        <ul>
          <li>검색어를 입력해도 오른쪽 목록이 걸러지지 않는다</li>
          <li>
            React에는 자식 → 부모, 형제 → 형제로 값을 "직접" 보내는 통로가 없다
          </li>
          <li>
            해결: 두 컴포넌트가 함께 쓰는 state를 <b>공통 부모로 끌어올린다</b>{" "}
            → 07-2
          </li>
        </ul>
      </div>
    </div>
  );
}
