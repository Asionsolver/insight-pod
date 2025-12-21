import { images } from "../assets/assets";
import CtaButton from "../components/cta-button";

const HeroSection = () => {
  return (
    <div className="py-10 flex h-full center-item">
      {/* Left */}
      <div className="px-8 py-4">
        <h1 className="text-5xl clash-display text-prime-brown">
          Navigating Ideas, Sharing Insights.
        </h1>
        <div className="mt-4 text-zinc-600">
          Unlock invaluable wisdom personalized for you in our top-notch
          podcast. Dive into episodes designed to deliver relevant insights that
          cater to your interests and needs.
        </div>
        {/* Cta Button */}
        <CtaButton />
      </div>
      {/* Right */}
      <div className="w-full h-95 mt-4 center-item">
        <img src={images.hero_img} alt="hero_img" className="w-[80%]" />
      </div>
    </div>
  );
};

export default HeroSection;
