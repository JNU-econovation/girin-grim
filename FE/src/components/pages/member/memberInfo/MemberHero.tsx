import { User } from "@/components/common/icon";

type Props = {
  url?: string;
  isMine: boolean;
};

export default function MemberHero({ url, isMine }: Readonly<Props>) {
  if (isMine) return <User size="large" url={url} />;
  return <User size="xlarge" url={url} />;
}
