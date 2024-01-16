"use client";
import { checkDuplicate } from "@/apis/member";
import { joinCheckState, joinState } from "@/store/JoinState";
import { useRecoilState } from "recoil";

type Props = {
  type: "email" | "name";
};

export default function DuplicateCheckButton({ type }: Readonly<Props>) {
  const [form, setForm] = useRecoilState(joinState);
  const [check, setCheck] = useRecoilState(joinCheckState);
  const text = type === "email" ? "이메일" : "닉네임";

  //handler
  const checkIsOkToUse = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { success } = await checkDuplicate({
      nickname: form.name,
      email: form.email,
      type,
    });

    if (success) {
      alert(`사용 가능한 ${text}입니다.`);
      if (type === "email") setCheck({ ...check, emailCheck: true });
      else setCheck({ ...check, nameCheck: true });
    } else {
      alert(`중복된 ${text}입니다.`);
      if (type === "email") setCheck({ ...check, emailCheck: false });
      else setCheck({ ...check, nameCheck: false });
    }
  };

  return (
    <button
      className="w-[8.13rem] h-[3.75rem] text-center border-2 shrink-0 ml-[0.625rem] rounded-[5px] flex justify-center items-center font-nanum text-[0.87rem] text-[#717184] cursor-default"
      onClick={checkIsOkToUse}
    >
      중복 확인
    </button>
  );
}
