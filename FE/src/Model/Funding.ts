export type FundingDetail = {
  isMine: boolean;
  coin: number;
  member: FundingMember;
  funding: Funding;
  options: FundingOptions[];
};

export type Funding = {
  fundingId: number;
  type: "DONATE" | "GIFT";
  title: string;
  image: string;
  university: string;
  shortDescription: string;
  startTime: string;
  endTime: string;
  estimateStartTime: string;
  rate: number;
  curMoney: number;
  goalMoney: number;
};

export type FundingOptions = {
  optionId: number;
  name: string;
  price: number;
  quantity: number;
  isPickup: boolean;
  items: {
    itemId: number;
    name: string;
  }[];
};

/**기존 funding의 option에 amount값 추가된 타입 */
export type SelectedOption = FundingOptions & { amount: number };

export type Pledge = {
  member: FundingMember;
  funding: PledgeFunding;
  supporter: {
    // coin: 500000;
    address: string;
  };
};

export type PledgeFunding = {
  fundingId: number;
  fundingType: "DONATE" | "GIFT";
  title: string;
  image: string;
  university: string;
  dueDate: number;
};

export type FundingMember = {
  memberId: number;
  nickname: string;
};

export type BackedFunding = {
  fundingId: number;
  type: "DONATE" | "GIFT";
  title: string;
  image: string;
  university: string;
  dueDate: number;
};
