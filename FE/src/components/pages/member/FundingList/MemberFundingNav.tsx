import NavBar from "@/components/common/NavBar";

type Props = {
  navItems: string[];
  setFocus: (nav: string) => void;
  focused: string;
  isMine: boolean;
};

export default function MemberFundingNav({
  navItems,
  setFocus,
  focused,
  isMine,
}: Props) {
  return (
    <div className={`${isMine ? "w-32" : "w-64"}`}>
      <NavBar navItems={navItems} setFocus={setFocus} focused={focused} />
    </div>
  );
}
