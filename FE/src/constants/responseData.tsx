import { TPostResponse } from "@/Model/Response";

export const defaultPostResponseData: TPostResponse = {
  success: true,
  response: null,
  error: null,
};

export const JoinPostResponseError = {
  success: false,
  response: null,
  error: {
    message: "글자를 입력해주세요!",
  },
};
