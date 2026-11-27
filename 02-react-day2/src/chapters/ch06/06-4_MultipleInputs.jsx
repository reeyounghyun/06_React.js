import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  intro: "",
};
/*  여러 (state)값을 사용할때, 객체형태로 하나의 state로 관리해야 한다. */

export default function MultipleInputs() {
  const [form, setForm] = useState(initialForm); // state 1개

  // 모든 입력창이 하나의 핸들러를 사용한다.
  function handleChange(e) {
    const { name, value } = e.target; // 입력칸의 name 속성과 입력값
    setForm({ ...form, [name]: value }); // 기존 값 복사 + 바뀐 칸만 덮어쓰기
  }

  return (
    <div className="row" style={{ alignItems: "flex-start" }}>
      <div className="box stack" style={{ flex: 1 }}>
        <h3>회원 정보</h3>
        <input
          className="input"
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={handleChange}
        />{" "}
        {/* 함수 하나로 모든 입력칸 처리 */}
        <input
          className="input"
          name="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="input"
          name="phone"
          placeholder="전화번호"
          value={form.phone}
          onChange={handleChange}
        />
        <textarea
          className="input"
          name="intro"
          rows={3}
          placeholder="자기소개"
          value={form.intro}
          onChange={handleChange}
        />
        <button className="btn" onClick={() => setForm(initialForm)}>
          모두 지우기
        </button>
      </div>

      <div className="box" style={{ flex: 1 }}>
        <h3>form state</h3>
        <div className="cmd">{JSON.stringify(form, null, 2)}</div>
      </div>
    </div>
  );
}
