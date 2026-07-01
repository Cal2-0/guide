import { useState, useMemo, useEffect } from "react";
import { SearchDock } from "@/components/ui/SearchDock";
import { ToolCard } from "@/components/ui/ToolCard";
import { GlassPill } from "@/components/ui/GlassPill";
import { tools } from "@/lib/toolsData";
import { LayoutGrid, ArrowUp, Filter, Search } from "lucide-react";
import Fuse from "fuse.js";

import { useSearch } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";

const PRICING_FILTERS = ["Free", "OSS", "Paid", "Free tier", "AI"] as const;
const ECOSYSTEM_FILTERS = ["React", "Node", "Rust", "Python", "Go"] as const;
const INTEGRATION_FILTERS = ["GitHub", "Vercel", "Slack"] as const;

export function Library() {
  usePageTitle("Library");
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const initialCategory = params.get("category") || "All";
  const initialTags = params.get("tags")?.split(",").filter(Boolean) || [];
  const initialSort = (params.get("sort") as "liked" | "newest") || "liked";
  const initialSearch = params.get("q") || "";

  const [activeCategory, setActiveCategoryState] = useState<string>(initialCategory);
  const [selectedTags, setSelectedTagsState] = useState<string[]>(initialTags);
  const [sortBy, setSortByState] = useState<"liked" | "newest">(initialSort);
  const [searchQuery, setSearchQueryState] = useState(initialSearch);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Centralized URL sync helper
  const updateUrl = (category: string, tags: string[], sort: string, q: string) => {
    const newParams = new URLSearchParams();
    if (category !== "All") newParams.set("category", category);
    if (tags.length > 0) newParams.set("tags", tags.join(","));
    if (sort !== "liked") newParams.set("sort", sort);
    if (q) newParams.set("q", q);
    const query = newParams.toString();
    window.history.pushState({}, "", `/library${query ? `?${query}` : ""}`);
  };

  const setActiveCategory = (cat: string) => {
    setActiveCategoryState(cat);
    updateUrl(cat, selectedTags, sortBy, searchQuery);
  };

  const toggleTag = (tag: string) => {
    const next = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTagsState(next);
    updateUrl(activeCategory, next, sortBy, searchQuery);
  };

  const setSortBy = (sort: "liked" | "newest") => {
    setSortByState(sort);
    updateUrl(activeCategory, selectedTags, sort, searchQuery);
  };

  const setSearchQuery = (q: string) => {
    setSearchQueryState(q);
    updateUrl(activeCategory, selectedTags, sortBy, q);
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

  const fuse = useMemo(() => new Fuse(tools, {
    keys: [
      { name: "name", weight: 2 },
      { name: "description", weight: 1 },
      { name: "category", weight: 1 },
      { name: "tags", weight: 1 }
    ],
    threshold: 0.3,
  }), []);

  const filteredTools = useMemo(() => {
    let result = searchQuery 
      ? fuse.search(searchQuery).map(r => r.item)
      : tools;
      
    if (activeCategory !== "All") {
      result = result.filter(t => t.category === activeCategory);
    }
    
    // Tag/pricing/ecosystem filter
    if (selectedTags.length > 0) {
      result = result.filter(tool =>
        selectedTags.every(tag => tool.tags.includes(tag) || tool.name.toLowerCase().includes(tag.toLowerCase()) || tool.description.toLowerCase().includes(tag.toLowerCase()))
      );
    }

    // Sort
    if (sortBy === "liked") {
      result = [...result].sort((a, b) => (b.likes || 0) - (a.likes || 0));
    } else if (sortBy === "newest") {
      result = [...result].sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
    }
    
    return result;
  }, [activeCategory, selectedTags, sortBy, searchQuery, fuse]);

  const clearAllFilters = () => {
    setActiveCategoryState("All");
    setSelectedTagsState([]);
    setSortByState("liked");
    setSearchQueryState("");
    updateUrl("All", [], "liked", "");
  };

  const hasActiveFilters = activeCategory !== "All" || selectedTags.length > 0;

  const FilterSection = ({ title, items }: { title: string, items: readonly string[] }) => (
    <div className="mb-6">
      <h4 className="text-foreground/70 text-xs font-semibold uppercase tracking-wider mb-3 px-1">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <GlassPill
            key={item}
            active={selectedTags.includes(item)}
            onClick={() => toggleTag(item)}
            className="text-xs px-3 py-1.5"
            size="sm"
          >
            {item}
          </GlassPill>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-32">
      <div className="container max-w-[1400px]">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between mt-8 mb-4">
          <button 
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center gap-2 text-foreground bg-white/5 border border-border px-4 py-2 rounded-full"
          >
            <Filter className="w-4 h-4" />
            <span>Filters {selectedTags.length > 0 && `(${selectedTags.length})`}</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:mt-12">
          {/* Left Rail: Categories & Filters */}
          <aside className={`lg:w-72 flex-none ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-28 flex flex-col gap-8 max-h-[85vh] overflow-y-auto no-scrollbar pb-8 pr-2">
              
              {/* Category Filter */}
              <div>
                <h3 className="text-foreground font-semibold text-sm tracking-widest uppercase mb-4 px-2">
                  Categories
                </h3>
                <div className="flex flex-col gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setShowMobileFilters(false);
                      }}
                      className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeCategory === cat 
                          ? 'bg-white/10 text-foreground font-medium' 
                          : 'text-foreground/70 hover:bg-white/5 hover:text-foreground'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Advanced Filters */}
              <div className="bg-white/5 border border-border rounded-xl p-5">
                <FilterSection title="Pricing" items={PRICING_FILTERS} />
                <FilterSection title="Ecosystem" items={ECOSYSTEM_FILTERS} />
                <FilterSection title="Integration" items={INTEGRATION_FILTERS} />
                
                {selectedTags.length > 0 && (
                  <button 
                    onClick={() => setSelectedTagsState([])}
                    className="w-full mt-2 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                  >
                    Clear Filters
                  </button>
                )}
              </div>

            </div>
          </aside>

          {/* Right Rail: Tool Grid */}
          <main className="flex-1 min-w-0">
            {/* Header row: Title + Sort */}
            <div className="flex flex-col gap-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
              
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-white/40" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Semantic search (e.g. 'paid', 'database', 'react')..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors"
                />
              </div>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-text-secondary text-sm">
                Showing {filteredTools.length} {filteredTools.length === 1 ? "tool" : "tools"}
              </p>
              {hasActiveFilters && (
                <button 
                  onClick={clearAllFilters}
                  className="text-sm text-brand-accent hover:text-brand-accent-hover transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Tool Grid */}
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
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
