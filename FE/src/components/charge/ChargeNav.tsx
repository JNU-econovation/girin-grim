"use client";
import { useState } from "react";
import NavBar from "../common/NavBar";

export default function ChargeNav() {
  const navItems = ["충전", "충전내역", "사용내역"];
  const [focused, setFocused] = useState("충전");
  return (
    <div className="w-80">
      <NavBar
        navItems={navItems}
        focused={focused}
        setFocus={(item: string) => setFocused(item)}
      />
    </div>
  );
}
