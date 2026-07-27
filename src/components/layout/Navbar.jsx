import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../../data/navLinks";

const scrollProps = {
  smooth: true,
  offset: -80,
  duration: 500,
};

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-5 md:px-8">
        <Link
          to="home"
          {...scrollProps}
          className="cursor-pointer text-xl sm:text-2xl font-bold tracking-wide md:text-3xl"
          onClick={closeMenu}
        >
          Sishir<span className="text-cyan-400">.</span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex lg:gap-8 xl:gap-10">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                {...scrollProps}
                activeClass="text-cyan-400"
                className="cursor-pointer text-gray-300 transition duration-300 hover:text-cyan-400 text-sm lg:text-base"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-white/10 text-lg sm:text-xl text-white transition hover:border-cyan-400/40 hover:text-cyan-400 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#030712]/95 px-4 sm:px-5 py-5 sm:py-6 lg:hidden">
          <ul className="flex flex-col gap-1.5 sm:gap-2">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  {...scrollProps}
                  activeClass="text-cyan-400"
                  className="block cursor-pointer py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg text-sm sm:text-base text-gray-300 transition hover:text-cyan-400 hover:bg-white/5"
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
