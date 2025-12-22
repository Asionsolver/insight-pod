import { images } from "../assets/assets";

const OutAdvantage = () => {
  return (
    <div className="py-5 bg-white md:mt-8 lg:my-20">
      <div className=" px-8 py-4 col gap-5 lg:flex-row">
        {/* Left */}
        <div className="w-full h-full center-item lg:my-10 lg:w-1/2">
          <img
            src={images.unique}
            alt="banner-image"
            className="md:w-[70%] lg:w-[90%]"
          />
        </div>
        {/* Right */}
        <div className="flex-1 text-zinc-600 md:my-14">
          {/* Heading */}
          <h2 className="text-3xl text-prime-brown clash-display my-4 md:text-4xl lg:text-6xl">
            What makes us different from others
          </h2>
          {/* Para */}
          <p className="mb-5 md:text-xl">
            Our commitment is to keep you comfortable by delivering quality
            podcast content, trusted sources, and useful material.
          </p>
          {/* Advantages List */}
          <div className="col gap-2">
            {/* Items */}
            {[
              "Content Relevance",
              "Depth of Insight",
              "Entertainment and Information Combo",
              "Reliable Source of Knowledge",
            ].map((item, index) => {
              return (
                <div key={index} className="centered-row gap-4">
                  {/* Image */}
                  <img src={images.verify} alt="image" className="" />
                  {/* Details */}
                  <span className="font-semibold md:text-xl">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutAdvantage;
