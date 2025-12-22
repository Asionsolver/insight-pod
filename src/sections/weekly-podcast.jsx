import PodcastCard from "../components/podcast-card";
import { weeklyPodcastData } from "../assets/assets";

const WeeklyPodcast = () => {
  return (
    <div className="py-5 bg-white md:py-12 lg:mt-5 pb-10">
      <div className="px-8 py-4lg text-prime-brown ">
        {/* Heading */}
        <h2 className="text-3xl pb-5 clash-display md:text-4xl  lg:text-5xl lg:pb-10">
          Weekly Podcasts
        </h2>
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
