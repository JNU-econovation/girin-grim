import {
  BackedFunding,
  FundingOptions,
  PledgeFunding,
  SelectedOption,
} from "@/Model/Funding";
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
      // isPickup: false,
    };
  });
  return optionData;
};

export const formatPledgeData = (paymentData: {
  memberId: number;
  type: "DONATE" | "GIFT";
  options: SelectedOption[];
  price: number;
  address: string;
}) => {
  const { memberId, type, options, price, address } = paymentData;

  const newOptions = options.map(({ optionId, amount }) => ({
    optionId,
    quantity: amount,
  }));
  const pledgeData = {
    memberId,
    type,
    options: newOptions,
    price,
    address,
  };
  return pledgeData;
};

export const formatPledgeFundingToBack = (
  input: PledgeFunding
): BackedFunding => {
  return { ...input, type: input.fundingType };
};
