import { atom } from "recoil";

export type HomeState = {
  q: "";
  uni: {
    univId: number;
    univName: string;
  };
  sort: "highest" | "lastest";
  category: "전체" | "기부형" | "수령형";
  page: number;
};

/**
 * @description
 * 1. q: 검색어 | string
 * 2. uni:대학 id : number
 * 3. sort: 정렬 기준 : "highest" | "lastest"
 * 4. category: 카테고리 : "전체" | "기부형" | "수령형". 서버 요청시 꼭 영어로 변경하기
 * 5. page: 페이지 : number
 */
export const HomeState = atom({
  key: "HomeState",
  default: {
    q: "",
    uni: {
      univId: 0,
      univName: "",
    },
    sort: "highest",
    category: "전체",
    page: 0,
  },
});
