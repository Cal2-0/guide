import { useState, useMemo, useEffect } from "react";
import { SearchDock } from "@/components/ui/SearchDock";
import { ToolCard } from "@/components/ui/ToolCard";
import { GlassPill } from "@/components/ui/GlassPill";
import { tools } from "@/lib/toolsData";

import { useSearch, useLocation } from "wouter";

export function Library() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const initialCategory = params.get("category") || "All";

  const [activeCategory, setActiveCategoryState] = useState<string>(initialCategory);

  const setActiveCategory = (cat: string) => {
    setActiveCategoryState(cat);
    const newParams = new URLSearchParams(window.location.search);
    if (cat === "All") {
      newParams.delete("category");
    } else {
      newParams.set("category", cat);
    }
    const query = newParams.toString();
    window.history.pushState({}, "", `/library${query ? `?${query}` : ""}`);
  };

  // Sync state if user navigates back/forward in browser history
  useEffect(() => {
    const handlePopState = () => {
      const currentParams = new URLSearchParams(window.location.search);
      setActiveCategoryState(currentParams.get("category") || "All");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const [sortBy, setSortBy] = useState<"liked" | "newest">("liked");

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeCategory]);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(tools.map(t => t.category))).sort();
    return ["All", ...cats];
  }, []);

  const filteredTools = useMemo(() => {
    let result = activeCategory === "All" ? tools : tools.filter(t => t.category === activeCategory);
    
    // Sort
    if (sortBy === "liked") {
      result = [...result].sort((a, b) => (b.likes || 0) - (a.likes || 0));
    } else if (sortBy === "newest") {
      result = [...result].sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
    }
    
    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-32">
      <div className="container max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-12">
          {/* Left Rail: Categories */}
          <aside className="lg:w-64 flex-none">
            <div className="sticky top-48 flex flex-col gap-2">
              <h3 className="text-text-primary font-semibold text-sm tracking-widest uppercase mb-4 px-2">
                Categories
              </h3>
              <div className="flex flex-row lg:flex-col flex-nowrap gap-3 overflow-x-auto lg:overflow-x-hidden lg:max-h-[70vh] lg:overflow-y-auto pb-4 lg:pr-2 no-scrollbar">
                {categories.map((cat) => (
                  <GlassPill
                    key={cat}
                    size="md"
                    active={activeCategory === cat}
                    onClick={() => setActiveCategory(cat)}
                    className="justify-start px-4 h-auto py-2.5 w-auto lg:w-full text-[14px]"
                  >
                    {cat}
                  </GlassPill>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Rail: Tool Grid */}
          <main className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-white text-3xl font-semibold tracking-tight">
                {activeCategory === "All" ? "All Tools" : activeCategory}
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-text-tertiary text-sm">Sort by:</span>
                <GlassPill 
                  size="sm" 
                  active={sortBy === "liked"} 
                  onClick={() => setSortBy("liked")}
                >
                  Most Liked
                </GlassPill>
                <GlassPill 
                  size="sm" 
                  active={sortBy === "newest"} 
                  onClick={() => setSortBy("newest")}
                >
                  Newest
                </GlassPill>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </main>
        </div>
      </div>
      
      {/* Floating search dock similar to My Stack */}
      <SearchDock />
    </div>
  );
}
