"use client";

import { HomeState } from "@/store/HomeState";
import { useRecoilValue } from "recoil";

export default function HomeHeader() {
  const { category } = useRecoilValue(HomeState);
  const text = category === "" ? "전체" : category;
  return (
    <div className="flex mt-[0.875rem] items-end gap-[0.875rem] cursor-default">
      <h1 className="text-color656 font-[700] font-notoKR text-[1.625rem] m-0 p-0">
        너와 그릴 기린 그림
      </h1>
      <span className="text-colorb9b block mb-[0.28rem]">
        {text} {">"}
      </span>
    </div>
  );
}
