import StyledBtn from "../common/StyledBtn";
import PaymentBg from "./PaymentBg";

export default function Payment() {
  return (
    <div className="relative w-full py-11 px-10 z-50">
      <p className="text-[1.375rem] font-semibold">결제 정보를 확인해주세요.</p>
      <div className="w-full mt-8">
        <p className="text-end font-semibold text-color999">
          My Coin : {"80000"}
        </p>
        <p className="text-end flex justify-between items-center text-[1.375rem] text-[#696969]">
          <span>최종 결제 금액 : </span>
          <span className="font-black text-[2.5rem] text-color121">
            {"100000"}
          </span>
        </p>
      </div>
      <hr className="border-color999 border-2 mt-5" />
      <StyledBtn text="결제하기" />
    </div>
  );
}
