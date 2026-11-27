import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  // 지연 초기화 : 함수를 넘기게 되면 "첫 랜더링 때 한번만 실행된다."
  // localStroage를 매 랜더링마다 진행하지 않기 위해
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // [key, value]에 해당하는 값이 변경되면 useEffect 동작한다.
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value)); // 로컬스토리지에 상태값 저장
    } catch {}
  }, [key, value]);

  return [value, setValue];
}
