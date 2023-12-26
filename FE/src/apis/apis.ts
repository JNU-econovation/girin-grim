import { checkEmail } from "@/constants/urls";
import axios from "axios";

const checkDuplicate = async (email: string) =>
  await axios.post(checkEmail, { email });
