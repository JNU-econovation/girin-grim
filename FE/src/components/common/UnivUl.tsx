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
      modify: () => void;
    };

export default function UnivUl({ data, type, modify }: Props) {
  return (
    <ul className="grow bg-colorede rounded-[0.31rem] px-[1.5rem] py-[0.48rem] overflow-y-auto font-normal text-[0.875rem] mt-3">
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
              onClick={() => modify()}
            >
              <li>{name}</li>
            </button>
          ))}
    </ul>
  );
}
