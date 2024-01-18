import { Coin } from "@/components/common/icon";

export default function RequireDisplay({
  require,
}: Readonly<{ require: number }>) {
  return (
    <div className="flex justify-between font-bold text-[#C32A3C] mt-3">
      <p>부족한 크레파스</p>
      <div className="flex items-center gap-1">
        <p>{require}</p>
        <Coin size="sm" />
      </div>
    </div>
  );
}
