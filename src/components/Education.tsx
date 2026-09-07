import { GraduationCap, BookOpen, Award } from "lucide-react";
import { educationData } from "../data/educationData";

export const Education = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "degree":
        return <GraduationCap size={18} />;
      case "course":
        return <BookOpen size={18} />;
      case "certification":
        return <Award size={18} />;
      default:
        return <GraduationCap size={18} />;
    }
  };

  return (
    <section
      id="education"
      className="py-12 px-4 max-w-4xl mx-auto border-t border-zinc-800/80 scroll-mt-16"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
            Education &{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <span className="text-xs font-mono text-zinc-500">
            Learning & Achievements
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="group p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-violet-500/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.12)] flex flex-col sm:flex-row sm:items-start justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-violet-500/10 text-violet-300 border border-violet-500/20 group-hover:border-violet-500/40 mt-0.5 shrink-0 transition-colors">
                  {getIcon(item.type)}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-violet-200 transition-colors">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-fuchsia-500/10 text-fuchsia-300 text-[10px] font-mono border border-fuchsia-500/20">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    {item.institution}
                  </div>
                  {item.description && (
                    <p className="text-sm text-zinc-400 pt-1 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="text-xs font-mono text-zinc-500 shrink-0 sm:text-right">
                {item.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
