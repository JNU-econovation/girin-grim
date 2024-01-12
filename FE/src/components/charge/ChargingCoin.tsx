import { paymentUnits } from "@/constants/ChargeDate";

export default function ChargingCoin() {
  return (
    <>
      <h1 className="text-2xl font-extrabold">
        충전할 크레파스
        <span className="ml-1 text-sm font-normal text-color9f9">
          Charging coin
        </span>
      </h1>
      <p className="text-black text-6xl font-extrabold mt-5">{"25,000"}</p>
      <div className="bg-main mt-2 pt-1" />
      {paymentUnits.map((unit) => (
        <div className="inline-block bg-[#f2f2f2] mt-[0.63rem] mr-3 px-6 py-2 rounded-[0.25rem] cursor-default">
          + {unit}
        </div>
      ))}
      <div className="flex justify-between font-bold text-[#656565] mt-8">
        <p>결제 하실 금액</p>
        <p>{"25,000"} 원</p>
      </div>
      <div className="flex justify-between font-bold text-[#656565] mt-3">
        <p>결제 하실 금액</p>
        <p>{"25,000"} 원</p>
      </div>
    </>
  );
}
