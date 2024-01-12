"use client";
import { TotalCoin } from "@/store/ChargeState";
import { useRecoilValue } from "recoil";

export default function PaymentAmountDisplay() {
  const total = useRecoilValue(TotalCoin);
  return (
    <div className="flex justify-between font-bold text-[#656565] mt-8">
      <p>결제 하실 금액</p>
      <div className="flex items-center gap-[0.35rem]">
        <p>{total}</p>
        <p className="mr-1">원</p>
      </div>
    </div>
  );
}
