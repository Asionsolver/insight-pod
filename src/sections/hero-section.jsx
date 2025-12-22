import { images } from "../assets/assets";
import CtaButton from "../components/cta-button";

const HeroSection = () => {
  return (
    <div className="py-10 bg-prime-white">
      <div className="container mx-auto lg:centered-row">
        {/* Left */}
        <div className="px-8 lg:px-18">
          <h1 className="text-5xl clash-display text-prime-brown md:text-6xl lg:text-[94px] md:text-center lg:text-left">
            Navigating Ideas, Sharing Insights.
          </h1>
          <div className="mt-4 text-zinc-600 md:w-2/3 lg:w-3/4 lg:text-xl lg:mb-8 md:text-xl md:text-center lg:text-left md:mx-auto lg:mx-0">
            Unlock invaluable wisdom personalized for you in our top-notch
            podcast. Dive into episodes designed to deliver relevant insights
            that cater to your interests and needs.
          </div>
          {/* Cta Button */}
          <div className="centered-row md:justify-center lg:justify-start ">
            <CtaButton />
          </div>
        </div>
        {/* Right */}
        <div className="w-full h-95 mt-10 center-item lg:h-full lg:my-10 lg:mr-30 ">
          <img
            src={images.hero_img}
            alt="hero_img"
            className="w-[80%] md:w-[45%] lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
