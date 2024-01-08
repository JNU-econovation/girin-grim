"use client";

import useFundingDetail from "@/hooks/useFundingDetail";
import FundingInfo from "./FundingInfo";
import Image from "next/image";
// import { useRecoilValue } from "recoil";
// import { FundingDetailState } from "@/store/FundingState";

type Props = {
  fundingId: number;
};

export default function FundingDetail({ fundingId }: Props) {
  const { data, isLoading, error } = useFundingDetail(fundingId); //TODO: 서버 상태를 qeury가 아닌 recoil로 관리하기
  if (isLoading || !data) return <div>loading...</div>;
  const fundingData = data.response;

  return (
    <section className="flex gap-6 font-nanum">
      {data && (
        <>
          {/* TODO: aws 연동 후 w, h 확인하기*/}
          <Image
            src={fundingData.funding.image}
            alt="funding Image"
            width={600}
            height={600}
          />
          {/* <div className="w-[35.375rem] h-[35.375rem] bg-colorede shrink-0" /> */}
          <FundingInfo fundingData={fundingData} />
          <div className="bg-main w-full" />
        </>
      )}
    </section>
  );
}
