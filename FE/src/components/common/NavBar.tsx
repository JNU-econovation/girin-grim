type Props = {
  navItems: string[];
  setFocus: (navItem: string) => void;
  focused?: string;
};

export default function NavBar({
  navItems,
  setFocus,
  focused,
}: Readonly<Props>) {
  return (
    <nav className="h-[4.25rem] mt-8 border-t-4 border-b-2 font-nanum text-[1.375rem]">
      <ul className="h-full flex gap-[3.12rem] justify-center items-center cursor-default text-colorb9b font-extrabold">
        {navItems.map((item) => (
          <button key={item} onClick={() => setFocus(item)}>
            <li
              className={`
          ${focused === item ? "text-color121" : ""}
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
