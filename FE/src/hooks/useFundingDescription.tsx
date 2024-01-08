import { getFundingLongDescription } from "@/apis/apis";
import { useQuery } from "@tanstack/react-query";

export default function useFundingDescription({
  fundingId,
}: {
  fundingId: number;
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["fundingDescription"],
    queryFn: () => {
      return getFundingLongDescription(fundingId);
    },
  });

  return { data, isLoading, error };
}
