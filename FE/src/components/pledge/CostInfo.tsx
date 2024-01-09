import Rectangle from "../common/icons/Rectangle";
import Payment from "./Payment";
import PaymentBg from "./PaymentBg";

export default function CostInfo({
  type,
}: Readonly<{ type: "DONATE" | "GIFT" }>) {
  return (
    <section className="relative px-5 ">
      <Rectangle />
      <Payment type={type} />
      <PaymentBg />
    </section>
  );
}
