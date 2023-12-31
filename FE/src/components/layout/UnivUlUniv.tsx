"use client";

import useUniv from "@/hooks/useUniv";
import UnivUl from "../common/UnivUl";
import { useRecoilState } from "recoil";
import { HomeState } from "@/store/HomeState";

export default function UnivUlUniv() {
  const [_, setHome] = useRecoilState(HomeState);
  const { data, isLoading, error } = useUniv();
  return (
    <>
      {data && (
        <UnivUl
          data={data.response.university}
          type="univ"
          modify={({ univId, univName }) => {
            setHome((prev) => ({ ...prev, uni: { univId, univName } }));
          }}
        />
      )}
    </>
  );
}
