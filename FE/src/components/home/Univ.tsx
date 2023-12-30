import { Setting } from "../common/icon";

export default function Univ() {
  const univ = [
    {
      universityId: 1,
      name: "전남대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
  ];
  const univText = univ.map(({ name }) => name).join(", ");
  return (
    <p className="mt-[1.4rem] text-color999 font-nanum text-[0.75rem] flex gap-[0.4rem] underline">
      <Setting />
      <p className="out">
        <span className="font-[800]">관심 대학 </span>
        <span>| </span>
        <span className="font-semibold ">{univText}</span>
        {/* &nbsp;&nbsp; */}
      </p>
    </p>
  );
}
