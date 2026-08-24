import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/images/myimage.png";
import OrbitRing from "../ui/OrbitRing";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import {
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const techStack = [
  { icon: <FaJava />, name: "Java" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <FaGitAlt />, name: "Git" },
];

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#030712] pb-12 sm:pb-16 scroll-mt-24">
          {/* Background */}
     <div className="absolute inset-0 overflow-hidden">

  <div className="absolute inset-0 bg-gradient-to-br from-[#07111f] via-[#030712] to-[#0b0820]" />

  <div className="absolute -top-40 -left-40 h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] rounded-full bg-cyan-500/30 blur-[160px] sm:blur-[220px]" />

  <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] rounded-full bg-purple-600/30 blur-[160px] sm:blur-[220px]" />

</div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 sm:gap-16 px-5 sm:px-6 md:px-8 lg:grid-cols-2 py-12 sm:py-16 pt-36 sm:pt-40">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 sm:mb-4 text-base sm:text-lg font-medium text-cyan-400">
            👋 Hello, I&apos;m
          </p>

          <h1 className="leading-none">
  <span className="block text-4xl sm:text-6xl lg:text-8xl font-black text-white">
    Sishir Ranjan
  </span>

  <span className="block mt-1 sm:mt-2 text-4xl sm:text-6xl lg:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
    Sanbad
  </span>
</h1>
    <h2 className="mt-6 sm:mt-8 min-h-[4.5rem] sm:min-h-[5rem] text-xl sm:text-3xl font-extrabold md:text-4xl leading-tight">
      <span className="block text-slate-200 mb-1 sm:mb-0 sm:inline sm:mr-3">
        MCA Student @ KIIT University
      </span>
      <TypeAnimation
        sequence={[
          "Aspiring Full Stack Developer",
          2500,
          "Java & JavaScript Enthusiast",
          2500,
          "Building MediTrust Platform",
          2500,
        ]}
        wrapper="span"
        speed={40}
        repeat={Infinity}
        className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
      />
    </h2>
          <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-300">
            MCA student with a strong interest in Full Stack Development and software engineering. Skilled in Java, JavaScript, MySQL, HTML and CSS. I have shipped two major projects — MediTrust, a full-stack healthcare platform, and this Advanced Portfolio with live GitHub integration.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer text-center rounded-xl bg-cyan-500 px-6 sm:px-8 py-3 sm:py-3.5 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
            >
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              download
              className="text-center rounded-xl border border-cyan-400 px-6 sm:px-8 py-3 sm:py-3.5 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
            >
              Download Resume
            </a>
          </div>
          <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">

  <a
    href="https://github.com/Sishir101"
    target="_blank"
    rel="noreferrer"
    className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 border border-cyan-400/30 text-cyan-400 text-lg sm:text-xl backdrop-blur-xl transition hover:scale-110 hover:bg-cyan-500 hover:text-white"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/sishir-sanbad/"
    target="_blank"
    rel="noreferrer"
    className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 border border-cyan-400/30 text-cyan-400 text-lg sm:text-xl backdrop-blur-xl transition hover:scale-110 hover:bg-cyan-500 hover:text-white"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:sanbadsishirranjan772@gmail.com"
    className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 border border-cyan-400/30 text-cyan-400 text-lg sm:text-xl backdrop-blur-xl transition hover:scale-110 hover:bg-cyan-500 hover:text-white"
    aria-label="Email"
  >
    <MdEmail />
  </a>

</div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
        <div className="absolute h-[360px] w-[360px] sm:h-[480px] sm:w-[480px] rounded-full bg-cyan-500/20 blur-[80px] sm:blur-[110px]" />
    <div className="relative h-[280px] w-[280px] sm:h-[390px] sm:w-[390px] overflow-hidden rounded-full border-4 border-cyan-400 shadow-[0_0_80px_rgba(34,211,238,.45)]">
            <img
              src={profile}
              alt="Sishir Ranjan Sanbad"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute left-1/2 top-1/2 size-0 origin-center scale-[0.82] sm:scale-100">
            <OrbitRing items={techStack} radius={260} duration={18} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
