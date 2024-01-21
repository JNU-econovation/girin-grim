"use client";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import useFeeds from "@/hooks/useFeeds";
import Grid from "../../common/Grid";
import HomeHeader from "./HomeHeader";
import Univ from "./Univ";
import ExtendBtn from "./ExtendBtn";
import useReset from "@/hooks/useReset";
import { HomeFundingListState, HomeState } from "@/store/HomeState";
import { Feed } from "@/Model/Feed";

export default function HomeFundingList() {
  const { page } = useRecoilValue(HomeState);
  const [fundingList, setFundingList] =
    useRecoilState<Feed[]>(HomeFundingListState);
  const { data, isLoading } = useFeeds();

  useEffect(() => {
    if (data && data.response) {
      const { funding } = data.response;
      setFundingList((prev) => [...prev, ...funding]);
    }
  }, [data, setFundingList]);
  if (isLoading || !data) {
    return <div>loading...</div>;
  }
  const { favUniversity } = data.response;
  useReset();

  return (
    <section>
      <Univ favUniversity={favUniversity} />
      <HomeHeader />
      <Grid fundings={fundingList} page="home" />
      {!page && <ExtendBtn />}
    </section>
  );
}
