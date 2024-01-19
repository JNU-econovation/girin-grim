"use client";
import MemberFundingNav from "./MemberFundingNav";
import { useState } from "react";
import SupportGrid from "./SupportedFundings";
import CreateGrid from "./CreateGrid";
import { navItems } from "@/constants/memberData";

type Props = {
  memberId: number;
};

export default function MemberFundingGridSection({
  memberId,
}: Readonly<Props>) {
  const [focused, setFocus] = useState("후원한 펀딩");

  return (
    <section className="mt-40">
      <MemberFundingNav
        focused={focused}
        navItems={navItems}
        setFocus={(f: string) => setFocus(f)}
      />
      {focused === "후원한 펀딩" && <SupportGrid memberId={memberId} />}
      {focused === "올린 펀딩" && <CreateGrid memberId={memberId} />}
    </section>
  );
}
