import { Tag } from "../common/icon";

export default function FundingInfoTag() {
  return (
    <p className="flex gap-1 text-color656">
      {/* 696969 없어서 656565로. */}
      <Tag />
      <span className="font-bold">수령형</span>
      <span>{","}</span>
      <span>전남대학교</span>
      <span>{" >"}</span>
      <span className="font-extrabold">비즈 사랑 동아리 '비사동'</span>
    </p>
  );
}
