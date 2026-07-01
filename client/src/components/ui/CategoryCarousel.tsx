import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { categories } from "@/lib/toolsDataArticle";
import { 
  Lightbulb, Layout, Code2, Database, Shield, Brain, 
  Cloud, Wrench, Settings, Users, Globe, Zap, FolderGit2
} from "lucide-react";

const getCategoryIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('idea') || n.includes('startup')) return Lightbulb;
  if (n.includes('ui') || n.includes('design')) return Layout;
  if (n.includes('frontend')) return Code2;
  if (n.includes('backend') || n.includes('database')) return Database;
  if (n.includes('security')) return Shield;
  if (n.includes('vibe')) return Zap;
  if (n.includes('ai')) return Brain;
  if (n.includes('devops') || n.includes('cloud')) return Cloud;
  if (n.includes('project') || n.includes('github')) return FolderGit2;
  if (n.includes('tool')) return Wrench;
  if (n.includes('productivity')) return Users;
  if (n.includes('learning')) return Globe;
  return Settings;
};

export function CategoryCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const singleSetWidth = scrollWidth / 3;

    // Seamless infinite loop wrap
    if (scrollLeft >= singleSetWidth * 2) {
      // Snapped into 2nd set
      container.scrollLeft = scrollLeft - singleSetWidth;
    } else if (scrollLeft <= singleSetWidth - clientWidth) {
      // Snapped into 2nd set
      container.scrollLeft = scrollLeft + singleSetWidth;
    }

    const progress = (container.scrollLeft % singleSetWidth) / (singleSetWidth - clientWidth || 1);
    setScrollProgress(progress);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Position the scroll to start in the middle set
    const timer = setTimeout(() => {
      const singleSetWidth = container.scrollWidth / 3;
      container.scrollLeft = singleSetWidth;
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleGlobalWheel = (e: WheelEvent) => {
      if (window.location.pathname !== "/") return;

      // Do not hijack scroll if scrolling inside the search modal or any fixed dialog overlays
      const target = e.target as HTMLElement;
      if (target && (target.closest('[layoutid="search-dock"]') || target.closest('[layoutId="search-dock"]') || target.closest('.overflow-y-auto'))) {
        return;
      }

      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;
      
      const canScrollLeft = scrollLeft > 0;
      const canScrollRight = scrollLeft < maxScroll - 1;

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if ((e.deltaY > 0 && canScrollRight) || (e.deltaY < 0 && canScrollLeft)) {
          e.preventDefault();
          container.scrollBy({ left: e.deltaY * 0.6, behavior: "smooth" });
        }
      }
    };

    window.addEventListener("wheel", handleGlobalWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleGlobalWheel);
    };
  }, []);

  // Triple categories array to make it seamless
  const loopedCategories = [...categories, ...categories, ...categories];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 mt-12 pointer-events-auto z-50">
      <div 
        className="flex gap-4 sm:gap-6 overflow-x-auto pb-16 pt-4 no-scrollbar items-center px-4 md:px-12"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        ref={containerRef}
        onScroll={handleScroll}
      >
        {loopedCategories.map((cat, idx) => {
          const Icon = getCategoryIcon(cat.name);

          return (
            <Link key={`${cat.name}-${idx}`} href={`/library?category=${encodeURIComponent(cat.name)}`}>
              <div 
                className="shrink-0 w-60 sm:w-68 h-36 rounded-[24px] bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 cursor-pointer group relative overflow-hidden p-5"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-transparent transition-all duration-500" />
                
                <div className="z-10 mb-3">
                  <div className="p-2.5 rounded-2xl bg-white/5 text-white/60 group-hover:text-white transition-colors border border-white/5 inline-flex items-center justify-center">
                    <Icon strokeWidth={1.5} className="w-5 h-5" />
                  </div>
                </div>

                <div className="z-10">
                  <h3 className="text-[17px] font-semibold text-white/90 group-hover:text-white transition-colors leading-tight tracking-tight">
                    {cat.name}
                  </h3>
                  
                  {cat.subcategories.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {cat.subcategories.slice(0, 1).map(sub => (
                        <span key={sub.name} className="text-[9px] uppercase tracking-wider font-medium text-white/50 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                          {sub.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Custom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-[#e8702a]"
          style={{ width: "20%" }}
          animate={{ x: `${scrollProgress * 400}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>
    </div>
  );
}
