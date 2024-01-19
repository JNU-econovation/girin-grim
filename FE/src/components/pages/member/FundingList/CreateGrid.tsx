import Grid from "@/components/common/Grid";
import useCreatedFunding from "@/hooks/useCreatedFunding";

export default function CreateGrid({ memberId }: { memberId: number }) {
  const { data, isLoading } = useCreatedFunding({ memberId });
  if (!data || isLoading) return <div>loading...</div>;
  const { funding } = data.response;

  return <Grid fundings={funding} page="member" />;
}
