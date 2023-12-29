"use client";
import axios from "axios";
import { checkEmail } from "@/constants/urls";
import { joinState } from "@/store/JoinState";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";

export default function useDuplicate() {
  const form = useRecoilValue(joinState);
  const { data, isLoading } = useQuery({
    queryKey: ["checkEmail"],
    queryFn: () => axios.post(checkEmail, { email: form.email }),
  });

  return { data };
}
