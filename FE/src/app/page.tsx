import HomeBanner from "@/components/pages/home/HomeBanner";
import HomeFundingList from "@/components/pages/home/HomeFundingList";

export default function Home() {
  return (
    <section className="w-full max-w-7xl min-h-[100vh] mx-auto">
      <HomeBanner />
      <HomeFundingList />
    </section>
  );
}
