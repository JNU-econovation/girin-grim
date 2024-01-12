import ChargeNav from "@/components/charge/ChargeNav";
import PageDescription from "@/components/charge/PageDescription";
import PageTitle from "@/components/common/PageTitle";
import Receipt from "@/components/common/Receipt";

export default function page() {
  return (
    <main className="max-w-7xl mx-auto font-nanum">
      <PageTitle title="크레파스 충전" />
      <PageDescription />
      <ChargeNav />
      <Receipt></Receipt>
    </main>
  );
}
