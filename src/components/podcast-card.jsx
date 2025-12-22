import { PlayIcon } from "lucide-react";

const PodcastCard = ({ time, title, author, bgColor, image }) => {
  return (
    <div className="w-75  bg-zinc-100 p-2 px-3 rounded-xl centered-row gap-4 md:w-85 lg:h-42.5 lg:w-122.5 lg:p-3 lg:gap-5">
      {/* Image */}
      <div
        style={{ backgroundColor: bgColor }}
        className="min-w-16 rounded-lg h-16 overflow-clip md:min-w-18 md:h-18 lg:h-full lg:w-42.5 lg:rounded-xl"
      >
        <img src={image} alt="image" className="mt-1.5" />
      </div>

      {/* Details */}
      <div className="flex-1 text-prime-brown pr-2">
        <h3 className="text-2xl clash-display lg:text-3xl">{title}</h3>
        <p className="text-sm md:text-base">{author}</p>

        <div className="centered-row justify-between">
          <div className="text-sm font-semibold md:text-base">{time}</div>
        </div>

        <div className="w-10 h-10 bg-amber-400 rounded-full center-item">
          <PlayIcon />
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
