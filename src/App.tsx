import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100 overflow-hidden font-sans">
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="fixed top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-violet-600/10 via-fuchsia-600/10 to-rose-500/10 blur-[130px] pointer-events-none z-0 animate-slow-drift" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-b from-zinc-100/[0.03] to-transparent blur-3xl pointer-events-none z-0" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-16">
          <Hero />
          <Experience />
          <TechStack />
          <Projects />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  );
}
