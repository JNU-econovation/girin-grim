import { BackedFunding, FundingMember, FundingOptions } from "./Funding";

export type Backed = {
  member: FundingMember;
  funding: BackedFunding;
  options: FundingOptions[];
} & {
  totalPrice: number;
  address: string;
};
