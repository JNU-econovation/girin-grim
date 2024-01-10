import MemberHeader from "@/components/member/MemberHeader";
import MemberInfoSection from "@/components/member/memberInfo/MemberInfoSection";

type Props = {
  params: {
    memberId: number;
  };
};

export default function page({ params: { memberId } }: Props) {
  return (
    <section className="w-full max-w-7xl mx-auto font-nanum">
      <MemberHeader />
      <MemberInfoSection memberId={memberId} />
    </section>
  );
}
