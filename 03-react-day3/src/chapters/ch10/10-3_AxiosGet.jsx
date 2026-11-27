import { useState } from "react";
import axios from "axios";

/**
 * Axios = 서버 요청을 편하게 해주는 라이브러리
 * 설치 : npm install axios
 *
 * axios.get('/posts', { params: { userId: 1 } }) -> /posts?userId=1
 *           ───────   ──────────────────────────
 *           첫 번째:   두 번째: 요청 설정(옵션) 객체
 *          요청 주소
 *
 * fetch와 axios의 차이점?
 * **요청이 실패했을 때 에러를 처리하는 방식의 차이**
 * fetch: 404 같은 실패 응답이 와도 에러가 나지 않는다 (if (!res.ok) throw new Error(...))
 * axios: 상태 코드가 2xx(200~299)가 아니면 자동으로 에러를 던진다
 *
 * **응답을 JSON에서 JS 객체로 변환하는 방식의 차이**
 * fetch: const data = await res.json()으로 직접 변환해야 한다
 * axios: 응답을 자동으로 JSON -> JS 객체로 변환해 준다
 */
const BASE_URL = "https://jsonplaceholder.typicode.com";

export default function AxiosGet() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  async function handleLoadUser() {
    try {
      const response = await axios.get(`${BASE_URL}/users/1`);
      console.log("response 전체:", response);
      setUser(response.data);
      setMessage(`✅ ${response.status} — /users/1`);
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    }
  }

  async function handleLoadPosts() {
    try {
      const response = await axios.get(`${BASE_URL}/posts`, {
        params: { userId: 1 },
      });
      setPosts(response.data);
      setMessage(
        `✅ ${response.status} — /posts?userId=1 (${response.data.length}개)`,
      );
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    }
  }

  return (
    <div className="stack">
      <div className="box stack">
        <div className="row">
          <button className="btn primary" onClick={handleLoadUser}>
            ① 1번 사용자 불러오기
          </button>
          <button className="btn primary" onClick={handleLoadPosts}>
            ② 1번 사용자의 글 목록 (params)
          </button>
        </div>
        {message && <p className="hint">{message}</p>}
      </div>

      {user && (
        <div className="box">
          <h3>👤 {user.name}</h3>
          <p>
            📧 {user.email} · 🏢 {user.company.name} · 🌐 {user.website}
          </p>
          <p className="hint">
            response.data 는 이미 객체다 → user.company.name 처럼 바로 꺼내 쓴다
          </p>
        </div>
      )}

      {posts.length > 0 && (
        <div className="box">
          <h3>📝 글 목록 ({posts.length}개)</h3>
          <ol>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ol>
        </div>
      )}

      <div className="note">
        <h3>👉 확인해 보세요</h3>
        <ul>
          <li>
            F12 콘솔: response 객체를 펼쳐 보면 data · status · headers · config
            가 들어 있다. 우리가 쓰는 건 거의 data뿐
          </li>
          <li>
            Network 탭: ②의 Request URL 끝에 ?userId=1 이 자동으로 붙어 있다
          </li>
        </ul>
      </div>
    </div>
  );
}
