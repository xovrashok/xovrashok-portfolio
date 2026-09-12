import {
  Code2,
  Database,
  Layout,
  Wrench,
  ShieldCheck,
  Cpu,
  Puzzle,
} from "lucide-react";

export const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend & Frameworks",
      icon: Code2,
      skills: [
        "React 18",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5 / SCSS",
        "WordPress",
      ],
    },
    {
      title: "Browser Extensions & Automation",
      icon: Puzzle,
      skills: [
        "Chrome Extensions (MV3)",
        "Content Scripts",
        "chrome.storage API",
        "DOM Parsing & Automation",
      ],
    },
    {
      title: "State, Forms & API",
      icon: Database,
      skills: ["Redux Toolkit", "Formik", "Yup Validation", "REST API & Axios"],
    },
    {
      title: "Styling & UI Frameworks",
      icon: Layout,
      skills: ["Tailwind CSS v4", "Bootstrap", "MUI", "styled-components"],
    },
    {
      title: "Build Tools & Version Control",
      icon: Wrench,
      skills: ["Vite", "Git", "GitHub"],
    },
    {
      title: "Testing, QA & Cloud",
      icon: ShieldCheck,
      skills: ["Jest", "Storybook", "GitHub Actions", "Vercel"],
    },
    {
      title: "DevOps, PM & AI Tools",
      icon: Cpu,
      skills: [
        "Google Gemini API",
        "Prompt Engineering",
        "ChatGPT / Claude",
        "Page Speed Optimization",
        "Trello",
      ],
    },
  ];

  return (
    <section
      id="stack"
      className="py-12 px-4 max-w-4xl mx-auto border-t border-zinc-800/80 scroll-mt-16"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
            Technical{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <span className="text-xs font-mono text-zinc-500">
            Technologies & Tools
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {techCategories.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="group p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-violet-500/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-1.5 rounded-lg bg-zinc-800/60 text-violet-400 border border-zinc-700/50 group-hover:border-violet-500/40 group-hover:bg-violet-500/10 transition-colors">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-xs font-mono font-semibold text-zinc-200 group-hover:text-violet-300 transition-colors uppercase tracking-wider">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-zinc-950 text-zinc-300 text-xs font-mono border border-zinc-800/80 hover:border-violet-500/30 hover:text-violet-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
