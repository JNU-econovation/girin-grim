import Image from "next/image";
import React from "react";

export default function Ticket() {
  return (
    <Image
      src={"/assets/Ticket.svg"}
      width={500}
      height={440}
      alt={"ticket"}
      className="w-full"
    />
  );
}
