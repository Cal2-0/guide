import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, X, Sparkles } from "lucide-react";
import Fuse from "fuse.js";
import { tools, Tool } from "@/lib/toolsData";
import { ToolCard } from "./ToolCard";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

// Create Fuse instance once
const fuse = new Fuse(tools, {
  keys: ["name", "description", "category", "tags"],
  threshold: 0.3,
});

const QUICK_FILTERS = ["Free", "OSS", "Paid", "AI"] as const;

interface SearchDockProps {
  isPinned?: boolean;
  hideTrigger?: boolean;
}

export function SearchDock({ isPinned = false, hideTrigger = false }: SearchDockProps) {
  const [isOpen, setIsOpen] = useState(isPinned);
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [isVibeMode, setIsVibeMode] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    if (isPinned) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleOpenSearch = () => {
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-search", handleOpenSearch);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-search", handleOpenSearch);
    };
  }, [isOpen, isPinned]);

  useEffect(() => {
    if (isOpen && !isPinned) {
      inputRef.current?.focus();
      setQuery("");
      setActiveFilter(null);
      setSelectedIndex(-1);
    }
  }, [isOpen, isPinned]);

  // Compute results
  const results = (() => {
    let items: Tool[];
    if (query) {
      items = fuse.search(query).map((res) => res.item);
    } else if (activeFilter) {
      // Show filter results even without search text
      items = tools.filter(t => t.tags.includes(activeFilter));
    } else {
      items = [];
    }

    // Apply tag filter on top of search results
    if (activeFilter && query) {
      items = items.filter(t => t.tags.includes(activeFilter));
    }

    return items;
  })();

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(-1);
  }, [query, activeFilter]);

  // Keyboard navigation for results
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const maxIndex = Math.min(results.length, 8) - 1;
    
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => (prev < maxIndex ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : maxIndex));
    } else if (e.key === "Enter" && selectedIndex >= 0 && selectedIndex <= maxIndex) {
      e.preventDefault();
      const tool = results[selectedIndex];
      if (tool) {
        navigate(`/tool/${tool.id}`);
        setIsOpen(false);
      }
    }
  }, [results, selectedIndex, navigate]);

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex >= 0 && resultsRef.current) {
      const items = resultsRef.current.querySelectorAll("[data-result-item]");
      items[selectedIndex]?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  const hasQuery = query || activeFilter;
  const displayResults = results.slice(0, 8);

  if (isPinned) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-white/40 group-focus-within:text-[#e8702a] transition-colors">
            <Search className="w-6 h-6" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${tools.length}+ tools by name, tag, or intent...`}
            className="w-full h-16 pl-16 pr-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white text-lg placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl cursor-text hover:bg-white/[0.08]"
          />
        </div>
        
        {query && results.length > 0 && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
        {query && results.length === 0 && (
          <div className="mt-16 text-center text-text-secondary">
            No tools found matching "{query}". Try a different term or intent.
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && !hideTrigger && (
          <motion.button
            layoutId="search-dock"
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-40 h-12 px-5 bg-glass-bg backdrop-blur-xl border border-glass-border rounded-pill flex items-center gap-3 text-text-secondary hover:text-text-primary hover:bg-glass-strong hover:border-white/20 transition-colors shadow-2xl group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Search className="w-5 h-5 text-text-tertiary group-hover:text-brand-accent transition-colors" />
            <span className="font-medium tracking-wide">Search tools...</span>
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 text-[11px] font-mono text-text-tertiary ml-2 border border-white/5">
              <Command className="w-3 h-3" /> K
            </kbd>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm z-50"
            />
            
            <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
              <motion.div
                layoutId="search-dock"
                className="w-full max-w-3xl bg-surface border border-glass-border rounded-card shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[70vh]"
              >
                <div className="relative flex-none">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-white/40">
                    <Search className="w-6 h-6" />
                  </div>
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={isVibeMode ? "Describe what you're trying to build..." : `Search ${tools.length}+ tools...`}
                    className={cn(
                      "w-full h-16 pl-16 pr-14 backdrop-blur-md border-b text-foreground text-xl focus:outline-none transition-colors",
                      isVibeMode
                        ? "bg-purple-900/10 border-purple-500/30 placeholder:text-purple-300/50"
                        : "bg-white/5 border-border placeholder:text-foreground/40"
                    )}
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute inset-y-0 right-0 pr-5 flex items-center text-foreground/40 hover:text-foreground transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Quick filter pills */}
                <div className="flex-none flex items-center gap-2 px-5 py-3 border-b border-border bg-background/50">
                  <span className="text-foreground/60 text-[11px] font-medium uppercase tracking-wider mr-1">Filter:</span>
                  <button
                    onClick={() => setIsVibeMode(!isVibeMode)}
                    className={cn(
                      "px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide flex items-center gap-1.5 transition-all duration-200 border",
                      isVibeMode
                        ? "bg-purple-500/20 text-purple-300 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                        : "bg-white/5 text-foreground/60 border-border hover:bg-white/10"
                    )}
                  >
                    <Sparkles className="w-3 h-3" />
                    Vibe Search
                  </button>
                  <div className="w-px h-4 bg-border mx-1" />
                  {QUICK_FILTERS.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setActiveFilter(prev => prev === tag ? null : tag)}
                      className={cn(
                        "px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase transition-all duration-200 border",
                        activeFilter === tag
                          ? tag === "Free" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" :
                            tag === "OSS" ? "bg-blue-500/20 text-blue-300 border-blue-500/30" :
                            tag === "Paid" ? "bg-amber-500/20 text-amber-300 border-amber-500/30" :
                            "bg-purple-500/20 text-purple-300 border-purple-500/30"
                          : "bg-white/5 text-foreground/50 border-border hover:bg-white/10 hover:text-foreground/80"
                      )}
                    >
                      {tag}
                    </button>
                  ))}
                  {activeFilter && (
                    <button
                      onClick={() => setActiveFilter(null)}
                      className="text-foreground/50 text-[11px] hover:text-foreground transition-colors ml-1"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div ref={resultsRef} className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-background/50">
                  {!hasQuery && (
                    <div className="py-8 text-center text-foreground/50">
                      {isVibeMode 
                        ? "Example: 'I need a fast database for a weekend side project'" 
                        : "Start typing to search across all tools, categories, and tags."}
                    </div>
                  )}
                  {hasQuery && displayResults.length > 0 && (
                    <>
                      <div className="text-foreground/50 text-[11px] font-medium mb-3 px-1 flex items-center gap-2">
                        {isVibeMode && <Sparkles className="w-3.5 h-3.5 text-purple-400" />}
                        {isVibeMode 
                          ? "AI Recommendations" 
                          : `${results.length} result${results.length !== 1 ? "s" : ""}${results.length > 8 ? " (showing top 8)" : ""}`}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {displayResults.map((tool, idx) => (
                          <div 
                            key={tool.id} 
                            data-result-item
                            className={cn(
                              "rounded-2xl transition-all duration-200",
                              selectedIndex === idx && "ring-2 ring-[#e8702a]/60 ring-offset-1 ring-offset-transparent"
                            )}
                          >
                            <ToolCard tool={tool} />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {hasQuery && results.length === 0 && (
                    <div className="py-8 text-center text-text-tertiary">
                      No results found{query ? ` for "${query}"` : ""}{activeFilter ? ` with filter "${activeFilter}"` : ""}
                    </div>
                  )}
                </div>
                
                <div className="flex-none p-3 border-t border-glass-border bg-black/20 flex items-center justify-between text-[11px] text-text-tertiary font-medium">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 rounded bg-white/10">↑</kbd>
                      <kbd className="px-1.5 py-0.5 rounded bg-white/10">↓</kbd>
                      navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 rounded bg-white/10">Enter</kbd>
                      open
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10">esc</kbd>
                    close
                  </span>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
