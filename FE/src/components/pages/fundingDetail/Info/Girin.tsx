import { Bubble } from "@/components/common/icon";
import Image from "next/image";

export default function Girin({
  height,
  rate,
}: Readonly<{ height: number; rate: number }>) {
  const degree = height / 26;
  const src = `/assets/Girin${
    degree < 0.25 ? "" : degree < 0.5 ? "1" : degree < 0.75 ? "2" : "3"
  }.svg`;
  return (
    <div className="sticky z-30">
      <Image
        src={src}
        alt=""
        width={112}
        height={140}
        className={`z-30 -top-32 translate-x-1 translate-y-2 scale-110`}
      />
      <div className="absolute z-40 translate-x-24 -translate-y-14">
        <Bubble />
        <span className="absolute translate-x-10 -translate-y-9 text-white font-semibold">
          {rate}%
        </span>
      </div>
    </div>
  );
}
