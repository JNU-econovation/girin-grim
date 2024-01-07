"use client";
import { FundingOptions, SelectedOption } from "@/Model/Funding";
import InfoOptionDetail from "./InfoOptionDetail";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { SelectedOptions } from "@/store/FundingState";

type Props = {
  options: FundingOptions[];
};

export default function InfoOption({ options }: Props) {
  const [selected, setSelected] =
    useRecoilState<SelectedOption[]>(SelectedOptions);
  const [clicked, setClicked] = useState<number | undefined>();
  return (
    <>
      <select
        className="w-full border my-3 py-4 px-4 rounded-md outline-none text-colorb9b font-nanum"
        onChange={(e) => {
          const value = +e.target.value;
          if (!value) return;
          const selectedOption = {
            ...options.find((option) => option.optionId === value)!,
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
        <option value={0}>상품을 선택해주세요!</option>
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
            deleteOption={() => {
              setSelected(
                selected.filter((item) => item.optionId !== option.optionId)
              );
            }}
            setAmount={(amount: number) => {
              setSelected(
                selected.map((item) =>
                  item.optionId === option.optionId ? { ...item, amount } : item
                )
              );
            }}
          />
        ))}
      </section>
    </>
  );
}
