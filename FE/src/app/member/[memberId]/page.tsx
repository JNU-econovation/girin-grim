import PageTitle from "@/components/common/PageTitle";
import MemberFundingGridSection from "@/components/pages/member/FundingList/SupportGrid";
import MemberInfoSection from "@/components/pages/member/memberInfo/MemberInfoSection";

type Props = {
  params: {
    memberId: number;
  };
};

export default function page({ params: { memberId } }: Props) {
  return (
    <section className="w-full max-w-7xl mx-auto font-nanum">
      <PageTitle title="마이페이지" />
      <MemberInfoSection memberId={memberId} />
      <MemberFundingGridSection memberId={memberId} />
    </section>
  );
}
