import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#030712] py-8 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 sm:px-6 md:px-8 md:flex-row sm:gap-6">
        <p className="flex items-center gap-1 text-xs sm:text-sm text-slate-400 text-center md:text-left leading-relaxed">
          © {year} Sishir Ranjan Sanbad. Built with React & Tailwind
          <FaHeart className="mx-1 text-red-400" aria-hidden />
        </p>

        <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
          <Link
            to="home"
            smooth
            duration={500}
            offset={-80}
            className="cursor-pointer text-xs sm:text-sm text-slate-400 transition hover:text-cyan-400"
          >
            Back to top
          </Link>
          <a
            href="https://github.com/Sishir101"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-cyan-400 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sishir-sanbad/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-cyan-400 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sanbadsishirranjan772@gmail.com"
            className="text-slate-400 transition hover:text-cyan-400 hover:scale-110"
            aria-label="Email"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
