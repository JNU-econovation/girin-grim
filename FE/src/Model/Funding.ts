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
  startTime: "2024-01-03T09:36:00" | string;
  endTime: "2024-10-13T22:36:00" | string;
  estimateStartTime: "2024-10-12T22:36:00" | string;
  rate: number;
  curMoney: number;
  goalMoney: number;
};

export type FundingOptions = {
  optionId: number;
  name: string;
  price: number;
  quantity: number;
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
  type: "DONATE" | "GIFT";
  title: string;
  image: string;
  university: string;
  dueDate: number;
};

export type FundingMember = {
  memberId: number;
  nickname: string;
};
