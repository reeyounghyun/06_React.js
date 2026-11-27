import { useState } from "react";

/* 제어 컴포넌트
 * - 입력창의 값은 Reat State가 '제어'하는 방식이다. => 하나의 패턴이다.
 * - 문법 : value + onChange 조합을 의미한다. => onChange없이 value만 주면 변경이 되지않는다.
 * */

{
  /* 
  제어와 비제어 차이점?
  제어: 입력한 값을 React가 state에 적어 두고 있어서, 마음대로 수정할 수 있다.
  비제어: 입력한 값은 입력창(브라우저)이 들고 있고 React는 모르고 있다가, 필요할 때(제출할 때) "지금 값이 뭐야?" 하고 물어본다.

  value + onChange : 제어 컴포넌트 (쩡상)
  value + x : 입력려기 안됨
  x +  onChange : 비제어 컴포넌트 (입력은 되고, 칠 때마다 알람만 받음)
  x + x : 비제어 컴포넌트
  */
}

export default function Controlled() {
  /*
   * 값마다 state를 따로 만들 때
   * 특징: // 입력칸이 늘어날 때마다 state와 함수가 계속 늘어남
   */
  const [phone, setPhone] = useState(""); // 전화번호용 state
  const [nickname, setNickname] = useState(""); // 닉네임용 state

  function handlePhoneChange(e) {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
    let formatted = digits;
    if (digits.length > 3 && digits.length <= 7) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`; //하이픈 추가
    } else if (digits.length > 7) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`; // 길이에 따라서, 마지막에 하이픈 추가
    }
    setPhone(formatted); // 재랜더링 해줌
  }

  return (
    <div className="stack">
      <div className="box stack">
        <h3>입력값 가공: 숫자만 + 자동 하이픈</h3>
        <input
          className="input"
          placeholder="01012345678"
          value={phone}
          onChange={handlePhoneChange}
        />
        <p className="hint">
          문자를 입력해도 들어가지 않는다. state에 넣기 전에 걸러 내기 때문이다.
        </p>
      </div>

      <div className="box stack">
        <h3>코드로 값 바꾸기 + 글자 수 제한</h3>
        <input
          className="input"
          placeholder="닉네임 (최대 10자)"
          value={nickname}
          maxLength={10}
          onChange={(e) => setNickname(e.target.value)}
        />
        <div className="row">
          <button className="btn" onClick={() => setNickname("리액트왕")}>
            추천 닉네임 넣기
          </button>
          <button className="btn" onClick={() => setNickname("")}>
            지우기
          </button>
          <span className="hint">{nickname.length} / 10</span>
        </div>
      </div>

      <div className="box stack">
        <h3>✕ onChange 없이 value만 주면?</h3>
        <input className="input" value="입력이 안 됩니다" readOnly />
        <p className="hint">
          React가 Console에 경고를 띄운다. (여기서는 readOnly를 붙여 경고를 막아
          두었다)
        </p>
      </div>
    </div>
  );
}
