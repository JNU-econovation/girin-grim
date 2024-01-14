import { User } from "@/components/common/icon";

type Props = {
  url?: string;
};

export default function MemberHero({
  url = "https://girin-grim.s3.ap-northeast-2.amazonaws.com/avatar.jpeg",
}: Readonly<Props>) {
  return <User size="large" url={url} />;
}
