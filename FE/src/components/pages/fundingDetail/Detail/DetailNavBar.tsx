import { navList } from "@/constants/FundingDetailDate";
import NavBar from "@/components/common/NavBar";

type Props = {
  nav: string;
  setNav: (nav: string) => void;
};

export default function DetailNavBar({ nav, setNav }: Readonly<Props>) {
  return <NavBar navItems={navList} setFocus={setNav} focused={nav} />;
}
