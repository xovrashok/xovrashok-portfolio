import { Link, ExternalLink, Code2 } from "lucide-react";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-violet-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]">
      <div>
        <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
          <div className="absolute top-0 inset-x-0 h-6 bg-zinc-950/90 backdrop-blur-xs px-3 flex items-center justify-between z-10 border-b border-zinc-800/50">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-700/80 group-hover:bg-violet-400/80 transition-colors" />
              <span className="w-2 h-2 rounded-full bg-zinc-700/80 group-hover:bg-fuchsia-400/80 transition-colors" />
              <span className="w-2 h-2 rounded-full bg-zinc-700/80 group-hover:bg-rose-400/80 transition-colors" />
            </div>
            <span className="text-[10px] font-mono text-zinc-600 truncate max-w-[200px]">
              {project.id}
            </span>
            <div className="w-8" />
          </div>

          {project.image ? (
            <div className="pt-6 h-full w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="pt-6 h-full w-full flex items-center justify-center text-zinc-700 group-hover:text-violet-400/60 transition-colors">
              <Code2 size={32} />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-zinc-100 group-hover:text-violet-200 transition-colors">
            {project.title}
          </h3>

          <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-zinc-950 text-[10px] font-mono text-zinc-400 border border-zinc-800/80 group-hover:border-violet-500/30 group-hover:text-violet-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/60">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-fuchsia-300 transition-colors"
          >
            <Link size={14} />
            <span>Code</span>
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors ml-auto"
            >
              <span>Live Demo</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
