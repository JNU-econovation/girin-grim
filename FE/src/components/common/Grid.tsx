"use client";
import { Feed } from "@/Model/Feed";
import HomeFeed from "./HomeFeed";

type Props = {
  fundings: Feed[];
  page: "home" | "member";
};

export default function Grid({ fundings, page }: Readonly<Props>) {
  return (
    <div className="w-full mt-2 grid grid-cols-3 gap-8 gap-y-11">
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
          <HomeFeed
            page={page}
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
  );
}
