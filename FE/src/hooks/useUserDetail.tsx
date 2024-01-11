import { getUserDetail } from "@/apis/apis";
import { useQuery } from "@tanstack/react-query";

type Props = {
  memberId: number;
};

export default function useUserDetail({ memberId }: Props) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userDetail", memberId],
    queryFn: () => {
      return getUserDetail(memberId);
    },
  });
  return { data, isLoading, error };
}
