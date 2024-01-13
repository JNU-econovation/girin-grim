"use client";
import { checkDuplicate } from "@/apis/apis";
import { joinState } from "@/store/JoinState";
import { useRecoilState } from "recoil";

type Props = {
  type: "email" | "name";
};

export default function DuplicateCheckButton({ type }: Props) {
  const [form, setForm] = useRecoilState(joinState);
  const text = type === "email" ? "이메일" : "닉네임";

  //handler
  const checkIsOkToUse = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { success } = await checkDuplicate(form.email);

    if (success) {
      alert(`사용 가능한 ${text}입니다.`);
      if (type === "email") setForm({ ...form, emailCheck: true });
      else setForm({ ...form, nameCheck: true });
    } else {
      alert(`중복된 ${text}입니다.`);
      if (type === "email") setForm({ ...form, emailCheck: false });
      else setForm({ ...form, nameCheck: false });
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
