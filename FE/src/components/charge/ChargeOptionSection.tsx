import { DevBtn } from "../common/icon";
import ChargeNoticet from "./ChargeNoticet";
import ChargingCoin from "./ChargingCoin";
import ChargeOption from "./ChargeOption";

export default function ChargeOptionSection() {
  return (
    <section className="py-7 px-12 bg-white pb-80">
      <ChargingCoin />
      <ChargeOption />
      <ChargeNoticet />
    </section>
  );
}
