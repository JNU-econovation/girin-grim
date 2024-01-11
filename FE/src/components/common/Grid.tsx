"use client";
import { Feed } from "@/Model/Feed";
import FeedComponent from "./Feed";

type Props = {
  fundings: Feed[];
};

export default function Grid({ fundings }: Readonly<Props>) {
  return (
    <>
      <div className="w-full mt-[0.5rem] grid grid-cols-3 gap-[2rem] gap-y-[2.75rem]">
        {fundings.map(
          ({
            image,
            dueDate,
            fundingId,
            member: { nickname, memberId },
            rate,
            shortDescription,
            title,
            university,
          }) => (
            <FeedComponent
              fundgingId={fundingId}
              key={fundingId}
              image={image}
              dueDate={dueDate}
              nickname={nickname}
              rate={rate}
              short={shortDescription}
              title={title}
              university={university}
              memberId={memberId}
            />
          )
        )}
      </div>
    </>
  );
}
