import Grid from "@/components/home/Grid";
import HomeBanner from "@/components/home/HomeBanner";
import HomeHeader from "@/components/home/HomeHeader";
import Univ from "@/components/home/Univ";

export default function Home() {
  return (
    <section className="w-full max-w-7xl min-h-[100vh] mx-auto">
      <HomeBanner />
      <Univ />
      <HomeHeader />
      <Grid />
    </section>
  );
}
