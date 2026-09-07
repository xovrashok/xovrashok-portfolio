export const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-800/80 py-6 bg-[#09090b]/80 backdrop-blur-md mt-16 relative z-10">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between text-xs font-mono text-zinc-500">
        <div>© {new Date().getFullYear()} Julia Ruda</div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/xovrashok"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-300 transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="mailto:juliaruda033@gmail.com"
            className="hover:text-fuchsia-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
