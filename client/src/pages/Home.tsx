import { useMemo, useState, useCallback, useEffect } from "react";
import { Search, Copy, Check, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { tools, stacks, clones, Tool, Stack, Clone } from "@/lib/toolsData";
import Fuse from "fuse.js";

const JOURNEY_PHASES = [
  { id: "idea", label: "Idea", icon: "💡" },
  { id: "design", label: "Design", icon: "🎨" },
  { id: "code", label: "Code", icon: "⚡" },
  { id: "frontend", label: "Frontend", icon: "📱" },
  { id: "backend", label: "Backend", icon: "⚙️" },
  { id: "database", label: "Database", icon: "🗄️" },
  { id: "ai", label: "AI Models", icon: "🤖" },
  { id: "agents", label: "Agents", icon: "🧠" },
  { id: "deploy", label: "Deploy", icon: "🚀" },
];

import { categories } from "@/lib/toolsDataArticle";

// Generate category names list dynamically to stay in sync with taxonomy
const CATEGORIES = ["All", ...categories.map((cat) => cat.name)];

const FILTERS = ["All", "Free", "OSS", "Free tier", "Paid", "AI"];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"tools" | "stacks" | "clones">("tools");

  // Initialize Fuse search
  const fuse = useMemo(() => {
    return new Fuse(tools, {
      keys: ["name", "description", "category", "tags"],
      threshold: 0.3,
    });
  }, []);

  // Filter and search tools
  const filteredTools = useMemo(() => {
    let results = tools;

    // Category filter
    if (selectedCategory !== "All") {
      results = results.filter((tool) => tool.category === selectedCategory);
    }

    // Tag filters
    if (selectedFilters.length > 0) {
      results = results.filter((tool) =>
        selectedFilters.some((filter) => {
          if (filter === "AI") return tool.tags.includes("AI");
          return tool.tags.includes(filter);
        })
      );
    }

    // Search
    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery);
      const searchIds = new Set(searchResults.map((r: any) => r.item.id));
      results = results.filter((tool) => searchIds.has(tool.id));
    }

    return results;
  }, [searchQuery, selectedCategory, selectedFilters, fuse]);

  // Get category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach((cat) => {
      if (cat === "All") {
        counts[cat] = tools.length;
      } else {
        counts[cat] = tools.filter((t) => t.category === cat).length;
      }
    });
    return counts;
  }, []);

  const handleCopyStack = (stackTools: string[]) => {
    const toolNames = stackTools
      .map((toolId) => tools.find((t) => t.id === toolId)?.name)
      .filter(Boolean)
      .join(", ");

    navigator.clipboard.writeText(toolNames);
    setCopiedId("stack-" + stackTools.join("-"));
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyClone = (clone: Clone) => {
    const text = `${clone.paid} → ${clone.free}`;
    navigator.clipboard.writeText(text);
    setCopiedId(clone.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("search-input")?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen text-white bg-transparent">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="container py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-[#e8702a]">
                DevTools
              </div>
              <span className="text-xs text-white/50">400+ Tools</span>
            </div>
          </div>

          {/* Journey Navigation */}
          <div className="overflow-x-auto pb-3 mb-4">
            <div className="flex gap-1 min-w-min">
              {JOURNEY_PHASES.map((phase, idx) => (
                <div key={phase.id} className="flex items-center gap-1 whitespace-nowrap">
                  <button className="text-xs text-white/60 hover:text-white transition px-2 py-1">
                    {phase.icon} {phase.label}
                  </button>
                  {idx < JOURNEY_PHASES.length - 1 && (
                    <span className="text-white/40">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              id="search-input"
              type="text"
              placeholder="Search 200+ tools, models, repos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-12 h-12 rounded-xl bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-[#e8702a]/50 focus:bg-white/10 transition-all shadow-lg backdrop-blur-md"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40 bg-white/10 px-2 py-0.5 rounded border border-white/10">
              Cmd+K
            </span>
          </div>

          {/* Category Pills */}
          <div className="overflow-x-auto pb-3 mb-4">
            <div className="flex gap-2 min-w-min">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#e8702a] text-white border-transparent shadow-[0_0_15px_rgba(232,112,42,0.4)]"
                      : "bg-white/5 text-white/60 border-white/10 hover:border-white/20 hover:text-white backdrop-blur-md"
                  }`}
                >
                  {cat} {categoryCounts[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 items-center overflow-x-auto pb-2">
            <span className="text-sm text-zinc-500 whitespace-nowrap">Filter:</span>
            <div className="flex gap-2 min-w-min">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    if (filter === "All") {
                      setSelectedFilters([]);
                    } else {
                      setSelectedFilters((prev) =>
                        prev.includes(filter)
                          ? prev.filter((f) => f !== filter)
                          : [...prev, filter]
                      );
                    }
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition whitespace-nowrap ${
                    filter === "All"
                      ? selectedFilters.length === 0
                        ? "bg-white/10 text-white border border-white/20"
                        : "bg-transparent text-white/40 border border-white/10"
                      : selectedFilters.includes(filter)
                      ? "bg-[#e8702a] text-white border-transparent"
                      : "bg-transparent text-white/60 border border-white/10 hover:border-white/20"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="sticky top-[200px] z-30 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="container flex gap-4">
          {(["tools", "stacks", "clones"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium transition border-b-2 ${
                activeTab === tab
                  ? "border-[#e8702a] text-white"
                  : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              {tab === "tools" && "Tools"}
              {tab === "stacks" && "Starter Stacks"}
              {tab === "clones" && "OSS Clones"}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="container py-8">
        {activeTab === "tools" && (
          <>
            <div className="mb-4 text-sm text-zinc-400">
              Showing {filteredTools.length} of {tools.length} tools
            </div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filteredTools.map((tool, idx) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.02, duration: 0.3 }}
                >
                  <ToolCard tool={tool} />
                </motion.div>
              ))}
            </motion.div>
            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <p className="text-zinc-400">No tools found. Try adjusting your search or filters.</p>
              </div>
            )}
          </>
        )}

        {activeTab === "stacks" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stacks.map((stack) => (
              <StackCard
                key={stack.id}
                stack={stack}
                isCopied={copiedId === "stack-" + stack.tools.join("-")}
                onCopy={() => handleCopyStack(stack.tools)}
              />
            ))}
          </div>
        )}

        {activeTab === "clones" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-white/80">
                    Paid SaaS
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-white/80">
                    OSS Alternative
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-white/80">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {clones.map((clone) => (
                  <tr
                    key={clone.id}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="py-3 px-4">
                      <a
                        href={clone.paidUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e8702a] hover:text-[#d2611f] flex items-center gap-2"
                      >
                        {clone.paid}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                    <td className="py-3 px-4">
                      <a
                        href={clone.freeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 flex items-center gap-2"
                      >
                        {clone.free}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => handleCopyClone(clone)}
                        className="text-white/40 hover:text-white transition"
                      >
                        {copiedId === clone.id ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="bg-white/5 border-white/10 hover:border-[#e8702a]/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(232,112,42,0.15)] transition-all duration-300 group cursor-pointer backdrop-blur-md min-h-[220px] flex flex-col">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 sm:p-8 h-full flex-grow flex flex-col"
        >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-white text-xl group-hover:text-[#e8702a] transition-colors">
              {tool.name}
            </h3>
            <p className="text-sm text-white/50 mt-1">{tool.category}</p>
          </div>
        </div>
        <p className="text-[15px] leading-relaxed text-white/70 mb-6 flex-grow line-clamp-3">{tool.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tool.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className={`text-xs ${
                tag === "Free"
                  ? "bg-green-500/10 text-green-400 border-green-500/30"
                  : tag === "OSS"
                  ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                  : tag === "Paid"
                  ? "bg-orange-500/10 text-orange-400 border-orange-500/30"
                  : tag === "Free tier"
                  ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                  : "bg-zinc-800 text-zinc-300 border-zinc-700"
              }`}
            >
              {tag}
            </Badge>
          ))}
        </div>
        </a>
      </Card>
    </motion.div>
    );
  }

function StackCard({
  stack,
  isCopied,
  onCopy,
}: {
  stack: Stack;
  isCopied: boolean;
  onCopy: () => void;
}) {
  const stackTools = stack.tools
    .map((toolId) => tools.find((t) => t.id === toolId))
    .filter(Boolean) as Tool[];

  return (
    <Card className="bg-white/5 border border-white/10 p-4 backdrop-blur-md">
      <h3 className="font-semibold text-white mb-2">{stack.name}</h3>
      <p className="text-sm text-white/60 mb-4">{stack.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {stackTools.map((tool) => (
          <Badge key={tool.id} variant="secondary" className="text-xs bg-white/10 text-white border-white/5 hover:bg-white/20">
            {tool.name}
          </Badge>
        ))}
      </div>
      <Button
        onClick={onCopy}
        variant="outline"
        size="sm"
        className="w-full border-white/10 bg-transparent text-white hover:bg-white/10 hover:text-white"
      >
        {isCopied ? (
          <>
            <Check className="w-4 h-4 mr-2" /> Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 mr-2" /> Copy Stack
          </>
        )}
      </Button>
    </Card>
  );
}
