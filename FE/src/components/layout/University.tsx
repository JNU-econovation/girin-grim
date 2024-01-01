export default function University() {
  const Locations = [
    {
      id: "",
      value: "전체",
    },
    {
      id: "서울",
      value: "서울 특별시",
    },
    {
      id: "부산",
      value: "부산 광역시",
    },
    {
      id: "대구",
      value: "대구 광역시",
    },
    {
      id: "인천",
      value: "인천 광역시",
    },
    {
      id: "대전",
      value: "대전 광역시",
    },
    {
      id: "울산",
      value: "울산 광역시",
    },
    {
      id: "광주",
      value: "광주 광역시",
    },
    {
      id: "경기",
      value: "경기도",
    },
    {
      id: "강원",
      value: "강원도",
    },
    {
      id: "전북",
      value: "전북 특별 자치도",
    },
    {
      id: "전남",
      value: "전라남도",
    },
    {
      id: "충북",
      value: "충청북도",
    },
    {
      id: "충남",
      value: "충청남도",
    },

    {
      id: "경북",
      value: "경상북도",
    },
    {
      id: "경남",
      value: "경상남도",
    },
    {
      id: "세종",
      value: "세종 특별 자치시",
    },
    {
      id: "제주",
      value: "제주 특별 자치도",
    },
  ];

  return (
    <section className="w-[71rem] h-[15rem] bg-white absolute top-[2.3rem] border-2 -left-3 rounded-[0.63rem] text-[#333] flex">
      <div className="mt-5 ml-5 flex flex-col gap-3">
        {/* <select name="" id="">
          <option value="hihi">hihi</option>
        </select> */}
        <div className="flex w-[17.2rem] text-[0.875rem]">
          <div className="py-[0.3rem] px-3 shrink-0 rounded-l-[0.31rem] bg-[#FAFAFA] border-l-2 border-t-2 border-b-2">
            지역
          </div>
          <div className="w-full h-full relative">
            <input
              type="text"
              className="w-full h-full rounded-r-[0.31rem] border-r-2 border-t-2 border-b-2 outline-none"
              // value={}
            />
          </div>
        </div>
        <ul className="w-[17.1rem] h-[9.27rem] bg-colorede rounded-[0.31rem] px-[1.5rem] py-[0.48rem] overflow-y-auto font-normal text-[0.75rem]">
          {Locations.map(({ id, value }) => (
            <li key={id}>{value}</li>
          ))}
        </ul>
      </div>
      {/*  */}
      <div className="mt-5 ml-5 flex flex-col gap-3">
        {/* <select name="" id="">
          <option value="hihi">hihi</option>
        </select> */}
        <div className="flex w-[17.2rem] text-[0.875rem]">
          <div className="py-[0.3rem] px-3 shrink-0 rounded-l-[0.31rem] bg-[#FAFAFA] border-l-2 border-t-2 border-b-2">
            대학
          </div>
          <div className="w-full h-full relative">
            <input
              type="text"
              className="w-full h-full rounded-r-[0.31rem] border-r-2 border-t-2 border-b-2 outline-none"
              // value={}
            />
          </div>
        </div>
        <ul className="w-[17.1rem] h-[9.27rem] bg-colorede rounded-[0.31rem] px-[1.5rem] py-[0.48rem] overflow-y-auto font-normal text-[0.75rem]">
          {Locations.map(({ id, value }) => (
            <li key={id}>{value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
