import Rectangle from "../../common/icons/Rectangle";
import Payment from "./Payment";
import PaymentBg from "./PaymentBg";

type Props = {
  fundingId: number;
  type: "DONATE" | "GIFT";
  address: string;
};

export default function CostInfo({
  fundingId,
  type,
  address,
}: Readonly<Props>) {
  return (
    <section className="relative px-5 ">
      <Rectangle />
      <Payment type={type} fundingId={fundingId} address={address} />
      <PaymentBg />
    </section>
  );
}
