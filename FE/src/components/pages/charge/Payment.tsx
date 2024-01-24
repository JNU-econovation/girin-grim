"use client";
import Total from "../../common/Total";
import ChargeAgreement from "./ChargeAgreement";
import ChargeBtn from "./ChargeBtn";
import { useRecoilState } from "recoil";
import { TotalCoin } from "@/store/ChargeState";

export default function Payment() {
  const [totalCost, setTotalCost] = useRecoilState(TotalCoin);
  return (
    <div className="relative py-11 px-10 z-50">
      <p className="text-[1.375rem] font-semibold">결제 정보를 확인해주세요.</p>
      <div className="mt-16">
        <Total totalCost={totalCost} />
      </div>
      <hr className="border-color999 border-2 mt-5" />
      <ChargeAgreement />
      <ChargeBtn totalCost={totalCost} reset={() => setTotalCost(0)} />
    </div>
  );
}
