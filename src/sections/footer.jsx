import { images, socialLinks } from "../assets/assets";

const Footer = () => {
  return (
    <div className="py-5">
      <div className="px-8 py-4  text-prime-brown">
        {/* Logo */}
        <img
          src={images.logo}
          alt="logo"
          className="my-8 w-50 cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out"
        />
        {/* Grid */}
        <div className="w-full grid grid-cols-2 gap-4 cursor-pointer">
          {["About", "Subscribe", "Episode", "Insider"].map((item, index) => {
            return (
              <span
                key={index}
                className="font-semibold transition2 hover:-translate-y-1"
              >
                {item}
              </span>
            );
          })}
        </div>
        {/* Horizontal Line */}
        <hr className="text-prime-brown/70 my-10" />
        {/* Socials */}
        <div className="grid grid-cols-2 gap-4 px-2">
          {socialLinks.map(({ _id, name, icon }) => {
            return (
              <button
                key={_id}
                className="w-fit h-10 p-6 border border-prime-brown/80 centered-row gap-2 rounded-full"
              >
                {/* Icon */}
                <div className="w-6 h-6">
                  <img src={icon} alt="icon" />
                </div>
                {/* .Label */}
                <span className="text-prime-brown clash-display">{name}</span>
              </button>
            );
          })}
        </div>
        {/* Copy right note */}
        <p className="mt-14 text-sm text-prime-brown text-center">
          &copy; Asionsolver {new Date().getFullYear()}, All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
