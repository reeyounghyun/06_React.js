// 미션 02-2. 영화 정보 카드 — { } 안에 JavaScript 쓰기
//
// 목표: movie 객체의 값을 { } 로 꺼내 화면에 보여 준다.
//
// 완성 화면
//   인사이드 아웃 2 (2024)
//   개봉한 지 2년 / 평점 4.5점 → 추천
//   장르: 애니메이션, 가족, 코미디
//   한줄평: "인사이드 아웃 2"는 꼭 보세요!
//
// 순서
//   1. 변수          {movie.title} ({movie.year})
//   2. 계산식        {thisYear - movie.year}
//   3. 삼항 연산자   평점이 4 이상이면 '추천', 아니면 '보통'
//   4. 함수 호출     {movie.genres.join(', ')}
//   5. 템플릿 리터럴 {`"${movie.title}"는 꼭 보세요!`}
//
// 일부러 {movie} 처럼 객체를 통째로 넣어 보자 → 어떤 에러가 날까?

import styles from "./02-7_Mission.module.css";

const movie = {
  title: "인사이드 아웃 2",
  year: 2024,
  rating: 4.5,
  genres: ["애니메이션", "가족", "코미디"],
};

const thisYear = new Date().getFullYear();

export default function Mission() {
  return (
    <div>
      {/* TODO 1. 제목과 개봉 연도 */}
      <h3>
        <span>{movie.title}</span>
        <span>({movie.year})</span>
      </h3>
      {/* TODO 2~3. 개봉한 지 몇 년 / 평점 / 추천 여부 */}
      <p>
        <span>개봉한 지 :</span> {thisYear - movie.year}년 / <span>평점</span>{" "}
        {movie.rating}점 <span> 추천</span>
      </p>
      {/* TODO 4. 장르 */}
      <div>
        <span>장르 : </span>
        <span>{movie.genres[0]}</span>, <span>{movie.genres[1]}</span>,{" "}
        <span>{movie.genres[2]}</span>
      </div>
      {/* TODO 5. 한줄평 */}
      <p>
        <span>감성평 : </span>
        {`"${movie.title}"는 꼭 보세요!`}
      </p>
    </div>
  );
}
