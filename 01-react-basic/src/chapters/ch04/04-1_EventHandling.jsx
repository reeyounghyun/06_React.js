import { useState } from "react";

/* HTML : <button onclick="handleClick()"> => 소문자, 문자열
React: <button onClick={handleClick}> => camelCase 함수 그자체를 전달한다. 

onClick : 클릭이벤트
onChange : 입력값 변경
onSubmit : 폼 제출
onKeyDown : 키보드 누름
onMouseEnter / onMouseLeave : 마우스 올림 / 벗어남
onFocus / onBlur : 포커스
*/
export default function EventHandling() {
  const [message, setMessage] = useState("아직 아무 일도 없었다");
  const [text, setText] = useState("");
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="stack">
      <div className="box">
        <h3>onClick</h3>
        <button
          className="btn primary"
          onClick={() => setMessage("버튼을 클릭했다!")}
        >
          클릭
        </button>
        <p style={{ marginTop: 8 }}>📢 {message}</p>
      </div>

      <div className="box">
        <h3>onChange + 이벤트 객체(e)</h3>
        {/*
        onChange : 값이 변경되면 탐지 (input, select, textarea)
        */}
        <input
          className="input"
          placeholder="아무거나 입력해 보세요"
          onChange={(e) => setText(e.target.value)}
        />
        <p style={{ marginTop: 8 }}>
          입력값: <b>{text}</b> ({text.length}자)
        </p>
      </div>

      <div className="box">
        <h3>onKeyDown</h3>
        {/* onKeyDown: 키보드 입력 */}
        <input
          className="input"
          placeholder="Enter 키를 눌러 보세요"
          onKeyDown={(e) => {
            if (e.key === "Enter")
              setMessage(`Enter! 입력한 값: ${e.target.value}`);
          }}
        />
      </div>

      <div
        className="box"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{ background: isHover ? "var(--accent-soft)" : undefined }}
      >
        <h3>onMouseEnter / onMouseLeave</h3>
        <p>
          {isHover
            ? "🐭 마우스가 올라와 있다"
            : "이 상자 위에 마우스를 올려 보세요"}
        </p>
      </div>
    </div>
  );
}
