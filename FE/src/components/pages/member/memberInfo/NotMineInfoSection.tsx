import MemberHero from "./MemberHero";

type Props = {
  image: string;
  nickname: string;
  instroduce: string;
};

export default function NotMineInfoSection({
  image,
  nickname,
  instroduce,
}: Readonly<Props>) {
  return (
    <section
      className="mt-24 z-30 flex flex-col items-center max-w-[20rem] w-full mx-auto relative"
      id="infoSection"
    >
      <MemberHero url={image} isMine={false} />
      <h1 className={"font-black mt-2 cursor-default text-4xl"}>{nickname}</h1>
      <p className="w-full text-[1.125rem] mt-3">{instroduce}</p>
    </section>
  );
}
