import { User } from "@/components/common/icon";

type Props = {
  url?: string;
};

export default function MemberHero({ url }: Readonly<Props>) {
  return <User size="large" url={url} />;
}
