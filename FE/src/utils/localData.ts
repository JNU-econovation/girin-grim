import { SelectedOption } from "@/Model/Funding";
import { LocalData } from "@/Model/Local";

/**로컬상에 데이터가 없다면 memberId = 0, option = [] 로 초기화 해준다.
 * 단순히 로컬 데이터를 다루는 함수에 맨 처음 사용해도 좋다.
 */
const initLocalData = () => {
  const data = localStorage.getItem("UserData");
  initInsufficient();
  if (!data) setLocalData(0, [], 0);
};

/**입력받은 memberid, options, cost로 로컬데이터를 저장한다. */
export const setLocalData = (
  memberId: number,
  options: SelectedOption[],
  DonateCost: number
) => {
  const data: LocalData = {
    memberId,
    options,
    DonateCost,
  };
  localStorage.setItem("UserData", JSON.stringify(data));
};

/**저장된 로컬 데이터를 반환. 없으면 빈 객체 반환 */
export const getLocalData = (): LocalData => {
  const data = localStorage.getItem("UserData");
  return JSON.parse(data!);
};

/** 로컬상에 memberId만 저장한다. option은 기존의 내용을 그대로 유지한다. */
export const setMemberId = (memberId: number) => {
  initLocalData();
  const data = getLocalData();
  data.memberId = memberId;
  setLocalData(data.memberId, data.options, data.DonateCost);
};
export const getMemeberId = () => {
  initLocalData();
  const data = getLocalData();
  return data.memberId;
};

/**옵션을 받아서 로컬 데이터를 업데이트한다. */
export const updateLocalOption = (option: SelectedOption[]) => {
  initLocalData();
  const data = getLocalData();
  data.options = option;
  setLocalData(data.memberId, data.options, data.DonateCost);
};

/**옵견값만 가져온다. */
export const getOptionData = () => {
  initLocalData();
  const data = getLocalData();
  return data.options;
};

export const setDonateCost = (cost: number) => {
  initLocalData();
  const data = getLocalData();
  data.DonateCost = cost;
  setLocalData(data.memberId, data.options, data.DonateCost);
};

export const initInsufficient = () => {
  localStorage.setItem("require", "0");
};

/**부족한 금액을 가져옵니다. */
export const getInsufficient = () => {
  const data = localStorage.getItem("require");
  return data ? parseInt(data) : 0;
};

export const setInsufficient = (cost: number) => {
  localStorage.setItem("require", cost.toString());
};

export const resetStorate = () => {
  const member = getMemeberId();
  localStorage.clear();
  setMemberId(member);
};
