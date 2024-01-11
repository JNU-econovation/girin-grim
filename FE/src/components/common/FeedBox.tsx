import Link from "next/link";

type Props = {
  image: string;
  university: string;
  nickname: string;
  title: string;
  short: string;
  dueDate: number;
  rate: number;
  memberId: number;
};

export default function FeedBox({
  image,
  university,
  nickname,
  title,
  short,
  dueDate,
  rate,
  memberId,
}: Readonly<Props>) {
  return (
    <section className="font-nanum cursor-default">
      <img
        src={image}
        alt="funding feed image"
        className="w-full h-[17rem] rounded-[0.3rem]"
      />
      <div className="flex text-[0.75rem] gap-[0.3rem] mt-[0.875rem]">
        <h4 className="font-extrabold">{university}</h4>
        <Link href={`/member/${memberId}`}>
          <span> | </span>
          <span>{nickname}</span>
        </Link>
      </div>
      <h2 className="text-[1.375rem] font-black mt-3 cursor-default">
        {title}
      </h2>
      <p className="text-[0.75rem] text-color999 leading-4 mt-[0.69rem] cursor-default">
        {short}
      </p>
      <div className="w-full mt-[0.56rem] flex flex-col gap-[0.375rem]">
        <progress max={100} value={rate} />
        <div className="w-full flex justify-between text-[0.87rem] font-[700]">
          <span className=" text-main">D-{dueDate}</span>
          <span className=" text-color999">{rate}%</span>
        </div>
      </div>
    </section>
  );
}
