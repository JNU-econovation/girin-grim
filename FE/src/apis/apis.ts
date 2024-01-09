import { HomeFeedProps } from "./../hooks/useFeeds";
//TODO: 반환 타입 지정하기

import {
  fundingDetailURL,
  homeURL,
  joinURL,
  loginURL,
  univURL,
} from "@/constants/urls";
import { Server } from "./axios";
import { TOKEN_EXPIRED_TIME } from "@/constants/LoginData";
import { HomeFeed } from "@/Model/Feed";
import { Univs } from "@/Model/Univ";
import { TPostResponse, TResponse } from "@/Model/Response";
import { UnivState } from "@/store/HeaderState";
import { FundingDetail, FundingOptions, Pledge } from "@/Model/Funding";

export const checkDuplicate = async (email: string) => {
  const data = await Server.get(joinURL, { params: { email } }).then(
    (res) => res.data
  );
  // .catch((error) => {
  //   if (error.response.status === 400) {
  //     // 요청이 잘못되었습니다.
  //   }
  //   if (error.request.status === 423) {
  //     // 중복
  //     console.log("중복되었습니다!");
  //   }
  // });
  return data;
};

export const join = async (submitData: UserForm) => {
  const data = Server.post(joinURL, submitData).then((res) => res.data.success);
  return data;
};

export const login = async (submitData: LoginUser) => {
  //TODO: 에러 처리 추가하기
  Server.post(loginURL, submitData)
    .then((res) => {
      const {
        response: { accessToken, refreshToken },
      } = res.data;
      Server.defaults.headers.common["Authorization"] = accessToken; //TODO: Bearer 까지 받아오는지

      localStorage.setItem("accessToken", accessToken); //TODO: 쿠키로 바꾸기

      setTimeout(() => {
        //accessToken 만료 1분전에 refrechToken 으로 재발급
      }, TOKEN_EXPIRED_TIME - 6000);

      return true;
    })
    .catch((error) => {
      // if (error.response.status === 400) {
      //   // 요청이 잘못되었습니다.
      // }
      // if (error.response.status === 401) {
      //   // 비밀번호가 틀렸습니다.
      // }
      // if (error.response.status === 404) {
      //   // 존재하지 않는 이메일입니다.
      // }
    });
};

export const getHomeFeed = async ({
  //TODO:
  category,
  sort,
  uni,
  q,
}: HomeFeedProps): Promise<HomeFeed> => {
  const data = await Server.get(homeURL, {
    params: { category, sort, uni, q },
  }).then((res) => res.data);
  return data;
};

export const getUnivList = async ({
  region,
  q,
}: UnivState): Promise<TResponse<Univs>> => {
  console.log(region);
  const data = Server.get(univURL, {
    params: {
      region,
      q,
    },
  }).then((res) => res.data);
  return data;
};

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

//TODO: url 전역변수로 관리하기!!!!!

export const getUser = async (): Promise<
  TResponse<{
    memberId: number;
    image: string;
  }>
> => {
  const data = Server.get("/member").then((res) => res.data);
  return data;
};

export const getPledge = async (
  fundingId: number
): Promise<TResponse<Pledge>> => {
  const pledgeUrl = `/funding/${fundingId}/payment`;
  const data = Server.get(pledgeUrl).then((res) => res.data);
  return data;
};

export const getCharge = async () => {
  const data = Server.get("/charge").then((res) => res.data);
  return data;
};

export const postPayment = async (
  memberId: number,
  type: "DONATE" | "GIFT",
  option: FundingOptions[],
  price: number
): Promise<TPostResponse> => {
  const body = {
    memberId,
    type,
    option,
    price,
  };
  const data = Server.post(`/funding/payment`, body).then((res) => res.data);
  return data;
};
