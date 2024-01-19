"use client";
import useFeeds from "@/hooks/useFeeds";
import Grid from "../../common/Grid";
import HomeHeader from "./HomeHeader";
import Univ from "./Univ";
import ExtendBtn from "./ExtendBtn";
import useReset from "@/hooks/useReset";

export default function HomeFundingList() {
  const { data, isLoading } = useFeeds();
  if (!data || isLoading) return <div>loading...</div>;
  const { favUniversity, funding } = data.response;
  useReset();

  return (
    <section>
      <Univ favUniversity={favUniversity} />
      <HomeHeader />
      <Grid fundings={funding} page="home" />
      <ExtendBtn />
    </section>
  );
}
