import { useRecoilState } from "recoil";
import UnivTitle from "../../../common/UnivTitle";
import { UnivStateQ, UnivStateRegion } from "@/store/HeaderState";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";

export default function UnivTitleUniv() {
  const [_, setQ] = useRecoilState(UnivStateQ);
  const [region, setRegion] = useRecoilState(UnivStateRegion);
  const [text, setText] = useState("");
  const debounce = useDebounce(text, 500);

  useEffect(() => {
    setQ(debounce);
  }, [debounce]);

  return (
    <UnivTitle
      title="대학"
      data={text}
      modify={(data: string) => {
        if (region != "") setRegion("전체");
        setText(data);
      }}
    />
  );
}
