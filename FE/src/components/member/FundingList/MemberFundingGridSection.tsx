"use client";
import Grid from "@/components/common/Grid";
import useUserFeed from "@/hooks/useUserFeed";
import MemberFundingNav from "./MemberFundingNav";
import { useState } from "react";

type Props = {
  memberId: number;
};

export default function MemberFundingGridSection({
  memberId,
}: Readonly<Props>) {
  const { data, isLoading } = useUserFeed({ memberId });
  const [focused, setFocus] = useState("후원한 펀딩");
  if (!data || isLoading) return <div>loading...</div>;
  const { funding } = data.response;

  const navItems = ["후원한 펀딩", "올린 펀딩"];

  return (
    <section className="mt-40">
      <MemberFundingNav
        focused={focused}
        navItems={navItems}
        setFocus={(f: string) => setFocus(f)}
      />
      <Grid fundings={funding} />
    </section>
  );
}
