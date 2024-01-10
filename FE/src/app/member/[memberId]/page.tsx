import MemberHeader from "@/components/member/MemberHeader";
import MemberInfoSection from "@/components/member/memberInfo/MemberInfoSection";

export default function page() {
  return (
    <section className="w-full max-w-7xl mx-auto font-nanum">
      <MemberHeader />
      <MemberInfoSection />
    </section>
  );
}
