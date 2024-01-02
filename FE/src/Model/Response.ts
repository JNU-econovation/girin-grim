export type TResponse<T> = {
  success: boolean;
  response: T;
  error: any;
};
