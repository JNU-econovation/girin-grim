import { Locations } from "@/constants/RegionData";
import UnivUnitSection from "./UnivUnitSection";
import UnivList from "./UnivList";

export default function University() {
  return (
    <div className="bg-gradient-to-t via-colord9d from-colord9d absolute top-[2.3rem] -left-3 p-[0.15rem] rounded-[0.63rem]">
      <section className="w-[71rem] h-[15rem] bg-white rounded-[0.63rem] text-[#333] flex p-5 gap-3">
        <UnivUnitSection data={Locations} type="region" inputTitle="지역" />
        <UnivList />
      </section>
    </div>
  );
}
