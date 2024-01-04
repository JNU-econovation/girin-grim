"use client";

import useFundingDetail from "@/hooks/useFundingDetail";
import Image from "next/image";
import FundingInfo from "./FundingInfo";

type Props = {
  fundingId: number;
};

export default function FundingDetail({ fundingId }: Props) {
  const { data, isLoading, error } = useFundingDetail(fundingId);
  return (
    <section className="flex gap-6 font-nanum">
      {data && (
        <>
          {/* TODO: aws 연동 후 w, h 확인하기*/}
          <Image
            src={data?.response.funding.image}
            alt="funding Image"
            width={600}
            height={600}
          />
          <FundingInfo />
        </>
      )}
    </section>
  );
}
