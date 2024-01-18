"use client";
import { paymentUnits } from "@/constants/ChargeDate";
import PaymentAmountDisplay from "./PaymentAmountDisplay";
import BalanceDisplay from "./BalanceDisplay";
import { useRecoilState, useRecoilValue } from "recoil";
import { TotalCoin } from "@/store/ChargeState";
import { getInsufficient } from "@/utils/localData";
import RequireDisplay from "./RequireDisplay";

export default function ChargingCoin() {
  const [total, setTotal] = useRecoilState(TotalCoin);
  const require = getInsufficient();
  return (
    <>
      <div className="flex gap-1 items-end">
        <h1 className="text-2xl font-extrabold">충전할 크레파스</h1>
        <span className="pb-1 text-sm font-normal text-color9f9">
          Charging coin
        </span>
      </div>
      <p className="text-black text-6xl font-extrabold mt-5">{total}</p>
      <div className="bg-main mt-2 pt-1" />
      {paymentUnits.map((unit) => (
        <button
          className="inline-block bg-[#f2f2f2] mt-[0.63rem] mr-3 px-6 py-2 rounded-[0.25rem] cursor-default"
          key={unit}
          onClick={() => setTotal(total + +unit)}
        >
          + {unit}
        </button>
      ))}
      <PaymentAmountDisplay />
      <BalanceDisplay total={total} />
      {require > 0 && <RequireDisplay require={require} />}
    </>
  );
}
