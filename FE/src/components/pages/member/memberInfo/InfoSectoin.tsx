"use client";
import MemberInfoList from "./MemberInfoList";
import useUserDetail from "@/hooks/useUserDetail";
import { formatMemberData } from "@/utils/memberDataFormat";
import MemberHero from "./MemberHero";
import SettingBtn from "./SettingBtn";
import MemberInfoUnivList from "./MemberInfoUnivList";

type Props = {
  memberId: number;
};

export default function InfoSectoin({ memberId }: Readonly<Props>) {
  const { data, isLoading, error } = useUserDetail({ memberId });
  if (isLoading) return <div>로딩중</div>;
  if (error || !data) return <div>에러</div>;
  const {
    member: { email, nickname, image },
  } = data.response;
  const InfoData = formatMemberData(data.response.member);

  return (
    <section
      className="mt-24 z-50 flex flex-col items-center max-w-[20rem] w-full mx-auto relative"
      id="infoSection"
    >
      <MemberHero url={image} />
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
      <SettingBtn />
    </section>
  );
}
