import { Regions, Univ } from "@/Model/Univ";
import { UnivState } from "@/store/UnivState";
import { useRecoilState } from "recoil";

type Props =
  | {
      inputTitle: "지역";
      type: "region";
      data: Regions;
    }
  | {
      inputTitle: "대학";
      type: "univ";
      data: Univ[];
    };

export default function UnivUnitSection({
  inputTitle,
  data,
  type,
}: Readonly<Props>) {
  const [univState, setUnivState] = useRecoilState(UnivState);
  return (
    <div className="flex flex-col">
      <div
        className={`flex text-[0.875rem] ${
          type == "region" ? "w-[9.25rem]" : "w-[17.2rem]"
        }`}
      >
        <div className="py-[0.3rem] px-3 shrink-0 rounded-l-[0.31rem] bg-[#FAFAFA] border-2 border-b-2">
          {inputTitle}
        </div>
        <div className="w-full h-full relative">
          <input
            type="text"
            className="w-full h-full rounded-r-[0.31rem] border-r-2 border-t-2 border-b-2 outline-none"
            value={type == "region" ? univState.region : univState.q}
            onChange={(e) =>
              setUnivState({ q: e.target.value, region: "전체" })
            }
          />
        </div>
      </div>
      <ul
        className={`h-full bg-colorede rounded-[0.31rem] px-[1.5rem] py-[0.48rem] overflow-y-auto font-normal text-[0.875rem] mt-3 ${
          type == "region" ? "w-[9.25rem]" : "w-[17.2rem]"
        }`}
      >
        {type == "region"
          ? data.map(({ name, regionId }) => (
              <button
                className="block"
                key={regionId}
                onClick={() => setUnivState({ q: "", region: name })}
              >
                <li>{name}</li>
              </button>
            ))
          : data.map(({ name, universityId }) => (
              <button
                className="block"
                key={universityId}
                // onClick={() => setUnivState({ q: "", region: name })}
              >
                <li>{name}</li>
              </button>
            ))}
      </ul>
    </div>
  );
}
