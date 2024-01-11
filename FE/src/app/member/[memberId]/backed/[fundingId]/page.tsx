"use client";
import FundingInfo from "@/components/backed/FundingInfo";
import PageTitle from "@/components/common/PageTitle";
import OptionContent from "@/components/common/OptionContent";
import useBacked from "@/hooks/useBacked";
import { formatOptionData } from "@/utils/dataFomat";

type Props = {
  params: {
    memberId: number;
    fundingId: number;
  };
};

export default function BackedPage({ params: { memberId, fundingId } }: Props) {
  const { data, error, isLoading } = useBacked({ fundingId, memberId });
  if (isLoading || !data) return <div>로딩중</div>;
  const { funding, member, options, address, totalPrice } = data.response;
  const formatttedOptions = formatOptionData(options);
  const supporter = {
    address,
  };
  return (
    <main className="w-full max-w-7xl mx-auto">
      <PageTitle title="후원한 프로젝트" />
      <section className="px-2">
        <FundingInfo funding={funding} member={member} />
        <OptionContent options={formatttedOptions} supporter={supporter} />
      </section>
    </main>
  );
}
