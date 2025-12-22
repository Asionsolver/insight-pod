import { images } from "../assets/assets";

const NavBar = () => {
  return (
    <div className="py-5 bg-prime-white text-prime-brown">
      <div className="px-4 centered-row justify-between container mx-auto">
        {/* Logo */}
        <div className="cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out">
          <img src={images.logo} alt="logo" className="" />
        </div>
        {/* Links: In Desktop Only */}
        <ul className="hidden md:centered-row gap-4 lg:gap-10 font-medium cursor-pointer">
          {["About", "Subscribe", "Episode", "Insider"].map((item, index) => {
            return (
              <li
                key={index}
                className="hover:font-semibold hover:-translate-y-1 transition-all duration-200 ease-out"
              >
                {item}
              </li>
            );
          })}
        </ul>
        {/* Menu Icon: In Mobile Only */}
        <img src={images.menu} alt="menu_icon" className="md:hidden" />
        {/* Subscribe */}
        <div className="hidden md:block px-5 py-3 rounded-full border border-prime-brown cursor-pointer hover:bg-prime-brown hover:text-zinc-50 hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-xl  hover:shadow-amber-100">
          <span className="font-semibold">Subscribe Now</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
