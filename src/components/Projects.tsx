import { useState } from "react";
import { projectsData } from "../data/projectsData";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "React 18", "TypeScript", "Redux Toolkit"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(activeFilter));

  return (
    <section
      id="projects"
      className="py-12 px-4 max-w-4xl mx-auto border-t border-zinc-800/80 scroll-mt-16"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-sm text-zinc-400 mt-1 font-mono">
            Selected personal and commercial applications
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? "bg-zinc-100 text-zinc-950 font-semibold shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:border-violet-500/40 hover:text-violet-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
