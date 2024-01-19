import { atom } from "recoil";

export type UnivState = {
  region: string;
  q?: string;
};

export const UnivStateRegion = atom<string>({
  key: "UnivStateRegion",
  default: "전체",
});

export const UnivStateQ = atom<string>({
  key: "UnivStateQ",
  default: "",
});
