import { ArrowDown } from "../../common/icon";

export default function Agreement() {
  return (
    <>
      <label htmlFor="1" className="flex justify-between mt-5 font-nanum">
        <input type="checkbox" className="mr-2" id="1" />
        <span className="w-full">[필수] 유의사항 확인 및 구매에 동의</span>
        <span className="shrink-0 text-color999 mr-2">(전문 열기)</span>
        <ArrowDown />
      </label>
      <label htmlFor="2" className="flex justify-between my-1">
        <input type="checkbox" className="mr-2" id="2" />
        <span className="w-full">[필수] 정보 제3자 제공 확인 및 동의</span>
        <span className="shrink-0 text-color999 mr-2">(전문 열기)</span>
        <ArrowDown />
      </label>
    </>
  );
}
