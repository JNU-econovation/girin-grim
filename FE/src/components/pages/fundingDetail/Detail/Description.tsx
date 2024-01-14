import useFundingDescription from "@/hooks/useFundingDescription";
import Image from "next/image";

export default function Description({
  fundingId,
}: Readonly<{ fundingId: number }>) {
  const { data, isLoading } = useFundingDescription({ fundingId });
  if (isLoading || !data) return <div>loading...</div>;
  const imageUrl = data?.response.longDescription;
  return (
    <section className="max-w-xl mx-auto">
      <Image src={imageUrl} alt="DetailImage" width={1280} height={720} />
    </section>
  );
}
