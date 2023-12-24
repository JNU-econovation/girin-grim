import HeaderLogoSection from "./HeaderLogoSection";
import HeaderNavSection from "./HeaderNavSection";

export default function Header() {
  return (
    <header className="w-full border-b-2 shadow-md">
      <div className="w-full max-w-7xl mx-auto">
        <HeaderLogoSection />
        <HeaderNavSection />
      </div>
    </header>
  );
}
