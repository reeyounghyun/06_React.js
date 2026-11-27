import { create } from "zustand";

/*
 * create(함수) : HOOK을 Return 해준다
 * - 함수가 돌려주는 객체 : state, action(값을 바꾸는 함수) 리턴해준다.
 * - set : setXXX같은 state를 바꾸는 함수이다.
 */
const useUserStore = create((set) => ({
  // 상태값
  user: { name: "김리액트" },

  // action - state를 바꾸는 함수도 같이 들어있다.
  login: () => set({ user: { name: "김리액트" } }),
  logout: () => set({ user: null }),
}));

export default useUserStore;
