import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * 미들웨어란?
 * - 특정 함수에 대해 추가적인 기능을 만들어주는 함수
 */

/**
 * persist 미들웨어
 * - persist로 store를 감싸면 localStorage에 자동 저장 + 새로고침하면 자동으로 불러오기
 *
 * 미들웨어의 종류
 * persist :state를 localStorage에 저장하고 새로고침하면 다시 불러온다.
 * devtools : redux devtools 확장에서 state변화를 볼 수 있음 (디버깅용)
 * immer   : state.count++ 이렇게 사용할 수 있음 (immer 패키지 필요)
 * ... 등등
 */
export const initialSettings = { theme: "light", fontSize: 16, nickname: "" };

const useSettingsStore = create(
  persist(
    // 기존 store 그대로 사용
    (set) => ({
      // 상태
      ...initialSettings,

      // 액션
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
      setFontSize: (fontSize) => set({ fontSize }),
      setNickname: (nickname) => set({ nickname }),
      reset: () => set(initialSettings),
    }),

    // localstorage에 저장할 이름 (키값) -> 다른 스토어와 겹치면 안됨
    { name: "day3-settings" },
  ),
);

export default useSettingsStore;
