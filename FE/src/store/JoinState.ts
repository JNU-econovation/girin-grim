import { Form } from "@/Model/User";
import { atom } from "recoil";

export const joinState = atom<Form>({
  key: "joinState",
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
