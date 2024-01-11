import { defaultSuppotInfoData } from "@/constants/Pledge";

export const formatSuppotData = (address: string) => {
  const suppotData = [...defaultSuppotInfoData];
  suppotData[1].value = address;
  return suppotData;
};
