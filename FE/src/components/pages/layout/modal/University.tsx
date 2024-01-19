import UnivUlRegion from "./UnivUlRegion";
import UnivTitleRegion from "./UnivTitleRegion";
import UnivTitleUniv from "./UnivTitleUniv";
import UnivUlUniv from "./UnivUlUniv";

export default function University() {
  return (
    <div className="bg-gradient-to-t via-colord9d from-colord9d absolute top-[1.8rem] -left-3 p-[0.15rem] rounded-[0.63rem] z-50">
      <section className="w-[71rem] h-[15rem] bg-white rounded-[0.63rem] text-[#333] flex p-5 gap-3 text-[0.875rem]">
        <div className="w-[9.25rem] h-full flex flex-col">
          <UnivTitleRegion />
          <UnivUlRegion />
        </div>
        <div className="w-[17.2rem] h-full flex flex-col">
          <UnivTitleUniv />
          <UnivUlUniv />
        </div>
      </section>
    </div>
  );
}
