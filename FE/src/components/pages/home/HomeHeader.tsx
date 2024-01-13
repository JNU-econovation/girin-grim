"use client";

import { HomeState } from "@/store/HomeState";
import { useRecoilValue } from "recoil";
import { FilterToggle } from "../../common/icon";

export default function HomeHeader() {
  const { category } = useRecoilValue(HomeState);
  // const text = category === "" ? "전체" : category;
  //TODO: 필터 부분을 데이터로 만들어서 불러오게 할지 고민
  //TODO: 필터 부분 따로 컴포넌트로 빼서 관리하기
  return (
    <section className="flex justify-between items-center">
      <div className="flex mt-[0.875rem] items-end gap-[0.875rem] cursor-default">
        <h1 className="text-color656 font-[700] font-notoKR text-[1.625rem] m-0 p-0">
          너와 그릴 기린 그림
        </h1>
        <span className="text-colorb9b block mb-[0.28rem]">
          {category} {">"}
        </span>
      </div>
      <div className="flex items-center gap-2 cursor-default">
        <span className="text-colorb9b">달성률 높은 순</span>
        <FilterToggle />
      </div>
    </section>
  );
}
