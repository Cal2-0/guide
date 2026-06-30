import { useRoute, Link } from "wouter";
import { ArrowLeft, ArrowUpRight, Heart, Share2, ShieldCheck } from "lucide-react";
import { SearchDock } from "@/components/ui/SearchDock";
import { ToolCard } from "@/components/ui/ToolCard";
import { GlassPill } from "@/components/ui/GlassPill";
import { tools } from "@/lib/toolsData";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function ToolDetail() {
  const [, params] = useRoute("/tool/:id");
  const toolId = params?.id;
  const tool = tools.find(t => t.id === toolId);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (!tool) return;
    try {
      const savedIds = JSON.parse(localStorage.getItem("my_stack_saves") || "[]");
      setIsSaved(savedIds.includes(tool.id));
    } catch (e) {
      console.error(e);
    }
  }, [tool]);

  if (!tool) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center text-text-secondary">
        Tool not found.
      </div>
    );
  }

  const similarTools = tools
    .filter(t => t.category === tool.category && t.id !== tool.id)
    .slice(0, 4);

  const toggleSave = () => {
    try {
      const savedIds = JSON.parse(localStorage.getItem("my_stack_saves") || "[]");
      if (isSaved) {
        const newIds = savedIds.filter((id: string) => id !== tool.id);
        localStorage.setItem("my_stack_saves", JSON.stringify(newIds));
        setIsSaved(false);
      } else {
        savedIds.push(tool.id);
        localStorage.setItem("my_stack_saves", JSON.stringify(savedIds));
        setIsSaved(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-transparent pt-32 pb-32">
      <div className="container max-w-4xl relative z-10">
        
        {/* Back navigation */}
        <Link href="/library">
          <a className="inline-flex items-center gap-2 text-text-tertiary hover:text-text-primary transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Back to Library</span>
          </a>
        </Link>

        {/* Hero Section */}
        <div className="bg-surface border border-glass-border rounded-[2rem] p-8 md:p-12 mb-16 relative overflow-hidden">
          {/* Subtle glow behind icon */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between relative z-10">
            <div className="flex items-start gap-6">
              {tool.icon ? (
                <div className="w-20 h-20 rounded-2xl bg-glass-bg border border-glass-border flex items-center justify-center text-4xl shadow-xl">
                  {tool.icon}
                </div>
              ) : (
                <div className="w-20 h-20 rounded-2xl bg-glass-bg border border-glass-border flex items-center justify-center text-text-secondary font-bold text-3xl uppercase shadow-xl">
                  {tool.name.charAt(0)}
                </div>
              )}
              
              <div className="pt-2">
                <h1 className="text-white text-4xl font-bold tracking-tight mb-3">
                  {tool.name}
                </h1>
                <div className="flex items-center gap-3 mb-4">
                  <GlassPill size="sm" className="bg-white/5 border-white/10">
                    {tool.category}
                  </GlassPill>
                  <span className="flex items-center gap-1.5 text-text-tertiary text-[13px] font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-500/70" />
                    Verified
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 ease-premium hover:scale-[1.02] active:scale-95 shadow-[0_0_24px_rgba(232,112,42,0.3)]"
              >
                Visit Site
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={toggleSave}
                className={cn(
                  "flex items-center justify-center gap-2 text-[14px] font-medium px-6 py-3.5 rounded-full transition-all duration-300 border",
                  isSaved 
                    ? "bg-brand-accent/10 text-brand-accent border-brand-accent/20" 
                    : "bg-glass-bg border-glass-border text-text-secondary hover:bg-glass-strong hover:text-white"
                )}
              >
                <Heart className={cn("w-4 h-4", isSaved && "fill-current scale-110")} />
                {isSaved ? "Saved to Stack" : "Save Tool"}
              </button>
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-glass-border">
            <h2 className="text-text-primary text-xl font-semibold mb-4">About</h2>
            <p className="text-text-secondary text-[16px] leading-relaxed max-w-3xl">
              {tool.description}
            </p>
          </div>

          {tool.tags && tool.tags.length > 0 && (
            <div className="mt-10">
              <h2 className="text-text-primary text-sm font-semibold tracking-widest uppercase mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1.5 rounded-pill bg-glass-bg border border-glass-border text-text-secondary text-[13px] font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Similar Tools */}
        {similarTools.length > 0 && (
          <div>
            <h2 className="text-white text-2xl font-semibold tracking-tight mb-8">
              Similar Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {similarTools.map(t => (
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
