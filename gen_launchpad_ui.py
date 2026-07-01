content = '''import { usePageTitle } from "@/hooks/usePageTitle";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SearchDock } from "@/components/ui/SearchDock";
import { ScrollDial } from "@/components/ui/ScrollDial";
import { Rocket, CheckCircle2, Circle, ArrowRight } from "lucide-react";
import launchpadData from "@/lib/launchpadData.json";

export function StartGuide() {
  usePageTitle("Launchpad");

  // Format HTML bold strings like **Claude** to standard React elements
  const formatBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-transparent pt-32 pb-32">
      <div className="container max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 mb-6 py-2 px-5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium tracking-wide">
            <Rocket className="w-4 h-4" />
            Lyra Launchpad
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-playfair italic mb-6 animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            One page. Every step.<br/><span className="text-white/40">Idea → Live product.</span>
          </h1>
          <p className="text-text-secondary text-xl md:text-2xl font-medium animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards] max-w-2xl mx-auto">
            Not a tutorial. A decision engine. Pick your step, pick your tool, ship.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {launchpadData.map((step, index) => (
            <SectionReveal key={step.id}>
              <div id={`step-${step.id}`} className="scroll-mt-32">
                
                {/* Step Header */}
                <div className="mb-10">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-primary font-mono text-2xl md:text-3xl font-bold opacity-50">{step.id}</span>
                    <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">
                      <span className="mr-3">{step.emoji}</span>
                      {step.title}
                    </h2>
                  </div>
                  
                  {step.description && (
                    <div className="bg-white/5 border-l-2 border-primary/50 rounded-r-xl p-5 md:p-6 backdrop-blur-sm">
                      <p className="text-foreground/90 text-lg leading-relaxed">
                        {formatBold(step.description)}
                      </p>
                    </div>
                  )}
                </div>

                {/* Options Grid */}
                {step.options && step.options.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {step.options.map((opt, i) => (
                      <div key={i} className="flex flex-col bg-glass border border-glass-border rounded-2xl p-6 transition-all hover:border-primary/30 hover:bg-white/[0.04]">
                        <h4 className="text-white/60 text-sm font-medium tracking-wide uppercase mb-4 h-10">
                          {opt.need}
                        </h4>
                        
                        <div className="flex-1 bg-background/50 border border-white/5 rounded-xl p-4 mb-4 flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-1">
                            <CheckCircle2 className="w-4 h-4" />
                            Start Here
                          </div>
                          <div className="text-foreground/90 leading-relaxed text-sm">
                            {formatBold(opt.startHere)}
                          </div>
                        </div>

                        {opt.alternative && (
                          <div className="border-t border-white/10 pt-4 mt-auto">
                            <div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-wider mb-2">
                              <Circle className="w-3 h-3" />
                              Alternative
                            </div>
                            <div className="text-foreground/60 text-sm">
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
      </div>

      <ScrollDial 
        sections={launchpadData.map(s => ({ 
          id: `step-${s.id}`, 
          label: s.title 
        }))} 
      />
      <SearchDock />
    </div>
  );
}
'''

with open('client/src/pages/StartGuide.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
