import Pledge from "@/components/pages/pledge/Pledge";

type Props = {
  params: {
    fundingId: number;
  };
};

export default function PledgePage({ params: { fundingId } }: Readonly<Props>) {
  return <Pledge fundingId={fundingId} />;
}
