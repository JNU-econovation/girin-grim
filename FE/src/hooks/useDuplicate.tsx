"use client";
import axios from "axios";
import { checkEmail } from "@/constants/urls";
import { joinForm } from "@/store/join";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";

export default function useDuplicate() {
  const form = useRecoilValue(joinForm);
  const { data, isLoading } = useQuery({
    queryKey: ["checkEmail"],
    queryFn: () => axios.post(checkEmail, { email: form.email }),
  });

  return { data };
}
