import { Mail, Code2, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-16 md:py-20 px-4 max-w-4xl mx-auto overflow-hidden">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 -z-10 w-[500px] h-[250px] bg-violet-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            Available for opportunities
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
            <MapPin size={14} className="text-violet-400" />
            Kharkiv, Ukraine
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.2)]">
              Julia Ruda
            </span>
          </h1>
          <p className="text-lg sm:text-xl font-mono text-zinc-400 tracking-tight">
            Frontend Developer / React & TypeScript Specialist
          </p>
        </div>

        <div className="space-y-3 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl">
          <p>
            Software developer with commercial experience building responsive,
            user-centric web applications and customizing CMS platforms.
          </p>
          <p>
            Focused on architecting predictable state flows with Redux Toolkit,
            crafting type-safe React components, and delivering high-performance
            UI layouts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
          <div>
            <div className="text-2xl font-bold font-mono text-zinc-100 flex items-center gap-2">
              2+ Years
            </div>
            <div className="text-xs font-mono text-zinc-500 mt-1">
              Commercial Exp.
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-zinc-100">
              React & TS
            </div>
            <div className="text-xs font-mono text-zinc-500 mt-1">
              Core Stack
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-zinc-100">
              Web & CMS
            </div>
            <div className="text-xs font-mono text-zinc-500 mt-1">Focus</div>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap pt-2">
          <a
            href="mailto:yulia@example.com"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 text-zinc-950 text-xs sm:text-sm font-semibold hover:bg-white transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          >
            <Mail
              size={16}
              className="text-zinc-900 group-hover:scale-110 transition-transform"
            />
            Copy Email
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900/80 text-zinc-300 text-xs sm:text-sm font-medium border border-zinc-800 hover:border-violet-500/50 hover:text-violet-200 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] active:scale-95"
          >
            <Code2 size={16} />
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900/80 text-zinc-300 text-xs sm:text-sm font-medium border border-zinc-800 hover:border-violet-500/50 hover:text-violet-200 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] active:scale-95"
          >
            <Code2 size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
