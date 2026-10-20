import { Search, Compass, BookOpen, Layers, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { CategoryCarousel } from "@/components/ui/CategoryCarousel";
import { SearchDock } from "@/components/ui/SearchDock";
import { tools } from "@/lib/toolsData";
import { usePageTitle } from "@/hooks/usePageTitle";

// ─────────────────────────────────────────────
// Landing — Lyra V2 Clean & Elevated
// ─────────────────────────────────────────────
export default function Landing() {
  usePageTitle();

  const doorways = [
    {
      title: "Universal Directory",
      subtitle: `${tools.length}+ tools across 18 verified categories`,
      href: "/directory",
      icon: BookOpen,
      badge: "Explore",
    },
    {
      title: "Architecture Blueprints",
      subtitle: "6 project recipes & 12-step launch sequence",
      href: "/blueprints",
      icon: Compass,
      badge: "Build",
    },
    {
      title: "My Personal Stack",
      subtitle: "Coverage analysis, gap warnings & export",
      href: "/stack",
      icon: Layers,
      badge: "Curate",
    },
  ];

  return (
    <div className="relative min-h-screen tracking-[-0.02em] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-between pt-32 pb-16 px-4 sm:px-6">
        
        {/* Center Main Stage */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center my-auto">
          
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2 mb-6 py-1.5 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-foreground/80 text-xs sm:text-sm font-medium animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <Sparkles className="w-3.5 h-3.5 text-[#e8702a]" />
            <span>The Curated Developer Operating System</span>
          </div>

          {/* Heading */}
          <h1 className="text-white leading-[1.05] flex flex-col items-center mb-6">
            <span
              className="block font-light text-5xl sm:text-7xl md:text-8xl font-playfair italic tracking-tight"
            >
              Discover tools
            </span>
            <span
              className="block font-semibold text-5xl sm:text-7xl md:text-8xl -mt-2 sm:-mt-4 font-sans not-italic tracking-tighter"
            >
              that build the future
            </span>
          </h1>

          <p className="text-foreground/70 text-base sm:text-xl font-normal max-w-xl mx-auto tracking-normal leading-relaxed mb-10">
            A fast, honest catalog of <span className="text-white font-medium">{tools.length}+ developer tools</span>, architectural recipes, and launch checklists. Zero fluff.
          </p>

          {/* Search Bar Accelerator */}
          <div className="w-full max-w-2xl mx-auto mb-14">
            <div className="relative group w-full">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-white/40 group-focus-within:text-[#e8702a] transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                readOnly
                onClick={() => window.dispatchEvent(new Event("open-search"))}
                placeholder="Search frameworks, databases, LLM SDKs, auth..."
                className="w-full h-16 pl-16 pr-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white text-base sm:text-lg placeholder:text-white/40 focus:outline-none focus:border-[#e8702a]/60 focus:bg-white/10 transition-all duration-300 shadow-2xl cursor-pointer hover:bg-white/[0.08]"
              />
              <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                <kbd className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 text-xs font-mono text-white/60 border border-white/10">
                  <span>{typeof navigator !== 'undefined' && navigator.platform?.includes('Mac') ? '⌘' : 'Ctrl'}</span>K
                </kbd>
              </div>
            </div>
          </div>

          {/* Category Carousel Wheel */}
          <div className="w-full mb-14">
            <CategoryCarousel />
          </div>

          {/* The Rule of Three Doorways */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {doorways.map((doorway) => {
              const Icon = doorway.icon;
              return (
                <Link
                  key={doorway.href}
                  href={doorway.href}
                  className="group relative p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#e8702a]/40 transition-all duration-300 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#e8702a] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-white/5 text-foreground/60 border border-white/5">
                        {doorway.badge}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-[#e8702a] transition-colors">
                      {doorway.title}
                    </h3>
                    <p className="text-foreground/60 text-xs leading-relaxed">
                      {doorway.subtitle}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-[#e8702a] group-hover:translate-x-1 transition-transform">
                    <span>Open {doorway.title.split(" ")[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>

      </section>

      {/* Floating Search Dock Trigger */}
      <SearchDock hideTrigger={true} />
    </div>
  );
}
