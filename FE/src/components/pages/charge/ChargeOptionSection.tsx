import ChargeNoticet from "./ChargeNoticet";
import ChargeOption from "./ChargeOption";
import dynamic from "next/dynamic";
const ChargingCoin = dynamic(() => import("./ChargingCoin"), { ssr: false });

export default function ChargeOptionSection() {
  return (
    <section className="py-7 px-12 bg-white pb-80">
      <ChargingCoin />
      <ChargeOption />
      <ChargeNoticet />
    </section>
  );
}
