export type TResponse<T> = {
  success: boolean;
  response: T;
  error: any;
};
export type TPostResponse =
  | {
      success: true;
      response: null;
      error: null;
    }
  | {
      success: false;
      response: null;
      error: any;
    };
