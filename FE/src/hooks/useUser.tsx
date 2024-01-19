"use client";
import { getUser } from "@/apis/member";
import { useQuery } from "@tanstack/react-query";

export default function useUser() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return getUser();
    },
    staleTime: 1000 * 60 * 60 * 24,
  });
  return { data, isLoading, error };
}
