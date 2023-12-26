import { atom } from "recoil";

export const joinForm = atom<Form>({
  key: "joinForm",
  default: {
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
    university: [{ name: "전남대학교" }],
    agree: false,
    emailCheck: false,
    nameCheck: false,
  },
});
