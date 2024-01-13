"use client";
import { useRouter } from "next/navigation";
import StyledBtn from "../../../common/StyledBtn";
import { Share } from "../../../common/icon";
import { useRecoilValue } from "recoil";
import { TotalCostState, TotalDonateState } from "@/store/FundingState";

type Props = {
  fundingId: number;
  type: "DONATE" | "GIFT";
};

export default function FundingDetailBtnSection({
  fundingId,
  type,
}: Readonly<Props>) {
  const router = useRouter();
  const isDonate = type === "DONATE";
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
        text="후원하기"
        handler={() => {
          if (!isOkToPledge) {
            type === "GIFT" && alert("옵션을 선택해주세요");
            type === "DONATE" && alert("금액을 입력해주세요");
            return;
          }
          router.push("/funding/pledge/" + fundingId);
        }}
      />
    </section>
  );
}
