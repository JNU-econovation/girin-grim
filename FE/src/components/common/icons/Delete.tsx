import Image from "next/image";

export default function Delete() {
  return (
    <Image
      src={"/assets/Delete.svg"}
      alt="delete button"
      width={22}
      height={22}
    />
  );
}
