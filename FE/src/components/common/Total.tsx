"use client";
import { getDonateCost, getLocalTotalCost } from "@/utils/payment";
import { Coin } from "./icon";

type Props = {
  type?: "DONATE" | "GIFT";
  totalCost?: number;
  isColon?: boolean;
};

export default function Total({
  type,
  totalCost,
  isColon = true,
}: Readonly<Props>) {
  if (totalCost === undefined)
    totalCost = type == "DONATE" ? getDonateCost() : getLocalTotalCost();
  return (
    <div className="text-end flex justify-between items-center text-[1.375rem] text-[#696969]">
      <span>최종 결제 금액 {!isColon && ":"} </span>
      <div className="flex items-center gap-3">
        <span className="font-black text-[2.5rem] text-color121">
          {totalCost}
        </span>
        <Coin size="lg" />
      </div>
    </div>
  );
}
