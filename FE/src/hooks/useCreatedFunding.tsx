"use client";

import { getMyCreatedFunding } from "@/apis/member";
import { useQuery } from "@tanstack/react-query";

export default function useCreatedFunding({ memberId }: { memberId: number }) {
  const { data, isLoading } = useQuery({
    queryKey: ["createdFunding", memberId],
    queryFn: () => getMyCreatedFunding(memberId),
  });

  return { data, isLoading };
}
