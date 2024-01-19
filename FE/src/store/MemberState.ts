import { atom } from "recoil";

export const isMineState = atom<boolean>({
  key: "isMine",
  default: false,
});
