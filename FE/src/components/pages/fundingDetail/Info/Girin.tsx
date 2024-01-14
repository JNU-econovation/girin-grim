import Image from "next/image";

export default function Girin({ height }: Readonly<{ height: number }>) {
  const degree = height / 30;
  const src = `/assets/Girin${
    degree < 0.25 ? "" : degree < 0.5 ? "1" : degree < 0.75 ? "2" : "3"
  }.svg`;
  return (
    <Image
      src={src}
      alt=""
      width={112}
      height={140}
      className={`z-30 -top-32 -translate-x-3 scale-150`}
    />
  );
}
