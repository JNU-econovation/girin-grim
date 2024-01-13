"use client";
import { getPledge } from "@/apis/funding";
import { useQuery } from "@tanstack/react-query";

export default function usePledge({
  fundingId,
}: Readonly<{ fundingId: number }>) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["pledge", fundingId],
    queryFn: () => getPledge(fundingId),
  });
  return { data, isLoading, error };
}
