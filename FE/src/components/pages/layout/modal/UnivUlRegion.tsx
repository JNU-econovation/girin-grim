import { useRecoilState } from "recoil";
import UnivUl from "../../../common/UnivUl";
import { Locations } from "@/constants/RegionData";
import { UnivStateQ, UnivStateRegion } from "@/store/HeaderState";

export default function UnivUlRegion() {
  const [_, setQ] = useRecoilState(UnivStateQ);
  const [__, setRegion] = useRecoilState(UnivStateRegion);
  return (
    <UnivUl
      type="region"
      data={Locations}
      modify={({ region }) => {
        setQ("");
        setRegion(region);
      }}
    />
  );
}
