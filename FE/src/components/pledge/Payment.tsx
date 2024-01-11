import useCharge from "@/hooks/useCharge";
import Agreement from "./Agreement";
import PaymentBtn from "./PaymentBtn";
import { getLocalTotalCost } from "@/utils/payment";
import { Coin } from "../common/icon";

export default function Payment({
  type,
}: Readonly<{ type: "DONATE" | "GIFT" }>) {
  const totalCost = getLocalTotalCost();
  const { data, error, isLoading } = useCharge();
  return (
    <div className="relative py-11 px-10 z-50">
      <p className="text-[1.375rem] font-semibold">결제 정보를 확인해주세요.</p>
      <div className=" mt-8">
        <p className="text-end font-semibold text-color999">
          My Coin : {data ? data.response.coin : ""}
        </p>
        <p className="text-end flex justify-between items-center text-[1.375rem] text-[#696969]">
          <span>최종 결제 금액 : </span>
          <div className="flex items-center gap-3">
            <span className="font-black text-[2.5rem] text-color121">
              {totalCost}
            </span>
            <Coin size="lg" />
          </div>
        </p>
      </div>
      <hr className="border-color999 border-2 mt-5" />
      <Agreement />
      <PaymentBtn type={type} />
    </div>
  );
}
