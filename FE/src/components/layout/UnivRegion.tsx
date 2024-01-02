import { Locations } from "./University";

export default function UnivRegion() {
  return (
    <div className="flex flex-col">
      <div className="flex w-[17.2rem] text-[0.875rem]">
        <div className="py-[0.3rem] px-3 shrink-0 rounded-l-[0.31rem] bg-[#FAFAFA] border-2 border-b-2">
          대학
        </div>
        <div className="w-full h-full relative">
          <input
            type="text"
            className="w-full h-full rounded-r-[0.31rem] border-r-2 border-t-2 border-b-2 outline-none"
            // value={}
          />
        </div>
      </div>
      <ul className="w-[17.1rem] h-full bg-colorede rounded-[0.31rem] px-[1.5rem] py-[0.48rem] overflow-y-auto font-normal text-[0.875rem] mt-3">
        {Locations.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
