"use client";

import { getBacked } from "@/apis/apis";
import { useQuery } from "@tanstack/react-query";

type Props = {
  fundingId: number;
  memberId: number;
};

export default function useBacked({ fundingId, memberId }: Props) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["backed"],
    queryFn: () => getBacked(memberId, fundingId),
  });
  return { data, isLoading, error };
}
