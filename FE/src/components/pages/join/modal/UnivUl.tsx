"use client";

import UnivUl from "@/components/common/UnivUl";
import useUniv from "@/hooks/useUniv";
import { HomeUni } from "@/store/HomeState";
import { favUniState } from "@/store/JoinState";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function JoinUnivUl() {
  const [univ, setUniv] = useState<HomeUni>({
    univName: "",
    univId: 0,
  });
  const [univs, setUnivs] = useRecoilState(favUniState);
  const { data } = useUniv();

  useEffect(() => {
    if (univ.univId === 0) return;
    if (univs.length >= 10) {
      alert("관심 대학교는 10개까지만 설정할 수 있습니다!");
      return;
    }
    if (univs.find((item) => item.favUniversityId === univ.univId)) {
      alert("이미 추가된 대학교입니다!");
      return;
    }
    setUnivs((prev) => [
      ...prev,
      { favUniversityId: univ.univId!, name: univ.univName },
    ]);
  }, [univ]);

  if (!data)
    return (
      <div className="grow bg-colorede rounded-[0.31rem] px-6 py-[0.48rem] overflow-y-auto font-normal text-sm mt-3" />
    );
  return (
    <>
      {data && (
        <UnivUl
          data={data.response.university}
          type="univ"
          modify={({ univId, univName }) => {
            setUniv(() => ({ univId, univName }));
          }}
        />
      )}
    </>
  );
}
