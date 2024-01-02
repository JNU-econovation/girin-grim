import { Setting } from "../common/icon";

export default function Univ() {
  const univ = [
    //TODO: get from BE
    {
      universityId: 1,
      name: "전남대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
    {
      universityId: 2,
      name: "조선대학교",
    },
  ];
  const univText = univ.map(({ name }) => name).join(", ");
  return (
    <div className="mt-[1.2rem] text-colorb9b font-nanum text-[0.875rem] flex gap-[0.4rem] underline cursor-default">
      <Setting />
      <div>
        <span className="font-bold">관심 대학</span>
        <span> | </span>
        <span className="font-medium ">{univText}</span>
      </div>
    </div>
  );
}
