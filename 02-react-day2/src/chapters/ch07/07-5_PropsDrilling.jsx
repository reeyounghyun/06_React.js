import { useState } from "react";

/* Props Drilling(프롭스 드릴링) =>  07-2에서 배운 state 끌어올리기를 하다 보면 생기는 문제점

- state를 위로 끌어올리다보면 깊은곳의 자식에게 값을 전달하기 위해 중간 컴포넌트들이
- props를 계속 받아서 넘기는 문제가 발생한다
 
문제점
1. 중간 컴포넌트들에 Props에 의존하여, 재사용이 어려워 진다
2. Props가 변경되면 모든 컴포넌트 수정이 필요해진다
3. 데이터가 어디서 오는지 찾기 어려워 진다.

해결방법 
1. context API + useContext : 공용 보관함 같은거임.
3. 전역 상태 관리 (Zustand, Redux 등) : 상태를 컴포넌트 밖 한 곳(store)에 두고, 필요한 컴포넌트가 중간 props 전달 없이 바로 꺼내 쓰고 변경한다.
*/

function Tag({ children }) {
  return (
    <span
      className="badge"
      style={{ marginLeft: 6, background: "#fff1f0", color: "var(--danger)" }}
    >
      {children}
    </span>
  );
}

function Layout({ user, theme, onLogout }) {
  return (
    <div className="box" style={{ borderStyle: "dashed" }}>
      <b>Layout</b>
      <Tag>user, theme, onLogout 전달만</Tag>
      <div style={{ marginTop: 12 }}>
        <Sidebar user={user} theme={theme} onLogout={onLogout} />
      </div>
    </div>
  );
}

function Sidebar({ user, theme, onLogout }) {
  return (
    <div className="box" style={{ borderStyle: "dashed" }}>
      <b>Sidebar</b>
      <Tag>user, theme, onLogout 전달만</Tag>
      <div style={{ marginTop: 12 }}>
        <UserMenu user={user} theme={theme} onLogout={onLogout} />
      </div>
    </div>
  );
}

function UserMenu({ user, theme, onLogout }) {
  const dark = theme === "dark";
  return (
    <div
      className="box row"
      style={{
        justifyContent: "space-between",
        background: dark ? "#23272f" : "#fff",
        color: dark ? "#fff" : undefined,
      }}
    >
      <span>
        <b>UserMenu</b> <span className="badge">실제로 사용</span> &nbsp; 👤{" "}
        {user ? user.name : "로그인 필요"}
      </span>
      {user && (
        <button className="btn" onClick={onLogout}>
          로그아웃
        </button>
      )}
    </div>
  );
}

export default function PropsDrilling() {
  const [user, setUser] = useState({ name: "김리액트" });
  const [theme, setTheme] = useState("light");

  return (
    <div className="stack">
      <div className="box row">
        <b>App (state 보유)</b>
        <button
          className="btn"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          테마: {theme}
        </button>
        <button
          className="btn"
          onClick={() => setUser({ name: "김리액트" })}
          disabled={!!user}
        >
          로그인
        </button>
      </div>
      <Layout user={user} theme={theme} onLogout={() => setUser(null)} />
      <p className="hint">
        UserMenu 하나를 위해 Layout, Sidebar가 props 3개를 받아 넘기고 있다.
        단계가 10개라면? → 3일차 Context API
      </p>
    </div>
  );
}
