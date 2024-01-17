"use client";
import { HomeState } from "@/store/HomeState";
import Image from "next/image";
import { useRecoilValue } from "recoil";

export default function Gift() {
  const { category } = useRecoilValue(HomeState);
  const selected = category === "수령형";
  const src = selected ? "/assets/GiftSelected.svg" : "/assets/Gift.svg";
  return (
    <Image
      src={src}
      alt="category Gift select"
      width={27}
      height={20}
      className="ml-[0.1rem]"
    />
  );
}
