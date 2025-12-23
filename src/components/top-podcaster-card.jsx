const TopPodcasterCard = ({
  name,
  view,
  image,
  imagePosition,
  bgColor,
  decor,
  decorPosition,
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: bgColor === "#ffd25a" ? "#532822" : "#f4f4f5",
      }}
      className="min-w-full  md:min-w-1/2  h-full relative pt-8 px-6 rounded-3xl overflow-clip lg:min-w-125 lg:py-16 lg:px-8 cursor-pointer z-20"
    >
      {/* Image */}
      <img src={image} alt="image" className={`absolute  ${imagePosition}`} />
      {/* Title */}
      <div className="col gap-3 ">
        <h2 className="text-4xl  clash-display lg:text-5xl z-10">{name}</h2>
        <span className="text-prime-brown bg-zinc-100 p-2 px-4 rounded-full text-sm w-fit lg:mt-2 lg:text-xl z-20">
          {view}
        </span>
      </div>

      {/* Decor */}
      <img
        src={decor}
        alt="decorative"
        className={`w-[50%]  absolute z-0 ${decorPosition}`}
      />
    </div>
  );
};

export default TopPodcasterCard;
