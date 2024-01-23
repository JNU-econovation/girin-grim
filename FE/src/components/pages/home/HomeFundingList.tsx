"use client";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import useFeeds from "@/hooks/useFeeds";
import Grid from "../../common/Grid";
import HomeHeader from "./HomeHeader";
import Univ from "./Univ";
// import ExtendBtn from "./ExtendBtn";
import useReset from "@/hooks/useReset";
import { HomeState } from "@/store/HomeState";
import HomePagenation from "./HomePagenation";

export default function HomeFundingList() {
  const [{ category, q, sort, uni }, setHomeState] = useRecoilState(HomeState);
  const { data, isLoading } = useFeeds();

  useEffect(() => {
    setHomeState((prev) => ({ ...prev, page: 0 }));
  }, [category, q, sort, uni]);

  if (isLoading || !data) {
    return <></>;
  }
  const { favUniversity, funding } = data.response;
  useReset();

  return (
    <section>
      <Univ favUniversity={favUniversity} />
      <HomeHeader />
      <Grid fundings={funding} page="home" />
      {/* <ExtendBtn /> */}
      <HomePagenation />
    </section>
  );
}
