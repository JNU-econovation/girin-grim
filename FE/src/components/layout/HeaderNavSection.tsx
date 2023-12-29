"use client";

import { Layer, Search } from "../common/icon";

export default function HeaderNavSection() {
  return (
    <section className="flex justify-between mt-[0.8rem]">
      <ul className="flex gap-6 font-semibold text-xl mb-4 items-center cursor-pointer">
        <li className="flex items-center gap-[2.4rem]">
          <Layer />
          카테고리
        </li>
        <li className="text-grey">대학</li>
        <li className="text-grey">추천</li>
        <li className=" text-main">펀딩 올리기</li>
      </ul>
      <form className="flex items-center">
        <input
          type="text"
          className="bg-input_bg w-[165px] h-[36px] rounded-xl"
        />
        <Search />
      </form>
    </section>
  );
}
