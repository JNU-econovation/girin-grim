import { FundingMember, PledgeFunding } from "@/Model/Funding";
import InfoSection from "../common/InfoSection";

type Props = {
  funding: PledgeFunding;
  member: FundingMember;
};

export default function FundingInfo({ funding, member }: Readonly<Props>) {
  return <InfoSection funding={funding} member={member} />;
}
