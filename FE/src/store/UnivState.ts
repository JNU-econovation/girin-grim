import { atom } from "recoil";

export const UnivState = atom<UnivState>({
  key: "UnivState",
  default: {
    region: "전체",
    q: "",
  },
});

export type UnivState = {
  region: string;
  q: string;
};
