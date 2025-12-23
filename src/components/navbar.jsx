import { useEffect, useState } from "react";
import { images } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Framer Motion Variants for Mobile Menu
  const menuVariants = {
    initial: { opacity: 0, y: "-100%" },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  // Variants for List Items (Stagger effect)
  const navLinkVariants = {
    initial: { opacity: 0, x: -20 },
    animate: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 + 0.3 },
    }),
  };

  return (
    <nav
      className={`w-full py-5 text-prime-brown bg-prime-white backdrop-blur-sm fixed z-50 transition-all ease-in-out duration-300 border-b ${
        isScroll ? "border-neutral-200" : "border-transparent"
      }`}
    >
      <div className="px-4 centered-row justify-between container mx-auto relative z-60 mt-0">
        {/* Logo */}
        <div className="cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out">
          <img src={images.logo} alt="logo" className="md:w-auto" />
        </div>

        {/* Links: Desktop Only */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-10 font-medium cursor-pointer">
          {["About", "Subscribe", "Episode", "Insider"].map((item, index) => (
            <li
              key={index}
              className="hover:font-semibold hover:-translate-y-1 transition-all duration-200 ease-out"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Icons (Menu & Close) */}
        <div className="md:hidden cursor-pointer" onClick={toggleNavbar}>
          {isOpen ? (
            <span className="text-2xl font-bold">✕</span>
          ) : (
            <img src={images.menu} alt="menu_icon" className="w-8" />
          )}
        </div>

        {/* Subscribe Button: Desktop */}
        <div className="hidden md:block px-5 py-3 rounded-full border border-prime-brown cursor-pointer hover:bg-prime-brown hover:text-zinc-50 hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-amber-100">
          <span className="font-semibold">Subscribe Now</span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 h-screen bg-prime-white z-50 flex flex-col items-center justify-center md:hidden"
          >
            <ul className="flex flex-col items-center gap-8 text-2xl font-semibold">
              {["About", "Subscribe", "Episode", "Insider"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={navLinkVariants}
                    onClick={closeNavbar}
                    className="cursor-pointer hover:text-orange-600 transition-colors"
                  >
                    {item}
                  </motion.li>
                )
              )}
            </ul>

            {/* Mobile Subscribe Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 px-8 py-4 rounded-full border border-prime-brown bg-prime-brown text-white"
            >
              Subscribe Now
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
