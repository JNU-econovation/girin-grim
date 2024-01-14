import { Form } from "@/Model/user";
import { atom } from "recoil";

export const joinState = atom<Form>({
  key: "joinState",
  default: {
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
    agree: false,
    emailCheck: false,
    nameCheck: false,
    favUniversity: [{ favUniversityId: 0 }],
  },
});
