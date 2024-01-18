"use client";
import { getLocalData, setInsufficient } from "@/utils/localData";
import StyledBtn from "../../common/StyledBtn";
import { calTotalCost, getDonateCost } from "@/utils/payment";
import { useState } from "react";
import { postPayment } from "@/apis/funding";
import { useRecoilValue } from "recoil";
import { addressState } from "@/store/PledgeState";
import { useRouter } from "next/router";

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
  address = address ? address : useRecoilValue(addressState);

  const onClick = async () => {
    const total = type == "DONATE" ? getDonateCost() : calTotalCost(options);
    setIsLoading(true);
    const returnedData = await postPayment(fundingId, {
      memberId,
      type,
      options,
      address: address ? address : "",
      price: total,
    });
    const { error, success } = returnedData;
    setIsLoading(false);
    if (!success) {
      text = "결제 실패";
      console.error;
      alert(error.message);
      if (error.message == "코인이 부족합니다.") {
        setInsufficient(total);
        const router = useRouter();
        router.push("/charge");
      }
      return;
    }
    alert("결제가 완료되었습니다.");
  };

  return (
    <div className="mt-4">
      <StyledBtn text={text} handler={() => onClick()} />
    </div>
  );
}
