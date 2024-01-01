import { atom } from "recoil";

export const UnivState = atom({
  key: "UnivState",
  default: {
    region: "",
    q: "",
  },
});
