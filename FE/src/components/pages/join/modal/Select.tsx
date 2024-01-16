import { Delete } from "@/components/common/icon";
import UnivTitleRegion from "../../layout/modal/UnivTitleRegion";
import UnivUlRegion from "../../layout/modal/UnivUlRegion";
import UnivTitleUniv from "../../layout/modal/UnivTitleUniv";
import { useRecoilState, useRecoilValue } from "recoil";
import { favUniState } from "@/store/JoinState";
import JoinUnivUl from "./UnivUl";

type Props = {
  close: () => void;
};

export default function Select({ close }: Readonly<Props>) {
  const univs = useRecoilValue(favUniState);
  return (
    <section className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2">
      <div className="flex justify-between border-b-2">
        <h1>관심 대학교를 선택해주세요.</h1>
        <button onClick={close}>
          <Delete />
        </button>
      </div>
      <section className="flex gap-3 grow">
        <div className="w-[9.25rem] max-h-[9.25rem] flex flex-col">
          <UnivTitleRegion />
          <UnivUlRegion />
        </div>
        <div className="w-[17.2rem] max-h-[9.25rem] flex flex-col">
          <UnivTitleUniv />
          <JoinUnivUl />
        </div>
      </section>
      <p>1개 ~ 10개 이내에서 꼭 설정해주세요!</p>
      <div className="p-4">
        {univs.map((item) => (
          <li key={item.favUniversityId}>{item.name}</li>
        ))}
      </div>
    </section>
  );
}
