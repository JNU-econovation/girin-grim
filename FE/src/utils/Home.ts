import { FavUniversity } from "@/Model/Feed";

export const getunivHeader = (isSelected: boolean, univName: string) => {
  return isSelected ? "대학 보기: " + univName : "관심 대학";
};

export const getUnivText = (
  isSelected: boolean,
  favUniversity: FavUniversity[]
) => {
  !favUniversity && (favUniversity = []);
  return isSelected ? "" : favUniversity.map(({ name }) => name).join(", ");
};
