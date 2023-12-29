import Image from "next/image";
import React from "react";

export default function Toggle() {
  return (
    <Image
      src={"/assets/Toggle.svg"}
      alt="toggle to see password"
      width={20}
      height={18}
      className="absolute top-1/2 right-[1rem] -translate-y-1/2"
    />
  );
}
