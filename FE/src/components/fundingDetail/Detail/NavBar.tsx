import { navList } from "@/constants/FundingDetailDate";
import { NavList } from "./DetailDescription";

type Props = {
  nav: NavList;
  setNav: (nav: NavList) => void;
};

export default function NavBar({ nav, setNav }: Readonly<Props>) {
  return (
    <nav className="w-full h-[4.25rem] mt-8 border-t-4 border-b-2 font-nanum text-[1.375rem]">
      <ul className="h-full flex gap-[3.12rem] justify-center items-center cursor-default text-colorb9b font-extrabold">
        {navList.map((item) => (
          <button key={item} onClick={() => setNav(item)}>
            <li
              className={`
          ${nav === item ? "text-color121" : ""}
          `}
            >
              {item}
            </li>
          </button>
        ))}
      </ul>
    </nav>
  );
}
