import UnivRegion from "./UnivRegion";

export const Locations = [
  "전체",
  "서울",
  "부산",
  "전남",
  "대구",
  "인천",
  "대전",
  "울산",
  "충남",
  "전북",
  "전남",
  "경기",
  "강원",
  "충북",
  "경남",
  "경북",
  "세종",
  "제주",
];

export default function University() {
  return (
    <div className="bg-gradient-to-t via-colord9d from-colord9d absolute top-[2.3rem] -left-3 p-[0.15rem] rounded-[0.63rem]">
      <section className="w-[71rem] h-[15rem] bg-white rounded-[0.63rem] text-[#333] flex p-5 gap-3">
        {/*  */}
        <div className="flex flex-col gap-3 max-w-[9.25]">
          <div className="flex w-[9.25rem] text-[0.875rem]">
            <div className="py-[0.3rem] px-3 shrink-0 rounded-l-[0.31rem] bg-[#FAFAFA] border-l-2 border-t-2 border-b-2">
              지역
            </div>
            <div className="w-full h-full relative">
              <input
                type="text"
                className="w-full h-full rounded-r-[0.31rem] border-r-2 border-t-2 border-b-2 outline-none"
                value={"광주"}
              />
            </div>
          </div>
          <ul className="w-[9.25rem] h-[9.27rem] bg-colorede rounded-[0.31rem] px-[1.5rem] py-[0.48rem] overflow-y-auto font-normal text-[0.845rem]">
            {Locations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <UnivRegion />
      </section>
    </div>
  );
}
