import useUser from "@/hooks/useUser";
import Image from "next/image";
import { User } from "../common/icon";
import Link from "next/link";

export default function UserImage() {
  const { data, isLoading, error } = useUser();
  if (isLoading || !data) return <User />;

  const { image, memberId } = data.response;
  return (
    <Link href={`/member/${memberId}`}>
      <Image
        src={image}
        alt="user icon"
        width={40}
        height={40}
        className="rounded-full"
      />
    </Link>
  );
}
