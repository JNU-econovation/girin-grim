"use client";

import { addressState } from "@/store/PledgeState";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function AddressComponents() {
  const [address, setAddress] = useRecoilState(addressState);
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => setIsClicked((prev) => !prev);
  if (address && !isClicked)
    return (
      <section className="flex gap-4">
        <p>{address}</p>
        <button
          onClick={onClick}
          className="px-2 py-1 bg-color999 rounded-lg text-sm font-md shrink-0 my-auto text-white"
        >
          수정
        </button>
      </section>
    );
  return isClicked ? (
    <>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="border-2 rounded-md px-3 py-1 text-sm outline-none"
      />
      <button
        onClick={onClick}
        className="px-2 bg-color999 rounded-lg ml-4 py-1 text-sm font-medium text-white"
      >
        입력
      </button>
    </>
  ) : (
    <button
      onClick={onClick}
      className="px-3 py-1 rounded-lg bg-[#D94D4D] text-white text-sm underline"
    >
      주소를 설정해주세요!
    </button>
  );
}
