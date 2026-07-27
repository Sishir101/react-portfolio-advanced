import CountUpModule from "react-countup";
const CountUp = CountUpModule?.default ?? CountUpModule;
import { useInView } from "react-intersection-observer";
import { useMemo } from "react";
import SectionHeading from "../ui/SectionHeading";
import AnimateIn from "../ui/AnimateIn";
import { aboutHighlights } from "../../data/education";
import useGitHubProfile from "../../hooks/useGitHubProfile";

function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });
  const { profile } = useGitHubProfile();

  const highlights = useMemo(() => {
    return aboutHighlights.map((item) => {
      if (item.label === "MCA Student") {
        return { ...item, value: "MCA", suffix: "", noCount: true };
      }
      if (item.label === "Graduate") {
        return { ...item, value: item.value, suffix: "", noCount: true };
      }
      if (item.label === "GitHub repos" && profile?.public_repos != null) {
        return { ...item, value: profile.public_repos, suffix: "" };
      }
      return item;
    });
  }, [profile]);

  return (
    <section id="about" className="relative scroll-mt-24 bg-[#0B1120] py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          subtitle="A developer who enjoys turning ideas into polished, user-friendly products."
        />

        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
          <AnimateIn>
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              <p>
                I&apos;m <span className="font-semibold text-cyan-400">Sishir Ranjan Sanbad</span>,
                an MCA student at KIIT University with a passion for Full Stack Development and
                software engineering. I enjoy solving real-world problems through technology and
                continuously improving my technical skills.
              </p>
              <p>
                So far, I have shipped two major projects end-to-end: MediTrust, a full-stack
                healthcare platform with Node.js, Express and MySQL, and this Advanced Portfolio —
                a modern animated site with live GitHub project integration. Alongside these I
                maintain smaller HTML/CSS/JavaScript projects that I use to practice foundations
                and refine new patterns.
              </p>
              <p>
                When I&apos;m not coding, I explore new frameworks, contribute on GitHub, and
                refine side projects that sharpen my skills.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div
              ref={ref}
              className="grid grid-cols-2 gap-5 sm:gap-6 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4"
            >
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-center backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-white/[0.08]"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-white break-words">
                    {item.noCount ? (
                      item.value
                    ) : inView ? (
                      <CountUp end={item.value} duration={2.5} suffix={item.suffix} />
                    ) : (
                      `0${item.suffix}`
                    )}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm font-medium text-slate-400 leading-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

export default About;
