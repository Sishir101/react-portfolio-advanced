import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AnimateIn from "../ui/AnimateIn";

function ProjectCard({ project, index }) {
  return (
    <AnimateIn delay={index * 0.08} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]">
        <div
          className={`relative flex h-36 sm:h-44 items-end gap-2 bg-gradient-to-br p-5 sm:p-8 ${project.gradient}`}
        >
          {project.images && project.images.length > 0 && (
            <div className="absolute inset-0">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#030712]/60 transition group-hover:bg-[#030712]/40" />
            </div>
          )}
          <div className="absolute inset-0 bg-[#030712]/40 transition group-hover:bg-[#030712]/25" />
          <h3 className="relative z-10 text-lg sm:text-2xl font-bold text-white leading-tight break-words">{project.title}</h3>
          {project.source === "github" && project.stars != null && (
            <span className="relative z-10 ml-auto rounded-full bg-black/40 px-2 py-0.5 text-[11px] sm:text-xs text-slate-300 flex-shrink-0">
              ★ {project.stars}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-8">
          <p className="mb-4 sm:mb-5 flex-1 text-slate-400 leading-relaxed text-sm sm:text-base">{project.description}</p>

          <div className="mb-5 sm:mb-6 flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub />
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </AnimateIn>
  );
}

export default ProjectCard;
