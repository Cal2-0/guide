import { useState } from "react";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SearchDock } from "@/components/ui/SearchDock";
import { ScrollDial } from "@/components/ui/ScrollDial";
import { 
  Rocket, 
  Sparkles, 
  Globe, 
  Bot, 
  Boxes, 
  Smartphone, 
  ShieldAlert, 
  Server, 
  CheckCircle2, 
  Circle, 
  ArrowRight,
  Compass,
  Layers,
  ChevronDown
} from "lucide-react";
import launchpadData from "@/lib/launchpadData.json";

interface BlueprintIntent {
  id: string;
  title: string;
  tagline: string;
  icon: typeof Globe;
  badge: string;
  highlight: string[];
}

const BLUEPRINT_INTENTS: BlueprintIntent[] = [
  {
    id: "website",
    title: "Website / Landing Page",
    tagline: "High-converting marketing sites and portfolios that convert.",
    icon: Globe,
    badge: "Fastest to ship",
    highlight: ["Mobbin", "21st.dev", "Magic UI", "Framer Motion"]
  },
  {
    id: "ai",
    title: "AI App & LLM Systems",
    tagline: "Wrap powerful frontier models with custom context and fast UI.",
    icon: Bot,
    badge: "High demand",
    highlight: ["OpenRouter", "Groq", "LlamaIndex", "pgvector"]
  },
  {
    id: "saas",
    title: "SaaS & Subscription App",
    tagline: "Multi-tenant software with billing, auth, and scalable database.",
    icon: Boxes,
    badge: "Revenue ready",
    highlight: ["Next.js", "Supabase", "Stripe", "Resend"]
  },
  {
    id: "mobile",
    title: "Mobile Application",
    tagline: "Cross-platform iOS and Android apps with native speed.",
    icon: Smartphone,
    badge: "Cross-platform",
    highlight: ["React Native", "Expo", "Tamagui", "RevenueCat"]
  },
  {
    id: "backend",
    title: "Modern API & Backend",
    tagline: "Distributed microservices, serverless APIs, and resilient data layers.",
    icon: Server,
    badge: "Production grade",
    highlight: ["FastAPI", "Hono", "PostgreSQL", "Upstash"]
  },
  {
    id: "osint",
    title: "OSINT & Data Scraping",
    tagline: "Extract web intelligence, analyze pipelines, and automate feeds.",
    icon: ShieldAlert,
    badge: "Data intelligence",
    highlight: ["Playwright", "Firecrawl", "Cheerio", "DuckDB"]
  }
];

export function Blueprints() {
  usePageTitle("Blueprints — Guided Architecture");
  const [activeTab, setActiveTab] = useState<"recipes" | "sequence">("recipes");

  // Format bold markdown like **text**
  const formatBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const scrollToSequence = () => {
    setActiveTab("sequence");
    setTimeout(() => {
      document.getElementById("launch-sequence")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-transparent pt-28 pb-32">
      <div className="container max-w-6xl relative z-10 px-4 sm:px-6">
        
        {/* Header Hero */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 mb-4 py-1.5 px-4 rounded-full border border-[#e8702a]/30 bg-[#e8702a]/10 text-[#e8702a] text-xs font-semibold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5" />
            Lyra Blueprints
          </div>
          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-playfair italic mb-5 tracking-tight">
            Curated build paths.<br />
            <span className="text-white/45 font-sans not-italic font-light">From zero to live product.</span>
          </h1>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Skip trial-and-error. Choose a validated blueprint recipe or follow the 12-step launch sequence.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-border backdrop-blur-md">
              <button
                onClick={() => setActiveTab("recipes")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === "recipes"
                    ? "bg-[#e8702a] text-white shadow-[0_0_20px_rgba(232,112,42,0.4)]"
                    : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                Project Recipes (6)
              </button>
              <button
                onClick={() => setActiveTab("sequence")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === "sequence"
                    ? "bg-[#e8702a] text-white shadow-[0_0_20px_rgba(232,112,42,0.4)]"
                    : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                }`}
              >
                <Layers className="w-4 h-4" />
                Launch Sequence (12 Steps)
              </button>
            </div>
          </div>
        </div>

        {/* Section 1: Curated Project Recipes */}
        {activeTab === "recipes" && (
          <div className="space-y-12 animate-[heroFadeUp_0.4s_ease-out]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">
                  What are you building?
                </h2>
                <p className="text-text-secondary text-sm mt-1">
                  Validated tool stacks with architectural rationales for each component.
                </p>
              </div>
              <button
                onClick={scrollToSequence}
                className="text-xs sm:text-sm text-[#e8702a] hover:underline flex items-center gap-1.5 self-start sm:self-auto font-medium"
              >
                Need step-by-step guide instead?
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLUEPRINT_INTENTS.map((intent) => {
                const Icon = intent.icon;
                return (
                  <Link
                    key={intent.id}
                    href={`/blueprints/${intent.id}`}
                    className="group relative flex flex-col justify-between p-7 rounded-3xl bg-surface/80 border border-white/10 hover:border-[#e8702a]/40 hover:bg-white/[0.04] transition-all duration-500 shadow-xl overflow-hidden hover:scale-[1.02]"
                  >
                    {/* Subtle glow */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-[#e8702a]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#e8702a]/20 transition-all" />

                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#e8702a] group-hover:bg-[#e8702a]/10 group-hover:border-[#e8702a]/30 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-foreground/70">
                          {intent.badge}
                        </span>
                      </div>

                      <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-[#e8702a] transition-colors">
                        {intent.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-6">
                        {intent.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <div className="text-[11px] font-semibold text-foreground/50 uppercase tracking-wider mb-2.5">
                        Core Recommendations
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {intent.highlight.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-foreground/80 font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#e8702a] group-hover:translate-x-1 transition-transform">
                        Explore Blueprint Recipe
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Banner linking to Launch sequence */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-white/5 via-white/[0.02] to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#e8702a]/15 text-[#e8702a] flex items-center justify-center shrink-0">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-semibold">Want a chronological checklist?</h4>
                  <p className="text-text-secondary text-sm">
                    Walk through all 12 stages from ideation, legal, auth, to post-launch scaling.
                  </p>
                </div>
              </div>
              <button
                onClick={scrollToSequence}
                className="shrink-0 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/10 transition-all flex items-center gap-2"
              >
                View 12-Step Launchpad
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Section 2: 12-Step Launch Sequence */}
        {activeTab === "sequence" && (
          <div id="launch-sequence" className="space-y-16 animate-[heroFadeUp_0.4s_ease-out]">
            <div className="text-center max-w-2xl mx-auto pb-6 border-b border-white/10">
              <div className="inline-flex items-center gap-2 mb-3 py-1 px-3.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-wide">
                <Rocket className="w-3.5 h-3.5" />
                12-Step Execution Sequence
              </div>
              <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                The Launch Engine
              </h2>
              <p className="text-text-secondary text-sm sm:text-base">
                A decision engine. Pick your step, select your verified tool, ship without second-guessing.
              </p>
            </div>

            <div className="flex flex-col gap-24">
              {launchpadData.map((step) => (
                <SectionReveal key={step.id}>
                  <div id={`step-${step.id}`} className="scroll-mt-32">
                    
                    {/* Step Header */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-4 mb-3">
                        <span className="text-[#e8702a] font-mono text-2xl md:text-3xl font-bold opacity-60">
                          {step.id}
                        </span>
                        <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-tight">
                          <span className="mr-3">{step.emoji}</span>
                          {step.title}
                        </h3>
                      </div>
                      
                      {step.description && (
                        <div className="bg-white/5 border-l-2 border-[#e8702a]/60 rounded-r-2xl p-5 md:p-6 backdrop-blur-sm">
                          <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
                            {formatBold(step.description)}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Options Grid */}
                    {step.options && step.options.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {step.options.map((opt, i) => (
                          <div 
                            key={i} 
                            className="flex flex-col bg-surface/60 border border-white/10 rounded-2xl p-6 transition-all hover:border-[#e8702a]/30 hover:bg-white/[0.04] shadow-lg"
                          >
                            <h4 className="text-white/70 text-xs font-semibold tracking-wide uppercase mb-3 min-h-[32px]">
                              {opt.need}
                            </h4>
                            
                            <div className="flex-1 bg-background/60 border border-white/5 rounded-xl p-4 mb-3 flex flex-col gap-1.5">
                              <div className="flex items-center gap-1.5 text-[#e8702a] text-[11px] font-bold uppercase tracking-wider mb-1">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Recommended Path
                              </div>
                              <div className="text-foreground/90 leading-relaxed text-xs sm:text-sm">
                                {formatBold(opt.startHere)}
                              </div>
                            </div>

                            {opt.alternative && (
                              <div className="border-t border-white/5 pt-3 mt-auto">
                                <div className="flex items-center gap-1.5 text-white/40 text-[10px] font-semibold uppercase tracking-wider mb-1.5">
                                  <Circle className="w-3 h-3" />
                                  Alternative
                                </div>
                                <div className="text-foreground/60 text-xs leading-relaxed">
                                  {formatBold(opt.alternative)}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                </SectionReveal>
              ))}
            </div>

            <ScrollDial 
              sections={launchpadData.map(s => ({ 
                id: `step-${s.id}`, 
                label: s.title 
              }))} 
            />
          </div>
        )}

      </div>
      <SearchDock />
    </div>
  );
}

export default Blueprints;
