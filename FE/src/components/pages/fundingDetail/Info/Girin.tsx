import Bubble from "@/components/common/icons/Bubble";
import Image from "next/image";

export default function Girin({
  height,
  rate,
}: Readonly<{ height: number; rate: number }>) {
  const degree = height / 29;
  const src = `/assets/Girin${
    degree < 0.25 ? "" : degree < 0.5 ? "1" : degree < 0.75 ? "2" : "3"
  }.svg`;
  return (
    <div className=" z-30 relative">
      <Image
        src={src}
        alt=""
        width={112}
        height={140}
        className={`z-30 -top-32 translate-x-1 translate-y-2 scale-125`}
      />
      <Bubble rate={rate} />
    </div>
  );
}
