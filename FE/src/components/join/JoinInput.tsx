"use client";

import { joinState } from "@/store/JoinState";
import { useRecoilState } from "recoil";

type Props = {
  id: string;
  title: string;
  placeholder: string;
  pattern: string | RegExp;
  icon: JSX.Element | null;
  button: {
    exist: boolean;
    component?: JSX.Element | null;
  };
  type: string;
  notice: string;
};

export default function JoinInput({
  id,
  title,
  placeholder,
  // pattern,
  icon,
  type,
  notice,
  button: { exist, component },
}: Readonly<Props>) {
  const [value, setValue] = useRecoilState(joinState);

  const handleChagne = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (id === "email") {
      setValue({ ...value, emailCheck: false });
    }
    if (id === "name") {
      setValue({ ...value, nameCheck: false });
    }
    setValue({ ...value, [id]: e.target.value });
  };
  return (
    <div className="my-[1.1rem] ">
      <h3 className="font-nanum text-input_title text-[1.25rem]">{title}</h3>
      <div className="w-full bg-slate-50 relative flex">
        {icon && (
          <div className="absolute top-1/2 left-[1rem] -translate-y-1/2">
            {icon}
          </div>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={`w-full p-4 h-[3.75rem] rounded-[0.3rem] outline-none border-2 font-nanum text-input_title text-[0.87rem] ${
            type == "button" ? "" : "pl-[3.12rem]"
          }`}
          value={type == "button" ? "관심 학교 선택" : value[id]}
          onChange={handleChagne}
        />
        {exist && <div>{component}</div>}
      </div>
      <span className="font-nanum text-grey text-[0.625rem]">{notice}</span>
    </div>
  );
}
