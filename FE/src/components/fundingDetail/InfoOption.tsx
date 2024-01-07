"use client";
import { FundingOptions } from "@/Model/Funding";
import InfoOptionDetail from "./InfoOptionDetail";
import { useState } from "react";

type Props = {
  options: FundingOptions[];
};

export type SelectedOption = FundingOptions & { amount: number };

export default function InfoOption({ options }: Props) {
  const [selected, setSelected] = useState<SelectedOption[]>([]);
  const [clicked, setClicked] = useState<number | undefined>();
  return (
    <>
      <select
        className="w-full border my-3 py-4 px-4 rounded-md outline-none text-colorb9b font-nanum"
        onChange={(e) => {
          const selectedOption = {
            ...options.find((option) => option.optionId === +e.target.value)!,
            amount: 1,
          };
          if (
            selectedOption &&
            !selected.find((item) => item.optionId === selectedOption.optionId)
          ) {
            setSelected([...selected, selectedOption]);
          }
        }}
      >
        <option>상품을 선택해주세요!</option>
        {options.map((option) => (
          <option value={option.optionId}>{option.name}</option>
        ))}
      </select>
      {/* 1f1f1f도 없어서 일단 */}
      <section className="grow">
        {selected.map((option) => (
          <InfoOptionDetail
            selected={option}
            clicked={clicked}
            setClicked={(v: number | undefined) => setClicked(v)}
          />
        ))}
      </section>
    </>
  );
}
