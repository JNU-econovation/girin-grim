"use client";
import Link from "next/link";
import { Logo, ToggleArrow, User } from "../common/icon";
import UserImage from "./UserImage";
import { useEffect, useState } from "react";

export default function HeaderLogoSection() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const t = localStorage.getItem("accessToken");
    if (!t) return;
    setToken(t);
  }, []);
  return (
    <div className="flex justify-between items-center mt-6">
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
