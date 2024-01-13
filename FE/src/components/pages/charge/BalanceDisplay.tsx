"use client";
import useCharge from "@/hooks/useCharge";
import { Coin } from "../../common/icon";

export default function BalanceDisplay({ total }: Readonly<{ total: number }>) {
  const { data, error, isLoading } = useCharge();
  if (isLoading || !data) return <div>loading...</div>;

  const prevCoins = data.response.coin;

  const balance = total + prevCoins;
  return (
    <div className="flex justify-between font-bold text-[#656565] mt-3">
      <p>결제 후 내 크레파스</p>
      <div className="flex items-center gap-1">
        <p>{balance}</p>
        <Coin size="sm" />
      </div>
    </div>
  );
}
