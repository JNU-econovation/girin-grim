import { Coin } from "./icon";

type Props = {
  totalCost: number;
};

export default function Total({ totalCost }: Readonly<Props>) {
  return (
    <div className="text-end flex justify-between items-center text-[1.375rem] text-[#696969]">
      <span>최종 결제 금액 : </span>
      <div className="flex items-center gap-3">
        <span className="font-black text-[2.5rem] text-color121">
          {totalCost}
        </span>
        <Coin size="lg" />
      </div>
    </div>
  );
}
