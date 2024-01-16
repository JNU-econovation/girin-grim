"use client";
import { TotalDonateState } from "@/store/FundingState";
import { useRecoilState } from "recoil";

export default function InfoDonate({ isOnGoing }: { isOnGoing: boolean }) {
  const [cost, setCost] = useRecoilState(TotalDonateState);
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
