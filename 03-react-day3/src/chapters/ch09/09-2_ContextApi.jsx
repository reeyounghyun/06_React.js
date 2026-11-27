import { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";
import { ThemeContext } from "./contexts/ThemeContext";
/* 
Context API로 props drilling 없이 값을 전달하는 방법
요약: 부모에 state 보유: user, theme가 있지만 자식(중간 컴포넌트)인 Layout, Sidebar는 아무것도 전달받지 않고 있음.
*/

/* 참고
 * props : 부모가 넘겨준 값 (함수의 매개변수)
 * return : 컴포넌트가 돌려주는 값 (화면 JSX)
 * */
function Tag({ children }) {
  return (
    <span className="badge" style={{ marginLeft: 6 }}>
      {children}
    </span>
  );
}

// Props가 필요 없는 중간 컴포넌트
function Layout() {
  return (
    <div className="box" style={{ borderStyle: "dashed" }}>
      <b>Layout</b>
      <Tag>props 없음 ✨</Tag>
      <div style={{ marginTop: 12 }}>
        <Sidebar />
      </div>
    </div>
  );
}

// Props가 필요 없는 중간 컴포넌트
function Sidebar() {
  return (
    <div className="box" style={{ borderStyle: "dashed" }}>
      <b>Sidebar</b>
      <Tag>props 없음 ✨</Tag>
      <div style={{ marginTop: 12 }}>
        <UserMenu />
      </div>
    </div>
  );
}

// 자식에서 꺼내서 사용한다
function UserMenu() {
  const { user, logout } = useContext(UserContext);
  const theme = useContext(ThemeContext);
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
        <b>UserMenu</b> <span className="badge">useContext로 꺼냄</span> &nbsp;
        👤 {user ? user.name : "로그인 필요"}
      </span>
      {user && (
        <button className="btn" onClick={logout}>
          로그아웃
        </button>
      )}
    </div>
  );
}

// 부모
export default function ContextApi() {
  const [user, setUser] = useState({ name: "김리액트" });
  const [theme, setTheme] = useState("light");

  /* 
  Provider로 전달할 값, 
  함수도 같이 보낼 수 있다 ==> 자식이 부모 상태를 변경할 수 있다 라는 의미이다.
   */
  const userValue = { user, logout: () => setUser(null) };

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
        {!user && (
          <button
            className="btn primary"
            onClick={() => setUser({ name: "김리액트" })}
          >
            로그인
          </button>
        )}
      </div>

      {/* Provider: 감싼 공간 안에선 useContext로 값을 꺼낼 수 있다 */}
      <UserContext value={userValue}>
        <ThemeContext value={theme}>
          <Layout />
        </ThemeContext>
      </UserContext>

      <div className="note">
        <h3>07-5와 비교해 보세요</h3>
        <ul>
          <li>
            07-5: App → Layout → Sidebar → UserMenu 로 user, theme, onLogout 을
            3번 전달
          </li>
          <li>
            09-2: Provider로 감싸기만 하면 UserMenu가 바로 꺼내 쓴다. 중간
            컴포넌트는 아무것도 모른다
          </li>
          <li>
            Provider 바깥에서 useContext를 쓰면 createContext(기본값)의 기본값이
            나온다
          </li>
        </ul>
      </div>
    </div>
  );
}
