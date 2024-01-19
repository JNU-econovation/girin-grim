"use client";

import useUniv from "@/hooks/useUniv";
import UnivUl from "../../../common/UnivUl";
import { useRecoilState } from "recoil";
import { HomeState, HomeUniSelectedState } from "@/store/HomeState";

export default function UnivUlUniv() {
  const [_, setHome] = useRecoilState(HomeState);
  const [__, isSelected] = useRecoilState(HomeUniSelectedState);
  const { data, isLoading } = useUniv();
  return (
    <>
      {isLoading && (
        <div className="grow bg-colorede rounded-[0.31rem] px-[1.5rem] py-[0.48rem] overflow-y-auto font-normal text-[0.875rem] mt-3"></div>
      )}
      {data && (
        <UnivUl
          data={data.response.university}
          type="univ"
          modify={({ univId, univName }) => {
            setHome((prev) => ({ ...prev, uni: { univId, univName } }));
            isSelected(true);
          }}
        />
      )}
    </>
  );
}
