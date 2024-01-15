import { Form } from "@/Model/User";
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
    favUniversity: [{ favUniversityId: 1 }],
  },
});

export const imageUrlState = atom<string>({
  key: "imageUrlState",
  default: "",
});
