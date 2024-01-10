"use client";
import Hero from "@/components/common/Hero";
import MemberInfoList from "./MemberInfoList";
import useUserDetail from "@/hooks/useUserDetail";
import { formatMemberData } from "@/utils/memberDataFormat";

type Props = {
  memberId: number;
};

export default function InfoSectoin({ memberId }: Readonly<Props>) {
  const { data, isLoading, error } = useUserDetail({ memberId });
  if (isLoading) return <div>로딩중</div>;
  if (error || !data) return <div>에러</div>;
  const {
    member: { email, nickname },
  } = data.response;
  const InfoData = formatMemberData(data.response.member);

  return (
    <section
      className="mt-24 relative z-50 flex flex-col items-center max-w-[20rem] w-full mx-auto"
      id="infoSection"
    >
      <Hero page="member" />
      <h1 className="text-[1.625rem] font-black mt-4 cursor-default">
        {nickname}
      </h1>
      <span className="text-md text-[#696969] mt-1 mb-5">{email}</span>
      <div className="flex flex-col">
        {InfoData.map((data, index) => (
          <MemberInfoList
            key={index}
            title={data.title}
            content={data.content}
            icon={data.icon}
            array={data.array}
          />
        ))}
      </div>
    </section>
  );
}
