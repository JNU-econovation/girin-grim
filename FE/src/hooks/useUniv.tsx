"use client";

import { Server } from "@/apis/axios";
import { UnivState } from "@/store/UnivState";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";

export default function useUniv() {
  const univ = useRecoilValue(UnivState);
  const { data, isLoading, error } = useQuery({
    queryKey: ["univ"],
    queryFn: () =>
      Server.get("/univ", {
        params: {
          region: univ.region,
          q: univ.q,
        },
      }),
  });
  return { data, isLoading, error };
}
