import { Code2, Download } from "lucide-react";

export const Header = () => {
  const handleDownloadCV = () => {
    const cvUrl = "/JULIA_RUDA_CV.pdf";

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Julia_Ruda_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Tech Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800/80 bg-[#09090b]/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#"
          className="group flex items-center gap-2 font-bold text-zinc-100 hover:text-violet-200 transition-colors"
        >
          <div className="p-1.5 rounded-lg bg-zinc-900/90 text-violet-400 border border-zinc-800 group-hover:border-violet-500/50 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.25)] transition-all">
            <Code2 size={18} />
          </div>
          <span className="text-sm tracking-tight font-mono">yulia.dev</span>
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-xs font-mono font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-violet-300 transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-xs font-medium">
          <button
            type="button"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 text-zinc-950 text-xs sm:text-sm font-semibold hover:bg-white transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:shadow-[0_0_25px_rgba(168,85,247,0.45)]"
            onClick={handleDownloadCV}
          >
            <Download
              size={14}
              className="text-zinc-800 group-hover:text-violet-600 transition-colors"
            />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </header>
  );
};
