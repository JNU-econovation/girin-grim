import { Regions, Univ } from "@/Model/Univ";
import { UnivState } from "@/store/HeaderState";

type Props =
  | {
      type: "region";
      data: Regions;
      modify: ({ q, region }: UnivState) => void;
    }
  | {
      type: "univ";
      data: Univ[];
      modify: ({
        univId,
        univName,
      }: {
        univId: number;
        univName: string;
      }) => void;
    };

export default function UnivUl({ data, type, modify }: Props) {
  return (
    <ul className="grow bg-colorede rounded-[0.31rem] px-6 py-[0.48rem] overflow-y-auto font-normal text-sm mt-3">
      {type == "region"
        ? data.map(({ name, regionId }) => (
            <button
              className="block"
              key={regionId}
              onClick={() => modify({ q: "", region: name })}
            >
              <li>{name}</li>
            </button>
          ))
        : data.map(({ name, universityId }) => (
            <button
              className="block"
              key={universityId}
              onClick={() => modify({ univId: universityId, univName: name })}
            >
              <li>{name}</li>
            </button>
          ))}
    </ul>
  );
}
