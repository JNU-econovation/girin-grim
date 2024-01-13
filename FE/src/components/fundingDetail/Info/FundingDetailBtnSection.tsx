"use client";
import { useRouter } from "next/navigation";
import StyledBtn from "../../common/StyledBtn";
import { Share } from "../../common/icon";
import { useRecoilValue } from "recoil";
import { SelectedOptions } from "@/store/FundingState";

export default function FundingDetailBtnSection({
  fundingId,
}: {
  fundingId: number;
}) {
  const router = useRouter();
  const option = useRecoilValue(SelectedOptions);
  const isOkToPledge = option.length > 0;
  return (
    <section className="flex gap-[0.63rem] mt-4">
      <button className="w-[4.375rem] h-[4.375rem] shrink-0 rounded-[0.25rem] flex justify-center items-center border ">
        <Share />
      </button>
      <StyledBtn
        text="후원하기"
        handler={() => {
          if (!isOkToPledge) {
            alert("옵션을 선택해주세요");
            return;
          }
          router.push("/funding/pledge/" + fundingId);
        }}
      />
    </section>
  );
}
