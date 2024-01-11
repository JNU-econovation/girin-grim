"use client";

import { HomeFeed } from "@/Model/Feed";
import { TResponse } from "@/Model/Response";
import { getHomeFeed } from "@/apis/apis";
import { HomeState } from "@/store/HomeState";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";

export type HomeFeedProps = {
  category: "GIFT" | "DONATE" | "";
  sort: "latest" | "highest";
  uni?: number;
  q?: string;
  page?: number;
};

export default function useFeeds() {
  const { category, page, q, sort, uni } = useRecoilValue(HomeState);
  const nowCategory =
    category == "전체" ? "" : category == "수령형" ? "GIFT" : "DONATE";

  const { data, isLoading, error } = useQuery<TResponse<HomeFeed>>({
    queryKey: ["feeds", nowCategory, sort, uni.univId, q, page],
    queryFn: async () => {
      const response = await getHomeFeed({
        category: nowCategory,
        sort,
        uni: uni.univId,
        q,
        page,
      });
      return response;
    },
  });
  return { data, isLoading, error };
}
