import SectionHeading from "../ui/SectionHeading";
import AnimateIn from "../ui/AnimateIn";
import { skillCategories } from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 bg-[#030712] py-16 sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tech Stack"
          subtitle="Technologies I use to design, build, and ship full stack applications."
        />

        <div className="grid gap-5 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, catIndex) => (
            <AnimateIn key={category.title} delay={catIndex * 0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur-sm transition hover:border-cyan-400/20 hover:bg-white/[0.07]">
                <h3 className="mb-5 sm:mb-6 text-lg sm:text-xl font-bold text-cyan-400">{category.title}</h3>
                <ul className="space-y-4 sm:space-y-5">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    if (!Icon || typeof Icon !== "function" && typeof Icon !== "object") {
                      return null;
                    }
                    return (
                      <li key={skill.name}>
                        <div className="mb-2 flex items-center justify-between gap-2 sm:gap-3">
                          <span className="flex items-center gap-2 text-slate-200 min-w-0 text-sm sm:text-base">
                            <Icon className="text-base sm:text-lg text-cyan-400 flex-shrink-0" />
                            <span className="min-w-0">
                              <span className="font-medium block">
                                {skill.name}
                              </span>
                              {skill.detail && (
                                <span className="text-[11px] sm:text-xs text-slate-500 leading-none block mt-0.5">
                                  {skill.detail}
                                </span>
                              )}
                            </span>
                          </span>
                          <span className="text-xs sm:text-sm text-slate-500 flex-shrink-0">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 sm:h-2 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
