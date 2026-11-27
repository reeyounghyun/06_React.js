import Avatar from "./components/Avatar";
import { LikeButton, ShareButton } from "./components/Buttons";

/**
 * 한 파일이 길어지면 화면을 '역할' 단위로 잘라 파일을 분리한다.
 * default export : import할 때 받을 이름을 마음대로 변경해서 가져올 수 있음
 * default export 가지고 올 때 -> import Ava from './components/Avatar'
 * default export는 중괄호 없이 가져오며, 이름을 마음대로 바꿀 수 있다. (예: import Ava from ...)
 *
 *
 * named export   : import할 때 함수의 이름을 그대로 가져와야 함
 *                -> import { LikeButton, ShareButton } from './components/Buttons'
 */

function PostHeader() {
  return (
    <div className="row" style={{ gap: 12 }}>
      <Avatar />
      <div>
        <b>김리액트</b>
        <p className="hint">3분 전</p>
      </div>
    </div>
  );
}

function Post() {
  return (
    <div className="box" style={{ maxWidth: 420 }}>
      <PostHeader />
      <p style={{ margin: "12px 0" }}>오늘 첫 React 컴포넌트를 만들었다! 🎉</p>
      <div className="row">
        <LikeButton />
        <ShareButton />
      </div>
    </div>
  );
}

export default function ComponentReuse() {
  return (
    <div className="stack">
      <Post />
      <Post />
      <Post />
      <p className="hint">
        문제: 두 게시물의 내용이 똑같다. → 컴포넌트마다 다른 데이터를 넣으려면{" "}
        <b>Props</b>가 필요하다 (03장).
      </p>
    </div>
  );
}
