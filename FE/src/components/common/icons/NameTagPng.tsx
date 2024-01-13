"use client";

import Image from "next/image";

export default function NameTag() {
  const width = 433.125;
  const height = 24.82;
  return (
    <div className="flex flex-col justify-center items-center ">
      <Image
        src={"/assets/NameTag.png"}
        alt="nameTag"
        width={width}
        height={0}
      />
      <Image
        src={"/assets/NameTagBt.png"}
        alt="nameTag"
        width={width}
        height={600}
        className="h-[600px]"
      />
      <svg
        className="-translate-y-12 z-0"
        width={width}
        height={24.82}
        viewBox="0 0 328 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10C0 4.47715 4.47715 0 10 0H318C323.523 0 328 4.47715 328 10V20H0V10Z"
          fill="#FF9A15"
        />
      </svg>
    </div>
  );
}
