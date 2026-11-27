import { useRef, useState } from "react";

/*
useRef의 두 번째 용도인 
 => 화면 요소(DOM)를 직접 잡아서 조종하기

스크롤을 이동, 텍스트를 선택, 동영상을 재생 => 리엑트와 화면을 연결할때 DOM에 접근이 필요하다 
그럴때 Ref에 연결해놓고 사용할 때가 있다

*/
export default function UseRefDom() {
  const inputRef = useRef(null); // 1. 빈 상자 만들기
  const listRef = useRef(null);
  const firstRef = useRef(null);

  const [keyword, setKeyword] = useState("");
  const [history, setHistory] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    if (!keyword.trim()) {
      inputRef.current.focus();
      return;
    }
    setHistory([keyword, ...history]);
    setKeyword("");
    inputRef.current.focus();
  }

  return (
    <div className="stack">
      <form className="box stack" onSubmit={handleSearch}>
        <h3>① 포커스 제어</h3>
        <div className="row">
          {/* ref={inputRef} : 이 <input>에 화면이 생시면 inputRef.current에 요소를 넣어줘 */}
          <input
            ref={inputRef} // 2. 입력창에 상자를 연결
            className="input"
            placeholder="검색어"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="btn primary">검색</button>
          {/*
          type = "button" : form 안의 버튼을 누를때마다 검색이 실행
          .foucus() : 브라우저 DOM API = 커서를 입력창으로 옮긴다.
           */}
          <button
            type="button"
            className="btn"
            onClick={() => inputRef.current.focus()} // 3, 상자에서 입력창을 꺼내서 조종
          >
            입력창 포커스
          </button>
          {/* select() 입력창 글자를 전부 블록설정한다(선택한다) */}
          <button
            type="button"
            className="btn"
            onClick={() => inputRef.current.select()}
          >
            전체 선택
          </button>
        </div>
        <p className="hint">최근 검색: {history.join(", ") || "-"}</p>
      </form>

      <div className="box stack">
        <h3>② 스크롤 이동</h3>
        <div className="row">
          <button
            className="btn"
            onClick={() =>
              firstRef.current.scrollIntoView({
                // 첫 번째 항목이 보이는 곳까지 스크롤
                behavior: "smooth",
                block: "nearest",
              })
            }
          >
            맨 위로
          </button>
          {/* 목표 요소를 잡고 그 요소가 보이도록 스크롤 */}

          <button
            className="btn"
            onClick={() =>
              listRef.current.scrollTo({
                // 목록의 전체 높이만큼 내려가서 맨 아래로
                top: listRef.current.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            맨 아래로
          </button>
          {/* scroll Height: 상자 안 내용 전체의 높이=> 해당 높이로 이동하게 된고, 그 위치는 맨 아래가 된다. */}
        </div>
        <ul
          ref={listRef}
          style={{
            height: 160,
            overflowY: "auto",
            margin: 0,
            border: "1px solid var(--line)",
            borderRadius: 8,
          }}
        >
          {Array.from({ length: 30 }, (_, i) => (
            <li
              key={i}
              ref={i === 0 ? firstRef : undefined}
              style={{ padding: "2px 0" }}
            >
              메시지 {i + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
