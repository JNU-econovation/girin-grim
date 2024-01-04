import Link from "next/link";
import { Logo, ToggleArrow, User } from "../common/icon";

export default function HeaderLogoSection() {
  return (
    <div className="w-full flex justify-between items-center mt-[1.5rem]">
      <div />
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-[0.625rem]">
        <User />
        <ToggleArrow />
      </div>
    </div>
  );
}
