"use client";
import { formComponent } from "@/constants/formComponent";
import JoinInput from "./JoinInput";
import SubmitBtn from "./SubmitBtn";
import { useRecoilValue } from "recoil";
import { joinForm } from "@/store/join";
import { join } from "@/apis/apis";
import { useRouter } from "next/navigation";

export default function JoinForm() {
  const data = useRecoilValue(joinForm);
  const router = useRouter();
  const submitData = {
    email: data.email,
    password: data.password,
    nickname: data.name,
    university: data.university,
  };

  const submitJoinForm = async () => {
    const data = await join(submitData); //TODO: 회원가입 여부 확인 및 오류 확인
    alert("회원가입이 완료되었습니다.");
    router.push("/login");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitJoinForm();
      }}
    >
      {formComponent.map((item) => {
        return (
          <JoinInput
            id={item.id}
            key={item.title}
            title={item.title}
            placeholder={item.placeholder}
            icon={item.icon}
            button={{
              ...item.button,
              component: item.button.component as React.ReactElement<any, any>,
            }}
            type={item.type}
            notice={item.notice}
          />
        );
      })}
      <div className="flex items-center gap-2">
        <input type="checkbox" id="scales" name="scales" />
        <label
          htmlFor="scales"
          className="text-[0.875rem] text-[#525252] text-sm"
        >
          개인정보 수집 및 이용에 대한 동의
        </label>
      </div>
      <SubmitBtn />
    </form>
  );
}
