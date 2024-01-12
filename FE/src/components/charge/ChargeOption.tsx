import { paymentOptions } from "@/constants/CategoryData";

export default function ChargeOption() {
  return (
    <>
      <h1 className="text-2xl font-extrabold mt-20">충전할 크레파스</h1>
      <div className="flex gap-2">
        {paymentOptions.map((option) => (
          <div className="w-full flex flex-col mt-7 py-4 items-center border-2 rounded-md cursor-default">
            <div>{option.title}</div>
            <div className="mt-2">{option.image}</div>
          </div>
        ))}
      </div>
    </>
  );
}
