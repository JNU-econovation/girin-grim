type Props =
  | {
      title: "지역";
      data: string;
      modify: () => void; // Add the missing 'modify' property
    }
  | {
      title: "대학";
      data: string;
      modify: (data: string) => void;
    };

export default function UnivTitle({ title, data, modify }: Props) {
  return (
    <div className="h-8 flex">
      <p className=" h-full bg-[#FAFAFA] px-3 border-2 shrink-0 rounded-l-[0.31rem] py-2 flex justify-center items-center">
        {title}
      </p>
      <input
        type="text"
        className="w-full bg-white border-r-2 border-t-2 border-b-2 outline-none rounded-r-[0.31rem] py-2"
        value={data}
        onChange={(e) => (title == "지역" ? modify() : modify(e.target.value))}
        placeholder={title == "대학" ? "대학 검색" : ""}
      />
    </div>
  );
}
