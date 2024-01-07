import FundingDetail from "@/components/fundingDetail/FundingDetail";

type Props = {
  params: {
    fundingId: number;
  };
};

export default function FundingDetailPage({ params: { fundingId } }: Props) {
  return (
    <section className="w-full max-w-7xl mx-auto mt-6">
      <FundingDetail fundingId={fundingId} />
    </section>
  );
}
