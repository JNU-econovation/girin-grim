import { atom } from "recoil";

export const HomeState = atom({
  key: "HomeState",
  default: {
    q: "",
    uni: "",
    sort: "highest",
    category: "",
    key: "",
  },
});
