import BackedSection from "@/components/pages/backed/BackedSection";

type Props = {
  params: {
    memberId: number;
    fundingId: number;
  };
};

export default function BackedPage({
  params: { memberId, fundingId },
}: Readonly<Props>) {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <BackedSection fundingId={fundingId} memberId={memberId} />
    </main>
  );
}
