import PodcastCard from "../components/podcast-card";
import { weeklyPodcastData } from "../assets/assets";

const WeeklyPodcast = () => {
  return (
    <div className="py-5 bg-white">
      <div className="px-8 py-4 text-prime-brown">
        {/* Heading */}
        <h2 className="text-3xl pb-5 clash-display">Weekly Podcasts</h2>
        {/* Cards */}
        <div className="w-full h-fit whitespace-nowrap overflow-scroll py-2">
          <div className="centered-row gap-4">
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
