import { joinURL, loginURL, headerMemberUrl } from "@/constants/urls";
import { Server } from "./axios";
import { TOKEN_EXPIRED_TIME } from "@/constants/LoginData";
import { UserFeed } from "@/Model/Feed";
import { LoginUser, UserDetail, UserForm } from "@/Model/User";
import { Backed } from "@/Model/Backed";
import { TResponse } from "@/Model/Response";

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

export const getUser = async (): Promise<
  TResponse<{
    memberId: number;
    image: string;
  }>
> => {
  const data = Server.get(headerMemberUrl).then((res) => res.data);
  return data;
};

export const getUserDetail = async (
  memberId: number
): Promise<TResponse<UserDetail>> => {
  const data = await Server.get("/member/" + memberId).then((res) => res.data);
  return data;
};

export const getMyFunding = async (
  memberId: number
): Promise<TResponse<UserFeed>> => {
  const data = await Server.get(`/member/${memberId}/backed`).then(
    (res) => res.data
  );
  return data;
};

export const getBacked = async (
  memberId: number,
  fundingId: number
): Promise<TResponse<Backed>> => {
  const data = await Server.get(`/member/${memberId}/backed/${fundingId}`).then(
    (res) => res.data
  );
  return data;
};
