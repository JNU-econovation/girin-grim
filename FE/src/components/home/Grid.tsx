"use client";
import Feed from "../common/Feed";
import useFeeds, { HomeFeedProps } from "@/hooks/useFeeds";

const defaultHomeFeedState: HomeFeedProps = {
  category: "gift",
  sort: "latest",
  univ: undefined,
  q: "",
};

export default function Grid() {
  const { data, isLoading, error } = useFeeds(defaultHomeFeedState);
  const {
    response: { funding },
  } = data!;

  return (
    <div className="w-full grid grid-cols-3 gap-[2rem] gap-y-[2.75rem]">
      <Feed />
      {funding.map((funding) => (
        <Feed key={funding.fundingId} />
      ))}
    </div>
  );
}
