import { images, socialLinks } from "../assets/assets";

const Footer = () => {
  return (
    <div className="py-5">
      <div className="px-8 py-4  text-prime-brown">
        {/* Logo */}
        <img
          src={images.logo}
          alt="logo"
          className="my-8 w-50 cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out md:w-60 lg:w-64"
        />
        {/* Grid */}
        <div className="w-full grid grid-cols-2 gap-4 cursor-pointer md:grid-cols-4 lg:px-10">
          {["About", "Subscribe", "Episode", "Insider"].map((item, index) => {
            return (
              <span
                key={index}
                className="font-semibold transition2 hover:-translate-y-1 md:text-lg lg:text-xl"
              >
                {item}
              </span>
            );
          })}
        </div>
        {/* Horizontal Line */}
        <hr className="text-prime-brown/70 my-10" />
        {/* Socials */}
        <div className="grid grid-cols-2 gap-4 px-2 md:centered-row md:justify-between md:px-24 lg:px-90">
          {socialLinks.map(({ _id, name, icon }) => {
            return (
              <button
                key={_id}
                className="w-fit h-10 p-6 border border-prime-brown/80 centered-row gap-2 rounded-full hover:shadow-2xl  hover:bg-amber-300 hover:shadow-amber-100 cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out"
              >
                {/* Icon */}
                <div className="w-6 h-6">
                  <img src={icon} alt="icon" />
                </div>
                {/* .Label */}
                <span className="text-prime-brown clash-display ">{name}</span>
              </button>
            );
          })}
        </div>
        {/* Copy right note */}
        <p className="mt-14 text-sm text-prime-brown text-center md:text-base lg:text-lg">
          &copy; Asionsolver {new Date().getFullYear()}, All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
