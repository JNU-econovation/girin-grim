"use client";
import { getLocalData } from "@/utils/localData";
import StyledBtn from "../common/StyledBtn";
import { calTotalCost } from "@/utils/payment";
import { postPayment } from "@/apis/apis";
import { useState } from "react";

export default function PaymentBtn({
  type,
}: Readonly<{ type: "DONATE" | "GIFT" }>) {
  const [isLoading, setIsLoading] = useState(false);
  const { memberId, options } = getLocalData();
  let text = isLoading ? "결제중..." : "결제하기";

  const onClick = async () => {
    const total = calTotalCost(options);
    setIsLoading(true);
    const returnedData = await postPayment(memberId, type, options, total);
    setIsLoading(false);
    if (returnedData.error) text = "결제 실패";
    else alert("결제가 완료되었습니다.");
  };
  return <StyledBtn text={text} handler={() => onClick()} />;
}
