import GaugeBg from "./GaugeBg";
import Girin from "./Girin";

type Props = {
  rate: number;
  isOnGoing: boolean;
};

export default function GaugeBar({ rate, isOnGoing }: Readonly<Props>) {
  const height = rate * 0.3;
  return (
    <section className="relative flex flex-col justify-end items-center pb-2">
      <Girin height={height} rate={rate} />
      <div className="flex flex-col items-center relative">
        <div
          className={`w-2 translate-y-2 relative z-20 ${
            isOnGoing ? "bg-main" : "bg-color999"
          }`}
          style={{
            height: height + "rem",
          }}
        />
        <div
          className={`w-9 h-9  rounded-full relative z-20 ${
            isOnGoing ? "bg-main" : "bg-color999"
          }`}
        />
        <GaugeBg height={height} isOnGoing={isOnGoing} />
      </div>
    </section>
  );
}
