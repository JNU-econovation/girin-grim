import { Coin } from "@/components/common/icon";
type Props = {
  title: string;
  content: string;
  icon?: React.ReactNode;
};

//TODO: 리펙토링 필요

export default function MemberInfoList({
  title,
  content,
  icon,
}: Readonly<Props>) {
  const isCoin = title === "크레파스";
  if (!content) return null;
  return (
    <div className={`w-full grid grid-cols-[2fr_6fr] gap-7 my-1`}>
      <div className="w-full font-bold text-xl flex justify-between shrink-0">
        {title.split("").map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span
          className={
            isCoin ? "text-[1.3rem] font-bold flex gap-2 items-center" : ""
          }
        >
          {content}
          {isCoin && <Coin size="sm" />}
        </span>
        {icon}
      </div>
    </div>
  );
}
