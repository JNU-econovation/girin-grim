import React from "react";
import { Logo, User } from "./ui/icon";

export default function HeaderLogoSection() {
  return (
    <div className="w-full flex justify-between items-center mt-[30px] px-14">
      <div />
      <Logo />
      <User />
    </div>
  );
}
