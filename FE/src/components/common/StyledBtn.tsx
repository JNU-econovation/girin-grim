"use client";

type Props = {
  text: string;
  handler?: () => void;
  style?: string;
};

export default function StyledBtn({ text, handler, style }: Readonly<Props>) {
  return (
    <button
      className={`w-full h-[4.375rem] bg-[#FF9A15] text-white font-nanum text-[1.5rem] tracking-[1.3px] rounded-[8px] mt-4 ${style}`}
      onClick={() => handler && handler()}
    >
      {text}
    </button>
  );
}
