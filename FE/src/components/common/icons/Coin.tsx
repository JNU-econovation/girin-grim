import Image from "next/image";

type Props = {
  size: "sm" | "md" | "lg";
  style?: string;
};

export default function Coin({ size, style }: Readonly<Props>) {
  const sizeClass =
    size == "sm"
      ? "w-5 h-5 text-[1.125rem] -translate-y-[0.1rem]"
      : size == "md"
      ? "w-6 h-6 text-[1.4rem]"
      : "w-8 h-8 + inline-block";
  return (
    <Image
      alt="Coin"
      src={"/assets/Coin.svg"}
      width={20}
      height={20}
      className={sizeClass + style}
    />
  );
}
