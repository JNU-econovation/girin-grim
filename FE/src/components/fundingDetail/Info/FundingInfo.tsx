import { FundingDetail } from "@/Model/Funding";
import FundingDetailBtnSection from "./FundingDetailBtnSection";
import FundingInfoCost from "./FundingInfoCost";
import FundingInfoTag from "./FundingInfoTag";
import InfoDate from "./InfoDate";
import InfoHeader from "./InfoHeader";
import InfoOption from "./InfoOption";

export default function FundingInfo({
  fundingData,
}: Readonly<{
  fundingData: FundingDetail;
}>) {
  const {
    coin,
    funding: {
      university,
      curMoney,
      endTime,
      estimateStartTime,
      fundingId,
      goalMoney,
      rate,
      shortDescription,
      startTime,
      title,
      type,
    },
    isMine, //TODO: 여부에 따라 버튼 다르게 보여주기
    member,
    options,
  } = fundingData;
  return (
    // TODO: 반응형 생각하기
    <section className="w-[35.375rem] flex flex-col shrink-0">
      <FundingInfoTag member={member} type={type} university={university} />
      <InfoHeader title={title} shortDescription={shortDescription} />
      <InfoDate
        curMoney={curMoney}
        endTime={endTime}
        estimateStartTime={estimateStartTime}
        goalMoney={goalMoney}
        startTime={startTime}
        rate={rate}
      />
      <InfoOption options={options} />
      <FundingInfoCost coin={coin} />
      <FundingDetailBtnSection fundingId={fundingId} />
    </section>
  );
}
