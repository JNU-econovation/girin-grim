import Image from "next/image";

export default function Layer() {
  return (
    <Image
      src={"/assets/Layer.svg"}
      width={40}
      height={46}
      alt="category"
      className="translate-y-[3.2px]"
    ></Image>
  );
}
