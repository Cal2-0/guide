import json

with open('intents.json', 'r', encoding='utf-16') as f:
    intents = json.load(f)

content = f'''import {{ useRoute }} from "wouter";
import {{ SearchDock }} from "@/components/ui/SearchDock";
import {{ ToolCard }} from "@/components/ui/ToolCard";
import {{ tools }} from "@/lib/toolsData";
import {{ usePageTitle }} from "@/hooks/usePageTitle";
import {{ ChevronRight, Lightbulb }} from "lucide-react";

interface CuratedTool {{
  id: string;
  rationale: string;
}}

interface IntentData {{
  title: string;
  description: string;
  stackNodes: string[];
  tools: CuratedTool[];
  insight: string;
}}

const SPECIALIZED_INTENTS: Record<string, IntentData> = {json.dumps(intents, indent=2)};

export function BuildIntent() {{
  const [, params] = useRoute("/build/:intent");
  const intentId = params?.intent || "website";
  const data = SPECIALIZED_INTENTS[intentId] || SPECIALIZED_INTENTS["website"];
  
  // Format the title by removing any numbering like "Build a Website / Landing Page"
  usePageTitle(`Build a ${{data.title}}`);

  return (
    <div className="min-h-screen bg-transparent pt-32 pb-32">
      <div className="container max-w-5xl relative z-10">
        {{/* Header */}}
        <div className="mb-16">
          <h1 className="text-white text-4xl md:text-6xl font-playfair italic mb-6 animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            Building a {{data.title}}
          </h1>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards]">
            <p className="text-foreground/90 text-lg leading-relaxed">
              {{data.description}}
            </p>
          </div>
        </div>

        {{/* Recommended Stack */}}
        <div className="mb-24 animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
          <h2 className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-6">
            Recommended Starting Stack
          </h2>
          <div className="flex flex-wrap items-center gap-y-4 gap-x-2 md:gap-x-4">
            {{data.stackNodes.map((node, i) => (
              <div key={{i}} className="flex items-center gap-2 md:gap-4">
                <div className="bg-foreground text-background font-medium px-4 py-2 rounded-full text-sm shadow-sm">
                  {{node}}
                </div>
                {{i < data.stackNodes.length - 1 && (
                  <ChevronRight className="text-white/30 w-5 h-5" />
                )}}
              </div>
            ))}}
          </div>
        </div>

        {{/* Tool List */}}
        <div className="mb-32">
          <h2 className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-8">
            The Specialized Toolkit
          </h2>
          <div className="flex flex-col gap-6">
            {{data.tools.map((curated, index) => {{
              const tool = tools.find(t => t.id === curated.id);
              if (!tool) return null;

              return (
                <div key={{tool.id}} className="flex flex-col md:flex-row gap-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-all animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]" style={{{{ animationDelay: `${{0.2 + (index * 0.1)}}s` }}}}>
                  {{/* Left: Tool Card */}}
                  <div className="md:w-1/3 shrink-0">
                    <ToolCard tool={{tool}} />
                  </div>
                  
                  {{/* Right: Rationale */}}
                  <div className="md:w-2/3 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                    <h3 className="text-white font-medium text-lg mb-3">
                      Why this one, not the obvious one
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {{curated.rationale}}
                    </p>
                  </div>
                </div>
              );
            }})}}
          </div>
        </div>

        {{/* Insight Quote */}}
        <div className="bg-gradient-to-r from-primary/20 via-transparent to-transparent border-l-4 border-primary p-8 md:p-12 rounded-r-3xl animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]">
          <div className="flex gap-4 items-start">
            <Lightbulb className="w-8 h-8 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-semibold text-xl mb-3">
                One thing nobody tells beginners
              </h4>
              <p className="text-foreground/90 text-lg leading-relaxed italic">
                "{{data.insight}}"
              </p>
            </div>
          </div>
        </div>

      </div>
      <SearchDock />
    </div>
  );
}}
'''

with open('client/src/pages/BuildIntent.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
