"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import { Setting } from "../common/icon";
import { HomeState } from "@/store/HomeState";
import { FavUniversity } from "@/Model/Feed";
import { getUnivText, getunivHeader } from "@/utils/Home";

type Props = {
  favUniversity: FavUniversity[];
};

export default function Univ({ favUniversity }: Props) {
  const [home, setHome] = useRecoilState(HomeState);
  const isSelected = home.uni.univId !== 0;
  const univText = getUnivText(isSelected, favUniversity);
  const univHeader = getunivHeader(isSelected, home.uni.univName);

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
