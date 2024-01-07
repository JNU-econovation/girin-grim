import { ArrowDown, ArrowUp, Delete } from "../common/icon";
import DeleteBtn from "./DeleteBtn";
import { SelectedOption } from "./InfoOption";

type Props = {
  selected: SelectedOption;
  clicked: number | undefined;
  setClicked: (v: number | undefined) => void;
  deleteOption: () => void;
};

export default function InfoOptionDetail({
  selected,
  clicked,
  setClicked,
  deleteOption,
}: Props) {
  const { price, name, items, optionId, quantity, amount } = selected;
  const isClicked = optionId === clicked;
  return (
    <li
      className={`w-full bg-colorede p-2 my-1 font-semibold rounded-[0.3rem] flex ${
        clicked !== undefined && !isClicked && "hidden"
      }`}
    >
      <div
        className="flex justify-center items-start mt-2"
        onClick={() => {
          if (isClicked) {
            setClicked(undefined);
            return;
          }
          setClicked(optionId);
        }}
      >
        {isClicked ? <ArrowUp /> : <ArrowDown />}
      </div>
      <p className="ml-2 shrink-0"> Option | </p>
      <div className="w-full">
        <div className="w-full flex justify-between">
          <p>{name}</p>
          <div className="flex gap-4">
            <p className="text-color9f9">{price}</p>
            <div className="h-[1.375rem] flex ">
              <button className="w-[1.375rem] h-[1.375rem] flex justify-center items-center bg-[#cccccc] text-white rounded-l-[0.2rem] border-y-[1px] border-l-[1px]">
                +
              </button>
              <div className="w-9 h-full flex justify-center items-center bg-slate-100 text-[0.875rem] border-y-[1px]">
                {amount}
              </div>
              <button className="w-[1.375rem]  flex justify-center items-center bg-[#cccccc] text-white rounded-r-[0.2rem] border-y-[1px] border-r-[1px]">
                -
              </button>
            </div>
            <DeleteBtn onCLick={deleteOption} />
          </div>
        </div>
        {isClicked && (
          <ul className="max-h-16 overflow-y-auto w-full">
            {items.map((item) => (
              <li> - {item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
