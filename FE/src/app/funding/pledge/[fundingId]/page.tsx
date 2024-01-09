import Pledge from "@/components/pledge/Pledge";

type Props = {
  params: {
    fundingId: number;
  };
};

export default function PledgePage({ params: { fundingId } }: Readonly<Props>) {
  return <Pledge fundingId={fundingId} />;
}
