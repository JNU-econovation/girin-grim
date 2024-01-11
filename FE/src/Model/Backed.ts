import { FundingMember, FundingOptions, PledgeFunding } from "./Funding";

export type Backed = {
  member: FundingMember;
  funding: PledgeFunding;
  options: FundingOptions[];
} & {
  totalPrice: number;
  address: string;
};
