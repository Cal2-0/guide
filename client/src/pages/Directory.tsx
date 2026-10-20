import { useState, useMemo, useEffect, useRef } from "react";
import { SearchDock } from "@/components/ui/SearchDock";
import { ToolCard } from "@/components/ui/ToolCard";
import { tools } from "@/lib/toolsData";
import { 
  Search, 
  SlidersHorizontal, 
  ArrowUp, 
  X, 
  Sparkles, 
  RotateCcw,
  Check,
  Flame,
  Clock
} from "lucide-react";
import Fuse from "fuse.js";
import { useSearch, useLocation } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";

// Filter definition groups
const PRICING_OPTIONS = ["Free", "Free tier", "OSS", "Paid"] as const;
const ECOSYSTEM_OPTIONS = ["React", "Node", "Python", "Rust", "Go", "TypeScript"] as const;
const FEATURE_OPTIONS = ["AI", "Cloud", "Self-hosted", "CLI", "API"] as const;

export function Directory() {
  usePageTitle(`Directory — ${tools.length}+ Builder Tools`);
  const [, setLocation] = useLocation();
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
  const [activeFilterDropdown, setActiveFilterDropdown] = useState<string | null>(null);

  // Progressive rendering for mobile performance & smooth scrolling with 1,100+ tools
  const INITIAL_DISPLAY_COUNT = 36;
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Reset display count when active filters or search query change
  useEffect(() => {
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  }, [activeCategory, selectedTags, sortBy, searchQuery]);

  // Centralized URL sync helper
  const updateUrl = (category: string, tags: string[], sort: string, q: string) => {
    const newParams = new URLSearchParams();
    if (category !== "All") newParams.set("category", category);
    if (tags.length > 0) newParams.set("tags", tags.join(","));
    if (sort !== "liked") newParams.set("sort", sort);
    if (q) newParams.set("q", q);
    const query = newParams.toString();
    const newUrl = `/directory${query ? `?${query}` : ""}`;
    window.history.pushState({}, "", newUrl);
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

  const removeTag = (tag: string) => {
    const next = selectedTags.filter(t => t !== tag);
    setSelectedTagsState(next);
    updateUrl(activeCategory, next, sortBy, searchQuery);
  };

  const setSortBy = (sort: "liked" | "newest") => {
    setSortByState(sort);
    updateUrl(activeCategory, selectedTags, sort, searchQuery);
  };

  const handleSearchChange = (q: string) => {
    setSearchQueryState(q);
    updateUrl(activeCategory, selectedTags, sortBy, q);
  };

  // Sync state if user navigates back/forward or if route query string changes
  useEffect(() => {
    const currentParams = new URLSearchParams(searchString || window.location.search);
    setActiveCategoryState(currentParams.get("category") || "All");
    setSelectedTagsState(currentParams.get("tags")?.split(",").filter(Boolean) || []);
    setSortByState((currentParams.get("sort") as "liked" | "newest") || "liked");
    setSearchQueryState(currentParams.get("q") || "");
  }, [searchString]);

  useEffect(() => {
    const handlePopState = () => {
      const currentParams = new URLSearchParams(window.location.search);
      setActiveCategoryState(currentParams.get("category") || "All");
      setSelectedTagsState(currentParams.get("tags")?.split(",").filter(Boolean) || []);
      setSortByState((currentParams.get("sort") as "liked" | "newest") || "liked");
      setSearchQueryState(currentParams.get("q") || "");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeCategory]);

  // Unique categories list with count
  const categoriesWithCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    tools.forEach(t => {
      counts[t.category] = (counts[t.category] || 0) + 1;
    });
    const sortedCats = Object.keys(counts).sort();
    return [
      { name: "All", count: tools.length },
      ...sortedCats.map(cat => ({ name: cat, count: counts[cat] }))
    ];
  }, []);

  // Fuse search index
  const fuse = useMemo(() => new Fuse(tools, {
    keys: [
      { name: "name", weight: 3 },
      { name: "category", weight: 1.5 },
      { name: "tags", weight: 1.5 },
      { name: "description", weight: 0.8 }
    ],
    threshold: 0.28,
  }), []);

  // Filtered and sorted tools
  const filteredTools = useMemo(() => {
    let result = searchQuery 
      ? fuse.search(searchQuery).map(r => r.item)
      : tools;
      
    if (activeCategory !== "All") {
      result = result.filter(t => t.category === activeCategory);
    }
    
    if (selectedTags.length > 0) {
      result = result.filter(tool =>
        selectedTags.every(tag => {
          // Special tag matches
          if (tag === "AI") {
            return tool.tags.some(t => t.toLowerCase().includes("ai") || t.toLowerCase().includes("llm")) ||
                   tool.name.toLowerCase().includes("ai") ||
                   tool.category.toLowerCase().includes("ai");
          }
          if (tag === "OSS") {
            return tool.tags.some(t => t.toLowerCase() === "oss" || t.toLowerCase() === "open-source");
          }
          if (tag === "Free") {
            return tool.tags.includes("Free");
          }
          if (tag === "Free tier") {
            return tool.tags.includes("Free tier");
          }
          if (tag === "Paid") {
            return tool.tags.includes("Paid");
          }
          // Default tag or text match
          return tool.tags.includes(tag) || 
                 tool.name.toLowerCase().includes(tag.toLowerCase()) || 
                 tool.description.toLowerCase().includes(tag.toLowerCase());
        })
      );
    }

    if (sortBy === "liked") {
      result = [...result].sort((a, b) => (b.likes || 0) - (a.likes || 0));
    } else if (sortBy === "newest") {
      result = [...result].sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
    }
    
    return result;
  }, [activeCategory, selectedTags, sortBy, searchQuery, fuse]);

  // Sliced tools for high-performance rendering
  const visibleTools = useMemo(() => {
    return filteredTools.slice(0, displayCount);
  }, [filteredTools, displayCount]);

  const clearAllFilters = () => {
    setActiveCategoryState("All");
    setSelectedTagsState([]);
    setSortByState("liked");
    setSearchQueryState("");
    updateUrl("All", [], "liked", "");
  };

  const hasActiveFilters = activeCategory !== "All" || selectedTags.length > 0 || searchQuery !== "";

  return (
    <div className="min-h-screen bg-transparent pt-28 pb-32">
      <div className="container max-w-[1440px] px-4 sm:px-6">
        
        {/* Page Title & Search Bar Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#e8702a] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                The Universal Directory
              </div>
              <h1 className="text-white text-3xl sm:text-5xl font-playfair italic tracking-tight">
                All Tools. <span className="font-sans not-italic font-light text-white/75">Faceted & Verified.</span>
              </h1>
            </div>

            {/* Sort Controls */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <span className="text-xs text-white/80 font-medium">Sort by:</span>
              <div className="inline-flex p-1 rounded-full bg-white/[0.08] border border-white/15">
                <button
                  onClick={() => setSortBy("liked")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    sortBy === "liked"
                      ? "bg-white/20 text-white shadow-sm font-semibold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <Flame className="w-3 h-3 text-[#e8702a]" />
                  Most Liked
                </button>
                <button
                  onClick={() => setSortBy("newest")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    sortBy === "newest"
                      ? "bg-white/20 text-white shadow-sm font-semibold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  Newest
                </button>
              </div>
            </div>
          </div>

            {/* Search Input Bar */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none text-white/70">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder={`Search ${tools.length}+ tools... (e.g. Supabase, AI, auth)`}
                className="w-full h-12 sm:h-14 pl-11 sm:pl-14 pr-10 sm:pr-12 bg-white/[0.08] backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl text-white text-sm sm:text-base placeholder:text-white/60 focus:outline-none focus:border-[#e8702a]/70 focus:bg-white/[0.12] transition-all shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange("")}
                  className="absolute inset-y-0 right-0 pr-3.5 sm:pr-4 flex items-center text-white/70 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Pill Bar - Sleek Horizontal Swipe on Mobile (<md), Clean Wrap on Desktop (>=md) */}
          <div className="relative mb-3 sm:mb-6">
            <div className="flex items-center gap-1.5 sm:gap-2 py-1 overflow-x-auto no-scrollbar scrollbar-none flex-nowrap md:flex-wrap -mx-4 px-4 sm:mx-0 sm:px-0 snap-x">
              {categoriesWithCounts.map((cat) => {
                const isSelected = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`shrink-0 snap-start flex items-center gap-1.5 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-medium transition-all duration-200 border whitespace-nowrap ${
                      isSelected
                        ? "bg-[#e8702a] text-white border-[#e8702a] shadow-[0_0_15px_rgba(232,112,42,0.4)] font-semibold"
                        : "bg-white/[0.08] border-white/15 text-white/95 hover:bg-white/15 hover:text-white hover:border-white/30"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                      isSelected ? "bg-white/25 text-white font-bold" : "bg-white/15 text-white/80"
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Faceted Filter Bar: Horizontal swipeable on Mobile (<md), clean flex on Desktop */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none flex-nowrap md:flex-wrap pb-3 sm:pb-5 border-b border-white/15 mb-4 sm:mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="shrink-0 flex items-center gap-1.5 text-xs text-white/85 font-semibold mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-white/75" />
              <span>Filters:</span>
            </div>

            {/* Pricing Chips */}
            <div className="shrink-0 flex items-center gap-1 sm:gap-1.5">
              {PRICING_OPTIONS.map((price) => (
                <button
                  key={price}
                  onClick={() => toggleTag(price)}
                  className={`text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border transition-all whitespace-nowrap ${
                    selectedTags.includes(price)
                      ? "bg-white/25 text-white border-white/40 font-semibold shadow-sm"
                      : "bg-white/[0.08] border-white/15 text-white/90 hover:text-white hover:bg-white/15 hover:border-white/30 font-medium"
                  }`}
                >
                  {price}
                </button>
              ))}
            </div>

            <div className="w-[1px] h-3.5 bg-white/20 shrink-0 mx-0.5 sm:mx-1" />

            {/* Ecosystem Chips */}
            <div className="shrink-0 flex items-center gap-1 sm:gap-1.5">
              {ECOSYSTEM_OPTIONS.map((eco) => (
                <button
                  key={eco}
                  onClick={() => toggleTag(eco)}
                  className={`text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border transition-all whitespace-nowrap ${
                    selectedTags.includes(eco)
                      ? "bg-white/25 text-white border-white/40 font-semibold shadow-sm"
                      : "bg-white/[0.08] border-white/15 text-white/90 hover:text-white hover:bg-white/15 hover:border-white/30 font-medium"
                  }`}
                >
                  {eco}
                </button>
              ))}
            </div>

            <div className="w-[1px] h-3.5 bg-white/20 shrink-0 mx-0.5 sm:mx-1" />

            {/* Feature Chips */}
            <div className="shrink-0 flex items-center gap-1 sm:gap-1.5">
              {FEATURE_OPTIONS.map((feat) => (
                <button
                  key={feat}
                  onClick={() => toggleTag(feat)}
                  className={`text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border transition-all whitespace-nowrap ${
                    selectedTags.includes(feat)
                      ? "bg-white/25 text-white border-white/40 font-semibold shadow-sm"
                      : "bg-white/[0.08] border-white/15 text-white/90 hover:text-white hover:bg-white/15 hover:border-white/30 font-medium"
                  }`}
                >
                  {feat}
                </button>
              ))}
            </div>
          </div>

        {/* Active Filters Ribbon & Results Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-white/75 font-medium">
              Showing <span className="text-white font-semibold">{filteredTools.length}</span> of <span className="text-white font-semibold">{tools.length}</span> tools
            </span>

            {hasActiveFilters && (
              <>
                <span className="text-foreground/30">•</span>
                {activeCategory !== "All" && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[#e8702a]/15 text-[#e8702a] border border-[#e8702a]/30 font-medium">
                    Category: {activeCategory}
                    <button 
                      onClick={() => setActiveCategory("All")}
                      className="hover:text-white"
                      aria-label="Remove category filter"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedTags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-white/10 text-white border border-white/15 font-medium"
                  >
                    {tag}
                    <button 
                      onClick={() => removeTag(tag)}
                      className="hover:text-red-400"
                      aria-label={`Remove ${tag} filter`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-white/10 text-white border border-white/15 font-medium">
                    Search: "{searchQuery}"
                    <button 
                      onClick={() => handleSearchChange("")}
                      className="hover:text-red-400"
                      aria-label="Clear search filter"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-[#e8702a] hover:underline flex items-center gap-1 ml-2 font-medium"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset all
                </button>
              </>
            )}
          </div>
        </div>

        {/* 3-Column Responsive ToolCard Grid */}
        {filteredTools.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 animate-[heroFadeUp_0.4s_ease-out]">
              {visibleTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>

            {/* Progressive Loading Controls for 1,100+ Tools */}
            {filteredTools.length > displayCount && (
              <div className="flex flex-col items-center justify-center mt-12 sm:mt-16 gap-3 pb-8">
                <button
                  onClick={() => setDisplayCount((prev) => Math.min(prev + 36, filteredTools.length))}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/15 border border-white/20 text-white font-medium text-sm transition-all duration-300 shadow-xl hover:border-[#e8702a]/60 hover:shadow-[0_0_25px_rgba(232,112,42,0.25)] active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-[#e8702a]" />
                  <span>Load More Tools</span>
                  <span className="text-xs text-white/60 font-mono">({visibleTools.length} of {filteredTools.length})</span>
                </button>
                <button
                  onClick={() => setDisplayCount(filteredTools.length)}
                  className="text-xs text-white/50 hover:text-white transition-colors underline underline-offset-4"
                >
                  Show all {filteredTools.length} tools
                </button>
              </div>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-28 text-center border border-dashed border-white/10 rounded-3xl bg-surface/50 p-8">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground/40 mb-5">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">No tools match your criteria</h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">
              Try broadening your category selection or clearing some of the active filter tags.
            </p>
            <button
              onClick={clearAllFilters}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(232,112,42,0.3)]"
            >
              <RotateCcw className="w-4 h-4" />
              Reset All Filters
            </button>
          </div>
        )}

      </div>

      {/* Back to top floating pill */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-surface/90 border border-white/20 text-white shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <SearchDock hideTrigger={true} />
    </div>
  );
}

export default Directory;
