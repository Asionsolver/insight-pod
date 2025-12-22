import React from "react";
import TopPodcasterCard from "../components/top-podcaster-card";
import { topPodCasterData } from "../assets/assets";

const TopPodcast = () => {
  return (
    <div className="py-5 bg-white lg:mt-5">
      <div className="px-8 pb-2 ">
        {/* Header */}
        <h2 className="text-3xl text-center text-prime-brown clash-display md:text-4xl lg:text-5xl">
          Top Podcasters of the Week
        </h2>

        {/* Cards Section */}
        <div className="my-10 w-full h-82.5 whitespace-nowrap centered-row gap-4 overflow-x-scroll lg:h-130">
          {/* Card */}
          {topPodCasterData.map(
            ({
              _id,
              name,
              view,
              bgColor,
              image,
              imagePosition,
              decor,
              decorPosition,
            }) => (
              <TopPodcasterCard
                key={_id}
                name={name}
                view={view}
                bgColor={bgColor}
                image={image}
                imagePosition={imagePosition}
                decor={decor}
                decorPosition={decorPosition}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TopPodcast;
