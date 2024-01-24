"use client";
import useUserDetail from "@/hooks/useUserDetail";
import { formatMemberData } from "@/utils/memberDataFormat";
import useReset from "@/hooks/useReset";
import { useRecoilState } from "recoil";
import { isMineState } from "@/store/MemberState";
import MineInfoSection from "./MineInfoSection";
import NotMineInfoSection from "./NotMineInfoSection";

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
    <section className="min-h-[40rem] w-full">
      {isMine && (
        <MineInfoSection
          email={email}
          image={image}
          nickname={nickname}
          InfoData={InfoData}
        />
      )}
      {!isMine && (
        <NotMineInfoSection
          image={image}
          nickname={nickname}
          instroduce={InfoData[0].content as string}
        />
      )}
    </section>
  );
}
