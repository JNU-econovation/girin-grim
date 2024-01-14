"use client";
import { getLocalData } from "@/utils/localData";
import StyledBtn from "../../common/StyledBtn";
import { calTotalCost, getDonateCost } from "@/utils/payment";
import { useState } from "react";
import { postPayment } from "@/apis/funding";

type Props = {
  fundingId: number;
  type: "DONATE" | "GIFT";
  address: string;
};

export default function PaymentBtn({
  fundingId,
  type,
  address,
}: Readonly<Props>) {
  const [isLoading, setIsLoading] = useState(false);
  const { memberId, options } = getLocalData();
  let text = isLoading ? "결제중..." : "결제하기";

  const onClick = async () => {
    const total = type == "DONATE" ? getDonateCost() : calTotalCost(options);
    setIsLoading(true);
    const returnedData = await postPayment(fundingId, {
      memberId,
      type,
      options,
      address,
      price: total,
    });
    setIsLoading(false);
    if (returnedData.error) text = "결제 실패";
    else alert("결제가 완료되었습니다.");
  };
  return (
    <div className="mt-6">
      <StyledBtn text={text} handler={() => onClick()} />
    </div>
  );
}
