"use client";

import Link from "next/link";
import { Logo } from "../../common/icon";
import dynamic from "next/dynamic";
const HeaderHero = dynamic(() => import("../../common/HeaderHero"), {
  ssr: true,
});

export default function HeaderLogoSection() {
  return (
    <div className="flex justify-between items-center mt-6 relative">
      <div />
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-[0.625rem]">
        <HeaderHero />
      </div>
    </div>
  );
}
