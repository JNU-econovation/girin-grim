export default function Bubble({ rate }: { rate: number }) {
  return (
    <div
      className="absolute z-40 h-20 text-center text-white font-bold flex justify-center items-center translate-x-24 -translate-y-14"
      style={{
        width: "121px",
        height: "47px",
        backgroundImage: "url(/assets/Bubble.svg)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <span className="translate-x-2 -translate-y-1 font-medium">{rate}%</span>
    </div>
  );
}
