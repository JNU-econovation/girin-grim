import { getDateData } from "@/utils/date";

type Props = {
  curMoney: number;
  goalMoney: number;
  startTime: string;
  endTime: string;
  estimateStartTime: string;
  rate: number;
};
export default function InfoDate({
  curMoney,
  goalMoney,
  startTime,
  endTime,
  estimateStartTime,
  rate,
}: Readonly<Props>) {
  const {
    year: startYear,
    month: startMonth,
    day: startDay,
  } = getDateData(startTime);
  const {
    year: endYear,
    month: endMonth,
    day: endDay,
    Dday,
  } = getDateData(endTime);
  const {
    year: estimateStartYear,
    month: estimateStartMonth,
    day: estimateStartDay,
  } = getDateData(estimateStartTime);
  return (
    <>
      <div className="flex justify-between mt-10">
        <p className="">
          모인 금액 / 목표 금액 | {` ${curMoney} / ${goalMoney}원`}
        </p>
        <p className="text-main font-bold font-esaman">{rate}%</p>
      </div>
      {/* 7171이 없어서  */}
      <div className="flex justify-between text-color999 my-1">
        <p className="">
          펀딩 기간 |{" "}
          {`${startYear}.${startMonth}.${startDay} ~ ${endYear}.${endMonth}.${endDay}`}
        </p>
        <p className="text-main font-bold font-esaman">D{Dday}</p>
      </div>
      <p className="text-color999">
        예상 실행일 |{" "}
        {`${estimateStartYear}.${estimateStartMonth}.${estimateStartDay}`}
      </p>
    </>
  );
}
