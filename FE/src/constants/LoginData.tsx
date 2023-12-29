import { Email, Password } from "@/components/common/icon";

export const TOKEN_EXPIRED_TIME = 1000 * 60 * 60;

export const LoginData = [
  {
    id: "email",
    title: "E-mail",
    type: "email",
    icon: <Email />,
    placeholder: "이메일 주소",
  },
  {
    id: "password",
    title: "Password",
    type: "password",
    icon: <Password />,
    placeholder: "비밀번호",
  },
];
