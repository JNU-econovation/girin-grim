"use client";
import useBacked from "@/hooks/useBacked";
import InfoSection from "../common/InfoSection";

type Props = {
  fundingId: number;
  memberId: number;
};

export default function FundingInfo({ fundingId, memberId }: Readonly<Props>) {
  const { data, error, isLoading } = useBacked({ fundingId, memberId });
  if (isLoading || !data) return <div>로딩중</div>;
  const { funding, member } = data.response;
  return <InfoSection funding={funding} member={member} />;
}
