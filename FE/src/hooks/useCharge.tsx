import { getCharge } from "@/apis/charge";
import { useQuery } from "@tanstack/react-query";

export default function useCharge() {
  const { data, isLoading } = useQuery({
    queryKey: ["useCarge"],
    queryFn: () => getCharge(),
  });
  return { data, isLoading };
}
