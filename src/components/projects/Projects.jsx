import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import useGitHubProjects from "../../hooks/useGitHubProjects";
import { GITHUB_USERNAME } from "../../config/site";

function ProjectSkeleton() {
  return (
    <div className="h-full animate-pulse overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="h-36 sm:h-44 bg-white/10" />
      <div className="space-y-3 sm:space-y-4 p-5 sm:p-6 sm:p-8">
        <div className="h-4 w-3/4 rounded bg-white/10" />
        <div className="h-4 w-full rounded bg-white/10" />
        <div className="h-4 w-5/6 rounded bg-white/10" />
      </div>
    </div>
  );
}

function Projects() {
  const { projects, loading, error } = useGitHubProjects();

  return (
    <section id="projects" className="relative scroll-mt-24 bg-[#0B1120] py-16 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle={`Live from GitHub (@${GITHUB_USERNAME}) plus local work-in-progress highlights.`}
        />

        {error && (
          <p className="mb-6 sm:mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200 leading-relaxed">
            Could not reach GitHub ({error}). Showing saved project highlights only.
          </p>
        )}

        <div className="grid gap-5 sm:gap-6 sm:gap-8 md:grid-cols-2">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <ProjectSkeleton key={i} />)
            : projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
        </div>

        {!loading && projects.length === 0 && (
          <p className="text-center text-slate-400 py-12 sm:py-16 leading-relaxed text-sm sm:text-base">
            No public repositories yet. Push a project to GitHub and it will appear here
            automatically.
          </p>
        )}
      </div>
    </section>
  );
}

export default Projects;
