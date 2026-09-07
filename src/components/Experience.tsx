import { Briefcase, MapPin } from "lucide-react";
import { experienceData } from "../data/experienceData";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-4 max-w-4xl mx-auto border-t border-zinc-800/80 scroll-mt-16"
    >
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">
          Work{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-sm text-zinc-400 mt-1 font-mono">
          My professional journey and commercial contributions
        </p>
      </div>

      <div className="space-y-12">
        {experienceData.map((item, index) => (
          <div
            key={item.id}
            className="relative grid grid-cols-1 md:grid-cols-12 gap-4 group"
          >
            <div className="md:col-span-3 text-xs font-mono text-zinc-500 pt-1 group-hover:text-violet-400/80 transition-colors">
              {item.period}
            </div>

            <div className="md:col-span-9">
              <div className="flex flex-col gap-1 mb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-zinc-100 group-hover:text-violet-200 transition-colors">
                    {item.role}
                  </h3>
                  <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-zinc-400 bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800/80 group-hover:border-violet-500/30 transition-colors">
                    <MapPin size={10} className="text-violet-400" />
                    {item.location}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-zinc-400 font-medium italic">
                  <Briefcase size={14} className="text-violet-400" />
                  <span>{item.company}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {item.highlights.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-400 leading-relaxed border-l border-zinc-800/80 pl-4 hover:border-violet-500/50 hover:text-zinc-300 transition-colors"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-zinc-900/50 text-zinc-400 text-[10px] font-mono border border-zinc-800/50 group-hover:border-violet-500/30 group-hover:text-violet-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {index !== experienceData.length - 1 && (
              <div className="md:hidden w-full h-[1px] bg-zinc-800/50 my-4" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
