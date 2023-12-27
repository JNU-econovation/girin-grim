//TODO: 반환 타입 지정하기

import { joinURL } from "@/constants/urls";
import { Server } from "./axios";

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
