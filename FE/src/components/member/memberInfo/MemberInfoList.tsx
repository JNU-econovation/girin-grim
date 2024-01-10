import { InfoConst } from "@/Model/User";

export default function MemberInfoList({
  title,
  content,
  icon,
  array,
}: InfoConst) {
  return (
    <div
      className={`w-full grid grid-cols-[2fr_6fr] gap-7 my-1 `}
      // ${title == "자기소개" && "grow"}
    >
      <div className="w-full font-bold text-lg flex justify-between">
        {title.split("").map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      {array ? (
        <div className="h-full max-h-24 overflow-scroll">
          {content.map((data) => (
            <div key={data.universityId} className="w-full ">
              {data.name}
            </div>
          ))}
        </div>
      ) : (
        <div className={`w-full flex justify-between `}>
          <span>{content}</span>
          {icon}
        </div>
      )}
    </div>
  );
}
