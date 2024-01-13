import { SelectedOption } from "@/Model/Funding";
import Options from "./Options";
import SuppotInfo from "../pages/pledge/SuppotInfo";
import Notice from "./Notice";

type Props = {
  supporter: {
    address: string;
  };
  options: SelectedOption[];
};

export default function OptionContent({ supporter, options }: Props) {
  return (
    <>
      <h2 className="text-[1.375rem] font-extrabold">옵션 정보</h2>
      <div className="border-2 mt-2 rounded-md">
        {options.map((option) => (
          <Options key={option.optionId} option={option} />
        ))}
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
