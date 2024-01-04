import Image from "next/image";

export default function Banner() {
  return (
    <Image
      src={"/assets/Banner.svg"}
      width={1320}
      height={200}
      alt="home banner"
    ></Image>
  );
}
