"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import { Setting } from "../common/icon";
import { HomeState } from "@/store/HomeState";

export default function Univ() {
  //TODO: get from BE
  const univ = [
    {
      universityId: 1,
      name: "전남대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
  ];
  const [home, setHome] = useRecoilState(HomeState);

  const isSelected = home.uni.univId !== 0;

  const univText = isSelected ? "" : univ.map(({ name }) => name).join(", ");
  //대학이 선택되었는지의 여부에 따라
  const univHeader = isSelected
    ? "대학 보기: " + home.uni.univName
    : "관심 대학";

  return (
    <div className="mt-[1.2rem] text-colorb9b font-nanum text-[0.875rem] flex gap-[0.4rem] underline cursor-default">
      <Setting />
      <div>
        <span className="font-bold">{univHeader}</span>
        <span> | </span>
        <span className="font-medium ">{univText}</span>
        {isSelected && (
          <button
            onClick={() =>
              setHome((prev) => ({ ...prev, uni: { univId: 0, univName: "" } }))
            }
          >
            <span>{"관심대학 보기 "}&rarr;</span>
          </button>
        )}
      </div>
    </div>
  );
}
