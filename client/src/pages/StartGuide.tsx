import { usePageTitle } from "@/hooks/usePageTitle";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { 
  Terminal, 
  Lightbulb, 
  Rocket, 
  Code2, 
  Globe, 
  Database, 
  Smartphone, 
  CheckCircle2, 
  XCircle,
  TrendingUp,
  CreditCard,
  Users
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function StartGuide() {
  usePageTitle("How to Start — The Honest Guide");

  return (
    <div className="min-h-screen bg-transparent pt-32 pb-32">
      <div className="container max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="mb-24 text-center">
          <Badge variant="outline" className="mb-6 py-1.5 px-4 text-xs tracking-widest uppercase border-primary/30 text-primary">
            The Honest Guide
          </Badge>
          <h1 className="text-white text-5xl md:text-7xl font-playfair italic mb-6 animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            How to Start
          </h1>
          <p className="text-text-secondary text-xl md:text-2xl font-medium animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards] max-w-2xl mx-auto">
            From "I have an idea" to "it's live and real people are using it."
          </p>
          <p className="mt-6 text-text-tertiary max-w-xl mx-auto animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
            Written as a senior dev talking to their younger self. No jargon without explanation. No steps skipped. No assumed knowledge.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          
          {/* Intro Section */}
          <SectionReveal>
            <div className="bg-glass-strong border border-glass-border rounded-[var(--r-card)] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0"></div>
              <h2 className="text-3xl font-playfair italic mb-6 text-white">Before you touch any code</h2>
              <h3 className="text-xl font-semibold mb-4 text-white/90">The one question that kills most projects:</h3>
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 text-xl text-text-secondary italic">
                "Am I solving a problem that already exists, or inventing a problem to justify my tool?"
              </blockquote>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Most projects that die in week 3 die here. The builder fell in love with the technology and forgot to ask whether anyone else cares about the output.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-sm text-text-secondary">"Developers need a faster way to use Claude Code"</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-sm text-text-secondary">"Developers lose hours setting up new projects from scratch every time they start something new"</p>
                  </div>
                </div>
                <div className="bg-black/20 rounded-xl p-5 border border-white/5">
                  <h4 className="font-semibold text-white/90 mb-2">The 3-Person Rule</h4>
                  <p className="text-sm text-text-tertiary">
                    Find 3 people who have that problem right now. Ask what they currently use. If the answer is "nothing" — they don't have the problem. If it's "Google Sheets" — you're onto something.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Phase 1 */}
          <SectionReveal>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="font-playfair text-xl italic">1</span>
                </div>
                <h2 className="text-4xl font-playfair italic text-white">Validate</h2>
                <Badge variant="secondary" className="ml-auto bg-white/5">1–3 days max</Badge>
              </div>
              
              <p className="text-xl text-text-secondary">Before writing one line of code, build a waiting room, not a product.</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-glass-bg border-glass-border p-6 hover:bg-glass-strong transition-colors">
                  <Globe className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-white mb-2">Carrd</h3>
                  <p className="text-sm text-text-secondary">Build a one-page site in 20 minutes, no code. ($19/yr)</p>
                </Card>
                <Card className="bg-glass-bg border-glass-border p-6 hover:bg-glass-strong transition-colors">
                  <Users className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Resend</h3>
                  <p className="text-sm text-text-secondary">Collects and stores the email addresses. (Free tier)</p>
                </Card>
                <Card className="bg-glass-bg border-glass-border p-6 hover:bg-glass-strong transition-colors">
                  <Lightbulb className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">Tally.so</h3>
                  <p className="text-sm text-text-secondary">If you want a waitlist form with more fields. (Free)</p>
                </Card>
              </div>

              <div className="bg-black/40 p-6 rounded-xl border border-white/5 font-mono text-sm text-text-secondary mt-8">
                <p className="text-white mb-4">/* What to put on the page */</p>
                <p>[Product Name]</p>
                <p>One sentence: what it does and who it's for.</p>
                <p>One sentence: why now / why this matters.</p>
                <p className="mt-4 text-white/50">[Email field] [Join waitlist button]</p>
              </div>
            </div>
          </SectionReveal>

          {/* Phase 2 */}
          <SectionReveal>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="font-playfair text-xl italic">2</span>
                </div>
                <h2 className="text-4xl font-playfair italic text-white">Choose Your Stack</h2>
              </div>

              <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-8 text-xl text-text-secondary italic">
                "Choose boring technology you understand over exciting technology you don't."
              </blockquote>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Path A */}
                <div className="bg-glass-bg border border-glass-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                  <Globe className="w-8 h-8 text-pink-400 mb-4" />
                  <h3 className="text-2xl font-playfair italic text-white mb-2">Website / Landing Page</h3>
                  <p className="text-text-tertiary text-sm mb-6">For a public-facing page, portfolio, or blog.</p>
                  <ul className="space-y-3 text-sm text-text-secondary">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" /> <strong>Framer:</strong> Visual design, publish in minutes.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" /> <strong>Vite + React:</strong> When you need full code control.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" /> <strong>Umami:</strong> Analytics on day one.</li>
                  </ul>
                </div>

                {/* Path B */}
                <div className="bg-glass-bg border border-glass-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                  <Terminal className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-playfair italic text-white mb-2">AI App</h3>
                  <p className="text-text-tertiary text-sm mb-6">Call an LLM and do something with the response.</p>
                  <ul className="space-y-3 text-sm text-text-secondary">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" /> <strong>Next.js:</strong> The full-stack framework.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" /> <strong>OpenRouter:</strong> Free models, no credit card.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" /> <strong>Supabase:</strong> For storing conversations.</li>
                  </ul>
                </div>

                {/* Path C */}
                <div className="bg-glass-bg border border-glass-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                  <Database className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-2xl font-playfair italic text-white mb-2">SaaS</h3>
                  <p className="text-text-tertiary text-sm mb-6">Something people pay you monthly for.</p>
                  <ul className="space-y-3 text-sm text-text-secondary">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" /> <strong>T3 Stack:</strong> Next, Prisma, tRPC, Tailwind.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" /> <strong>Lemon Squeezy:</strong> Payments & global tax.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" /> <strong>Better Auth:</strong> Free, TS-native auth.</li>
                  </ul>
                </div>

                {/* Path D */}
                <div className="bg-glass-bg border border-glass-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                  <Smartphone className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-playfair italic text-white mb-2">Mobile App</h3>
                  <p className="text-text-tertiary text-sm mb-6">For the App Store or Google Play.</p>
                  <ul className="space-y-3 text-sm text-text-secondary">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" /> <strong>Expo:</strong> The only sensible path in 2025.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" /> <strong>NativeWind:</strong> Tailwind for React Native.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" /> <strong>EAS CLI:</strong> Build in the cloud, no Mac needed.</li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Phase 3 & 4 */}
          <SectionReveal>
            <div className="space-y-16">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="font-playfair text-xl italic">3</span>
                  </div>
                  <h2 className="text-4xl font-playfair italic text-white">Build & Deploy</h2>
                </div>
                <div className="prose prose-invert prose-p:text-text-secondary prose-headings:text-white max-w-none">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-primary" /> The Environment
                      </h3>
                      <ul className="space-y-4 text-text-secondary">
                        <li><strong>VS Code / Cursor:</strong> Use Cursor if you want AI help while coding.</li>
                        <li><strong>Node.js:</strong> Always install via NVM, not the website.</li>
                        <li><strong>Git & GitHub:</strong> Where your code lives and how you deploy.</li>
                      </ul>
                      
                      <div className="mt-8 bg-glass-strong border border-glass-border p-6 rounded-xl">
                        <h4 className="text-white font-medium mb-3">AI Tooling Truths</h4>
                        <p className="text-sm text-text-tertiary mb-3">AI is your junior engineer. Review its PRs. Give it context. Break big tasks into small ones.</p>
                        <p className="text-sm text-white/90"><strong>The CLAUDE.md trick:</strong> Create a CLAUDE.md at your root with your stack and conventions. It changes everything.</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-primary" /> Day 1 Deploy
                      </h3>
                      <p className="text-text-secondary mb-6">
                        Most beginners wait until everything is "done" to deploy. This is wrong. Deploy on day 1 to get environment errors out of the way early.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <span className="text-white">Frontend</span>
                          <span className="text-text-secondary">Vercel (Free)</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <span className="text-white">Backend</span>
                          <span className="text-text-secondary">Railway ($5/mo)</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <span className="text-white">Database</span>
                          <span className="text-text-secondary">Supabase (Free)</span>
                        </div>
                        <div className="flex items-center justify-between pb-3">
                          <span className="text-white">Domain</span>
                          <span className="text-text-secondary">Cloudflare (~$10/yr)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Phase 5 */}
          <SectionReveal>
            <div className="bg-glass-strong border border-glass-border rounded-[var(--r-card)] p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="font-playfair text-xl italic">4</span>
                </div>
                <h2 className="text-4xl font-playfair italic text-white">Get Users</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Week 1</h3>
                  <p className="text-primary font-medium text-sm">MANUAL OUTREACH</p>
                  <p className="text-text-secondary text-sm">Reach out to the 3 people who confirmed they had the problem. Ask them to use it while you watch (even over Zoom). Watch where they get confused — that's your bug list.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Week 2</h3>
                  <p className="text-primary font-medium text-sm">BE WHERE THEY ARE</p>
                  <p className="text-text-secondary text-sm">Go back to subreddits and communities. Comment on threads where people complain about the problem. Add value, mention your tool once.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Ongoing</h3>
                  <p className="text-primary font-medium text-sm">CONTENT FLYWHEEL</p>
                  <p className="text-text-secondary text-sm">Write one post per week on Dev.to, HackerNews, or your blog about something you learned building it. Catch organic search traffic.</p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Conclusion */}
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto border-t border-white/10 pt-16">
              <h2 className="text-3xl font-playfair italic text-white mb-6">The mental model that changes everything</h2>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                A senior developer doesn't know more syntax than a junior. They've just made more mistakes, so they've learned what to do early and what to do later.
              </p>
              <div className="inline-block bg-primary/20 text-primary px-6 py-3 rounded-full font-medium tracking-wide">
                Ship the thing. Then improve it.
              </div>
            </div>
          </SectionReveal>

        </div>
      </div>
    </div>
  );
}
