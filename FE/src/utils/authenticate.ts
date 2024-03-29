import { TOKEN_EXPIRED_TIME } from "@/constants/LoginData";
import { getCookie, setCookie } from "./cookieUtil";

export const setToken = (accessToken: string, refreshToken: string) => {
  setCookie("accessToken", accessToken, TOKEN_EXPIRED_TIME);
  setTimeout(() => {
    //TODO: accessToken 만료 1분전에 refrechToken 으로 재발급
  }, TOKEN_EXPIRED_TIME - 6000);
};

export const getToken = () => getCookie("accessToken");

/**로그인 되어있는지 boolean 형식으로 반환 */
export const CheckIsLoggedIn = (): boolean => {
  const data = getToken();
  return data !== null;
};

export const logout = () => {
  setCookie("accessToken", "", -1);
};
