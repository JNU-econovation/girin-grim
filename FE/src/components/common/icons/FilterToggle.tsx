import Image from "next/image";

export default function FilterToggle() {
  return (
    <Image
      className="m-0 p-0"
      src={"/assets/FilterToggle.svg"}
      alt="filter toggle button"
      width={10}
      height={8}
    />
  );
}
