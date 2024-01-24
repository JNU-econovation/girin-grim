type Props = {
  title: "관심대학";
  content: { universityId: number; name: string }[];
};

//TODO: 리펙토링 필요

export default function MemberInfoUnivList({
  title,
  content,
}: Readonly<Props>) {
  if (!content.length) return null;
  return (
    <div className={`w-full grid grid-cols-[2fr_6fr] gap-7 my-1 `}>
      <div className="w-full font-bold text-xl flex justify-between">
        {title.split("").map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <div className="h-full max-h-24 overflow-y-scroll">
        {content.map(({ name, universityId }) => (
          <span key={universityId} className="block">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
