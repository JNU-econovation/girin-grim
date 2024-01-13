import { userCoinUrl } from "@/constants/urls";
import { Server } from "./axios";
import { TPostResponse, TResponse } from "@/Model/Response";
import { Coin } from "@/Model/Coin";

export const getCharge = async (): Promise<TResponse<Coin>> => {
  const data = Server.get(userCoinUrl).then((res) => res.data);
  return data;
};

export const postCharge = async (coin: number): Promise<TPostResponse> => {
  const data = await Server.post("/charge", {
    coin,
  }).then((res) => res.data);
  console.log(data);
  return data;
};
