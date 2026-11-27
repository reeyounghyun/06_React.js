/**
 * 함수형 컴포넌트 : JSX를 반환하는 JavaScript 함수
 * 1. 이름은 반드시 대문자로 시작(PascalCase)
 * 2. JSX를 반환 (안 그릴 때는 null 반환)
 * 3. 사용할 때는 태그처럼 사용 : <Welcome />
 */

function Welcome() {
  // JSX가 여러 줄이면 return ( ) 소괄호로 감싼다.
  // 소괄호가 없으면 return 뒤에서 줄이 끝난 것으로 보고 undefined를 반환하기 때문
  // ※ 태그가 여러 개면 소괄호와 별개로, 하나의 부모 태그(또는 <> </>)로 묶어야 한다.
  return (
    <h3>
      환영합니다! 🎉<a>안녕</a>
    </h3>
  );
}

const date = new Date().toLocaleDateString();

const Today = () => {
  return <p>오늘은 {date} 입니다.</p>;
};

function StudyTime() {
  const hours = 8;
  const days = 4;
  const total = hours * days;

  return (
    <p>
      하루 {hours}시간 × {days}일 = 총 <b>{total}시간</b>
    </p>
  );
}

function Nothing() {
  return null;
}

export default function FunctionComponent() {
  return (
    <div className="box">
      <Welcome />
      <Today />
      <StudyTime />
      <Nothing />
      <p className="hint">
        ⚠️ 컴포넌트 안에서 다른 컴포넌트를 "정의"하지 말고, 바깥(파일 최상단)에
        정의하자.
      </p>
    </div>
  );
}
