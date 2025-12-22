import HeroSection from "../sections/hero-section";
import WeeklyPodcast from "../sections/weekly-podcast";
import TopPodcast from "../sections/top-podcast";
import Stats from "../sections/stats";

const HomePage = () => {
  return (
    <div className="bg-zinc-50 ">
      <div className=" bg-prime-white">
        <HeroSection />
        <WeeklyPodcast />
        <TopPodcast />
        <Stats />
      </div>
    </div>
  );
};

export default HomePage;
