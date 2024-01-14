"use client";
import MemberInfoList from "./MemberInfoList";
import useUserDetail from "@/hooks/useUserDetail";
import { formatMemberData } from "@/utils/memberDataFormat";
import MemberHero from "./MemberHero";
import SettingBtn from "./SettingBtn";

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
      className="mt-24 relative z-50 flex flex-col items-center max-w-[20rem] w-full mx-auto"
      id="infoSection"
    >
      <MemberHero url={image} />
      <h1 className="text-[1.7rem] font-black mt-4 cursor-default">
        {nickname}
      </h1>
      <span className="text-md text-[#696969] mt-1 mb-5">{email}</span>
      <div className="flex flex-col">
        {InfoData.map((data) => (
          <MemberInfoList
            key={data.title}
            title={data.title}
            content={data.content}
            icon={data.icon}
            array={data.array}
          />
        ))}
      </div>
      <SettingBtn />
    </section>
  );
}
