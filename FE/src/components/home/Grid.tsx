"use client";
import Feed from "../common/Feed";
import useFeeds from "@/hooks/useFeeds";

export default function Grid() {
  const { data, isLoading, error } = useFeeds();
  if (!data || isLoading) return <div>loading...</div>;

  const {
    response: { funding },
  } = data;

  return (
    <>
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
      {/* TODO: 따로 컴포넌트로 빼기 */}
      <div className="w-full flex justify-center my-[5.62rem]">
        <button
          className="px-[7rem] py-[1.12rem] border mx-auto text-colorb9b border-colord9d shadow-[0_0.125rem_0.25rem_0_#a4a5a5] rounded-[0.2rem]"
          onClick={() => {
            //TODO: page를 ++ 해주기
          }}
        >
          전체보기
        </button>
      </div>
    </>
  );
}
