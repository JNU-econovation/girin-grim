"use client";
import { formComponent } from "@/constants/formComponent";
import JoinInput from "./JoinInput";
import SubmitBtn from "./SubmitBtn";
import { useRecoilValue } from "recoil";
import { favUniState, joinCheckState, joinState } from "@/store/JoinState";
import { join } from "@/apis/member";
import { useRouter } from "next/navigation";
import AgreementCheckbox from "../../common/AgreementCheckbox";
import Link from "next/link";
import UploadImage from "./UploadImage";
import JoinBtnInput from "./JoinBtnInput";

export default function JoinForm() {
  const { email, password, passwordCheck, name } = useRecoilValue(joinState);
  const { emailCheck, nameCheck, agree } = useRecoilValue(joinCheckState);
  const favUniversity = useRecoilValue(favUniState);
  const router = useRouter();
  const submitData = {
    email: email,
    password: password,
    nickname: name,
    favUniversity: favUniversity,
  };

  const submitJoinForm = async () => {
    if (passwordCheck !== password) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!emailCheck || !nameCheck || !agree) {
      alert("중복 확인 및 필수 동의사항을 동의해주세요!");
      return;
    }

    const { success, response, error } = await join(submitData); //TODO: 회원가입 여부 확인 및 오류 확인, 반환타입 정의
    if (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요 ㅠ");
      return;
    }
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
        if (item.id === "image") return <UploadImage key={item.id} />;
        if (item.id === "school")
          return <JoinBtnInput key={item.id} {...item} />;
        return (
          <JoinInput
            id={item.id}
            key={item.title}
            title={item.title}
            placeholder={item.placeholder}
            icon={item.icon}
            pattern={item.pattern}
            button={{
              ...item.button,
              component: item.button.component as React.ReactElement<any, any>,
            }}
            type={item.type}
            notice={item.notice}
          />
        );
      })}
      <AgreementCheckbox text="개인정보 수집 및 이용에 대한 동의" />
      <SubmitBtn />
      <Link href="/login" className="text-color9f9  flex gap-2">
        <span>&larr;</span>
        <span className="text-center border-b-2">로그인 되돌아가기</span>
      </Link>
    </form>
  );
}
