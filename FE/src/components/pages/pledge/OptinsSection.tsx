import { SelectedOption } from "@/Model/Funding";
import OptionContent from "../../common/OptionContent";

type Props = {
  supporter: {
    address: string;
  };
  options: SelectedOption[];
  type: "DONATE" | "GIFT";
};

export default function OptinsSection({
  supporter,
  options,
  type,
}: Readonly<Props>) {
  return (
    <section className="w-full bg-white font-nanum min-h-[100vh] p-10">
      <OptionContent type={type} supporter={supporter} options={options} />
    </section>
  );
}
