"use client";
import Grid from "@/components/common/Grid";
import useCreatedFunding from "@/hooks/useCreatedFunding";
import { useRouter } from "next/navigation";

export default function CreateGrid({ memberId }: { memberId: number }) {
  const router = useRouter();
  const { data, isLoading } = useCreatedFunding({ memberId });
  if (!data || isLoading) return <div>loading...</div>;
  if (!data.success) router.back();
  const { funding } = data.response;

  return <Grid fundings={funding} page="member" />;
}
