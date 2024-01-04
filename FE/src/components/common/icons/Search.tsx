import Image from "next/image";

export default function Search() {
  return (
    <Image
      src={"/assets/Search.svg"}
      width={28}
      height={28}
      alt="Search icon"
      className="cursor-pointer inline absolute right-2"
    ></Image>
  );
}
