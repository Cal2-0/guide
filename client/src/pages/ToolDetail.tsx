import { useRoute, Link } from "wouter";
import { ArrowLeft, ArrowUpRight, Heart, ShieldCheck, Sparkles, Layers, Check } from "lucide-react";
import { SearchDock } from "@/components/ui/SearchDock";
import { ToolCard } from "@/components/ui/ToolCard";
import { GlassPill } from "@/components/ui/GlassPill";
import { tools } from "@/lib/toolsData";
import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { usePageTitle } from "@/hooks/usePageTitle";
import { toast } from "sonner";

export function ToolDetail() {
  const [, params] = useRoute("/tool/:id");
  const toolId = params?.id;
  const tool = tools.find(t => t.id === toolId);
  const [isSaved, setIsSaved] = useState(false);
  usePageTitle(tool?.name ? `${tool.name} — Lyra` : "Tool Detail");

  useEffect(() => {
    if (!tool) return;
    try {
      const savedIds = JSON.parse(localStorage.getItem("my_stack_saves") || "[]");
      setIsSaved(savedIds.includes(tool.id));
    } catch (e) {
      console.error(e);
    }
  }, [tool]);

  // Complementary pairings based on category
  const pairedTools = useMemo(() => {
    if (!tool) return [];
    
    // Define complementary categories
    let complementaryCategories: string[] = [];
    if (tool.category.toLowerCase().includes("front") || tool.category.toLowerCase().includes("ui")) {
      complementaryCategories = ["Backend", "Database", "Auth", "Hosting"];
    } else if (tool.category.toLowerCase().includes("back") || tool.category.toLowerCase().includes("data")) {
      complementaryCategories = ["Frontend", "Auth", "DevOps", "AI"];
    } else if (tool.category.toLowerCase().includes("ai") || tool.category.toLowerCase().includes("llm")) {
      complementaryCategories = ["Database", "Frontend", "Hosting", "API"];
    } else {
      complementaryCategories = ["Frontend", "Backend", "DevOps"];
    }

    const matches: typeof tools = [];
    for (const cat of complementaryCategories) {
      const found = tools.find(t => 
        t.category.toLowerCase().includes(cat.toLowerCase()) && 
        t.id !== tool.id &&
        !matches.some(m => m.id === t.id)
      );
      if (found) matches.push(found);
      if (matches.length >= 3) break;
    }

    return matches;
  }, [tool]);

  // Alternative tools in the same category
  const alternativeTools = useMemo(() => {
    if (!tool) return [];
    return tools
      .filter(t => t.category === tool.category && t.id !== tool.id)
      .slice(0, 3);
  }, [tool]);

  const toggleSave = () => {
    if (!tool) return;
    try {
      const savedIds: string[] = JSON.parse(localStorage.getItem("my_stack_saves") || "[]");
      if (isSaved) {
        const newIds = savedIds.filter(id => id !== tool.id);
        localStorage.setItem("my_stack_saves", JSON.stringify(newIds));
        setIsSaved(false);
        toast.info(`Removed ${tool.name} from My Stack`);
      } else {
        savedIds.push(tool.id);
        localStorage.setItem("my_stack_saves", JSON.stringify(savedIds));
        setIsSaved(true);
        toast.success(`Saved ${tool.name} to My Stack`);
      }
      window.dispatchEvent(new Event("stack-change"));
    } catch (e) {
      console.error(e);
    }
  };

  if (!tool) {
    return (
      <div className="min-h-screen bg-transparent flex flex-col items-center justify-center text-text-secondary gap-4">
        <p className="text-xl">Tool not found.</p>
        <Link href="/directory" className="text-[#e8702a] hover:underline text-sm font-semibold">
          Return to Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent pt-28 pb-32">
      <div className="container max-w-5xl relative z-10 px-4 sm:px-6">
        
        {/* Back navigation */}
        <Link 
          href="/directory" 
          className="inline-flex items-center gap-2 text-foreground/50 hover:text-white transition-colors mb-10 group text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Directory</span>
        </Link>

        {/* Hero Dossier Card */}
        <div className="bg-surface/80 border border-white/10 rounded-3xl p-7 md:p-12 mb-16 relative overflow-hidden shadow-2xl backdrop-blur-md">
          {/* Subtle glow behind icon */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#e8702a]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between relative z-10">
            <div className="flex items-start gap-5 sm:gap-6">
              {tool.icon ? (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl sm:text-4xl shadow-xl shrink-0">
                  {tool.icon}
                </div>
              ) : (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary font-bold text-2xl sm:text-3xl uppercase shadow-xl shrink-0">
                  {tool.name.charAt(0)}
                </div>
              )}
              
              <div>
                <h1 className="text-white text-3xl sm:text-5xl font-bold tracking-tight mb-3">
                  {tool.name}
                </h1>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <GlassPill size="sm" className="bg-white/5 border-white/10 text-xs font-medium">
                    {tool.category}
                  </GlassPill>
                  {tool.tags.find(t => ["Free", "OSS", "Free tier", "Paid"].includes(t)) && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-foreground/70 font-medium">
                      {tool.tags.find(t => ["Free", "OSS", "Free tier", "Paid"].includes(t))}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5 text-foreground/50 text-xs font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Verified Tool
                  </span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(232,112,42,0.35)]"
              >
                <span>Visit Official Site</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={toggleSave}
                className={cn(
                  "flex items-center justify-center gap-2 text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 border",
                  isSaved 
                    ? "bg-[#e8702a]/15 text-[#e8702a] border-[#e8702a]/30 font-semibold" 
                    : "bg-white/5 border-white/10 text-foreground/70 hover:bg-white/10 hover:text-white"
                )}
              >
                {isSaved ? <Check className="w-4 h-4" /> : <Heart className="w-4 h-4" />}
                <span>{isSaved ? "Saved in Stack" : "Save to My Stack"}</span>
              </button>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <h2 className="text-foreground/50 text-xs font-semibold tracking-widest uppercase mb-3">Overview & Purpose</h2>
            <p className="text-foreground/90 text-base sm:text-lg leading-relaxed max-w-3xl">
              {tool.description}
            </p>
          </div>

          {tool.tags && tool.tags.length > 0 && (
            <div className="mt-8">
              <h2 className="text-foreground/50 text-xs font-semibold tracking-widest uppercase mb-3">Taxonomy Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-foreground/70 text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Section: Best Paired With */}
        {pairedTools.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#e8702a]" />
              <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
                Best Paired With
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pairedTools.map((t) => (
                <ToolCard key={t.id} tool={t} />
              ))}
            </div>
          </div>
        )}

        {/* Section: Alternative Tools */}
        {alternativeTools.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Layers className="w-4 h-4 text-foreground/60" />
              <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
                Alternative {tool.category} Tools
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {alternativeTools.map((t) => (
                <ToolCard key={t.id} tool={t} />
              ))}
            </div>
          </div>
        )}

      </div>
      <SearchDock />
    </div>
  );
}

export default ToolDetail;
