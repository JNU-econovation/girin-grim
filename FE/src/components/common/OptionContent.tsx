"use client";
import { SelectedOption } from "@/Model/Funding";
import Options from "./Options";
import SuppotInfo from "../pages/pledge/SuppotInfo";
import Notice from "./Notice";
import DonateCost from "./DonateCost";

type Props = {
  supporter: {
    address: string;
  };
  options: SelectedOption[];
};

export default function OptionContent({ supporter, options }: Readonly<Props>) {
  const isDonate = options.length === 0;
  const text = isDonate ? "후원 정보" : "옵션 정보";

  return (
    <>
      <h2 className="text-[1.375rem] font-extrabold">{text}</h2>
      <div className="border-2 mt-2 rounded-md">
        {!isDonate &&
          options.map((option) => (
            <Options key={option.optionId} option={option} />
          ))}
        {isDonate && <DonateCost />}
        {/* <Options /> */}
      </div>
      <h2 className="text-[1.375rem] font-extrabold mt-[2.4rem]">
        후원자 정보
      </h2>
      <div className="border-2 mt-2 rounded-md">
        <SuppotInfo supporter={supporter} />
        <Notice />
      </div>
    </>
  );
}
