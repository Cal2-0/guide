import { useState, useEffect, useMemo } from "react";
import { Link } from "wouter";
import { SearchDock } from "@/components/ui/SearchDock";
import { ToolCard } from "@/components/ui/ToolCard";
import { tools, Tool } from "@/lib/toolsData";
import { 
  Heart, 
  LayoutGrid, 
  CheckCircle2, 
  AlertTriangle, 
  Download, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowRight,
  ArrowDown,
  Trash2,
  Globe,
  ShieldCheck,
  Key,
  Cpu,
  Database,
  CreditCard,
  Activity,
  ExternalLink,
  X,
  Network,
  Layers
} from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { toast } from "sonner";

// ─────────────────────────────────────────────
// Architectural Tier Definition
// ─────────────────────────────────────────────
interface ArchitectureTier {
  id: string;
  tierNumber: number;
  name: string;
  shortLabel: string;
  shortRole: string;
  description: string;
  icon: typeof Globe;
  accentColor: string;
  badgeBg: string;
  badgeBorder: string;
  recommendedSearch: string;
  sampleTools: string;
  matcher: (tool: Tool) => boolean;
}

const ARCHITECTURE_TIERS: ArchitectureTier[] = [
  {
    id: "presentation",
    tierNumber: 1,
    name: "Client & Presentation",
    shortLabel: "Frontend & UI",
    shortRole: "Web Apps, Mobile UI, Landing Pages",
    description: "User-facing interfaces, reactive state management, meta-frameworks, and styled components.",
    icon: Globe,
    accentColor: "#38bdf8", // Sky blue
    badgeBg: "rgba(56, 189, 248, 0.12)",
    badgeBorder: "rgba(56, 189, 248, 0.3)",
    recommendedSearch: "Frontend Development",
    sampleTools: "Next.js, React, Expo, Tailwind CSS, Framer Motion",
    matcher: (t) => {
      const sub = (t.subcategory || "").toLowerCase();
      const cat = (t.category || "").toLowerCase();
      const id = t.id.toLowerCase();
      return cat.includes("frontend") || 
             cat.includes("ui & ux") || 
             sub.includes("frameworks & meta") || 
             sub.includes("landing") || 
             sub.includes("component") || 
             sub.includes("mobile") ||
             ["nextjs", "next-js", "react", "expo", "expo-router", "nativewind", "vue", "svelte", "tailwind", "framer-motion", "magic-ui", "21st-dev", "mobbin"].includes(id);
    }
  },
  {
    id: "edge",
    tierNumber: 2,
    name: "Edge Network & Security",
    shortLabel: "Edge & Security",
    shortRole: "Global CDN, DNS, WAF & DDoS Shield",
    description: "Edge computation, intelligent caching, SSL termination, and security threat mitigation.",
    icon: ShieldCheck,
    accentColor: "#a855f7", // Purple
    badgeBg: "rgba(168, 85, 247, 0.12)",
    badgeBorder: "rgba(168, 85, 247, 0.3)",
    recommendedSearch: "DevOps & Cloud",
    sampleTools: "Cloudflare, Upstash, Vercel Edge, Fastly",
    matcher: (t) => {
      const sub = (t.subcategory || "").toLowerCase();
      const cat = (t.category || "").toLowerCase();
      const id = t.id.toLowerCase();
      const tags = t.tags.map(x => x.toLowerCase());
      return sub.includes("cdn & edge") || 
             cat.includes("security") || 
             sub.includes("security") ||
             sub.includes("osint") ||
             id.includes("cloudflare") || 
             id.includes("upstash") ||
             tags.includes("edge") || 
             tags.includes("cdn") ||
             tags.includes("security");
    }
  },
  {
    id: "identity",
    tierNumber: 3,
    name: "Authentication & Identity",
    shortLabel: "Auth & Identity",
    shortRole: "User Management, Session Tokens & OAuth",
    description: "Multi-factor authentication, single sign-on, session cookies, and role-based access control.",
    icon: Key,
    accentColor: "#ec4899", // Pink
    badgeBg: "rgba(236, 72, 153, 0.12)",
    badgeBorder: "rgba(236, 72, 153, 0.3)",
    recommendedSearch: "Backend Development",
    sampleTools: "Clerk, Supabase Auth, Auth0, Kinde, Lucia",
    matcher: (t) => {
      const sub = (t.subcategory || "").toLowerCase();
      const name = t.name.toLowerCase();
      const id = t.id.toLowerCase();
      const tags = t.tags.map(x => x.toLowerCase());
      return sub.includes("authentication") || 
             name.includes("clerk") || 
             id.includes("clerk") || 
             name.includes("auth0") || 
             name.includes("kinde") || 
             name.includes("lucia") ||
             tags.includes("auth") || 
             tags.includes("identity");
    }
  },
  {
    id: "engine",
    tierNumber: 4,
    name: "Core Engine & APIs",
    shortLabel: "Backend & APIs",
    shortRole: "Serverless Compute, APIs & Mail Dispatch",
    description: "Core backend business logic, REST/GraphQL endpoints, microservices, and transactional emails.",
    icon: Cpu,
    accentColor: "#e8702a", // Brand warm orange
    badgeBg: "rgba(232, 112, 42, 0.12)",
    badgeBorder: "rgba(232, 112, 42, 0.3)",
    recommendedSearch: "Backend Development",
    sampleTools: "FastAPI, Hono, Supabase BaaS, Resend, Node.js",
    matcher: (t) => {
      const sub = (t.subcategory || "").toLowerCase();
      const cat = (t.category || "").toLowerCase();
      const id = t.id.toLowerCase();
      return (cat.includes("backend") && !sub.includes("databases") && !sub.includes("authentication") && !sub.includes("payments")) ||
             sub.includes("baas") ||
             sub.includes("email") ||
             sub.includes("api") ||
             sub.includes("runtimes") ||
             ["fastapi", "hono", "express", "resend", "postmark", "sendgrid", "pydantic-ai", "llamaindex", "dify"].includes(id);
    }
  },
  {
    id: "data",
    tierNumber: 5,
    name: "Database & Storage",
    shortLabel: "Database & Storage",
    shortRole: "SQL, Serverless Postgres, Vectors & Files",
    description: "Primary transactional data store, vector embeddings for AI, Redis cache, and S3 file buckets.",
    icon: Database,
    accentColor: "#10b981", // Emerald green
    badgeBg: "rgba(16, 185, 129, 0.12)",
    badgeBorder: "rgba(16, 185, 129, 0.3)",
    recommendedSearch: "Backend Development",
    sampleTools: "Supabase Postgres, Neon, Prisma, Redis, pgvector",
    matcher: (t) => {
      const sub = (t.subcategory || "").toLowerCase();
      const name = t.name.toLowerCase();
      const id = t.id.toLowerCase();
      const tags = t.tags.map(x => x.toLowerCase());
      return sub.includes("databases") || 
             sub.includes("storage") || 
             sub.includes("vector") || 
             sub.includes("orm") ||
             id.includes("supabase") || 
             name.includes("supabase") || 
             name.includes("postgres") || 
             name.includes("prisma") || 
             name.includes("drizzle") || 
             name.includes("redis") || 
             name.includes("neon") ||
             name.includes("pgvector") ||
             tags.includes("database") ||
             tags.includes("sql") ||
             tags.includes("vector");
    }
  },
  {
    id: "payments",
    tierNumber: 6,
    name: "Payments & Monetization",
    shortLabel: "Payments & Billing",
    shortRole: "Subscriptions, Checkout & Billing Portals",
    description: "Merchant of record, recurring payments, pricing plans, usage-based metering, and customer invoicing.",
    icon: CreditCard,
    accentColor: "#f59e0b", // Gold/Amber
    badgeBg: "rgba(245, 158, 11, 0.12)",
    badgeBorder: "rgba(245, 158, 11, 0.3)",
    recommendedSearch: "Backend Development",
    sampleTools: "Stripe, LemonSqueezy, Paddle, RevenueCat",
    matcher: (t) => {
      const sub = (t.subcategory || "").toLowerCase();
      const name = t.name.toLowerCase();
      const id = t.id.toLowerCase();
      const tags = t.tags.map(x => x.toLowerCase());
      return sub.includes("payments") || 
             sub.includes("pricing & monetization") ||
             id.includes("stripe") || 
             name.includes("stripe") || 
             name.includes("lemon") || 
             name.includes("paddle") || 
             name.includes("revenuecat") ||
             tags.includes("payments") || 
             tags.includes("billing");
    }
  },
  {
    id: "devops",
    tierNumber: 7,
    name: "Hosting, DevOps & Observability",
    shortLabel: "Hosting & Analytics",
    shortRole: "Deployment CI/CD, Analytics & Telemetry",
    description: "Container infrastructure, automated deployment pipelines, product analytics, and error tracking.",
    icon: Activity,
    accentColor: "#06b6d4", // Cyan
    badgeBg: "rgba(6, 182, 212, 0.12)",
    badgeBorder: "rgba(6, 182, 212, 0.3)",
    recommendedSearch: "DevOps & Cloud",
    sampleTools: "Railway, Vercel, PostHog, Sentry, BetterStack",
    matcher: (t) => {
      const sub = (t.subcategory || "").toLowerCase();
      const cat = (t.category || "").toLowerCase();
      const name = t.name.toLowerCase();
      const id = t.id.toLowerCase();
      const tags = t.tags.map(x => x.toLowerCase());
      return sub.includes("hosting & deployment") || 
             sub.includes("monitoring & observability") || 
             sub.includes("analytics") || 
             sub.includes("ci/cd") ||
             id.includes("railway") || 
             name.includes("railway") || 
             name.includes("vercel") || 
             id.includes("posthog") || 
             name.includes("posthog") || 
             name.includes("sentry") ||
             tags.includes("hosting") || 
             tags.includes("analytics") ||
             tags.includes("devops");
    }
  }
];

export function MyStack() {
  usePageTitle("My Stack — Architecture Manifest & Topology");
  const [savedTools, setSavedTools] = useState<typeof tools>([]);
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<"cards" | "topology">("cards");

  const loadTools = () => {
    try {
      const savedIds = JSON.parse(localStorage.getItem("my_stack_saves") || "[]");
      const likedIds = JSON.parse(localStorage.getItem("my_stack_likes") || "[]");
      const combinedIds = Array.from(new Set([...savedIds, ...likedIds]));
      const matchedTools = tools.filter(t => combinedIds.includes(t.id));
      setSavedTools(matchedTools);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadTools();
    window.addEventListener("stack-change", loadTools);
    window.addEventListener("storage", loadTools);
    return () => {
      window.removeEventListener("stack-change", loadTools);
      window.removeEventListener("storage", loadTools);
    };
  }, []);

  // Compute coverage by tier
  const tierAnalysis = useMemo(() => {
    return ARCHITECTURE_TIERS.map((tier) => {
      const matching = savedTools.filter(tier.matcher);
      return {
        ...tier,
        isCovered: matching.length > 0,
        tools: matching,
      };
    });
  }, [savedTools]);

  const coveredTiersCount = tierAnalysis.filter(t => t.isCovered).length;
  const readinessPercent = Math.round((coveredTiersCount / ARCHITECTURE_TIERS.length) * 100);

  // Remove individual tool from stack
  const handleRemoveTool = (toolId: string, toolName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const savedIds: string[] = JSON.parse(localStorage.getItem("my_stack_saves") || "[]");
      const likedIds: string[] = JSON.parse(localStorage.getItem("my_stack_likes") || "[]");
      
      const newSaves = savedIds.filter(id => id !== toolId);
      const newLikes = likedIds.filter(id => id !== toolId);
      
      localStorage.setItem("my_stack_saves", JSON.stringify(newSaves));
      localStorage.setItem("my_stack_likes", JSON.stringify(newLikes));
      
      loadTools();
      window.dispatchEvent(new Event("stack-change"));
      toast.info(`Removed ${toolName} from stack`);
    } catch (e) {
      console.error(e);
    }
  };

  // Export as Markdown
  const handleExportMarkdown = () => {
    if (savedTools.length === 0) return;
    const lines = [
      `# 🛠️ My Stack Architecture Manifest (${savedTools.length} tools)`,
      `*Curated on Lyra — ${new Date().toLocaleDateString()}*`,
      "",
      `### 📊 Architectural Readiness: ${coveredTiersCount}/${ARCHITECTURE_TIERS.length} Tiers Connected (${readinessPercent}%)`,
      "",
      "## 🏗️ Stack Breakdown (What I Have)",
      "",
      ...tierAnalysis.map(tier => {
        const toolList = tier.isCovered 
          ? tier.tools.map(t => `**[${t.name}](${t.url})**`).join(", ")
          : "_None connected yet (Recommended: " + tier.sampleTools + ")_";
        return `- **${tier.shortLabel}**: ${toolList}`;
      }),
      "",
      "## 📦 Complete Component Inventory",
      ...savedTools.map(
        t => `- **[${t.name}](${t.url})** (${t.category} > ${t.subcategory || "Tool"}) — ${t.description}`
      ),
      "",
      "---",
      "Exported from [Lyra](https://lyra.dev) — The Curated Developer Operating System",
    ];
    navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
    toast.success("Copied Stack Manifest Markdown!");
    setTimeout(() => setCopied(false), 2500);
  };

  // Download JSON
  const handleDownloadJSON = () => {
    if (savedTools.length === 0) return;
    const data = {
      meta: {
        exportedAt: new Date().toISOString(),
        totalTools: savedTools.length,
        readinessPercent,
        coveredTiers: coveredTiersCount,
        totalTiers: ARCHITECTURE_TIERS.length,
      },
      stackSummary: tierAnalysis.map(t => ({
        layer: t.shortLabel,
        isCovered: t.isCovered,
        tools: t.tools.map(tool => ({ id: tool.id, name: tool.name, url: tool.url })),
      })),
      allTools: savedTools.map(t => ({
        id: t.id,
        name: t.name,
        category: t.category,
        subcategory: t.subcategory,
        url: t.url,
        tags: t.tags,
      })),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `lyra-stack-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded stack JSON blueprint");
  };

  const handleClearStack = () => {
    if (window.confirm("Are you sure you want to clear your saved tools?")) {
      localStorage.removeItem("my_stack_saves");
      localStorage.removeItem("my_stack_likes");
      setSavedTools([]);
      window.dispatchEvent(new Event("stack-change"));
      toast.info("Cleared stack");
    }
  };

  return (
    <div className="min-h-screen bg-transparent pt-28 pb-32">
      <div className="container max-w-6xl relative z-10 px-4 sm:px-6">
        
        {/* Top Header Card */}
        <div className="relative mb-8 py-7 sm:py-8 px-7 sm:px-10 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#121212] via-[#0e0e0e] to-[#0a0a0a] shadow-2xl backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#e8702a]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#e8702a] to-[#d2611f] flex items-center justify-center text-white shadow-[0_0_35px_rgba(232,112,42,0.35)] shrink-0">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-md" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#e8702a] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Architectural Workspace
                </div>
                <h1 className="text-white text-3xl sm:text-4xl font-bold tracking-tight mb-0.5 font-playfair italic">
                  My Stack
                </h1>
                <p className="text-white/60 text-xs sm:text-sm font-medium">
                  Curated system toolkit of <span className="text-white font-semibold">{savedTools.length}</span> {savedTools.length === 1 ? "tool" : "tools"}.
                </p>
              </div>
            </div>

            {/* View Switcher & Actions */}
            {savedTools.length > 0 && (
              <div className="flex flex-wrap items-center gap-2.5">
                {/* View Switcher Toggle */}
                <div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10 mr-1 shadow-inner">
                  <button
                    onClick={() => setViewMode("cards")}
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                      viewMode === "cards"
                        ? "bg-[#e8702a] text-white shadow-[0_0_15px_rgba(232,112,42,0.4)]"
                        : "text-foreground/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    My Cards ({savedTools.length})
                  </button>
                  <button
                    onClick={() => setViewMode("topology")}
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                      viewMode === "topology"
                        ? "bg-[#e8702a] text-white shadow-[0_0_15px_rgba(232,112,42,0.4)]"
                        : "text-foreground/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Network className="w-3.5 h-3.5" />
                    Topology Map
                  </button>
                </div>

                <button
                  onClick={handleExportMarkdown}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 transition-all"
                  title="Copy stack as Markdown"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Export MD"}</span>
                </button>
                <button
                  onClick={handleDownloadJSON}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 transition-all"
                  title="Download JSON config"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>JSON</span>
                </button>
                <button
                  onClick={handleClearStack}
                  className="p-2 rounded-full text-foreground/40 hover:text-red-400 hover:bg-white/5 transition-colors"
                  title="Clear all"
                  aria-label="Clear all tools"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {savedTools.length > 0 ? (
          <div>
            {/* ══════════════════════════════════════════════════════
                 VIEW 1: MY CARDS (COMPACT STACK BREAKDOWN + TOOL CARDS)
               ══════════════════════════════════════════════════════ */}
            {viewMode === "cards" && (
              <div className="space-y-8 animate-[heroFadeUp_0.35s_ease-out]">
                
                {/* ── Compact Stack Breakdown Card (The requested user sketch card) ── */}
                <div className="p-5 sm:p-6 rounded-2xl bg-surface/90 border border-white/10 shadow-xl backdrop-blur-md relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#e8702a]/15 text-[#e8702a] flex items-center justify-center font-bold">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <h2 className="text-white text-base sm:text-lg font-bold tracking-tight">
                          My Stack Breakdown
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-foreground/80">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{coveredTiersCount}/{ARCHITECTURE_TIERS.length} Layers Covered ({readinessPercent}%)</span>
                    </div>
                  </div>

                  {/* 2-Column Compact Layer Rows: "Layer - What I Have" */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
                    {tierAnalysis.map((tier) => {
                      return (
                        <div 
                          key={tier.id}
                          className="flex items-center justify-between py-1.5 px-2.5 rounded-lg hover:bg-white/[0.03] transition-colors gap-2"
                        >
                          {/* Left: Layer Name with Colored Bullet */}
                          <div className="flex items-center gap-2 min-w-[130px] sm:min-w-[150px] shrink-0">
                            <span 
                              className="w-2 h-2 rounded-full shrink-0" 
                              style={{ backgroundColor: tier.isCovered ? tier.accentColor : "rgba(255,255,255,0.2)" }} 
                            />
                            <span className="text-xs font-semibold text-white/90 truncate">
                              {tier.shortLabel}
                            </span>
                          </div>

                          {/* Right: What I Have Tool Pills */}
                          <div className="flex flex-wrap items-center justify-end gap-1.5 min-w-0">
                            {tier.isCovered ? (
                              tier.tools.map((tool) => (
                                <span
                                  key={tool.id}
                                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-white text-[11px] font-medium truncate shadow-sm"
                                >
                                  {tool.icon ? (
                                    <span className="text-xs">{tool.icon}</span>
                                  ) : (
                                    <span className="w-3.5 h-3.5 rounded bg-white/10 text-[9px] font-bold flex items-center justify-center uppercase">
                                      {tool.name.charAt(0)}
                                    </span>
                                  )}
                                  <span className="truncate max-w-[90px]">{tool.name}</span>
                                  <a
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/40 hover:text-white"
                                    title={`Visit ${tool.name}`}
                                  >
                                    <ExternalLink className="w-2.5 h-2.5" />
                                  </a>
                                </span>
                              ))
                            ) : (
                              <Link
                                href={`/directory?category=${encodeURIComponent(tier.recommendedSearch)}`}
                                className="text-[11px] text-[#e8702a] hover:underline font-medium inline-flex items-center gap-1"
                              >
                                <span>+ Add</span>
                                <ArrowRight className="w-2.5 h-2.5" />
                              </Link>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ── Component Cards (Directly Below in My Cards) ── */}
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                    <div>
                      <h2 className="text-white text-lg sm:text-xl font-bold tracking-tight">
                        Component Cards ({savedTools.length})
                      </h2>
                      <p className="text-foreground/50 text-xs">
                        Individual tool dossiers with quick links, likes, and actions.
                      </p>
                    </div>
                    <Link 
                      href="/directory" 
                      className="text-xs text-[#e8702a] hover:underline font-semibold flex items-center gap-1"
                    >
                      Browse directory
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {/* 3-Column ToolCard Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    {savedTools.map((tool) => (
                      <ToolCard key={tool.id} tool={tool} />
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* ══════════════════════════════════════════════════════
                 VIEW 2: DEDICATED TOPOLOGY MAP (LIKE BEFORE)
               ══════════════════════════════════════════════════════ */}
            {viewMode === "topology" && (
              <div className="space-y-6 animate-[heroFadeUp_0.35s_ease-out]">
                
                {/* Readiness Gauge Banner */}
                <div className="p-6 sm:p-7 rounded-3xl bg-surface/90 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Sparkles className="w-4 h-4 text-[#e8702a]" />
                        <h2 className="text-white text-lg sm:text-xl font-bold tracking-tight">
                          System Topology Health & Readiness
                        </h2>
                      </div>
                      <p className="text-foreground/70 text-xs sm:text-sm max-w-xl leading-relaxed">
                        Visualizing how your saved components interconnect across the 7 architectural tiers from Client to Infrastructure.
                      </p>
                    </div>

                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-3.5 sm:p-4 rounded-2xl shrink-0">
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-foreground/60 font-medium">Readiness Score</span>
                        <span className="text-xl sm:text-2xl font-bold font-mono text-white">
                          {readinessPercent}%
                        </span>
                      </div>
                      <div className="w-24 sm:w-32 h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#e8702a] to-emerald-400 transition-all duration-700" 
                          style={{ width: `${readinessPercent}%` }}
                        />
                      </div>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        readinessPercent === 100 
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30" 
                          : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                      }`}>
                        {coveredTiersCount}/{ARCHITECTURE_TIERS.length} Tiers Live
                      </span>
                    </div>
                  </div>
                </div>

                {/* The 7-Tier Blueprint Topology Diagram */}
                <div className="relative p-6 sm:p-10 rounded-3xl bg-[#0d0d0d]/90 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
                  
                  {/* Subtle Blueprint Grid */}
                  <div 
                    className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                    style={{
                      backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                      backgroundSize: "24px 24px"
                    }}
                  />

                  {/* User Entry Conduit */}
                  <div className="flex flex-col items-center mb-8 relative z-10">
                    <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-foreground/60 text-xs font-mono tracking-wider flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>INCOMING USER REQUESTS (HTTPS / DNS)</span>
                    </div>
                    <div className="w-[2px] h-6 bg-gradient-to-b from-white/20 to-sky-400/50 mt-2" />
                    <ArrowDown className="w-3.5 h-3.5 text-sky-400 -mt-1 animate-bounce" />
                  </div>

                  {/* The 7 Tiers Pipeline */}
                  <div className="flex flex-col gap-4 relative z-10">
                    {tierAnalysis.map((tier, idx) => {
                      const Icon = tier.icon;
                      const hasNext = idx < tierAnalysis.length - 1;

                      return (
                        <div key={tier.id} className="relative group">
                          
                          {/* The Tier Card */}
                          <div 
                            className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 shadow-xl relative overflow-hidden ${
                              tier.isCovered
                                ? "bg-white/[0.04] border-white/15 hover:border-white/30"
                                : "bg-white/[0.015] border-dashed border-white/10 hover:border-white/20"
                            }`}
                          >
                            <div 
                              className="absolute left-0 top-0 bottom-0 w-1.5 transition-all"
                              style={{ backgroundColor: tier.isCovered ? tier.accentColor : "rgba(255,255,255,0.1)" }}
                            />

                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pl-2 sm:pl-3">
                              
                              {/* Left: Identification */}
                              <div className="flex items-start gap-4 lg:w-[35%] shrink-0">
                                <div 
                                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                                  style={{
                                    backgroundColor: tier.badgeBg,
                                    borderColor: tier.badgeBorder,
                                    color: tier.accentColor
                                  }}
                                >
                                  <Icon className="w-5 h-5" />
                                </div>

                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-foreground/50">
                                      TIER 0{tier.tierNumber}
                                    </span>
                                    {tier.isCovered ? (
                                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                        <CheckCircle2 className="w-3 h-3" />
                                        Connected ({tier.tools.length})
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-400 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                                        <AlertTriangle className="w-3 h-3" />
                                        Missing Tier
                                      </span>
                                    )}
                                  </div>

                                  <h3 className="text-white text-base font-semibold tracking-tight">
                                    {tier.name}
                                  </h3>
                                  <p className="text-foreground/60 text-xs mt-0.5 leading-relaxed">
                                    {tier.shortRole}
                                  </p>
                                </div>
                              </div>

                              {/* Right: Connected Nodes or Add Slot */}
                              <div className="lg:w-[65%] flex flex-wrap items-center gap-2.5">
                                {tier.isCovered ? (
                                  <>
                                    {tier.tools.map((tool) => {
                                      const pricingTag = tool.tags.find(t => ["Free", "OSS", "Free tier", "Paid"].includes(t));
                                      return (
                                        <div
                                          key={tool.id}
                                          className="group/chip flex items-center gap-2.5 pl-3 pr-2 py-2 rounded-xl bg-surface/90 border border-white/15 hover:border-white/30 transition-all shadow-md backdrop-blur-sm"
                                        >
                                          {tool.icon ? (
                                            <span className="text-base">{tool.icon}</span>
                                          ) : (
                                            <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center text-[11px] font-bold text-white uppercase">
                                              {tool.name.charAt(0)}
                                            </div>
                                          )}

                                          <div className="flex flex-col">
                                            <span className="text-xs font-semibold text-white group-hover/chip:text-[#e8702a] transition-colors">
                                              {tool.name}
                                            </span>
                                            {tool.subcategory && (
                                              <span className="text-[9px] text-foreground/50 truncate max-w-[110px]">
                                                {tool.subcategory}
                                              </span>
                                            )}
                                          </div>

                                          {pricingTag && (
                                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-foreground/70 font-semibold uppercase">
                                              {pricingTag}
                                            </span>
                                          )}

                                          <a
                                            href={tool.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1 rounded-md text-foreground/40 hover:text-white hover:bg-white/10 transition-colors"
                                            title={`Visit ${tool.name}`}
                                          >
                                            <ExternalLink className="w-3 h-3" />
                                          </a>

                                          <button
                                            onClick={(e) => handleRemoveTool(tool.id, tool.name, e)}
                                            className="p-1 rounded-md text-foreground/40 hover:text-red-400 hover:bg-white/10 transition-colors"
                                            title="Remove from stack"
                                          >
                                            <X className="w-3 h-3" />
                                          </button>
                                        </div>
                                      );
                                    })}

                                    <Link
                                      href={`/directory?category=${encodeURIComponent(tier.recommendedSearch)}`}
                                      className="inline-flex items-center gap-1 text-[11px] px-3 py-1.5 rounded-lg border border-white/10 text-foreground/50 hover:text-white hover:bg-white/5 transition-all font-medium"
                                    >
                                      <span>+ Add another</span>
                                    </Link>
                                  </>
                                ) : (
                                  <Link
                                    href={`/directory?category=${encodeURIComponent(tier.recommendedSearch)}`}
                                    className="w-full flex items-center justify-between p-3.5 rounded-xl border border-dashed border-white/15 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#e8702a]/40 transition-all group/empty"
                                  >
                                    <div className="flex items-center gap-2.5">
                                      <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-foreground/40 group-hover/empty:text-[#e8702a]">
                                        +
                                      </div>
                                      <span className="text-xs text-foreground/70 group-hover/empty:text-white font-medium">
                                        Connect {tier.name} tool — <span className="text-foreground/40 italic">e.g. {tier.sampleTools}</span>
                                      </span>
                                    </div>
                                    <span className="text-xs text-[#e8702a] font-semibold flex items-center gap-1 group-hover/empty:translate-x-1 transition-transform">
                                      Find in Directory
                                      <ArrowRight className="w-3 h-3" />
                                    </span>
                                  </Link>
                                )}
                              </div>

                            </div>
                          </div>

                          {/* Data Flow Conduit to Next Tier */}
                          {hasNext && (
                            <div className="flex justify-center my-1">
                              <div className="flex flex-col items-center">
                                <div className="w-[2px] h-3 bg-gradient-to-b from-white/20 to-white/10" />
                                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                              </div>
                            </div>
                          )}

                        </div>
                      );
                    })}
                  </div>

                  {/* Terminal Infrastructure Base */}
                  <div className="flex flex-col items-center mt-8 relative z-10">
                    <div className="w-[2px] h-6 bg-gradient-to-b from-white/10 to-emerald-400/50 mb-2" />
                    <div className="px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>PRODUCTION DEPLOYED INFRASTRUCTURE</span>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        ) : (
          /* Empty Stack State */
          <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-white/10 rounded-3xl bg-surface/50 p-8 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground/40 mb-5">
              <Network className="w-8 h-8" />
            </div>
            <h2 className="text-white text-2xl font-semibold mb-2">Your stack is empty</h2>
            <p className="text-text-secondary text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Adopt a verified Blueprint recipe or browse the Universal Directory to start assembling your production stack.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link 
                href="/blueprints" 
                className="bg-[#e8702a] hover:bg-[#d2611f] text-white font-semibold text-sm px-6 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(232,112,42,0.3)] hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Explore Blueprint Recipes
              </Link>
              <Link 
                href="/directory" 
                className="bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-6 py-3 rounded-full border border-white/10 transition-all hover:scale-105 active:scale-95"
              >
                Browse Directory
              </Link>
            </div>
          </div>
        )}

      </div>
      <SearchDock />
    </div>
  );
}

export default MyStack;
