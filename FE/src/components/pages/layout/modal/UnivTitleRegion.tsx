import UnivTitle from "../../../common/UnivTitle";
import { useRecoilValue } from "recoil";
import { UnivStateRegion } from "@/store/HeaderState";

export default function UnivTitleRegion() {
  const region = useRecoilValue(UnivStateRegion);
  return <UnivTitle title="지역" data={region} modify={() => {}} />;
}
