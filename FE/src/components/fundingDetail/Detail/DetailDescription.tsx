"use client";

import { navList } from "@/constants/FundingDetailDate";
import { useState } from "react";
import NavBar from "./NavBar";

export type NavList = "상세 설명" | "공지사항" | "문의" | "후기";

export default function DetailDescription() {
  const [nav, setNav] = useState<NavList>(navList[0]);
  return (
    <section>
      <NavBar nav={nav} setNav={(nav: NavList) => setNav(nav)} />
    </section>
  );
}
