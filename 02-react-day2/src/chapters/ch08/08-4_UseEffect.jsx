import { useEffect, useState } from "react";
import EffectLog from "../../components/EffectLog";
import { logEffect } from "../../components/effectLogger";

/* 
useEffect란?
- 의미 : "화면을 다 그린 뒤에, React 바깥 세상에 뭔가를 해 주는 Hook" ===  컴포넌트를 '리액트' 바깥의 시스템과 동기화하는 Hook
- React 안쪽: state, 화면(JSX)
- React 바깥: 브라우저 탭 제목, 타이머, 창 크기 이벤트, localStorage, 서버

  4_UseEffect(() => {
    // 화면이 그려진 뒤에 실행할 코드를 작성한다 이 위치에 작성한다.

    return (collback) => {.... 정리할 코드가 들어갈 자리}
  }, [의존성: 배열형태로 작성해준다]);

  화면이 그려진 이후에 동작한다.
*/
export default function UseEffect() {
  const [count, setCount] = useState(0);

  console.log(`① 렌더링 (count = ${count})`);

  // 화면을 그린다음, count가 지난번과 달라졌을 때 함수를 실행 한다. (처음 렌더링도 마찬가지 이다.)

  // 의존성 배열에 들어가는 내용?
  // [count] : 해당+ [카운트]가 실행될 때마다 변경된다.
  // [] 아무것도 안넣을수 있음 : 처음 한 번만 동작한다.
  //아무것도 작성하지 않을때 : 렌더링이 될 때마다.
  useEffect(() => {
    logEffect(`② effect 실행: document.title = "클릭 ${count}회"`);
    document.title = `클릭 ${count}회`;
  }, [count]);

  return (
    <div className="stack">
      <div className="box stack">
        <h3>브라우저 탭 제목을 count와 동기화</h3>
        <p className="big-number">{count}</p>
        <div className="row">
          <button className="btn primary" onClick={() => setCount(count + 1)}>
            클릭
          </button>
          <span className="hint">👆 누르고 브라우저 탭 제목을 보세요</span>
        </div>
      </div>
      <EffectLog />
      <div className="note">
        <h3>effect에 들어갈 코드 vs 들어가면 안 될 코드</h3>
        <ul>
          <li>
            ○ 렌더링 결과를 바깥 세계에 반영: 탭 제목, 타이머 시작, 이벤트 구독,
            데이터 요청
          </li>
          <li>
            ✕ 다른 state로 계산할 수 있는 값 만들기 → 그냥 계산한다 (08-7)
          </li>
          <li>✕ 버튼 클릭에 대한 반응 → 이벤트 핸들러에 쓴다 (08-7)</li>
        </ul>
      </div>
    </div>
  );
}
