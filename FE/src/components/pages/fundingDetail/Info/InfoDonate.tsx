"use client";
import { SelectedOption } from "@/Model/Funding";
import { SelectedOptions, TotalDonateState } from "@/store/FundingState";
import { updateLocalOption } from "@/utils/localData";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function InfoDonate({ isOnGoing }: { isOnGoing: boolean }) {
  const [cost, setCost] = useRecoilState(TotalDonateState);
  const [_, setSelected] = useRecoilState<SelectedOption[]>(SelectedOptions);
  useEffect(() => {
    setSelected([]);
    setCost(0);
  }, []);
  return (
    <input
      type="number"
      className="border mt-2 mb-3 py-4 px-4 rounded-md outline-none text-colorb9b font-nanum"
      onChange={(e) => setCost(+e.target.value)}
      value={cost}
      placeholder="후원할 금액을 입력해주세요"
      disabled={!isOnGoing}
      min={1000}
    />
  );
}
