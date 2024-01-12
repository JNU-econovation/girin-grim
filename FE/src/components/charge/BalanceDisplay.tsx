import { Coin } from "../common/icon";

export default function BalanceDisplay() {
  return (
    <div className="flex justify-between font-bold text-[#656565] mt-3">
      <p>결제 후 내 크레파스</p>
      <div className="flex items-center gap-1">
        <p>{"25,000"}</p>
        <Coin size="sm" />
      </div>
    </div>
  );
}
