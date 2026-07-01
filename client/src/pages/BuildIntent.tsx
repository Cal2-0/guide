import { useRoute } from "wouter";
import { SearchDock } from "@/components/ui/SearchDock";
import { ScrollDial } from "@/components/ui/ScrollDial";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ToolCard } from "@/components/ui/ToolCard";
import { tools } from "@/lib/toolsData";
import { usePageTitle } from "@/hooks/usePageTitle";

// Hardcoded mock mapping for demonstration, real app would have more complex curations
const INTENT_STAGES: Record<string, { id: string; label: string; categories: string[] }[]> = {
  website: [
    { id: "stage-1", label: "01. Design", categories: ["UI & UX Design", "Project Inspiration"] },
    { id: "stage-2", label: "02. Frontend", categories: ["Developer Tools"] },
    { id: "stage-3", label: "03. Ship It", categories: ["Resources", "Learning"] }
  ],
  "ai-app": [
    { id: "stage-1", label: "01. Models", categories: ["AI Knowledge"] },
    { id: "stage-2", label: "02. Logic", categories: ["Developer Tools"] },
    { id: "stage-3", label: "03. UI", categories: ["UI & UX Design"] }
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
            // Get tools matching the categories for this stage
            const stageTools = tools.filter(t => stage.categories.includes(t.category)).slice(0, 8); // limit for UI

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
