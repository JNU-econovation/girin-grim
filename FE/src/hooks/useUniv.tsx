"use client";

import { TResponse } from "@/Model/Response";
import { Univs } from "@/Model/Univ";
import { getUnivList } from "@/apis/apis";
import { UnivState } from "@/store/UnivState";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";

export default function useUniv() {
  const univ = useRecoilValue(UnivState);
  const { data, isLoading, error } = useQuery<TResponse<Univs>>({
    queryKey: ["univ", univ.region, univ.q],
    queryFn: async () => await getUnivList(univ),
  });
  return { data, isLoading, error };
}
