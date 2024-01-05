import InfoOptionDetail from "./InfoOptionDetail";

export default function InfoOption() {
  return (
    <>
      <select className="w-full border my-3 py-5 px-4 rounded-md outline-none text-colorb9b font-nanum">
        <option value="">상품을 선택해주세요!</option>
        {/* 옵션 데이터에 맞게 mapping하기 */}
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      {/* 1f1f1f도 없어서 일단 */}
      <section className="grow">
        <InfoOptionDetail />
      </section>
    </>
  );
}
