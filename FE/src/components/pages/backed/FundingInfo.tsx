import { BackedFunding, FundingMember } from "@/Model/Funding";
import InfoSection from "../../common/InfoSection";

type Props = {
  funding: BackedFunding;
  member: FundingMember;
};

export default function FundingInfo({ funding, member }: Readonly<Props>) {
  return <InfoSection funding={funding} member={member} />;
}
