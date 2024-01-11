import { InfoConst, UserDetailMemberInfo } from "@/Model/User";
import { arrayArr, iconArr, indexArr, titleArr } from "@/constants/memberData";

export const formatMemberData = (memberData: UserDetailMemberInfo) => {
  const data: InfoConst[] = [];
  makeInfoData(memberData, data);
  return data;
};

const makeInfoData = (memberData: UserDetailMemberInfo, data: InfoConst[]) => {
  const arrLength = 5;
  for (let i = 0; i < arrLength; i++) {
    const index = indexArr[i];
    const title = titleArr[i];
    const icon = iconArr[i];
    const array = arrayArr[i];
    const content = memberData[index as keyof UserDetailMemberInfo];
    if (content === null) continue;

    const item = {
      content,
      title,
      icon,
      array,
    } as InfoConst;
    data.push(item);
  }
};
