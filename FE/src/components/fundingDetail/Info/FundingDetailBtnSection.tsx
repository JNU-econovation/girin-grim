"use client";
import { useRouter } from "next/navigation";
import StyledBtn from "../../common/StyledBtn";
import { Share } from "../../common/icon";

export default function FundingDetailBtnSection({
  fundingId,
}: {
  fundingId: number;
}) {
  const router = useRouter();
  return (
    <section className="flex gap-[0.63rem]">
      <button className="w-[4.375rem] h-[4.375rem] shrink-0 rounded-[0.25rem] flex justify-center items-center border mt-4 ">
        <Share />
      </button>
      <StyledBtn
        text="후원하기"
        handler={() => router.push("/funding/pledge/" + fundingId)}
      />
    </section>
  );
}
