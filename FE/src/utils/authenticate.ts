import { Server } from "@/apis/axios";
import { TOKEN_EXPIRED_TIME } from "@/constants/LoginData";

export const setToken = (accessToken: string, refreshToken: string) => {
  //TODO: 쿠키로 바꾸기

  Server.defaults.headers.common["Authorization"] = accessToken;
  localStorage.setItem("accessToken", accessToken);
  setTimeout(() => {
    //accessToken 만료 1분전에 refrechToken 으로 재발급
  }, TOKEN_EXPIRED_TIME - 6000);
};
