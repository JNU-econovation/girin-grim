"use client";
import { useState } from "react";
import { Search } from "../../common/icon";
import { useRecoilState } from "recoil";
import { HomeState } from "@/store/HomeState";

export default function HeaderForm() {
  const [text, setText] = useState("");
  const [homme, setHomme] = useRecoilState(HomeState);
  return (
    <form
      className="flex items-center relative -translate-y-2 "
      onSubmit={(e) => {
        e.preventDefault();
        setHomme({ ...homme, q: text });
      }}
    >
      <input
        type="text"
        className="bg-input_bg w-44 h-[36px] rounded-xl"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Search />
    </form>
  );
}
