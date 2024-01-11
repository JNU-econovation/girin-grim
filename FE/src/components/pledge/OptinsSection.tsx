import { SelectedOption } from "@/Model/Funding";
import OptionContent from "../common/OptionContent";

type Props = {
  supporter: {
    address: string;
  };
  options: SelectedOption[];
};

export default function OptinsSection({ supporter, options }: Props) {
  return (
    <section className="w-full bg-white font-nanum min-h-[100vh] p-10">
      <OptionContent supporter={supporter} options={options} />
    </section>
  );
}
