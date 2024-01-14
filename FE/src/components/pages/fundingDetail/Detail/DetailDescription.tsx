"use client";

import { navList } from "@/constants/FundingDetailDate";
import { useState } from "react";
import NavBar from "./DetailNavBar";
import Description from "./Description";

export type NavList = "상세 설명" | "공지사항" | "문의" | "후기";

export default function DetailDescription({
  fundingId,
}: Readonly<{
  fundingId: number;
}>) {
  const [nav, setNav] = useState<string>(navList[0]);

  return (
    <section>
      <NavBar nav={nav} setNav={(nav: string) => setNav(nav)} />
      <Description fundingId={fundingId} />
    </section>
  );
}
