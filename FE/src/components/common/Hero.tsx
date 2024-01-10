"use client";

import { useEffect, useState } from "react";
import UserImage from "../layout/UserImage";
import { User } from "./icon";
import { CheckIsLoggedIn } from "@/utils/localData";
import { HeroFormat } from "@/utils/cssFormat";

type Props = {
  page?: "header" | "member";
};

export default function Hero({ page }: Readonly<Props>) {
  const size = HeroFormat(page);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loggedIn = CheckIsLoggedIn();
    setIsLoggedIn(loggedIn);
  }, []);
  if (isLoggedIn) return <UserImage size={size} />;
  return <User size={size} />;
}
