"use client";

import { useState } from "react";
import { Layer, Search } from "../common/icon";
import Category from "./Category";
import University from "./University";

export default function HeaderNavSection() {
  const [hover, setHover] = useState({
    category: false,
    univ: false,
  });
  const [category, setCategory] = useState(false);
  const [univ, setUniv] = useState(false);
  return (
    <section className="flex justify-between mt-[0.8rem] font-nanum">
      <ul className="flex gap-6 font-semibold text-xl mb-4 items-center cursor-pointer">
        <li
          className={`flex items-center gap-[2.4rem] relative ${
            hover.category ? "" : "text-colorb0b"
          } `}
          onMouseEnter={() => {
            setCategory(true);
            setHover({ category: true, univ: false });
          }}
          onMouseLeave={() => {
            setCategory(false);
            setHover({ category: false, univ: false });
          }}
        >
          <Layer />
          카테고리
          {category && <Category />}
        </li>
        <li
          className={`${hover.univ ? "" : "text-colorb0b"} relative`}
          onMouseEnter={() => {
            setUniv(true);
            setHover({ category: false, univ: true });
          }}
          onMouseLeave={() => {
            setUniv(false);
            setHover({ category: false, univ: false });
          }}
        >
          대학
          {univ && <University />}
        </li>
        <li className="text-colorb0b">추천</li>
        <li className=" text-main">펀딩 올리기</li>
      </ul>
      <form className="flex items-center relative">
        <input
          type="text"
          className="bg-input_bg w-[165px] h-[36px] rounded-xl"
        />
        <Search />
      </form>
    </section>
  );
}
