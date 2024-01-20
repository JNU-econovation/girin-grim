import { SelectedOption } from "@/Model/Funding";

export default function Options({
  option,
}: Readonly<{ option: SelectedOption }>) {
  const { amount, items, name, price } = option;
  return (
    <section className="flex flex-col items-end m-[1.14rem]">
      <div className="flex text-[1.25rem] font-semibold w-full px-6 py-3 bg-colore7e rounded-md">
        <p>Option | </p>
        <div>
          <p>
            {name} ({price})
          </p>
          <ul className="text-[1rem] font-medium text-color999 mt-1">
            {items.map(({ name, itemId }) => (
              <li key={itemId}>- {name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex text-xl font-semibold w-40 justify-between mt-2">
        <p className="text-color656">단가</p>
        <p className="font-bold">{`${price * amount}원`}</p>
      </div>
      <div className="flex text-xl font-semibold w-40 justify-between mt-2">
        <p className="text-color656">수량</p>
        <p className="font-bold">{amount}</p>
      </div>
    </section>
  );
}
