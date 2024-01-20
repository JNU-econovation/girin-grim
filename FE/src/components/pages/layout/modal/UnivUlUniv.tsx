import useUniv from "@/hooks/useUniv";
import UnivUl from "../../../common/UnivUl";
import { useRecoilState } from "recoil";
import { HomeState, HomeUniSelectedState } from "@/store/HomeState";

export default function UnivUlUniv() {
  const [_, setHome] = useRecoilState(HomeState);
  const [__, isSelected] = useRecoilState(HomeUniSelectedState);
  const { data } = useUniv();
  if (!data)
    return (
      <div className="grow bg-colorede rounded-[0.31rem] px-6 py-[0.48rem] overflow-y-auto font-normal text-sm mt-3" />
    );

  return (
    <>
      {data && (
        <UnivUl
          data={data.response.university}
          type="univ"
          modify={({ univId, univName }) => {
            setHome((prev) => ({ ...prev, uni: { univId, univName } }));
            isSelected(true);
          }}
        />
      )}
    </>
  );
}
