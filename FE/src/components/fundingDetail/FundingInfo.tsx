import FundingDetailBtnSection from "./FundingDetailBtnSection";
import FundingInfoCost from "./FundingInfoCost";
import FundingInfoTag from "./FundingInfoTag";
import InfoDate from "./InfoDate";
import InfoHeader from "./InfoHeader";
import InfoOption from "./InfoOption";

export default function FundingInfo() {
  return (
    // TODO: 반응형 생각하기
    <section className="w-[35.375rem] flex flex-col">
      <FundingInfoTag />
      <InfoHeader />
      <InfoDate />
      <InfoOption />
      <FundingInfoCost />
      <FundingDetailBtnSection />
    </section>
  );
}
