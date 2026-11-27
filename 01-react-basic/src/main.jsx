import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./bare.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // [StrictMode]
  //   - 개발 모드에서만 동작하는 코드 검사 도구
  //   - 잠재적인 문제를 찾기 위해 컴포넌트를 '두 번' 렌더링함
  //
  // [순수함수]
  //   - 똑같은 입력을 주면 똑같은 결과 (부수효과가 없어야 함)
  //
  // [컴포넌트]
  //   - 화면을 그리는 함수도 순수함수여야 함
  //   - 몇 번을 렌더링해도 같은 화면이 나와야 함
  <StrictMode>
    <App />
  </StrictMode>,
);

