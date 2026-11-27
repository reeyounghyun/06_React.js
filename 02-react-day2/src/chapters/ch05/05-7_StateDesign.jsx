import { useState } from "react";

/* state를 몇 개, 어떤 모양으로 만들지 정하는 방법(상태 설계) */

export default function StateDesign() {
  const [message, setMessage] = useState(""); // 입력한 글
  const [status, setStatus] = useState("typing"); // 지금 단계

  const isSending = status === "sending"; // 전송 중인가?
  const canSend = message.trim().length > 0 && !isSending; // 보낼 수 있나?

  function handleSend() {
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  }

  if (status === "sent") {
    return (
      <div className="box">
        <h3>✅ 전송 완료!</h3>
        <p>&quot;{message}&quot;</p>
        <button
          className="btn"
          style={{ marginTop: 8 }}
          onClick={() => {
            setMessage("");
            setStatus("typing");
          }}
        >
          새 메시지 쓰기
        </button>
      </div>
    );
  }

  return (
    <div className="stack">
      <div className="box stack">
        <h3>메시지 보내기</h3>
        <textarea
          className="input"
          rows={3}
          placeholder="메시지를 입력하세요"
          value={message}
          disabled={isSending}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="row">
          <button
            className="btn primary"
            disabled={!canSend}
            onClick={handleSend}
          >
            {isSending ? "전송 중…" : "보내기"}
          </button>
          <span className="badge">status: {status}</span>
        </div>
      </div>

      <div className="note">
        <h3>상태 설계 체크리스트</h3>
        <ul>
          <li>
            이 값은 시간이 지나며 바뀌는가? → 안 바뀌면 state가 아니다 (상수)
          </li>{" "}
          {/* 중첩 객체에 내용을 변경할떄, 내부 객체도 ... 스프레드해서 펼쳐서 변경해줘야 하는데 => 배열,객체의 깊이를 너무 깊게 가져가지말자 -> 상태를 만들떈 주소값을 변경해야하기 떄문에 관리하기가 어려워 진다. */}
          <li>부모에게서 props로 받는가? → state가 아니다</li>{" "}
          {/*  props 전달받은것은 내 컴포넌트에서 상태로 놓을 필요가 없다 */}
          <li>다른 state나 props로 계산할 수 있는가? → state가 아니다</li>
          <li>남은 것만 state로 만든다. 그리고 "가장 적게" 만든다</li>
        </ul>
      </div>
    </div>
  );
}

/*
 *체크리스트: state로 만들지 판단하는 순서
 *1. 시간이 지나도 안 바뀌는 값 → 상수로 둔다
 *2. 부모에게서 props로 받는 값 → props를 그대로 쓴다
 *3. 다른 값으로 계산할 수 있는 값 → 계산한다 (isSending, canSend)
 *4. 남은 것만 state로 만든다 → 이 파일에서는 message, status 두 개
 */
