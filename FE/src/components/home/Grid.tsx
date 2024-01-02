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
  if (!data || isLoading) return <div>loading...</div>;

  const {
    response: { funding },
  } = data;

  return (
    <div className="w-full mt-[0.5rem] grid grid-cols-3 gap-[2rem] gap-y-[2.75rem]">
      {funding.map(
        ({
          image,
          dueDate,
          fundingId,
          member: { nickname, memberId },
          rate,
          shortDiscription,
          title,
          university,
        }) => (
          <Feed
            fundgingId={fundingId}
            key={fundingId}
            image={image}
            dueDate={dueDate}
            nickname={nickname}
            rate={rate}
            short={shortDiscription}
            title={title}
            university={university}
            memberId={memberId}
          />
        )
      )}
    </div>
  );
}
