"use client";
import useBacked from "@/hooks/useBacked";
import OptionContent from "../../common/OptionContent";
import Total from "../../common/Total";
import FundingInfo from "./FundingInfo";
import { formatOptionData } from "@/utils/dataFomat";
import BackBtn from "./BackBtn";
import { redirect, useRouter } from "next/navigation";

type Props = {
  fundingId: number;
  memberId: number;
};

export default function BackedSection({
  fundingId,
  memberId,
}: Readonly<Props>) {
  const router = useRouter();
  const { data, isLoading } = useBacked({ fundingId, memberId });
  console.log(data);
  if (isLoading || !data) return <div>로딩중</div>;
  if (!data.success) router.back();
  const { funding, member, options, address, totalPrice } = data.response;
  const formatttedOptions = formatOptionData(options);
  const supporter = {
    address,
  };
  return (
    <section className="px-2">
      <FundingInfo funding={funding} member={member} />
      <OptionContent
        options={formatttedOptions}
        supporter={supporter}
        type={funding.type}
      />
      <section className="mt-[2.4rem] flex flex-col">
        <h2 className="text-[1.375rem] font-extrabold">결제 정보</h2>
        <div className="w-96 self-end">
          <Total totalCost={totalPrice} />
        </div>
        <BackBtn memberId={memberId} />
      </section>
    </section>
  );
}
