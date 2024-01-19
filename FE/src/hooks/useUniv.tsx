"use client";
import { TResponse } from "@/Model/Response";
import { Univs } from "@/Model/Univ";
import { getUnivList } from "@/apis/uni";
import { UnivStateQ, UnivStateRegion } from "@/store/HeaderState";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";

export default function useUniv() {
  const region = useRecoilValue(UnivStateRegion);
  const q = useRecoilValue(UnivStateQ);
  const univ = region == "전체" ? { region, q } : { region };
  const { data, isLoading, error } = useQuery<TResponse<Univs>>({
    queryKey: ["univ", region || q],
    queryFn: async () => await getUnivList(univ),
  });
  return { data, isLoading, error };
}
