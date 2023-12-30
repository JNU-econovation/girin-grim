import Image from "next/image";
import React from "react";

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
