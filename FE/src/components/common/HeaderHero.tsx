"use client";

import { useEffect, useState } from "react";
import UserImage from "../pages/layout/UserImage";
import { User } from "./icon";
import { CheckIsLoggedIn } from "@/utils/localData";

export default function HeaderHero() {
  const size = "small";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loggedIn = CheckIsLoggedIn();
    setIsLoggedIn(loggedIn);
  }, []);
  if (isLoggedIn) return <UserImage size={size} />;
  return <User size={size} />;
}
