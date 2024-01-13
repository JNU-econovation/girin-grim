"use client";
import useBacked from "@/hooks/useBacked";
import OptionContent from "../../common/OptionContent";
import PageTitle from "../../common/PageTitle";
import Total from "../../common/Total";
import FundingInfo from "./FundingInfo";
import { formatOptionData } from "@/utils/dataFomat";
import StyledBtn from "../../common/StyledBtn";
import BackBtn from "./BackBtn";

type Props = {
  fundingId: number;
  memberId: number;
};

export default function BackedSection({ fundingId, memberId }: Props) {
  const { data, error, isLoading } = useBacked({ fundingId, memberId });
  if (isLoading || !data) return <div>로딩중</div>;
  const { funding, member, options, address, totalPrice } = data.response;
  const formatttedOptions = formatOptionData(options);
  const supporter = {
    address,
  };
  return (
    <>
      <PageTitle title="후원한 프로젝트" />
      <section className="px-2">
        <FundingInfo funding={funding} member={member} />
        <OptionContent options={formatttedOptions} supporter={supporter} />
        <section className="mt-[2.4rem] flex flex-col">
          <h2 className="text-[1.375rem] font-extrabold">결제 정보</h2>
          <div className="w-96 self-end">
            <Total totalCost={totalPrice} />
          </div>
          <BackBtn memberId={memberId} />
        </section>
      </section>
    </>
  );
}
