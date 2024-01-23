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
  console.log(isMine);
  return (
    <div className={`${isMine ? "w-64" : "w-32"}`}>
      <NavBar navItems={navItems} setFocus={setFocus} focused={focused} />
    </div>
  );
}
