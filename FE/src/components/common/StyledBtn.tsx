"use client";

type Props = {
  text: string;
  handler?: () => void;
  style?: string;
  disable?: boolean;
};

export default function StyledBtn({
  text,
  handler,
  style,
  disable = false,
}: Readonly<Props>) {
  return (
    <button
      disabled={disable}
      className={`w-full h-[4.375rem] bg-main text-white font-nanum text-[1.5rem] tracking-[1.3px] rounded-[8px] ${style}`}
      style={{ opacity: disable ? 0.5 : 1 }}
      onClick={() => handler && handler()}
    >
      {text}
    </button>
  );
}
