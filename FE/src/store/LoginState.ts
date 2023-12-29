import { atom } from "recoil";

export const LoginState = atom<LoginUser>({
  key: "LoginState",
  default: {
    email: "",
    password: "",
  },
});
