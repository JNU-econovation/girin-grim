"use client";

import Link from "next/link";
import { Logo, ToggleArrow } from "../common/icon";
import Hero from "../common/Hero";

export default function HeaderLogoSection() {
  return (
    <div className="flex justify-between items-center mt-6">
      <div />
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-[0.625rem]">
        <Hero />
        <ToggleArrow />
      </div>
    </div>
  );
}
