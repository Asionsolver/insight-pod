import { images } from "../assets/assets";

const TopPodcasterCard = ({ bgColor = "#ff854b" }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: bgColor === "#ffd25a" ? "#532822" : "#f4f4f5",
      }}
      className="min-w-full md:min-w-1/2  h-full relative pt-8 px-6 rounded-3xl overflow-clip lg:min-w-125 lg:py-16 lg:px-8 cursor-pointer"
    >
      {/* Image */}
      <img
        src={images.week_01}
        alt="image"
        className="w-[50%] md:w-[70%] absolute bottom-0 right-0 "
      />
      {/* Title */}
      <div className="col gap-3">
        <h2 className="text-4xl  clash-display lg:text-5xl">Mr.James</h2>
        <span className="text-prime-brown bg-zinc-100 p-2 px-4 rounded-full text-sm w-fit lg:mt-2 lg:text-xl">
          1.6 million streams
        </span>
      </div>

      {/* Decor */}
      <img
        src={images.decor}
        alt="decorative"
        className="w-20 absolute bottom-4 left-2 lg:left-6 lg:bottom-8"
      />
    </div>
  );
};

export default TopPodcasterCard;
