import NavBar from "@/components/common/NavBar";

type Props = {
  navItems: string[];
  setFocus: (nav: string) => void;
  focused: string;
};

export default function MemberFundingNav({
  navItems,
  setFocus,
  focused,
}: Props) {
  return (
    <div className="w-64">
      <NavBar navItems={navItems} setFocus={setFocus} focused={focused} />
    </div>
  );
}
