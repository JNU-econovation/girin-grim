import { FundingDetail } from "@/Model/Funding";
import FundingDetailBtnSection from "./FundingDetailBtnSection";
import FundingInfoCost from "./FundingInfoCost";
import FundingInfoTag from "./FundingInfoTag";
import InfoDate from "./InfoDate";
import InfoHeader from "./InfoHeader";
import InfoOption from "./InfoOption";
import InfoDonate from "./InfoDonate";

type Props = {
  fundingData: FundingDetail;
  isOnGoing: boolean;
};

export default function FundingInfo({
  fundingData,
  isOnGoing,
}: Readonly<Props>) {
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
      {type === "GIFT" && <InfoOption options={options} />}
      {type === "DONATE" && <InfoDonate isOnGoing={isOnGoing} />}
      <FundingInfoCost coin={coin} type={type} />
      <FundingDetailBtnSection
        fundingId={fundingId}
        type={type}
        isMine={isMine}
        isOnGoing={isOnGoing}
      />
    </section>
  );
}
