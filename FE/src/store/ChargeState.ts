import { atom } from "recoil";

export const TotalCoin = atom({
  key: "TotalCoin",
  default: 0,
});

export const SelectedOption = atom({
  key: "SelectedOption",
  default: -1,
});
