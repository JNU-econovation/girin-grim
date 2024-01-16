import { Delete } from "@/components/common/icon";
import UnivTitleRegion from "../../layout/modal/UnivTitleRegion";
import UnivUlRegion from "../../layout/modal/UnivUlRegion";
import UnivTitleUniv from "../../layout/modal/UnivTitleUniv";
import { useRecoilValue } from "recoil";
import { favUniState } from "@/store/JoinState";
import JoinUnivUl from "./UnivUl";

type Props = {
  close: () => void;
};

export default function Select({ close }: Readonly<Props>) {
  const univs = useRecoilValue(favUniState);
  return (
    <section className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-7 rounded-lg">
      <div className="flex justify-between border-b-2 py-[0.87rem]">
        <h1 className="text-lg font-bold">관심 대학교를 선택해주세요.</h1>
        <button onClick={close}>
          <Delete />
        </button>
      </div>
      <section className="px-[4.69rem] pb-6">
        <section className="flex gap-3 grow mt-[1.12rem]">
          <div className="w-[9.25rem] max-h-[9.25rem] flex flex-col">
            <UnivTitleRegion />
            <UnivUlRegion />
          </div>
          <div className="w-[17.2rem] max-h-[9.25rem] flex flex-col">
            <UnivTitleUniv />
            <JoinUnivUl />
          </div>
        </section>
        <p className="text-end text-color9f9 text-sm mt-2">
          1개 ~ 10개 이내에서 꼭 설정해주세요!
        </p>
        <div className="py-4 grid grid-cols-2 border rounded-lg mt-2 ">
          {univs.map((item, index) => (
            <li
              key={item.favUniversityId}
              className={`${index % 2 == 0 ? "border-r" : ""} px-4`}
            >
              {item.name}
            </li>
          ))}
        </div>
      </section>
      <div className="flex justify-center">
        <button
          className="px-[1.1rem] py-[0.4rem] border border-main rounded-3xl text-main"
          onClick={close}
        >
          ok
        </button>
      </div>
    </section>
  );
}
