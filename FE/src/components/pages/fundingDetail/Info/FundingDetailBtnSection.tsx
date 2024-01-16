"use client";
import { useRouter } from "next/navigation";
import StyledBtn from "../../../common/StyledBtn";
import { Share } from "../../../common/icon";
import { useRecoilValue } from "recoil";
import { TotalCostState, TotalDonateState } from "@/store/FundingState";
import { setDonateCost } from "@/utils/localData";

type Props = {
  fundingId: number;
  isMine: boolean;
  type: "DONATE" | "GIFT";
  isOnGoing: boolean;
};

export default function FundingDetailBtnSection({
  fundingId,
  type,
  isMine,
  isOnGoing,
}: Readonly<Props>) {
  const router = useRouter();
  const isDonate = type === "DONATE";
  const text = isOnGoing ? "후원하기" : "후원 가능 기간이 아닙니다!";
  const cost = isDonate
    ? useRecoilValue(TotalDonateState)
    : useRecoilValue(TotalCostState);

  const isOkToPledge = cost > 0;
  return (
    <section className="flex gap-[0.63rem] mt-4">
      <button className="w-[4.375rem] h-[4.375rem] shrink-0 rounded-[0.25rem] flex justify-center items-center border ">
        <Share />
      </button>
      <StyledBtn
        text={text}
        disable={isMine || !isOnGoing}
        handler={() => {
          if (!isOkToPledge) {
            type === "GIFT" && alert("옵션을 선택해주세요");
            type === "DONATE" && alert("금액을 입력해주세요");
            return;
          }
          router.push("/funding/pledge/" + fundingId);
          isDonate && setDonateCost(cost);
        }}
      />
    </section>
  );
}
