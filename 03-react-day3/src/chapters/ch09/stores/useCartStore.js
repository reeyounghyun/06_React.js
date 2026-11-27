import { create } from "zustand";

/* 전역 상태 조회 및 변경하는 Store 패턴 
*- 컴포넌트에서는 꺼내만 사용하자
*
=====================================================
 ** Store에 만드는 이유 **
 * 유지보수, 상태값을 변경하는 action이 변경되어야 할 때
 * Store만 수정하면 된다. JSX는 고려하지 않아도 된다.
 * */

const useCartStore = create((set) => ({
  /* 하나의 state
   ** PRODUCTS에 있는 상품 정보(장바구니 목록)**
   * [{ id, name, price, qty(개수) }, ....여러개]
   * */
  items: [],

  // action
  addItem: (product) =>
    set((state) => {
      const exists = state.items.find((item) => item.id === product.id);
      if (exists) {
        return {
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
          ),
        };
      }
      return { items: [...state.items, { ...product, qty: 1 }] };
    }),

  // 수량변경 : 플러스/마이너스 버튼에서 쓰임
  changeQty: (id, delta) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item,
        )
        .filter((item) => item.qty > 0), // 아이템의 갯수가 0보다 큰거만
    })),

  // 삭제
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),

  // 전체 초기화
  clear: () => set({ items: [] }),
}));

export default useCartStore;
