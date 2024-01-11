import { SelectedOption } from "@/Model/Funding";
import { getOptionData } from "./localData";

export const calTotalCost = (options: SelectedOption[]) => {
  let total = 0;
  options.forEach((option) => {
    total += option.amount * option.price;
  });
  return total;
};

export const getLocalTotalCost = () => {
  const options = getOptionData();
  const total = calTotalCost(options);
  return total;
};
