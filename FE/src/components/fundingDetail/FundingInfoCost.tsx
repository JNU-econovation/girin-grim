export default function FundingInfoCost() {
  return (
    <section className="w-full text-end">
      <p className="text-color999 font-semibold">My Coin : {25000} ( 충전 )</p>
      <p className="text-xl font-extrabold flex justify-end gap-2 items-center">
        <span className="opacity-70">{25000}</span>
        <div className="w-5 h-5 rounded-full bg-colorb0b flex justify-center items-center text-sm text-white">
          C
        </div>{" "}
      </p>
    </section>
  );
}
