"use client";
import { paymentOptions } from "@/constants/CategoryData";
import DevBtn from "./DevBtn";
import { useRecoilState } from "recoil";
import { SelectedOption } from "@/store/ChargeState";

export default function ChargeOption() {
  const [selected, setSelected] = useRecoilState(SelectedOption);
  return (
    <>
      <h1 className="text-2xl font-extrabold mt-20">충전할 크레파스</h1>
      <div className="flex gap-2">
        {paymentOptions.map(({ id, image, title }) => (
          <button
            style={{
              borderColor: id == selected ? "#FFD600" : "#E4E4E4",
            }}
            onClick={() => setSelected(id)}
            className="w-full flex flex-col mt-7 py-4 items-center border-2 rounded-md cursor-default shadow-sm"
            key={id}
          >
            <p>{title}</p>
            <div className="mt-2">{image}</div>
          </button>
        ))}
      </div>
      <DevBtn selected={selected} setSelected={() => setSelected(0)} />
    </>
  );
}
