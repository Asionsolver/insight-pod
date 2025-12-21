import React from "react";
import HeroSection from "../sections/hero-section";
import WeeklyPodcast from "../sections/weekly-podcast";

const HomePage = () => {
  return (
    <div className="bg-zinc-50 ">
      <div className=" bg-prime-white">
        <HeroSection />
        <WeeklyPodcast />
      </div>
    </div>
  );
};

export default HomePage;
