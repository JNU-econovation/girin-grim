"use client";

import Link from "next/link";
import { Logo, ToggleArrow } from "../../common/icon";
import HeaderHero from "../../common/HeaderHero";

export default function HeaderLogoSection() {
  return (
    <div className="flex justify-between items-center mt-6">
      <div />
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-[0.625rem]">
        <HeaderHero />
        <ToggleArrow />
      </div>
    </div>
  );
}
