export type Funding = {
  isMine: boolean;
  coin: number;
  member: {
    memberId: number;
    nickname: string;
  };
  funding: {
    fundingId: number;
    type: "DONATE" | "GIFT";
    title: string;
    image: string;
    university: string;
    shortDescription: string;
    startTime: "2024-01-03T09:36:00";
    endTime: "2024-10-13T22:36:00";
    estimateStartTime: "2024-10-12T22:36:00";
    rate: number;
    curMoney: number;
    goalMoney: number;
  };
  options: FundingOptions[];
};

type FundingOptions = {
  optionId: number;
  name: string;
  price: number;
  quantity: number;
  items: {
    itemId: number;
    name: string;
  }[];
};
