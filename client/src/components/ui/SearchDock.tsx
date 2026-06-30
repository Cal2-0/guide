import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, X } from "lucide-react";
import Fuse from "fuse.js";
import { tools } from "@/lib/toolsData";
import { ToolCard } from "./ToolCard";
import { cn } from "@/lib/utils";

// Create Fuse instance once
const fuse = new Fuse(tools, {
  keys: ["name", "description", "category", "tags"],
  threshold: 0.3,
});

interface SearchDockProps {
  isPinned?: boolean;
  hideTrigger?: boolean;
}

export function SearchDock({ isPinned = false, hideTrigger = false }: SearchDockProps) {
  const [isOpen, setIsOpen] = useState(isPinned);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

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
    }
  }, [isOpen, isPinned]);

  const results = query ? fuse.search(query).map((res) => res.item) : [];

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
            placeholder="Search 400+ tools by name, tag, or intent..."
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
                    placeholder="Search 400+ tools..."
                    className="w-full h-16 pl-16 pr-14 bg-white/5 backdrop-blur-md border-b border-white/10 text-white text-xl placeholder:text-white/40 focus:outline-none"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute inset-y-0 right-0 pr-5 flex items-center text-white/40 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                  {!query && (
                    <div className="py-8 text-center text-text-tertiary">
                      Start typing to search across all tools, categories, and tags.
                    </div>
                  )}
                  {query && results.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {results.slice(0, 8).map(tool => (
                        <ToolCard key={tool.id} tool={tool} />
                      ))}
                    </div>
                  )}
                  {query && results.length === 0 && (
                    <div className="py-8 text-center text-text-tertiary">
                      No results found for "{query}"
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
