"use client";

import useFundingDetail from "@/hooks/useFundingDetail";
import FundingInfo from "./FundingInfo";
import Image from "next/image";
import GaugeBar from "./GaugeBar";
import { checkIsOnGoing } from "@/utils/date";

type Props = {
  fundingId: number;
};

export default function FundingDetail({ fundingId }: Readonly<Props>) {
  const { data, isLoading, error } = useFundingDetail(fundingId);
  if (isLoading || !data) return <div>loading...</div>;
  const fundingData = data.response;
  const isOnGoing = checkIsOnGoing(
    fundingData.funding.startTime,
    fundingData.funding.endTime
  );

  return (
    <section className="flex gap-6 font-nanum">
      {data && (
        <>
          <Image
            src={fundingData.funding.image}
            alt="funding Image"
            width={600}
            height={600}
            className="w-[600px] h-[600px]"
          />
          <FundingInfo fundingData={fundingData} isOnGoing={isOnGoing} />
          <GaugeBar rate={fundingData.funding.rate} isOnGoing={isOnGoing} />
        </>
      )}
    </section>
  );
}
