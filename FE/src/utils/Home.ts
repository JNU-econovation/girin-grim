import { FavUniversity } from "@/Model/Feed";
import { CheckIsLoggedIn } from "./authenticate";

export const getunivHeader = (isSelected: boolean, univName: string) => {
  return isSelected ? "대학 보기: " + univName : "관심 대학";
};

export const getUnivText = (
  isSelected: boolean,
  favUniversity: FavUniversity[]
) => {
  if (!favUniversity) favUniversity = [];
  if (!CheckIsLoggedIn()) return "비로그인상태입니다. 로그인 해주세요.";
  return isSelected ? "" : favUniversity.map(({ name }) => name).join(", ");
};
