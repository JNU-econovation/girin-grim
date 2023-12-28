import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src={"/assets/Logo.svg"}
      width={146.8}
      height={52.78}
      alt="Logo"
    ></Image>
  );
}
