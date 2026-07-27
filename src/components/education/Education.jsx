import { FaGraduationCap } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import AnimateIn from "../ui/AnimateIn";
import { education } from "../../data/education";

function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 bg-[#030712] py-24 sm:py-28">
      <div className="relative mx-auto max-w-4xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          subtitle="Formal training that supports my work in software development."
        />

        <div className="relative space-y-8 sm:space-y-10 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan-400/50 before:to-purple-500/30 md:before:left-1/2 md:before:-translate-x-px">
          {education.map((item, index) => (
            <AnimateIn key={item.id} delay={index * 0.1}>
              <div
                className={`relative flex flex-col gap-6 md:flex-row md:items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden flex-1 md:block" />

                <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-[#030712] text-cyan-400 md:left-1/2 md:-translate-x-1/2 flex-shrink-0">
                  <FaGraduationCap />
                </div>

                <div className="flex-1 pl-14 md:pl-0">
                  <div className={`rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm transition hover:border-cyan-400/20 hover:bg-white/[0.07] md:max-w-md ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}>
                    <p className="text-sm font-semibold text-cyan-400">{item.period}</p>
                    <h3 className="mt-2 text-lg sm:text-xl font-bold text-white leading-tight">{item.degree}</h3>
                    <p className="mt-1 font-medium text-slate-300">{item.institution}</p>
                    <p className="mt-4 text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
