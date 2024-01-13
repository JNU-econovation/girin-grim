"use client";
import { ArrowDown, ArrowUp } from "../../../common/icon";
import DeleteBtn from "./DeleteBtn";
import { SelectedOption } from "@/Model/Funding";

// TODO: 리펙토링 해야함

type Props = {
  selected: SelectedOption;
  clicked: number | undefined;
  setClicked: (v: number | undefined) => void;
  deleteOption: () => void;
  setAmount: (amount: number) => void;
};

export default function InfoOptionDetail({
  selected,
  clicked,
  setClicked,
  deleteOption,
  setAmount,
}: Readonly<Props>) {
  const { price, name, items, optionId, quantity, amount } = selected;
  const isClicked = optionId === clicked;
  return (
    <li
      className={`w-full bg-colorede p-2 my-1 font-semibold rounded-[0.3rem] flex ${
        clicked !== undefined && !isClicked && "hidden"
      }`}
    >
      <button
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
      </button>
      <p className="ml-2 shrink-0 mr-1"> Option |</p>
      <div className="w-full">
        <div className="w-full flex justify-between">
          <p>
            {name} ({quantity} 남음)
          </p>
          <div className="flex gap-4">
            <p className="text-color9f9">{price}</p>
            <div className="h-[1.375rem] flex ">
              <button
                className="w-[1.375rem] h-[1.375rem] flex justify-center items-center bg-[#cccccc] text-white rounded-l-[0.2rem] border-y-[1px] border-l-[1px]"
                onClick={() => {
                  if (amount === 1) return;
                  setAmount(amount - 1);
                }}
              >
                -
              </button>
              <div className="w-9 h-full flex justify-center items-center bg-slate-100 text-[0.875rem] border-y-[1px]">
                {amount}
              </div>
              <button
                className="w-[1.375rem]  flex justify-center items-center bg-[#cccccc] text-white rounded-r-[0.2rem] border-y-[1px] border-r-[1px]"
                onClick={() => {
                  if (amount === quantity) return;
                  setAmount(amount + 1);
                }}
              >
                +
              </button>
            </div>
            <DeleteBtn onCLick={deleteOption} />
          </div>
        </div>
        {isClicked && (
          <ul className="max-h-20 overflow-y-auto w-full">
            {items.map((item) => (
              <li key={item.itemId}> - {item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
