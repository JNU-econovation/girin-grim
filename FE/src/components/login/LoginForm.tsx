"use client";
import { LoginData } from "@/constants/LoginData";
import LoginInput from "./LoginInput";
import AgreementCheckbox from "../common/AgreementCheckbox";
import LoginBtn from "./LoginBtn";
import { useRecoilValue } from "recoil";
import { LoginState } from "@/store/LoginState";
import { login } from "@/apis/apis";

export default function LoginForm() {
  const loginForm = useRecoilValue(LoginState);
  const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(loginForm);
  };
  return (
    <form className="mt-[2.68rem]" onSubmit={onsubmit}>
      {LoginData.map(({ id, title, type, icon, placeholder }) => (
        <LoginInput
          key={id}
          title={title}
          type={type}
          icon={icon}
          placeholder={placeholder}
        />
      ))}
      <AgreementCheckbox text="로그인 상태 유지" style="mt-[1rem]" />
      <LoginBtn />
    </form>
  );
}
