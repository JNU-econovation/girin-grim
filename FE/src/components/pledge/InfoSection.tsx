import useFundingDetail from "@/hooks/useFundingDetail";
import FundingInfoTag from "../fundingDetail/Info/FundingInfoTag";
import { getDateData } from "@/utils/date";

export default function InfoSection({
  fundingId,
}: Readonly<{ fundingId: number }>) {
  const { data, isLoading, error } = useFundingDetail(fundingId);
  if (isLoading || !data) return <div>로딩중</div>;
  const image = data.response.funding.image;
  const member = data.response.member;
  const { endTime, title, type, university } = data.response.funding;
  const { Dday } = getDateData(endTime);
  return (
    <section className="w-full my-8 bg-white">
      <div className="w-full h-full max-w-7xl mx-auto border-[0.15rem] flex gap-8 items-center py-4 px-6 rounded-[0.31rem] border-colorb9b">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[20rem] h-[11.6rem] rounded-[0.31rem]"
        />
        <div className="w-full h-full items-center">
          <FundingInfoTag member={member} type={type} university={university} />
          <h1 className="text-[2.5rem] font-black text-color121 mt-2 mb-1">
            {title}
          </h1>
          <p className="font-black text-color999 text-[1.5rem]">D{Dday}</p>
        </div>
      </div>
    </section>
  );
}
