import { useState } from "react";

/* 대상 : 객체{} - 속성 하나만 바꾸기

 *객체의 프로퍼티가 변경되었을때 화면을 리랜더링 하려면,
 * 기존 객체의 내용을 꺼내서 새로운 객체를 만들어 set으로 변경해주어야 한다.
 * => 주소값을 변경해야 한다.

setItems() 함수를 호출해서 state에 값을 넣는 것을 줄여서 부르는 말
 */

const initialUser = {
  name: "김리액트",
  age: 27,
  address: {
    city: "서울",
    zip: "04524",
  },
};

export default function ObjectState() {
  const [user, setUser] = useState(initialUser);

  function handleBirthday() {
    setUser({ ...user, age: user.age + 1 });
  }

  function handleNameChange(e) {
    setUser({ ...user, name: e.target.value });
  }

  /*
   * 바깥 객체를 복사한다 => 바깥에 있어 안쪽에 있는 객체까지 모두 통으로 복사
   * 안쪽 객체를 복사한다 -> 가지고 있는 객체만 복사한다
   *
   * 그래서
   * 바깥 객체에 있는것은 name, age, address 이고
   * 안쪽 객체에 들어있는 것은 address의 city, zip이다.
   */
  function handleMove() {
    setUser({
      ...user, // 바깥 객체 복사.
      address: {
        ...user.address, // 안쪽 객체 복사.
        city: user.address?.city === "서울" ? "부산" : "서울", // 바꿀 것만 덮어쓰기 한다.
        /*
        city: user.address?.city === "서울" ?  => 조건 (지금 city가 서울인가?)
        "부산" : "서울",
          참   : 거짓
        → 서울이면 부산으로, 부산이면 서울로 변경 (누를 때마다 번갈아 바뀜)
        */
      },
    });
  }

  function handleWrong() {
    setUser({ name: "이름만 남음" });
    /*
     * 기존에 있던 age, address가 사라짐.
     * 이유 : set을 하면 객체 전체가 통째로 교체되므로, { ...user }로 나머지 속성을 먼저 복사한 뒤 바꿀 속성만 덮어써야 한다.
     * 그래서 원래 같으면
     * setUser({ name: "이름만 남음", age: 27, address: { city: "서울", zip: "04524" } }); 이런 식으로 작성하는게 맞는데
     * 매번 이렇게 작성하면 번거롭기 떄문에 { ...user, name: "새이름" } 이런식으로 사용한다
     */
  }

  return (
    <div className="row" style={{ alignItems: "flex-start" }}>
      <div className="box stack" style={{ flex: 1 }}>
        <h3>user 객체 바꾸기</h3>
        <label className="row">
          이름
          <input
            className="input"
            value={user.name}
            onChange={handleNameChange}
          />
        </label>
        <div className="row">
          <button className="btn" onClick={handleBirthday}>
            🎂 나이 +1
          </button>
          <button className="btn" onClick={handleMove}>
            🚚 이사 (중첩 객체)
          </button>
          <button className="btn" onClick={handleWrong}>
            ✕ 잘못된 업데이트
          </button>
          <button className="btn" onClick={() => setUser(initialUser)}>
            처음으로
          </button>
        </div>
        <p>
          {user.name} · {user.age ?? "?"}세 · {user.address?.city ?? "?"}
        </p>
      </div>

      <div className="box" style={{ flex: 1 }}>
        <h3>현재 state</h3>
        <div className="cmd">{JSON.stringify(user, null, 2)}</div>
      </div>
    </div>
  );
}
