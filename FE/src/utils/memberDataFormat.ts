import { InfoConst, UserDetailMemberInfo } from "@/Model/User";

const indexArr = ["coin", "aboutMe", "email", "address", "university"];
const titleArr = ["크레파스", "자기소개", "연락처", "주소", "관심 대학"];
const iconArr = ["icon", null, null, null, null];
const arrayArr = [false, false, false, false, true];
const arrLength = 5;

export const formatMemberData = (memberData: UserDetailMemberInfo) => {
  const data: InfoConst[] = [];
  makeInfoData(memberData, data);
  return data;
};

const makeInfoData = (memberData: UserDetailMemberInfo, data: InfoConst[]) => {
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
