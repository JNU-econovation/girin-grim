import { Tag } from "../../common/icon";

type Props = {
  type: "DONATE" | "GIFT";
  member: {
    memberId: number;
    nickname: string;
  };
  university: string;
};

export default function FundingInfoTag({ type, member, university }: Props) {
  const typeText = type === "DONATE" ? "기부형" : "수령형";
  return (
    <p className="flex gap-1 text-color656">
      {/* 696969 없어서 656565로. */}
      <Tag />
      <span className="font-bold">{typeText}</span>
      <span>{","}</span>
      <span>{university}</span>
      <span>{" >"}</span>
      <span className="font-extrabold">{member.nickname}</span>
    </p>
  );
}
