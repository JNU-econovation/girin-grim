import { FundingOptions, SelectedOption } from "@/Model/Funding";
import { atom, selector } from "recoil";

export const FundingOptionsState = atom<FundingOptions[]>({
  key: "FundingOptionsState",
  default: [],
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

export const TotalDonateState = atom<number>({
  key: "TotalDonateState",
  default: undefined,
});
