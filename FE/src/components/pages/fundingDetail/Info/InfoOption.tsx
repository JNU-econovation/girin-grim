"use client";
import { FundingOptions, SelectedOption } from "@/Model/Funding";
import InfoOptionDetail from "./InfoOptionDetail";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SelectedOptions, TotalDonateState } from "@/store/FundingState";
import { updateLocalOption } from "@/utils/localData";

type Props = {
  options: FundingOptions[];
};

export default function InfoOption({ options }: Readonly<Props>) {
  const [selected, setSelected] =
    useRecoilState<SelectedOption[]>(SelectedOptions);
  const [_, setCost] = useRecoilState(TotalDonateState);
  const [clicked, setClicked] = useState<number | undefined>();
  useEffect(() => {
    setSelected([]);
    setCost(0);
  }, []);
  useEffect(() => {
    console.log(selected);
    updateLocalOption(selected);
  }, [selected]);
  return (
    <>
      <select
        className="border-2 mt-2 mb-3 py-4 px-4 rounded-md outline-none text-color999 font-nanum"
        onChange={(e) => {
          const value = +e.target.value;
          if (!value) return;
          const selectedOption = {
            ...options.find(({ optionId }) => optionId === value)!,
            amount: 1,
          };
          if (
            selectedOption &&
            !selected.find(
              ({ optionId }) => optionId === selectedOption.optionId
            )
          ) {
            setSelected([...selected, selectedOption]);
          }
        }}
      >
        <option value={0}>상품을 선택해주세요!</option>
        {options.map(({ name, optionId, quantity }) => {
          return (
            <option key={optionId} value={optionId} disabled={quantity == 0}>
              {name} ({quantity === -1 ? "제한 없음" : quantity + "개 남음"})
            </option>
          );
        })}
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
