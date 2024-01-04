import FundingInfoTag from "./FundingInfoTag";
import InfoDate from "./InfoDate";
import InfoHeader from "./InfoHeader";
import InfoOption from "./InfoOption";

export default function FundingInfo() {
  return (
    // TODO: 반응형 생각하기
    <section className="w-[35.375rem]">
      <FundingInfoTag />
      <InfoHeader />
      <InfoDate />
      <InfoOption />
    </section>
  );
}
