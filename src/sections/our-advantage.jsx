import { images } from "../assets/assets";

const OutAdvantage = () => {
  return (
    <div className="py-5 bg-white">
      <div className="px-8 py-4">
        {/* Left */}
        <div className="w-full h-87.5 center-item">
          <img src={images.unique} alt="banner-image" />
        </div>
        {/* Right */}
        <div className="flex-1 text-zinc-600">
          {/* Heading */}
          <h2 className="text-3xl text-prime-brown clash-display m-4">
            What makes us different from others
          </h2>
          {/* Para */}
          <p className="mb-5">
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
                  <span className="font-semibold">{item}</span>
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
