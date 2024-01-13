import { FundingDetail, FundingOptions, Pledge } from "@/Model/Funding";
import { TPostResponse, TResponse } from "@/Model/Response";
import { Server } from "./axios";
import { fundingDetailURL } from "@/constants/urls";

export const getFundingDetail = async (
  fundingId: number
): Promise<TResponse<FundingDetail>> => {
  //TODO: 반환 타입 지정하기
  const data = Server.get(fundingDetailURL + fundingId).then((res) => res.data);
  return data;
};

export const getFundingLongDescription = async (
  fundingId: number
): Promise<TResponse<{ longDescription: string }>> => {
  const data = Server.get(fundingDetailURL + fundingId + "/description").then(
    (res) => res.data
  );
  return data;
};

export const getPledge = async (
  fundingId: number
): Promise<TResponse<Pledge>> => {
  const pledgeUrl = `/funding/${fundingId}/payment`;
  const data = Server.get(pledgeUrl).then((res) => res.data);
  return data;
};

export const postPayment = async (
  memberId: number,
  type: "DONATE" | "GIFT",
  option: FundingOptions[],
  price: number,
  fundingId: number
): Promise<TPostResponse> => {
  const pledgeUrl = `/funding/${fundingId}/payment`;
  const body = {
    memberId,
    type,
    option,
    price,
  };
  const data = await Server.post(pledgeUrl, body).then((res) => res.data);
  return data;
};
