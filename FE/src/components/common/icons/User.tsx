import { defaultUerImageUrl } from "@/constants/commonData";
import { HeroFormatSize } from "@/utils/cssFormat";
import Image from "next/image";

type Props = {
  size?: "small" | "medium" | "large";
  url?: string | null;
};

export default function User({ size = "small", url }: Readonly<Props>) {
  const px = HeroFormatSize(size);
  return (
    <Image
      src={url ?? defaultUerImageUrl}
      width={px}
      height={px}
      alt="Logo"
      className="rounded-full"
    />
  );
}
