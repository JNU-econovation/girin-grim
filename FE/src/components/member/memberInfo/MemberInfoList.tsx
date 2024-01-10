type Props =
  | {
      title: string;
      content: string;
      icon: string;
      array: false;
    }
  | {
      title: string;
      content: string;
      icon: null;
      array: false;
    }
  | {
      title: string;
      content: string[];
      icon: null;
      array: true;
    };

export default function MemberInfoList({ title, content, icon, array }: Props) {
  return (
    <div className="w-full grid grid-cols-[2fr_6fr] gap-7 my-1">
      <div className="w-full font-bold text-lg flex justify-between">
        {title.split("").map((line) => (
          <span>{line}</span>
        ))}
      </div>
      {array ? (
        <div className=" max-h-20 overflow-scroll">
          {content.map((data, index) => (
            <div key={index} className="w-full">
              {data}
            </div>
          ))}
        </div>
      ) : (
        <div className={`w-full ${array && "max-h-8 overflow-y-scroll"}`}>
          {content}
        </div>
      )}
    </div>
  );
}
