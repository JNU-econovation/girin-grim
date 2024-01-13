import { useRecoilState } from "recoil";
import UnivTitle from "../../../common/UnivTitle";
import { UnivStateQ, UnivStateRegion } from "@/store/HeaderState";

export default function UnivTitleUniv() {
  const [q, setQ] = useRecoilState(UnivStateQ);
  const [region, setRegion] = useRecoilState(UnivStateRegion);
  return (
    <UnivTitle
      title="대학"
      data={q}
      modify={(data: string) => {
        if (region != "") setRegion("전체");
        setQ(data);
      }}
    />
  );
}
