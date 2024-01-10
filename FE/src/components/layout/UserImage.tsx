import useUser from "@/hooks/useUser";
import { User } from "../common/icon";
import Link from "next/link";
import { setMemberId } from "@/utils/localData";
import { HeroFormatSize } from "@/utils/cssFormat";

type Props = {
  size?: "small" | "medium" | "large";
};

export default function UserImage({ size = "small" }: Readonly<Props>) {
  const { data, isLoading, error } = useUser();
  const sizeClass = HeroFormatSize(size);
  if (isLoading || !data) return <User />;
  const { image, memberId } = data.response;
  setMemberId(memberId);

  return (
    <Link href={`/member/${memberId}`}>
      <div
        className="rounded-full relative z-50"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: `${sizeClass}px`,
          height: `${sizeClass}px`,
        }}
      />
    </Link>
  );
}
