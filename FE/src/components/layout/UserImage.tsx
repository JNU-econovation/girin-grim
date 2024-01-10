import useUser from "@/hooks/useUser";
import { User } from "../common/icon";
import Link from "next/link";
import { setMemberId } from "@/utils/localData";
import { HeroFormatClass } from "@/utils/cssFormat";

type Props = {
  size?: "small" | "medium" | "large";
};

export default function UserImage({ size = "small" }: Readonly<Props>) {
  const { data, isLoading, error } = useUser();
  const sizeClass = HeroFormatClass(size);

  if (isLoading || !data) return <User />;
  const { image, memberId } = data.response;
  setMemberId(memberId);

  return (
    <Link href={`/member/${memberId}`}>
      <div
        className={`${sizeClass} rounded-full`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Link>
  );
}
