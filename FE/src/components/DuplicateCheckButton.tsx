"use client";

import { checkEmail } from "@/constants/urls";
import { joinForm } from "@/store/join";
import axios from "axios";
import { useRecoilState } from "recoil";

type Props = {
  type: "email" | "name";
};

export default function DuplicateCheckButton({ type }: Props) {
  const [form, setForm] = useRecoilState(joinForm);
  const checkIsOkToUse = async (e: React.MouseEvent<HTMLButtonElement>) => {
    alert("중복 확인");
    const answer = await axios.post(checkEmail, { email: form.email });
    if (answer.data === "true") {
      alert("중복된 이메일입니다.");
      setForm({ ...form, emailCheck: false });
    } else {
      alert("사용 가능한 이메일입니다.");
      setForm({ ...form, emailCheck: true });
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
