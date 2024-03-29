import { userCoinUrl } from "@/constants/urls";
import { Server } from "./axios";
import { TPostResponse, TResponse } from "@/Model/Response";
import { Coin } from "@/Model/Coin";
import { getToken } from "@/utils/authenticate";

export const getCharge = async (): Promise<TResponse<Coin>> => {
  const data = Server.get(userCoinUrl, {
    headers: {
      Authorization: getToken(),
    },
  })
    .then((res) => res.data)
    .catch((err) => err.response.data);
  return data;
};

export const postCharge = async (coin: number): Promise<TPostResponse> => {
  const body = { coin };
  const data = await Server.post("/charge", body, {
    headers: {
      Authorization: getToken(),
    },
  }).then((res) => res.data);
  return data;
};
