import { useState, useMemo, useEffect } from "react";
import { SearchDock } from "@/components/ui/SearchDock";
import { ToolCard } from "@/components/ui/ToolCard";
import { GlassPill } from "@/components/ui/GlassPill";
import { tools } from "@/lib/toolsData";
import { LayoutGrid, ArrowUp } from "lucide-react";

import { useSearch } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";

const PRICING_FILTERS = ["All", "Free", "OSS", "Paid", "Free tier", "AI"] as const;
type PricingFilter = (typeof PRICING_FILTERS)[number];

export function Library() {
  usePageTitle("Library");
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const initialCategory = params.get("category") || "All";
  const initialTags = params.get("tags")?.split(",").filter(Boolean) || [];
  const initialSort = (params.get("sort") as "liked" | "newest") || "liked";

  const [activeCategory, setActiveCategoryState] = useState<string>(initialCategory);
  const [selectedTags, setSelectedTagsState] = useState<string[]>(initialTags);
  const [sortBy, setSortByState] = useState<"liked" | "newest">(initialSort);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Centralized URL sync helper
  const updateUrl = (category: string, tags: string[], sort: string) => {
    const newParams = new URLSearchParams();
    if (category !== "All") newParams.set("category", category);
    if (tags.length > 0) newParams.set("tags", tags.join(","));
    if (sort !== "liked") newParams.set("sort", sort);
    const query = newParams.toString();
    window.history.pushState({}, "", `/library${query ? `?${query}` : ""}`);
  };

  const setActiveCategory = (cat: string) => {
    setActiveCategoryState(cat);
    updateUrl(cat, selectedTags, sortBy);
  };

  const toggleTag = (tag: string) => {
    if (tag === "All") {
      setSelectedTagsState([]);
      updateUrl(activeCategory, [], sortBy);
      return;
    }
    const next = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTagsState(next);
    updateUrl(activeCategory, next, sortBy);
  };

  const setSortBy = (sort: "liked" | "newest") => {
    setSortByState(sort);
    updateUrl(activeCategory, selectedTags, sort);
  };

  // Sync state if user navigates back/forward in browser history
  useEffect(() => {
    const handlePopState = () => {
      const currentParams = new URLSearchParams(window.location.search);
      setActiveCategoryState(currentParams.get("category") || "All");
      setSelectedTagsState(currentParams.get("tags")?.split(",").filter(Boolean) || []);
      setSortByState((currentParams.get("sort") as "liked" | "newest") || "liked");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Show/hide back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    
    // Tag/pricing filter
    if (selectedTags.length > 0) {
      result = result.filter(tool =>
        selectedTags.some(tag => tool.tags.includes(tag))
      );
    }

    // Sort
    if (sortBy === "liked") {
      result = [...result].sort((a, b) => (b.likes || 0) - (a.likes || 0));
    } else if (sortBy === "newest") {
      result = [...result].sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
    }
    
    return result;
  }, [activeCategory, selectedTags, sortBy]);

  const clearAllFilters = () => {
    setActiveCategoryState("All");
    setSelectedTagsState([]);
    setSortByState("liked");
    updateUrl("All", [], "liked");
  };

  const hasActiveFilters = activeCategory !== "All" || selectedTags.length > 0;

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
            {/* Header row: Title + Sort */}
            <div className="flex items-center justify-between mb-4">
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

            {/* Pricing/Type Filter Pills */}
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span className="text-text-tertiary text-sm mr-1">Type:</span>
              {PRICING_FILTERS.map((tag) => {
                const isActive = tag === "All" ? selectedTags.length === 0 : selectedTags.includes(tag);
                return (
                  <GlassPill
                    key={tag}
                    size="sm"
                    active={isActive}
                    onClick={() => toggleTag(tag)}
                    className={
                      tag !== "All" && isActive
                        ? tag === "Free" ? "!bg-emerald-500/20 !text-emerald-300 !border-emerald-500/30" :
                          tag === "OSS" ? "!bg-blue-500/20 !text-blue-300 !border-blue-500/30" :
                          tag === "Paid" ? "!bg-amber-500/20 !text-amber-300 !border-amber-500/30" :
                          tag === "Free tier" ? "!bg-cyan-500/20 !text-cyan-300 !border-cyan-500/30" :
                          tag === "AI" ? "!bg-purple-500/20 !text-purple-300 !border-purple-500/30" :
                          ""
                        : ""
                    }
                  >
                    {tag}
                  </GlassPill>
                );
              })}
            </div>

            {/* Result count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-text-tertiary text-sm">
                Showing <span className="text-white font-medium">{filteredTools.length}</span> of {tools.length} tools
              </p>
              {hasActiveFilters && (
                <button 
                  onClick={clearAllFilters}
                  className="text-[#e8702a] text-sm font-medium hover:text-[#d2611f] transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Tool Grid */}
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-32 text-center border border-dashed border-glass-border rounded-[2rem] bg-surface">
                <LayoutGrid className="w-16 h-16 text-text-tertiary mb-6" />
                <h2 className="text-white text-2xl font-semibold mb-2">No tools match your filters</h2>
                <p className="text-text-secondary max-w-md mx-auto mb-8">
                  Try adjusting your category or type filters to discover more tools.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 ease-premium hover:scale-105 active:scale-95 shadow-[0_0_24px_rgba(232,112,42,0.3)]"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
      
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 right-6 z-40 w-12 h-12 rounded-full bg-glass-bg backdrop-blur-xl border border-glass-border flex items-center justify-center text-white/60 hover:text-white hover:bg-glass-strong hover:border-white/20 transition-all shadow-2xl animate-[heroFadeUp_0.3s_ease-out]"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating search dock */}
      <SearchDock />
    </div>
  );
}
