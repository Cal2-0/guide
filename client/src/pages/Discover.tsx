import { Link } from "wouter";
import {
  Globe, BrainCircuit, Rocket, Smartphone, Palette, Building2, Puzzle, Bot,
  ShieldAlert, Link as LinkIcon, Database, Cloud, Layout, Sparkles, Lightbulb,
  TrendingUp, Wrench, Blocks, GraduationCap, Github, BookOpen, Target, Layers, Code2
} from "lucide-react";

import { categories } from "@/lib/toolsDataArticle";
import { SearchDock } from "@/components/ui/SearchDock";

const getCategoryIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('idea') || n.includes('startup')) return Lightbulb;
  if (n.includes('ui') || n.includes('design')) return Layout;
  if (n.includes('frontend')) return Code2;
  if (n.includes('backend') || n.includes('database')) return Database;
  if (n.includes('security')) return ShieldAlert;
  if (n.includes('vibe')) return Sparkles;
  if (n.includes('ai') && !n.includes('knowledge')) return BrainCircuit;
  if (n.includes('devops') || n.includes('cloud')) return Cloud;
  if (n.includes('project') || n.includes('github')) return Github;
  if (n.includes('tool')) return Wrench;
  if (n.includes('productivity')) return Target;
  if (n.includes('learning')) return GraduationCap;
  if (n.includes('knowledge')) return BookOpen;
  if (n.includes('automated') || n.includes('automation')) return Bot;
  if (n.includes('resource') || n.includes('api')) return LinkIcon;
  if (n.includes('ecosystem')) return Blocks;
  if (n.includes('open source') || n.includes('alternative')) return Puzzle;
  if (n.includes('curated') || n.includes('stack')) return Layers;
  return Globe;
};

// Bigger heights to create a prominent staggered collage layout without scrolling
const COLLAGE_HEIGHTS = [
  "h-40", "h-48", "h-44", "h-52", 
  "h-44", "h-48", "h-40", "h-52", 
  "h-44", "h-48", "h-44", "h-48"
];

export function Discover() {
  return (
    <div className="relative min-h-screen pt-24 pb-32 overflow-hidden bg-transparent">
      <div className="container max-w-[1400px] relative z-10 mx-auto px-4">
        
        {/* Compact Hero Section */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h1 
            className="text-white text-[40px] md:text-[60px] font-bold tracking-[-0.04em] leading-[1.1] mb-3 opacity-0 translate-y-8 animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards] font-playfair italic"
            style={{ animationDelay: '0.1s' }}
          >
            Discover by Category
          </h1>
          <p 
            className="text-white/50 text-sm md:text-base tracking-wide opacity-0 translate-y-4 animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style={{ animationDelay: '0.2s' }}
          >
            An artistic compilation of tool categories. Click to dive deep.
          </p>
        </div>

        {/* Uniform Grid Layout to fit in 1 page and align perfectly at the bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 pb-12 max-w-6xl mx-auto">
          {categories.map((cat, i) => {
            const Icon = getCategoryIcon(cat.name);
            const toolsCount = cat.subcategories.reduce((acc, sub) => acc + sub.tools.length, 0);

            return (
              <Link key={cat.name} href={`/library?category=${encodeURIComponent(cat.name)}`}>
                <div 
                  className={`group relative flex flex-col justify-between bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-[20px] p-5 transition-all duration-500 ease-out hover:bg-white/[0.06] hover:border-white/15 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)] cursor-pointer opacity-0 translate-y-8 animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards] h-32`}
                  style={{ animationDelay: `${0.05 + (i % 12) * 0.03}s` }}
                >
                  {/* Glass highlight */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Top line: Icon & Count */}
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:bg-white/10 group-hover:text-white transition-all duration-500 text-white/50">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 group-hover:text-white/70 transition-colors">
                      {toolsCount} tools
                    </span>
                  </div>

                  {/* Bottom: Info */}
                  <div className="mt-auto">
                    <h3 className="text-white/90 group-hover:text-white transition-colors font-medium text-[15px] tracking-tight leading-tight">
                      {cat.name}
                    </h3>
                    <p className="text-white/30 text-[10px] truncate mt-1">
                      {cat.subcategories.map(s => s.name).join(" • ")}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      
      {/* Floating search dock similar to My Stack */}
      <SearchDock />
    </div>
  );
}
