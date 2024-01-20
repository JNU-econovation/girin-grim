"use client";

import { useState } from "react";
import Creator from "./modal/Creator";

type Props = {
  title: string;
  placeholder: string;
  icon: JSX.Element | null;
  type: string;
  notice: string;
};

export default function JoinBtnInput({
  title,
  placeholder,
  icon,
  notice,
}: Readonly<Props>) {
  const [onModal, setOnModal] = useState(false);

  return (
    <div className="my-[1.1rem] ">
      <h3 className="font-nanum text-input_title text-xl">{title}</h3>
      <div className="w-full bg-slate-50 relative flex">
        <div className="absolute top-1/2 left-[1rem] -translate-y-1/2">
          {icon}
        </div>
        <button
          className={`w-full p-4 h-[3.75rem] rounded-[0.3rem] outline-none border-2 font-nanum text-input_title text-sm`}
          value="관심 학교 선택"
          onClick={(e) => {
            e.preventDefault();
            setOnModal(true);
          }}
        >
          {placeholder}
        </button>
      </div>
      <span className="font-nanum text-grey text-[0.625rem]">{notice}</span>
      {onModal && <Creator close={() => setOnModal(false)} id="school" />}
    </div>
  );
}
