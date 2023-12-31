"use client";

import { HomeFeed } from "@/Model/Feed";
import { getHomeFeed } from "@/apis/apis";
import { useQuery } from "@tanstack/react-query";

export type HomeFeedProps = {
  category: "gift" | "donate";
  sort: "latest" | "hightest";
  univ?: number;
  q?: string;
};

export default function useFeeds({ category, sort, univ, q }: HomeFeedProps) {
  const { data, isLoading, error } = useQuery<HomeFeed>({
    queryKey: ["feeds"],
    queryFn: async () => {
      return await getHomeFeed({ category, sort, univ, q });
    },
  });

  return { data, isLoading, error };
}
