"use client";
import { getUser } from "@/apis/apis";
import { useQuery } from "@tanstack/react-query";

export default function useUser() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return getUser();
    },
  });
  return { data, isLoading, error };
}
