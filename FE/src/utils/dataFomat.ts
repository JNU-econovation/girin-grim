import { FundingOptions, SelectedOption } from "@/Model/Funding";
import { defaultSuppotInfoData } from "@/constants/Pledge";

export const formatSuppotData = (address: string) => {
  const suppotData = [...defaultSuppotInfoData];
  suppotData[1].value = address;
  return suppotData;
};

export const formatOptionData = (
  options: FundingOptions[]
): SelectedOption[] => {
  const optionData: SelectedOption[] = options.map((option) => {
    const { items, name, optionId, price, quantity } = option;
    return {
      items,
      name,
      optionId,
      price,
      quantity,
      amount: quantity,
    };
  });
  return optionData;
};
