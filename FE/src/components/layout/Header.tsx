import dynamic from "next/dynamic";
const HeaderLogoSection = dynamic(() => import("./HeaderLogoSection"), {
  ssr: true,
});
import HeaderNavSection from "./HeaderNavSection";

export default function Header() {
  return (
    <header className="w-full border-b-2 shadow-[0_0.25rem_0.25rem_0px_rgba(0,0,0,0.05)] sticky">
      <div className="w-full max-w-7xl mx-auto">
        <HeaderLogoSection />
        <HeaderNavSection />
      </div>
    </header>
  );
}
