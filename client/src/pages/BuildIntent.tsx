import { useRoute } from "wouter";
import { SearchDock } from "@/components/ui/SearchDock";
import { ScrollDial } from "@/components/ui/ScrollDial";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ToolCard } from "@/components/ui/ToolCard";
import { tools } from "@/lib/toolsData";
import { usePageTitle } from "@/hooks/usePageTitle";

// Hardcoded mock mapping for demonstration, real app would have more complex curations
const INTENT_STAGES: Record<string, { id: string; label: string; tools: string[] }[]> = {
  website: [
    { id: "stage-1", label: "01. Ideation", tools: ["product-hunt", "indie-hackers", "github-trending", "exploding-topics"] },
    { id: "stage-2", label: "02. Design", tools: ["mobbin", "refero", "land-book", "godly", "figma"] },
    { id: "stage-3", label: "03. Frontend", tools: ["react", "tailwind-css", "21st-dev", "magic-ui", "framer-motion", "lucide", "haikei", "motionsites-ai"] },
    { id: "stage-4", label: "04. Launch", tools: ["vercel", "supabase", "posthog", "sentry"] }
  ],
  backend: [
    { id: "stage-1", label: "01. Architecture", tools: ["node-js", "rust", "go", "python", "docker"] },
    { id: "stage-2", label: "02. APIs & Data", tools: ["graphql", "trpc", "postman", "prisma"] },
    { id: "stage-3", label: "03. Security", tools: ["clerk", "auth0", "snyk", "cloudflare"] }
  ],
  database: [
    { id: "stage-1", label: "01. Data Storage", tools: ["postgresql", "redis", "mongodb", "planetscale"] },
    { id: "stage-2", label: "02. Operations", tools: ["prisma", "drizzle", "pgadmin", "datagrip"] },
    { id: "stage-3", label: "03. Analytics", tools: ["metabase", "posthog", "mixpanel"] }
  ],
  deploy: [
    { id: "stage-1", label: "01. Hosting", tools: ["vercel", "aws", "railway", "render", "digitalocean"] },
    { id: "stage-2", label: "02. CI/CD", tools: ["github-actions", "gitlab-ci", "circleci", "docker"] },
    { id: "stage-3", label: "03. Security", tools: ["cloudflare", "sentry", "datadog", "grafana"] }
  ],
  ai: [
    { id: "stage-1", label: "01. Models", tools: ["openai", "anthropic", "huggingface", "replicate"] },
    { id: "stage-2", label: "02. Coding", tools: ["cursor", "claude-code", "windsurf", "bolt-new", "v0-by-vercel"] },
    { id: "stage-3", label: "03. Tooling", tools: ["langchain", "pinecone", "chroma", "promptbase"] }
  ],
  mobile: [
    { id: "stage-1", label: "01. Design", tools: ["mobbin", "figma", "spline", "rive"] },
    { id: "stage-2", label: "02. App Frameworks", tools: ["react-native", "expo", "flutter", "swift"] },
    { id: "stage-3", label: "03. Backend", tools: ["supabase", "firebase", "clerk", "revenuecat"] }
  ]
};

export function BuildIntent() {
  const [, params] = useRoute("/build/:intent");
  const intentId = params?.intent || "website";
  
  // Format intent ID for display
  const title = intentId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const stages = INTENT_STAGES[intentId] || INTENT_STAGES["website"];
  usePageTitle(`Build a ${title}`);

  return (
    <div className="min-h-screen bg-transparent pt-32 pb-32">
      <div className="container max-w-6xl relative z-10">
        <div className="mb-24">
          <h1 className="text-white text-5xl md:text-7xl font-playfair italic mb-6 animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            Building a {title}
          </h1>
          <p className="text-text-secondary text-lg md:text-xl font-medium animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards]">
            The curated stack to get you from idea to launch.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {stages.map((stage, index) => {
            // Get tools matching the curated IDs for this stage, preserving curated order
            const stageTools = stage.tools
              .map(id => tools.find(t => t.id === id))
              .filter(Boolean) as typeof tools;

            if (stageTools.length === 0) return null;

            return (
              <SectionReveal key={stage.id} delay={0.1}>
                <div id={stage.id} className="scroll-mt-32">
                  <h2 className="text-white text-3xl font-semibold tracking-tight mb-8">
                    {stage.label}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stageTools.map(tool => (
                      <ToolCard key={tool.id} tool={tool} />
                    ))}
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>

      <ScrollDial sections={stages.map(s => ({ id: s.id, label: s.label }))} />
      <SearchDock />
    </div>
  );
}
