import React from "react";

type Props = {
  text: string;
  handler?: () => void;
};

export default function StyledBtn({ text, handler }: Props) {
  return (
    <button
      className="w-full h-[4.375rem] bg-[#FF9A15] text-white font-nanum text-[1.5rem] tracking-[1.3px] rounded-[8px] mt-4"
      onClick={() => handler && handler()}
    >
      {text}
    </button>
  );
}
