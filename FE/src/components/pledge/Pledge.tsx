"use client";
import usePledge from "@/hooks/usePledge";
import CostInfo from "./CostInfo";
import InfoSection from "../common/InfoSection";
import OptinsSection from "./OptinsSection";

export default function Pledge({ fundingId }: Readonly<{ fundingId: number }>) {
  const { data, error, isLoading } = usePledge({ fundingId });
  if (isLoading || !data) return <div>로딩중</div>;
  const { funding, member, supporter } = data.response;
  return (
    <>
      <InfoSection funding={funding} member={member} />
      <div className="w-full bg-colorede pb-4">
        <section className="w-full max-w-7xl mx-auto grid grid-cols-[3fr_2fr] gap-3">
          <OptinsSection supporter={supporter} />
          <CostInfo type={funding.type} />
        </section>
      </div>
    </>
  );
}
