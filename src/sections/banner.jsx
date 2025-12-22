import { images } from "../assets/assets";
import CtaButton from "../components/cta-button";

const Banner = () => {
  return (
    <div className="py-5 px-5 bg-white md:px-14">
      <div className="px-8 py-4 bg-prime-brown rounded-3xl md:px-10 lg:rounded-4xl lg:centered-row">
        {/* Left */}
        <div className="w-full h-full md:h-125 lg:w-1/2 center-item">
          <img src={images.banner_02} alt="image" className="md:w-[70%]" />
        </div>
        {/* Right */}

        <div className="flex-1 text-zinc-100 mt-10 md:mt-0">
          {/* Heading */}
          <h2 className="text-3xl text-amber-500 clash-display  clash-display mb-4 lg:text-5xl lg:mb-6">
            Listen to the latest and exciting podcast content
          </h2>
          {/* Para */}
          <p className="mb-5 md:text-xl lg:text-2xl lg:mb-10">
            Don't miss the valuable updates in each session and listen existing
            podcast
          </p>
          {/* Cta Button */}
          <CtaButton />
        </div>
      </div>
    </div>
  );
};

export default Banner;
