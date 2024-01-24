import { defaultUerImageUrl } from "@/constants/commonData";
import { HeroFormatSize } from "@/utils/cssFormat";
import Image from "next/image";

type Props = {
  size?: "small" | "medium" | "large" | "xlarge";
  url?: string | null;
};

export default function User({ size = "small", url }: Readonly<Props>) {
  const px = HeroFormatSize(size);
  return (
    <div
      className="rounded-full -z-50 relative shadow-sm"
      style={{
        width: px + "px",
        height: px + "px",
        backgroundColor: "#E5E5E5",
        backgroundImage: `url(${url || defaultUerImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
