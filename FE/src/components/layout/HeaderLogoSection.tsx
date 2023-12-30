import Link from "next/link";
import { Logo, ToggleArrow, User } from "../common/icon";

export default function HeaderLogoSection() {
  return (
    <div className="w-full flex justify-between items-center mt-[1.9rem] px-14">
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
