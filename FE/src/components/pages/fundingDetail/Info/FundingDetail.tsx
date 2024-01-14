"use client";

import useFundingDetail from "@/hooks/useFundingDetail";
import FundingInfo from "./FundingInfo";
import Image from "next/image";
import GaugeBar from "./GaugeBar";

type Props = {
  fundingId: number;
};

export default function FundingDetail({ fundingId }: Readonly<Props>) {
  const { data, isLoading, error } = useFundingDetail(fundingId);
  if (isLoading || !data) return <div>loading...</div>;
  const fundingData = data.response;

  return (
    <section className="flex gap-6 font-nanum">
      {data && (
        <>
          <Image
            src={fundingData.funding.image}
            alt="funding Image"
            width={600}
            height={600}
          />
          <FundingInfo fundingData={fundingData} />
          <GaugeBar />
        </>
      )}
    </section>
  );
}
