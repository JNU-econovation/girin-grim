import { atom } from "recoil";

export type HomeState = {
  q: "";
  uni: "";
  sort: "highest" | "lastest";
  category: "" | "기부형" | "수령형";
  page: number;
};

/**
 * @description
 * 1. q: 검색어 | string
 * 2. uni: 대학교 : string. ex) "서울대학교" 풀네임
 * 3. sort: 정렬 기준 : "highest" | "lastest"
 * 4. category: 카테고리 : "" | "기부형" | "수령형". 서버 요청시 꼭 영어로 변경하기
 * 5. page: 페이지 : number
 */
export const HomeState = atom({
  key: "HomeState",
  default: {
    q: "",
    uni: "",
    sort: "highest",
    category: "",
    page: 0,
  },
});
