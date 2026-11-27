import { useEffect, useState } from "react";

export default function Playground() {
  // 상태값 만들기
  const [text, setText] = useState("불러오는중...");
  
  
  // 맨처음에 화면이 그려질 때 동작함
  // 의존성이 빈배열({}) 이면, 화면이 처음 나타날때 한 번만 동작한다.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setText(JSON.stringify(data, null, 2)));
  }, []);
  return (
    <div>
      <h3>JSONPlaceHolder 응답</h3>
      <pre>{text}</pre>
    </div>
  );
}
