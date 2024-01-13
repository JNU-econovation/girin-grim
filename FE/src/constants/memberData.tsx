import CargeBtn from "@/components/pages/member/memberInfo/CargeBtn";

export const indexArr: IndexArrType = [
  "coin",
  "aboutMe",
  "email",
  "address",
  "university",
];
export const titleArr: TitleArrType = [
  "크레파스",
  "자기소개",
  "연락처",
  "주소",
  "관심 대학",
];
export const iconArr: IconArrType = [<CargeBtn />, null, null, null, null];
export const arrayArr: ArrayArrType = [false, false, false, false, true];

export type IndexArrType = [
  "coin",
  "aboutMe",
  "email",
  "address",
  "university"
];
export type TitleArrType = [
  "크레파스",
  "자기소개",
  "연락처",
  "주소",
  "관심 대학"
];

export type IconArrType = [JSX.Element, null, null, null, null];
export type ArrayArrType = [false, false, false, false, true];
