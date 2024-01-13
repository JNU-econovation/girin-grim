"use client";

import { Coin } from "@/components/common/icon";
import { TotalCostState, TotalDonateState } from "@/store/FundingState";
import { useRecoilValue } from "recoil";

type Props = {
  coin: number;
  type: string;
};
export default function FundingInfoCost({ coin, type }: Readonly<Props>) {
  const isDonate = type === "DONATE";
  const cost = isDonate
    ? useRecoilValue(TotalDonateState)
    : useRecoilValue(TotalCostState);

  return (
    <section className="w-full text-end">
      <p className="text-color999 font-semibold">My Coin : {coin} ( 충전 )</p>
      <p className="text-4xl font-extrabold flex justify-end gap-2 items-center">
        <span className="opacity-70">{cost}</span>
        <Coin size="md" />
      </p>
    </section>
  );
}
