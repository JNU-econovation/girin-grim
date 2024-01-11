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
      {/* text-lg */}
      <div className="w-full font-bold text-xl flex justify-between">
        {title.split("").map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      {array ? (
        // 대학리스트
        <div className="h-full max-h-24 overflow-scroll">
          {content.map((data) => (
            <span key={data.universityId} className="block">
              {data.name}
            </span>
          ))}
        </div>
      ) : (
        // 기본
        <div className="flex justify-between">
          <span
            // TODO: 식을 여기서 쓰는 것이 아니라 다른 곳에 때는게 더 좋아보임
            className={title === "크레파스" ? "text-[1.3rem] font-bold" : ""}
            // 1.125rem
          >
            {content}
          </span>
          {icon}
        </div>
      )}
    </div>
  );
}
