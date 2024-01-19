import { univURL } from "@/constants/urls";
import { Server } from "./axios";
import { UnivState } from "@/store/HeaderState";
import { TResponse } from "@/Model/Response";
import { Univs } from "@/Model/Univ";

export const getUnivList = async ({
  region,
  q,
}: UnivState): Promise<TResponse<Univs>> => {
  const data = Server.get(univURL, {
    params: {
      region,
      q,
    },
  }).then((res) => res.data);
  return data;
};
