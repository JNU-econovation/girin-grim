"use client";
import MemberInfoList from "./MemberInfoList";
import useUserDetail from "@/hooks/useUserDetail";
import { formatMemberData } from "@/utils/memberDataFormat";
import MemberHero from "./MemberHero";
import MemberInfoUnivList from "./MemberInfoUnivList";
import useReset from "@/hooks/useReset";
import { useRecoilState } from "recoil";
import { isMineState } from "@/store/MemberState";

type Props = {
  memberId: number;
};

export default function InfoSectoin({ memberId }: Readonly<Props>) {
  const { data, isLoading, error } = useUserDetail({ memberId });
  const [_, setMine] = useRecoilState(isMineState);
  if (isLoading) return <div>로딩중</div>;
  if (error || !data) return <div>에러</div>;
  const {
    member: { email, nickname, image },
    isMine,
  } = data.response;
  const InfoData = formatMemberData(data.response.member);
  useReset();
  setMine(isMine);
  return (
    <section
      className="mt-24 z-30 flex flex-col items-center max-w-[20rem] w-full mx-auto relative"
      id="infoSection"
    >
      <MemberHero url={image} isMine={isMine} />
      <h1 className="text-[1.7rem] font-black mt-2 cursor-default">
        {nickname}
      </h1>
      <span className="text-md text-[#696969] mb-5">{email}</span>
      <div className="flex flex-col">
        {InfoData.map(({ content, icon, title }) => {
          if (title == "관심대학")
            return <MemberInfoUnivList content={content} title={title} />;

          return (
            <MemberInfoList
              key={title}
              title={title}
              content={content}
              icon={icon}
            />
          );
        })}
      </div>
      {/* <SettingBtn /> */}
    </section>
  );
}
