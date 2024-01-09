"use client";
import Link from "next/link";
import { Logo, ToggleArrow, User } from "../common/icon";
import UserImage from "./UserImage";
import { useEffect, useState } from "react";
import { CheckIsLoggedIn } from "@/utils/localData";

export default function HeaderLogoSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loggedIn = CheckIsLoggedIn();
    setIsLoggedIn(loggedIn);
  }, []);
  return (
    <div className="flex justify-between items-center mt-6">
      <div />
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-[0.625rem]">
        {isLoggedIn ? <UserImage /> : <User />}
        <ToggleArrow />
      </div>
    </div>
  );
}
