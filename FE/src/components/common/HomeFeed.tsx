import Link from "next/link";
import FeedBox from "./FeedBox";
import { getMemeberId } from "@/utils/localData";

type Props = {
  fundgingId: number;
  image: string;
  university: string;
  nickname: string;
  title: string;
  short: string;
  dueDate: number;
  rate: number;
  memberId: number;
  page: "home" | "member";
};

export default function HomeFeed({
  page,
  fundgingId,
  image,
  university,
  nickname,
  title,
  short,
  dueDate,
  rate,
  memberId,
}: Readonly<Props>) {
  const loggedInMember = getMemeberId();
  const url =
    page === "home"
      ? `/funding/${fundgingId}`
      : `/member/${loggedInMember}/backed/${fundgingId}`;
  return (
    <Link href={url}>
      <FeedBox
        image={image}
        university={university}
        nickname={nickname}
        title={title}
        short={short}
        dueDate={dueDate}
        rate={rate}
        memberId={memberId}
      />
    </Link>
  );
}
