"use client";
import useCharge from "@/hooks/useCharge";
import { Coin } from "../../common/icon";
import { useRouter } from "next/navigation";

export default function BalanceDisplay({ total }: Readonly<{ total: number }>) {
  const router = useRouter();
  const { data, isLoading } = useCharge();
  if (isLoading || !data) return <div>loading...</div>;
  console.log(data);
  if (!data.success) {
    // alert(data.error.message);
    router.back();
  }

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
