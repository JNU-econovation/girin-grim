import useUser from "@/hooks/useUser";
import { ToggleArrow, User } from "../../common/icon";
import Link from "next/link";
import { setMemberId } from "@/utils/localData";
import { HeroFormatSize } from "@/utils/cssFormat";
import UserModal from "./modal/UserModal";
import { useState } from "react";

type Props = {
  size?: "small" | "medium" | "large";
};

export default function UserImage({ size = "small" }: Readonly<Props>) {
  const [isOn, setIsOn] = useState(false);
  const { data, isLoading, error } = useUser();
  const sizeClass = HeroFormatSize(size);
  if (isLoading || !data) return <User />;
  let { image, memberId } = data.response;
  setMemberId(memberId);
  image = image || process.env.NEXT_PUBLIC_DEFAULT_USER_IMAGE!;
  return (
    <>
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
      <button onClick={() => setIsOn((prev) => !prev)}>
        <ToggleArrow />
      </button>
      {isOn && <UserModal />}
    </>
  );
}
