import { SelectedOption } from "@/Model/Funding";

export const calTotalCost = (options: SelectedOption[]) => {
  let total = 0;
  options.forEach((option) => {
    total += option.amount * option.price;
  });
  return total;
};
