"use client";
import { checkEmail } from "@/constants/urls";
import { joinForm } from "@/store/join";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRecoilValue } from "recoil";

export default function useDuplicate() {
  const form = useRecoilValue(joinForm);

  const mutate = useMutation({
    mutationFn: () => {
      return axios.post(checkEmail, {
        email: form.email,
      });
    },
  });

  return { mutate };
}
