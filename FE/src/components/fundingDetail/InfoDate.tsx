export default function InfoDate() {
  return (
    <>
      <div className="flex justify-between mt-10">
        <p className="">모인 금액 / 목표 금액 | {" 890,000 / 1,000,000 원"}</p>
        <p className="text-main font-bold font-esaman">{"9%"}</p>
      </div>
      {/* 7171이 없어서  */}
      <div className="flex justify-between text-color999 my-1">
        <p className="">펀딩 기간 | {"2024.01.23 ~ 2024.01.25"}</p>
        <p className="text-main font-bold font-esaman">{"D-3"}</p>
      </div>
      <p className="text-color999">예상 실행일 | {"1234.12.34"}</p>
    </>
  );
}
