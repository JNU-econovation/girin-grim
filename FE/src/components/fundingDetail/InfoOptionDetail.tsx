import { ArrowDown, Delete } from "../common/icon";

export default function InfoOptionDetail() {
  return (
    <div className="w-full bg-colorede p-2 my-1 flex font-semibold rounded-[0.3rem]">
      <ArrowDown />
      <p className="ml-2 shrink-0"> Option | </p>
      <div className="w-full flex justify-between">
        <p>댕댕이를 위한 꽃비즈</p>
        <div className="flex gap-4">
          <p className="text-color9f9">12500</p>
          <div className="h-[1.375rem] flex ">
            <button className="w-[1.375rem] h-[1.375rem] flex justify-center items-center bg-[#cccccc] text-white rounded-l-[0.2rem] border-y-[1px] border-l-[1px]">
              +
            </button>
            <div className="w-9 h-full flex justify-center items-center bg-slate-100 text-[0.875rem] border-y-[1px]">
              2
            </div>
            <button className="w-[1.375rem]  flex justify-center items-center bg-[#cccccc] text-white rounded-r-[0.2rem] border-y-[1px] border-r-[1px]">
              -
            </button>
          </div>
          <Delete />
        </div>
      </div>
    </div>
  );
}
