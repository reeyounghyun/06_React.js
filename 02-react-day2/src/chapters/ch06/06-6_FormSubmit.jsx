import { useState } from "react";

export default function FormSubmit() {
  const [form, setForm] = useState({ title: "", content: "" });
  const [posts, setPosts] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    // form의 기본동작 때문에 등록_submin 되었을 떄 해당 페이지를 새로고침한다.
    // 새로고침이 되면 리랜더링 되면서 상태값이 초기화가 되어 막아주어야 한다.
    e.preventDefault();
    if (!form.title.trim()) return;
    setPosts([{ id: Date.now(), ...form }, ...posts]);
    setForm({ title: "", content: "" }); // 저장을 하면 안에 내용을 초기화 시켜준다.
  }

  return (
    <div className="row" style={{ alignItems: "flex-start" }}>
      <form className="box stack" style={{ flex: 1 }} onSubmit={handleSubmit}>
        <h3>방명록 쓰기</h3>
        <input
          className="input"
          name="title"
          placeholder="제목 (Enter로도 제출)"
          value={form.title}
          onChange={handleChange}
        />
        <textarea
          className="input"
          name="content"
          rows={3}
          placeholder="내용"
          value={form.content}
          onChange={handleChange}
        />
        <div className="row">
          <button className="btn primary">등록 (submit)</button>
          <button
            // type="button"이 없으면, 이 버튼도 등록_submin 버튼이 된다.
            type="button"
            className="btn"
            onClick={() => setForm({ title: "", content: "" })}
          >
            지우기 (button)
          </button>
        </div>
      </form>

      <div className="box" style={{ flex: 1 }}>
        <h3>등록된 글 {posts.length}개</h3>
        {posts.length === 0 && <p className="hint">아직 글이 없습니다.</p>}
        {posts.map((post) => (
          <div
            key={post.id}
            style={{ borderTop: "1px solid var(--line)", padding: "8px 0" }}
          >
            <b>{post.title}</b>
            <p className="hint">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
