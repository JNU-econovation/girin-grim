"use client";
import { getFundingDetail } from "@/apis/funding";
import { useQuery } from "@tanstack/react-query";

export default function useFundingDetail(fundingId: number) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["fundingDetail", fundingId],
    queryFn: async () => {
      return await getFundingDetail(fundingId);
    },
  });
  return { data, isLoading, error };
}
