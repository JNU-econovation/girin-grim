import { atom } from "recoil";

export const joinForm = atom<Form>({
  key: "joinForm",
  default: {
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
    agree: false,
    emailCheck: false,
    nameCheck: false,
  },
});
