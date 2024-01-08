import useFundingDescription from "@/hooks/useFundingDescription";
import Image from "next/image";

export default function Description() {
  const { data, isLoading, error } = useFundingDescription({ fundingId: 1 });
  if (isLoading || !data) return <div>loading...</div>;
  const imageUrl = data?.response.longDescription;
  return (
    <section className="max-w-xl mx-auto">
      <Image src={imageUrl} alt="DetailImage" width={1280} height={720} />
    </section>
  );
}
