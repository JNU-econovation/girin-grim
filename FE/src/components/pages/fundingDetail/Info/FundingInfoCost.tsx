"use client";

import { Coin } from "@/components/common/icon";
import { TotalCostState } from "@/store/FundingState";
import { useRecoilValue } from "recoil";

export default function FundingInfoCost({ coin }: Readonly<{ coin: number }>) {
  const cost = useRecoilValue(TotalCostState);
  return (
    <section className="w-full text-end">
      <p className="text-color999 font-semibold">My Coin : {coin} ( 충전 )</p>
      <p className="text-xl font-extrabold flex justify-end gap-2 items-center">
        <span className="opacity-70">{cost}</span>
        <Coin size="md" />
      </p>
    </section>
  );
}
