import { FundingOptions, SelectedOption } from "@/Model/Funding";
import { getFundingDetail } from "@/apis/apis";
import { RecoilValueReadOnly, atom, selector } from "recoil";

//TODO: 타입 지정하기

export const FundingInfoTagState = atom({
  key: "FundingInfoTagState",
  default: {
    type: "GIFT",
    university: "",
    nickname: "",
  },
});

export const FundingInfoDetailState = atom({
  key: "FundingInfoDetailState",
  default: {
    title: "",
    shortDescription: "",
  },
});

export const FundingInfoMetaState = atom({
  key: "FundingInfoMetaState",
  default: {
    startTime: "",
    endTime: "",
    estimateStartTime: "",
  },
});

export const FundingInfoCostState = atom({
  key: "FundingInfoCostState",
  default: {
    rate: 0,
    curMoney: 0,
    goalMoney: 0,
  },
});

export const FundingOptionsState = atom<FundingOptions[]>({
  key: "FundingOptionsState",
  default: [],
});

export const FundingDetailState = selector({
  key: "FundingDetailState",
  get:
    ({ get }) =>
    async (fundingId: number) => {
      const {
        error,
        response: data,
        success,
      } = await getFundingDetail(fundingId);

      return { data, error };
    },
});

export const SelectedOptions = atom<SelectedOption[]>({
  key: "SelectedOptions",
  default: [],
});

export const TotalCostState = selector({
  key: "TotalCostState",
  get: ({ get }) => {
    const options = get(SelectedOptions);
    const totalCost = options.reduce(
      (acc, cur) => acc + cur.amount * cur.price,
      0
    );
    return totalCost;
  },
});
