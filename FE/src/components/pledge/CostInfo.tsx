import Rectangle from "../common/icons/Rectangle";
import Payment from "./Payment";
import PaymentBg from "./PaymentBg";

type Props = {
  fundingId: number;
  type: "DONATE" | "GIFT";
};

export default function CostInfo({ fundingId, type }: Readonly<Props>) {
  return (
    <section className="relative px-5 ">
      <Rectangle />
      <Payment type={type} fundingId={fundingId} />
      <PaymentBg />
    </section>
  );
}
