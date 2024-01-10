import { HeroFormatSize } from "@/utils/cssFormat";
import Image from "next/image";

type Props = {
  size?: "small" | "medium" | "large";
};

export default function User({ size }: Readonly<Props>) {
  const px = HeroFormatSize(size);
  return <Image src={"/assets/User.svg"} width={px} height={px} alt="Logo" />;
}
