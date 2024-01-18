"use client";
import { HomeState } from "@/store/HomeState";
import Image from "next/image";
import { useRecoilValue } from "recoil";

export default function All() {
  const { category } = useRecoilValue(HomeState);
  const selected = category === "전체";
  const src = selected ? "/assets/AllSelected.svg" : "/assets/All.svg";
  return (
    <Image
      src={src}
      alt="category all select"
      width={28}
      height={28}
      className="ml-[0.1rem]"
    />
  );
}
