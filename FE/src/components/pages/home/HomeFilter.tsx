"use client";
import { FilterToggle } from "@/components/common/icon";
import { filterText, sortData } from "@/constants/HomeData";
import { HomeState } from "@/store/HomeState";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function HomeFilter() {
  const [filter, setFilter] = useState(0);
  const [_, setHomeState] = useRecoilState(HomeState);

  useEffect(() => {
    setHomeState((prev) => ({ ...prev, sort: sortData[filter] }));
  }, [filter]);

  return (
    <button
      className="flex items-center gap-2 cursor-default"
      onClick={() => {
        setFilter((prev) => (prev - 1) ** 2);
      }}
    >
      <span className="text-colorb9b">{filterText[filter]}</span>
      <FilterToggle />
    </button>
  );
}
