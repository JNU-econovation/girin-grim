"use client";
import Link from "next/link";
import { Logo, ToggleArrow, User } from "../common/icon";
import UserImage from "./UserImage";
// import dynamic from "next/dynamic";
// const UserImage = dynamic(() => import("./UserImage"), { ssr: false });

export default function HeaderLogoSection() {
  const token = localStorage.getItem("accessToken");
  return (
    <div className="w-full flex justify-between items-center mt-[1.5rem]">
      <div />
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-[0.625rem]">
        {token ? <UserImage /> : <User />}
        <ToggleArrow />
      </div>
    </div>
  );
}
