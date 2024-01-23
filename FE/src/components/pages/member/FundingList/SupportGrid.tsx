"use client";
import MemberFundingNav from "./MemberFundingNav";
import { useEffect, useState } from "react";
import SupportGrid from "./SupportedFundings";
import CreateGrid from "./CreateGrid";
import { mineNavItems, navItems } from "@/constants/memberData";
import { useRecoilValue } from "recoil";
import { isMineState } from "@/store/MemberState";

type Props = {
  memberId: number;
};

export default function MemberFundingGridSection({
  memberId,
}: Readonly<Props>) {
  const isMine = useRecoilValue(isMineState);
  const [focused, setFocus] = useState(isMine ? "후원한 펀딩" : "올린 펀딩");

  useEffect(() => {
    setFocus(isMine ? "후원한 펀딩" : "올린 펀딩");
  }, [isMine]);

  return (
    <section className="mt-40">
      <MemberFundingNav
        focused={focused}
        navItems={isMine ? navItems : mineNavItems}
        setFocus={(f: string) => setFocus(f)}
        isMine={isMine}
      />
      {focused === "후원한 펀딩" && <SupportGrid memberId={memberId} />}
      {focused === "올린 펀딩" && <CreateGrid memberId={memberId} />}
    </section>
  );
}
