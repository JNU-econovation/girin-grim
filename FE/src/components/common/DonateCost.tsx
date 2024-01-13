"use client";
import { getDonateCost } from "@/utils/payment";

export default function DonateCost() {
  const total = getDonateCost() || 0;
  return (
    <div className="flex justify-end items-center gap-2 text-2xl px-6 py-3 bg-colore7e rounded-md m-[1.14rem]">
      <p>{total}</p>
      <p className="font-semibold">원</p>
    </div>
  );
}
