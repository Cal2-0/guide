import { useState, useEffect } from "react";
import { Link } from "wouter";
import { SearchDock } from "@/components/ui/SearchDock";
import { ToolCard } from "@/components/ui/ToolCard";
import { tools } from "@/lib/toolsData";
import { Heart, LayoutGrid } from "lucide-react";

export function MyStack() {
  const [savedTools, setSavedTools] = useState<typeof tools>([]);

  const loadTools = () => {
    try {
      const savedIds = JSON.parse(localStorage.getItem("my_stack_saves") || "[]");
      const likedIds = JSON.parse(localStorage.getItem("my_stack_likes") || "[]");
      // Combine both saved and liked tools (unique set)
      const combinedIds = Array.from(new Set([...savedIds, ...likedIds]));
      const matchedTools = tools.filter(t => combinedIds.includes(t.id));
      setSavedTools(matchedTools);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // Clear old localStorage entries once to clean up old slop
    if (!localStorage.getItem("my_stack_cleaned_v3")) {
      localStorage.removeItem("my_stack_saves");
      localStorage.removeItem("my_stack_likes");
      localStorage.setItem("my_stack_cleaned_v3", "true");
    }

    loadTools();
    
    // Listen for custom stack change events
    window.addEventListener("stack-change", loadTools);
    return () => {
      window.removeEventListener("stack-change", loadTools);
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent pt-32 pb-32">
      <div className="container max-w-6xl relative z-10">
        
        <div className="relative mb-16 py-12 px-8 sm:px-12 rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-[#111111] to-[#0a0a0a] shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e8702a]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[#e8702a] to-[#d2611f] flex items-center justify-center text-white shadow-[0_0_50px_rgba(232,112,42,0.3)] shrink-0">
              <Heart className="w-12 h-12 fill-current drop-shadow-md" />
            </div>
            <div>
              <h1 className="text-white text-5xl sm:text-6xl font-bold tracking-tight mb-3 font-['Playfair_Display'] italic drop-shadow-sm">
                My Stack
              </h1>
              <p className="text-white/60 text-lg sm:text-xl font-medium tracking-wide">
                Your personal collection of <span className="text-white/90">{savedTools.length}</span> curated {savedTools.length === 1 ? "tool" : "tools"}.
              </p>
            </div>
          </div>
        </div>

        {savedTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-[heroFadeUp_0.6s_ease-out]">
            {savedTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center border border-dashed border-glass-border rounded-[2rem] bg-surface">
            <LayoutGrid className="w-16 h-16 text-text-tertiary mb-6" />
            <h2 className="text-white text-2xl font-semibold mb-2">Your stack is empty</h2>
            <p className="text-text-secondary max-w-md mx-auto mb-8">
              Explore the library or discover curated paths to find the perfect tools for your next project.
            </p>
            <Link href="/library">
              <a className="bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 ease-premium hover:scale-105 active:scale-95 shadow-[0_0_24px_rgba(232,112,42,0.3)]">
                Explore Library
              </a>
            </Link>
          </div>
        )}
      </div>
      <SearchDock />
    </div>
  );
}
