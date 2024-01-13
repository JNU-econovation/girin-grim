"use client";
import { getLocalData } from "@/utils/localData";
import StyledBtn from "../../common/StyledBtn";
import { calTotalCost } from "@/utils/payment";
import { useState } from "react";
import { postPayment } from "@/apis/funding";

type Props = {
  fundingId: number;
  type: "DONATE" | "GIFT";
};

export default function PaymentBtn({ fundingId, type }: Readonly<Props>) {
  const [isLoading, setIsLoading] = useState(false);
  const { memberId, options } = getLocalData();
  let text = isLoading ? "결제중..." : "결제하기";

  const onClick = async () => {
    const total = calTotalCost(options);
    setIsLoading(true);
    const returnedData = await postPayment(
      memberId,
      type,
      options,
      total,
      fundingId
    );
    setIsLoading(false);
    if (returnedData.error) text = "결제 실패";
    else alert("결제가 완료되었습니다.");
  };
  return <StyledBtn text={text} handler={() => onClick()} />;
}
