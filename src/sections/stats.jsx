import { images, statsData } from "../assets/assets";

const Stats = () => {
  return (
    <div className="py-5 bg-white ">
      <div className="px-8 col gap-5 ">
        {/* Top */}
        <div className="col gap-4 items-center">
          <h3 className="text-3xl text-prime-brown clash-display">
            Our Podcast dices into diverse topic like life, finances,{" "}
            <span className="text-prime-brown/50 clash-display">
              and personal experiences, offering valuable insights and practical
              advice.
            </span>
          </h3>

          {/* Banner Image */}
          <img src={images.banner_01} alt="image" className="w-70" />
        </div>
        {/* Bottom */}
        <div className="col gap-4">
          {/* Paragraph */}
          <p className="text-zinc-600">
            Unlock invaluable wisdom personalized for you in our top-notch
            podcast. Dive into episodes designed to deliver relevant insight
            cater to your interest and needs. that ca
          </p>

          {/* stats */}
          <div className="centered-row gap-5 my-5">
            {statsData.map(({ _id, name, figure }) => {
              return (
                <div key={_id} className="col gap-1">
                  <h2 className="text-5xl text-prime-orange font-semibold clash-display">
                    {figure}
                  </h2>
                  <p className="text-zinc-600 text-sm">{name}</p>
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
