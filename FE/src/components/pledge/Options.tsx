export default function Options() {
  return (
    <section className="flex flex-col items-end m-[1.14rem]">
      <div className="flex text-[1.25rem] font-semibold w-full px-6 py-3 bg-colore7e rounded-md">
        <p>Option | </p>
        <div>
          <p>댕댕이를 위한 꽃비즈 (12500)</p>
          <ul className="text-[1rem] font-medium text-color999 mt-1">
            <li>- 미니 꽃 비즈 20pc</li>
            <li>- 우레탄 줄 1M</li>
            <li>- 트레이 1pc</li>
          </ul>
        </div>
      </div>

      <div className="flex text-[1.25rem] font-semibold w-40 justify-between mt-2">
        <p className="text-color656">단가</p>
        <p className="font-bold">{"12500원"}</p>
      </div>
      <div className="flex text-[1.25rem] font-semibold w-40 justify-between mt-2">
        <p className="text-color656">수량</p>
        <p className="font-bold">{"2"}</p>
      </div>
    </section>
  );
}
