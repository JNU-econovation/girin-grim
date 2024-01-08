type Props = {
  curMoney: number;
  goalMoney: number;
  startTime: string;
  endTime: string;
  estimateStartTime: string;
};
export default function InfoDate({
  curMoney,
  goalMoney,
  startTime,
  endTime,
  estimateStartTime,
}: Props) {
  return (
    <>
      <div className="flex justify-between mt-10">
        <p className="">
          모인 금액 / 목표 금액 | {` ${curMoney} / ${goalMoney}원`}
        </p>
        <p className="text-main font-bold font-esaman">{"9%"}</p>
      </div>
      {/* 7171이 없어서  */}
      <div className="flex justify-between text-color999 my-1">
        <p className="">펀딩 기간 | {`${startTime} ~ ${endTime}`}</p>
        <p className="text-main font-bold font-esaman">{"D-3"}</p>
      </div>
      <p className="text-color999">예상 실행일 | {estimateStartTime}</p>
    </>
  );
}
