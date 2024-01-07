import { FundingDetail } from "@/Model/Funding";
import FundingDetailBtnSection from "./FundingDetailBtnSection";
import FundingInfoCost from "./FundingInfoCost";
import FundingInfoTag from "./FundingInfoTag";
import InfoDate from "./InfoDate";
import InfoHeader from "./InfoHeader";
import InfoOption from "./InfoOption";

export default function FundingInfo({
  fundingData,
}: {
  fundingData: FundingDetail;
}) {
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
    isMine,
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
      />
      <InfoOption options={options} />
      <FundingInfoCost coin={coin} />
      <FundingDetailBtnSection />
    </section>
  );
}
