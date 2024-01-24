import { formatMemberData } from "@/utils/memberDataFormat";
import MemberHero from "./MemberHero";
import MemberInfoList from "./MemberInfoList";
import MemberInfoUnivList from "./MemberInfoUnivList";
import { InfoConst } from "@/Model/User";

type Props = {
  image: string;
  nickname: string;
  email: string;
  InfoData: InfoConst[];
};

export default function MineInfoSection({
  image,
  nickname,
  email,
  InfoData,
}: Readonly<Props>) {
  return (
    <section
      className="mt-24 z-30 flex flex-col items-center max-w-[20rem] w-full mx-auto relative"
      id="infoSection"
    >
      <MemberHero url={image} isMine={true} />
      <h1 className={"font-black mt-2 cursor-default text-[1.7rem]"}>
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
    </section>
  );
}
