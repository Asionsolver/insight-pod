import { images, statsData } from "../assets/assets";

const Stats = () => {
  return (
    <div className="py-5 bg-white md:py-8">
      <div className="px-8 col gap-5 ">
        {/* Top */}
        <div className="col gap-4 items-center lg:flex-row">
          <h3 className="text-3xl md:text-4xl lg:text-[54px] text-prime-brown clash-display">
            Our Podcast dices into diverse topic like life, finances,{" "}
            <span className="text-prime-brown/50 clash-display">
              and personal experiences, offering valuable insights and practical
              advice.
            </span>
          </h3>

          {/* Banner Image */}
          <img src={images.banner_01} alt="image" className="w-70 lg:w-80" />
        </div>
        {/* Bottom */}
        <div className="col gap-4 lg:flex-row-reverse lg:items-center">
          {/* Paragraph */}
          <p className="text-zinc-600 md:text-xl lg:w-1/2">
            Unlock invaluable wisdom personalized for you in our top-notch
            podcast. Dive into episodes designed to deliver relevant insight
            cater to your interest and needs. that ca
          </p>

          {/* stats */}
          <div className="centered-row gap-5 my-5 md:justify-center lg:justify-start lg:w-1/2">
            {statsData.map(({ _id, name, figure }) => {
              return (
                <div key={_id} className="col gap-1">
                  <h2 className="text-5xl text-prime-orange font-semibold clash-display md:text-7xl">
                    {figure}
                  </h2>
                  <p className="text-zinc-600 text-sm md:text-base lg:text-lg">
                    {name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
