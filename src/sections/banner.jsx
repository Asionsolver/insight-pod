import { images } from "../assets/assets";
import CtaButton from "../components/cta-button";

const Banner = () => {
  return (
    <div className="py-5 px-5 bg-white">
      <div className="px-8 py-4 bg-prime-brown rounded-3xl">
        {/* Left */}
        <div className="w-full h-87.5 center-item">
          <img src={images.banner_02} alt="image" />
        </div>
        {/* Right */}

        <div className="flex-1 text-zinc-100">
          {/* Heading */}
          <h2 className="text-3xl text-amber-500 clash-display  clash-display m-4">
            Listen to the latest and exciting podcast content
          </h2>
          {/* Para */}
          <p className="mb-5">
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
