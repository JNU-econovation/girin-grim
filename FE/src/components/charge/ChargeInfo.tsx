import Rectangle from "../common/icons/Rectangle";
import PaymentBg from "../pledge/PaymentBg";
import Payment from "./Payment";

export default function ChargeInfo() {
  return (
    <section className="relative px-5 ">
      <Rectangle />
      <Payment />
      <PaymentBg />
    </section>
  );
}
