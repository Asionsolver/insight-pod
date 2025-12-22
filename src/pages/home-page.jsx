import HeroSection from "../sections/hero-section";
import WeeklyPodcast from "../sections/weekly-podcast";
import TopPodcast from "../sections/top-podcast";
import Stats from "../sections/stats";
import OutAdvantage from "../sections/our-advantage";
import Banner from "../sections/banner";
import Message from "../sections/message";

const HomePage = () => {
  return (
    <div className="bg-zinc-50 ">
      <div className=" bg-prime-white">
        <HeroSection />
        <WeeklyPodcast />
        <TopPodcast />
        <Stats />
        <OutAdvantage />
        <Banner />
        <Message />
      </div>
    </div>
  );
};

export default HomePage;
