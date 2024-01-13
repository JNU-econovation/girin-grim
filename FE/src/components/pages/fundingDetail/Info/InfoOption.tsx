"use client";
import { FundingOptions, SelectedOption } from "@/Model/Funding";
import InfoOptionDetail from "./InfoOptionDetail";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SelectedOptions } from "@/store/FundingState";
import { updateLocalOption } from "@/utils/localData";

type Props = {
  options: FundingOptions[];
};

export default function InfoOption({ options }: Readonly<Props>) {
  const [selected, setSelected] =
    useRecoilState<SelectedOption[]>(SelectedOptions);
  const [clicked, setClicked] = useState<number | undefined>();
  useEffect(() => {
    setSelected([]);
  }, []);
  useEffect(() => {
    updateLocalOption(selected);
  }, [selected]);
  return (
    <>
      <select
        className="border mt-2 mb-3 py-4 px-4 rounded-md outline-none text-colorb9b font-nanum"
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
          <option key={option.optionId} value={option.optionId}>
            {option.name}
          </option>
        ))}
      </select>
      {/* 1f1f1f도 없어서 일단 */}
      {/* grow 빠짐 */}
      <section className="">
        {selected.map((option) => (
          <InfoOptionDetail
            key={option.optionId}
            selected={option}
            clicked={clicked}
            setClicked={(v: number | undefined) => setClicked(v)}
            deleteOption={() => {
              setClicked(undefined);
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
