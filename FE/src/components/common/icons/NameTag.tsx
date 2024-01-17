import Image from "next/image";

export default function NameTag() {
  const height = 557;
  return (
    <section className="flex flex-col justify-center items-center">
      <Image src={"/assets/NameTagTop.svg"} alt="" width={433.125} height={0} />
      <img
        src={"/assets/NameTagBt.png"}
        alt=""
        width={433.125}
        height={600}
        className="-translate-y-8 -translate-x-[0.07rem]"
        style={{
          height: `${height}px`,
        }}
      />
    </section>
  );
}
