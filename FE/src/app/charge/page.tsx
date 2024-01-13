import ChargeInfo from "@/components/pages/charge/ChargeInfo";
import ChargeNav from "@/components/pages/charge/ChargeNav";
import ChargeOptionSection from "@/components/pages/charge/ChargeOptionSection";
import PageDescription from "@/components/pages/charge/PageDescription";
import PageTitle from "@/components/common/PageTitle";
import Receipt from "@/components/common/Receipt";

export default function page() {
  return (
    <main className="font-nanum">
      <section className="max-w-7xl mx-auto pb-7">
        <PageTitle title="크레파스 충전" />
        <PageDescription />
        <ChargeNav />
      </section>
      <Receipt>
        <ChargeOptionSection />
        <ChargeInfo />
      </Receipt>
    </main>
  );
}
