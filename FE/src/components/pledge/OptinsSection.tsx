import { useRecoilValue } from "recoil";
import Options from "./Options";
import SuppotInfo from "./SuppotInfo";
import { SelectedOptions } from "@/store/FundingState";

type Props = {
  supporter: {
    address: string;
  };
};

export default function OptinsSection({ supporter }: Props) {
  const options = useRecoilValue(SelectedOptions);
  return (
    <section className="w-full bg-white p-10 font-nanum min-h-[100vh]">
      <h2 className="text-[1.375rem] font-extrabold">옵션 정보</h2>
      <div className="border-2 mt-2 rounded-md">
        {options.map((option) => (
          <Options option={option} />
        ))}
        {/* <Options /> */}
      </div>
      <h2 className="text-[1.375rem] font-extrabold mt-[2.4rem]">
        후원자 정보
      </h2>
      <div className="border-2 mt-2 rounded-md">
        <SuppotInfo supporter={supporter} />
      </div>
    </section>
  );
}
