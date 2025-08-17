import FAQ from "@/components/modules/Home/Faq";
import HeroBanner from "@/components/modules/Home/HeroBanner";
import HomeStats from "@/components/modules/Home/HomeStats";
import Investment from "@/components/modules/Home/InvestMent";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <HomeStats />
      <Investment />
      <FAQ />
    </>
  );
};

export default HomePage;
