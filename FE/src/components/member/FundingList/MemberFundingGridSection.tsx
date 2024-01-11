"use client";
import Grid from "@/components/common/Grid";
import useUserFeed from "@/hooks/useUserFeed";
import MemberFundingNav from "./MemberFundingNav";

type Props = {
  memberId: number;
};

export default function MemberFundingGridSection({
  memberId,
}: Readonly<Props>) {
  const { data, isLoading } = useUserFeed({ memberId });
  if (!data || isLoading) return <div>loading...</div>;
  const { funding } = data.response;

  return (
    <section className="mt-40">
      <MemberFundingNav />
      <Grid fundings={funding} />
    </section>
  );
}
