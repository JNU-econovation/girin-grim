import GaugeBg from "./GaugeBg";
import Girin from "./Girin";

export default function GaugeBar() {
  const height = 30;
  return (
    <section className="relative flex flex-col justify-center items-start">
      <Girin height={height} />
      <div className="flex flex-col items-center relative">
        <div
          className={`w-2 bg-main translate-y-2 h-${height} relative z-20`}
          style={{
            height: height + "rem",
          }}
        />
        <div className="w-9 h-9 bg-main rounded-full relative z-20" />
        <GaugeBg height={height} />
      </div>
    </section>
  );
}
