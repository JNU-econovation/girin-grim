import FundingInfo from "@/components/backed/FundingInfo";
import PageTitle from "@/components/common/PageTitle";

type Props = {
  params: {
    memberId: number;
    fundingId: number;
  };
};

export default function BackedPage({ params: { memberId, fundingId } }: Props) {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <PageTitle title="후원한 프로젝트" />
      <section className="px-2">
        <FundingInfo fundingId={fundingId} memberId={memberId} />
      </section>
    </main>
  );
}
