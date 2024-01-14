import useCharge from "@/hooks/useCharge";
import Agreement from "./Agreement";
import PaymentBtn from "./PaymentBtn";
import Total from "../../common/Total";

type Props = {
  type: "DONATE" | "GIFT";
  fundingId: number;
  address: string;
};

export default function Payment({ type, fundingId, address }: Readonly<Props>) {
  const { data, error, isLoading } = useCharge();
  return (
    <div className="relative py-11 px-10 z-50">
      <p className="text-[1.375rem] font-semibold">결제 정보를 확인해주세요.</p>
      <div className=" mt-8">
        {data && (
          <p className="text-end font-semibold text-color999">
            My Coin : {data ? data.response.coin : ""}
          </p>
        )}
        <Total type={type} />
      </div>
      <hr className="border-color999 border-2 mt-5" />
      <Agreement />
      <PaymentBtn type={type} fundingId={fundingId} address={address} />
    </div>
  );
}
