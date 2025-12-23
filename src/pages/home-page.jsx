import HeroSection from "../sections/hero-section";
import WeeklyPodcast from "../sections/weekly-podcast";
import TopPodcast from "../sections/top-podcast";
import Stats from "../sections/stats";
import OutAdvantage from "../sections/our-advantage";
import Banner from "../sections/banner";
import Message from "../sections/message";
import Footer from "../sections/footer";

const HomePage = () => {
  return (
    <div className="bg-zinc-50 pt-18">
      <div className=" bg-white">
        <HeroSection />
        <div className="container mx-auto">
          <WeeklyPodcast />
          <TopPodcast />
          <Stats />
          <OutAdvantage />
          <Banner />
          <Message />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
