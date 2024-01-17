"use client";
import { HomeState } from "@/store/HomeState";
import Image from "next/image";
import { useRecoilValue } from "recoil";

export default function Donate() {
  const { category } = useRecoilValue(HomeState);
  const selected = category === "기부형";
  const src = selected ? "/assets/DonateSelected.svg" : "/assets/Donate.svg";
  return (
    <Image src={src} alt="category Donate select" width={27} height={25} />
  );
}
