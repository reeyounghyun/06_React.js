import { useState } from "react";

/*
 * 코드 요약
 *  BadCart는 total을 cart와 연결되지 않은 숫자로 따로 저장된다, 그래서 cart가 변경되어도 total은 자동으로 값이 변경되지 않는다.
 * (그래서 매번 setTotal로 직접 맞춰 줘야 하고, 깜빡하면 계산이 맞지 않게 된다.)
 *
 *  GoodCart는 total을 저장하지 않고, 화면을 그릴 때마다 cart로 계산한다. 그래서 cart가 바뀌면 total도 자동으로 맞는다.
 */

/*
 * 결론: (total)파생 상태는 state로 따로 만들지 말고, 랜더링할 떄 계산하게끔 만들어야 한다.
 * 쉽게말하면 => 계산하면 나오는 값은 따로 저장하지 말자.
 *==================================================================================
 *
 * Derived State 파생 상태
 * 같은 말로 ===  다른 state로 계산할 수 있는 값
 *
 * 파생 상태의 예시 "종류"
 * - 합계: 장바구니 -> 총 금액
 * - 개수: 목록 -> items.length
 * - 필터링 목록: 전체목록(완료된 것만)
 * - 선택한 항목: 목록 + 선택한 id → 그 항목 객체 (이 파일의 SelectById)
 *
 */

const initialCart = [
  { id: 1, name: "노트북", price: 1200000, qty: 1 },
  { id: 2, name: "마우스", price: 30000, qty: 2 },
];

// 기능: 장바구니
function BadCart() {
  // (중요) state를 따로 관리하고 있다.
  const [cart, setCart] = useState(initialCart);
  const [total, setTotal] = useState(1260000); // 파생상태

  function handleAdd(id) {
    const item = cart.find((c) => c.id === id); // 추가한 상품
    setCart(cart.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c))); // 카트에 담아
    setTotal(total + item.price); // 총합 계산
  }

  function handleRemove(id) {
    setCart(
      cart.map((c) =>
        c.id === id ? { ...c, qty: Math.max(c.qty - 1, 0) } : c,
      ),
    ); // 상품 카트에서 제거

    // 예시
    //setTotal(total - item.price); // 잘 동작하지만 파생상태를 확인해야 한다.
  }

  return (
    <CartView
      title="✕ total을 state로 관리"
      titleClass="bad"
      cart={cart}
      total={total}
      onAdd={handleAdd}
      onRemove={handleRemove}
    />
  );
}

// 합계는 계산만 (이렇게 관리하자) 
// :합계는 저장하지 않고, 화면을 그릴 때마다 reduce로 새로 계산해요. 그래서 항상 맞아요.
function GoodCart() {
  const [cart, setCart] = useState(initialCart);
  // BadCart()에는 total이 있는데
  // GoodCart은 total은 관리 안하고 있음

  // total을 계산한다. : 카트가 변경되면 컴포넌트를 다시그리면서, 계산도 다시한다.
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  function handleAdd(id) {
    setCart(cart.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c)));
  }

  function handleRemove(id) {
    setCart(
      cart.map((c) =>
        c.id === id ? { ...c, qty: Math.max(c.qty - 1, 0) } : c,
      ),
    );
  }

  return (
    <CartView
      title="○ total은 계산"
      titleClass="good"
      cart={cart}
      total={total}
      onAdd={handleAdd}
      onRemove={handleRemove}
    />
  );
}

function CartView({ title, titleClass, cart, total, onAdd, onRemove }) {
  return (
    <div className="box" style={{ flex: 1, minWidth: 280 }}>
      <h3 className={titleClass}>{title}</h3>
      {cart.map((item) => (
        <div
          key={item.id}
          className="row"
          style={{ justifyContent: "space-between", marginBottom: 6 }}
        >
          <span>
            {item.name} × {item.qty}
          </span>
          <span className="row">
            <button className="btn" onClick={() => onRemove(item.id)}>
              -
            </button>
            <button className="btn" onClick={() => onAdd(item.id)}>
              +
            </button>
          </span>
        </div>
      ))}
      <p style={{ marginTop: 8 }}>
        합계: <b>{total.toLocaleString()}원</b>
      </p>
    </div>
  );
}

function SelectById() {
  const [items, setItems] = useState([
    { id: 1, title: "첫 번째 글" },
    { id: 2, title: "두 번째 글" },
  ]);
  const [selectedId, setSelectedId] = useState(1); // 선택된 ID: 필요한 state
  const selectedItem = items.find((item) => item.id === selectedId); //객체는 계산해서 보여주자.

  function handleRename(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, title: item.title + " (수정)" } : item,
      ),
    );
  }

  return (
    <div className="box">
      <h3>중복 상태 피하기 — selectedItem 대신 selectedId</h3>
      {items.map((item) => (
        <div key={item.id} className="row" style={{ marginBottom: 6 }}>
          <button
            className={`btn ${item.id === selectedId ? "primary" : ""}`}
            onClick={() => setSelectedId(item.id)}
          >
            {item.title}
          </button>
          <button className="btn" onClick={() => handleRename(item.id)}>
            제목 수정
          </button>
        </div>
      ))}
      <p>
        선택한 글: <b>{selectedItem.title}</b>
      </p>
      <p className="hint">
        선택한 "객체"를 state에 따로 복사해 두면, 제목을 수정해도 위 문구는 옛
        제목으로 남는다.
      </p>
    </div>
  );
}

export default function DerivedState() {
  return (
    <div className="stack">
      <p className="hint">
        양쪽에서 [-] 버튼을 눌러 보세요. 왼쪽 합계만 틀려진다.
      </p>
      <div className="row" style={{ alignItems: "stretch" }}>
        <BadCart />
        <GoodCart />
      </div>
      <SelectById />
    </div>
  );
}
