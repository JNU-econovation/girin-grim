"use client";
import { getMyFunding } from "@/apis/apis";
import { useQuery } from "@tanstack/react-query";

type Props = {
  memberId: number;
};

export default function useUserFeed({ memberId }: Props) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userFeed", memberId],
    queryFn: () => getMyFunding(memberId),
  });
  return { data, isLoading, error };
}
