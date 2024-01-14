import Link from "next/link";
import FundingInfoTag from "../pages/fundingDetail/Info/FundingInfoTag";
import { FundingMember, BackedFunding } from "@/Model/Funding";

//member는 올란사람이다.
export default function InfoSection({
  funding,
  member,
}: Readonly<{ funding: BackedFunding; member: FundingMember }>) {
  const { dueDate, fundingId, image, title, type, university } = funding;
  return (
    <Link href={`/funding/${fundingId}`} className="block my-8 bg-white">
      <div className="h-full max-w-7xl mx-auto border-[0.15rem] border-colorb9b flex gap-8 items-center py-4 px-6 rounded-[0.31rem]">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[20rem] h-[11.6rem] rounded-[0.31rem]"
        />
        <div className="h-full items-center">
          <FundingInfoTag member={member} type={type} university={university} />
          <h1 className="text-[2.5rem] font-black text-color121 mt-2 mb-1">
            {title}
          </h1>
          <p className="font-black text-color999 text-[1.5rem]">D-{dueDate}</p>
        </div>
      </div>
    </Link>
  );
}
