import { checkEmail } from "@/constants/urls";
import axios from "axios";

const checkDuplicate = async (email: string) =>
  await axios.post(checkEmail, { email });

export const join = async (submitData: UserForm) => {
  const data = axios
    .post(
      "https://0639269c-7ac9-4549-a365-7f18580a1283.mock.pstmn.io/api/member/join",
      submitData
    )
    .then((res) => res.data.success);
  return data;
};
