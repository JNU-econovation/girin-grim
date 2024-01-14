"use client";
import { LoginData } from "@/constants/LoginData";
import LoginInput from "./LoginInput";
import AgreementCheckbox from "../../common/AgreementCheckbox";
import LoginBtn from "./LoginBtn";
import { useRecoilValue } from "recoil";
import { LoginState } from "@/store/LoginState";
import { login } from "@/apis/member";

export default function LoginForm() {
  const loginForm = useRecoilValue(LoginState);
  const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await login(loginForm);
    if (data.success) {
      alert("로그인 성공");
    } else {
      alert(data);
    }
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
