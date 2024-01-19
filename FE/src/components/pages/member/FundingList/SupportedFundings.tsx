import Grid from "@/components/common/Grid";
import useUserFeed from "@/hooks/useUserFeed";

export default function SupportGrid({ memberId }: { memberId: number }) {
  const { data, isLoading } = useUserFeed({ memberId });
  if (!data || isLoading) return <div>loading...</div>;
  const { funding } = data.response;

  return <Grid fundings={funding} page="member" />;
}
