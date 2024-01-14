import DetailDescription from "@/components/pages/fundingDetail/Detail/DetailDescription";
import FundingDetail from "@/components/pages/fundingDetail/Info/FundingDetail";

type Props = {
  params: {
    fundingId: number;
  };
};

export default function FundingDetailPage({
  params: { fundingId },
}: Readonly<Props>) {
  return (
    <section className="w-full max-w-7xl mx-auto mt-6">
      <FundingDetail fundingId={fundingId} />
      <DetailDescription fundingId={fundingId} />
    </section>
  );
}
