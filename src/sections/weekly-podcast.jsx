import PodcastCard from "../components/podcast-card";
import { weeklyPodcastData } from "../assets/assets";

const WeeklyPodcast = () => {
  return (
    <div className="py-5 bg-white md:py-12 lg:mt-5 pb-10">
      <div className="px-8 py-4 text-prime-brown ">
        {/* Heading */}
        <div className="flex items-center justify-between  pb-5 lg:pb-10">
          <h2 className="text-3xl clash-display md:text-4xl  lg:text-5xl ">
            Weekly Podcasts
          </h2>
          <button className="px-3 py-2  w-fit md:w-0 md:px-8 md:py-2 text-[8px] md:text-lg   text-orange-light centered-row gap-4 rounded-full border border-orange-light hover:bg-amber-400 hover:text-prime-brown">
            See All
          </button>
        </div>
        {/* Cards */}
        <div className="w-full h-fit whitespace-nowrap overflow-scroll py-2">
          <div className="centered-row gap-4 lg:gap-5">
            {weeklyPodcastData.map(
              ({ _id, time, title, author, bgColor, image }) => (
                <PodcastCard
                  key={_id}
                  time={time}
                  author={author}
                  bgColor={bgColor}
                  image={image}
                  title={title}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyPodcast;
