"use client";
//TODO: 리펙토링 필요. 컴포넌트 분리하기

import { useState } from "react";
import { Layer } from "../../common/icon";
import Category from "./modal/Category";
import University from "./modal/University";
import HeaderForm from "./HeaderForm";
import { postFunding } from "@/apis/funding";

export default function HeaderNavSection() {
  const [hover, setHover] = useState({
    category: false,
    univ: false,
  });
  const [category, setCategory] = useState(false);
  const [univ, setUniv] = useState(false);
  return (
    <section className="flex justify-between items-center mt-[0.8rem] font-nanum">
      <ul className="flex gap-6 font-semibold text-xl mb-3 items-center cursor-pointer">
        <li
          className={`flex items-center gap-8 relative ${
            hover.category ? "text-[#3d3d3d]" : "text-colorb0b"
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
          className={`${
            hover.univ ? "text-[#3d3d3d]" : "text-colorb0b"
          } relative`}
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
        {/* <button onClick={() => postFunding()}> */}
        <li className=" text-main">펀딩 올리기</li>
        {/* </button> */}
      </ul>
      <HeaderForm />
    </section>
  );
}
