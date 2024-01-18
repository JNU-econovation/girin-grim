import { FavUniversity } from "@/Model/Feed";
import { Form, JoinCheck } from "@/Model/User";
import { atom } from "recoil";

export const joinState = atom<Form>({
  key: "joinState",
  default: {
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
  },
});

export const imageUrlState = atom<string>({
  key: "imageUrlState",
  default: "",
});

export const imageFileState = atom<File>({
  key: "imageFileState",
  default: new File([""], ""),
});

export const joinCheckState = atom<JoinCheck>({
  key: "joinCheckState",
  default: {
    agree: false,
    emailCheck: false,
    nameCheck: false,
  },
});

export const favUniState = atom<FavUniversity[]>({
  key: "favUniState",
  default: [],
});

export const onFileModalState = atom<boolean>({
  key: "onFileModalState",
  default: false,
});
