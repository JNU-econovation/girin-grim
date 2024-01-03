"use client";

import { TResponse } from "@/Model/Response";
import { Univs } from "@/Model/Univ";
import { getUnivList } from "@/apis/apis";
import { UnivStateQ, UnivStateRegion } from "@/store/HeaderState";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";

export default function useUniv() {
  const region = useRecoilValue(UnivStateRegion);
  const q = useRecoilValue(UnivStateQ); //TODO: throttle나 debounce를 적용해야 함
  const univ = { region: region == "전체" ? "" : region, q };
  const { data, isLoading, error } = useQuery<TResponse<Univs>>({
    queryKey: ["univ", region, q],
    queryFn: async () => await getUnivList(univ),
  });
  return { data, isLoading, error };
}
