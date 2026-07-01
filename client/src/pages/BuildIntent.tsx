import { useRoute } from "wouter";
import { SearchDock } from "@/components/ui/SearchDock";
import { ToolCard } from "@/components/ui/ToolCard";
import { tools } from "@/lib/toolsData";
import { usePageTitle } from "@/hooks/usePageTitle";
import { ChevronRight, Lightbulb } from "lucide-react";

interface CuratedTool {
  id: string;
  rationale: string;
}

interface IntentData {
  title: string;
  description: string;
  stackNodes: string[];
  tools: CuratedTool[];
  insight: string;
}

const SPECIALIZED_INTENTS: Record<string, IntentData> = {
  "website": {
    "title": "Build a Website / Landing Page",
    "description": "A \"website\" means something people visit in a browser. A landing page is a single page designed to get someone to click, sign up, or buy. Start here. It's the fastest thing to ship and shows you the whole build-deploy loop in one sitting.",
    "stackNodes": [
      "Mobbin",
      "Land-book",
      "21st.dev",
      "Magic UI",
      "Lucide"
    ],
    "tools": [
      {
        "id": "mobbin",
        "rationale": "The ultimate UI inspiration library."
      },
      {
        "id": "land-book",
        "rationale": "The best curated gallery of landing pages."
      },
      {
        "id": "21st-dev",
        "rationale": "The npm for UI components. Find a stunning micro-interaction and drop it in."
      },
      {
        "id": "magic-ui",
        "rationale": "Premium React components tailored for marketing sites and landing pages."
      },
      {
        "id": "lucide",
        "rationale": "The only icon library you need. Clean, consistent, and massive."
      },
      {
        "id": "framer-motion",
        "rationale": "The industry standard for React animations."
      }
    ],
    "insight": "Your website doesn't need to be custom-coded. Ship Framer first, validate that people care, then rebuild in code if the traffic warrants it."
  },
  "ai": {
    "title": "Build an AI App",
    "description": "An \"AI app\" means you call an LLM (like Claude or GPT) from your code and build something around it \u2014 a chatbot, a document analyser, a coding tool, anything. You don't train a model. You use one that already exists.",
    "stackNodes": [
      "OpenRouter",
      "Groq",
      "LlamaIndex",
      "pgvector",
      "Pydantic AI",
      "Dify ."
    ],
    "tools": [
      {
        "id": "openrouter",
        "rationale": "One API key, 100+ models (Claude, GPT, Gemini, Llama, Mistral). Automatic fallback if a model is down. Free tier requires no credit card. **Start every AI project here, not on OpenAI directly.** It future-proofs your model choice."
      },
      {
        "id": "groq",
        "rationale": "Free tier. Runs LLaMA 3.3 70B at 320 tokens/second \u2014 literally 10\u00d7 faster than OpenAI in practice. For prototyping and demos where speed matters, nothing touches it."
      },
      {
        "id": "cerebras",
        "rationale": "Even less known than Groq. Free tier, 1M token context, LLaMA 3.3. Use this when Groq's free limits run out."
      },
      {
        "id": "llamaindex",
        "rationale": "Better than LangChain for RAG (retrieval-augmented generation \u2014 making AI read your documents). Cleaner API, faster to prototype, easier to debug. LangChain is famous but confusing. Start with LlamaIndex."
      },
      {
        "id": "pgvector",
        "rationale": "Postgres extension that adds vector similarity search. If you're already using Supabase, **you already have this**. Most beginners don't know pgvector exists and pay for a separate vector database they don't need yet."
      },
      {
        "id": "pydantic-ai",
        "rationale": "Type-safe agent framework from the Pydantic team. If you know Python and type hints, this clicks immediately. Cleaner than CrewAI, less ceremony than AutoGen."
      },
      {
        "id": "dify",
        "rationale": "Visual drag-and-drop builder for LLM workflows. Great for: validating an idea before coding it, building a version for a non-technical client, wiring together RAG + agent + tool calls without writing glue code first."
      },
      {
        "id": "litellm",
        "rationale": "A gateway that normalizes 100+ LLM APIs into one OpenAI-compatible interface. Drop this in front of your AI calls so swapping models is one config change, not a code rewrite."
      }
    ],
    "insight": "Your first AI app should have a narrow, specific purpose. \"I want to make ChatGPT but better\" doesn't ship. \"I want to let people upload a PDF and ask questions about it\" ships in a weekend."
  },
  "saas": {
    "title": "Build a SaaS / Startup",
    "description": "SaaS = Software as a Service. You build an app, you charge people monthly to use it. The goal is to ship something that works, get your first paying user, then improve. Most SaaS projects die because they over-engineer before validating. Ship in weeks, not months.",
    "stackNodes": [
      "Next.js",
      "Supabase",
      "Clerk",
      "Stripe",
      "Resend",
      "Cloudflare",
      "PostHog",
      "Railway"
    ],
    "tools": [
      {
        "id": "nextjs",
        "rationale": "The industry standard React framework."
      },
      {
        "id": "supabase",
        "rationale": "The ultimate open-source Firebase alternative."
      },
      {
        "id": "clerk",
        "rationale": "Complete authentication and user management."
      },
      {
        "id": "stripe",
        "rationale": "The industry standard for payments."
      },
      {
        "id": "resend",
        "rationale": "The cleanest email API available."
      },
      {
        "id": "cloudflare",
        "rationale": "DDoS protection, DNS, CDN, and Edge computing."
      },
      {
        "id": "posthog",
        "rationale": "Replaces Google Analytics + Mixpanel + Hotjar in one tool."
      },
      {
        "id": "railway",
        "rationale": "Zero-config deployment platform."
      }
    ],
    "insight": "Launch with a waitlist before you build. Use Carrd ($19/yr) + Resend to collect emails. If nobody signs up, you saved 3 months of building. If 50 people sign up, now you know you're building something real."
  },
  "mobile": {
    "title": "Build a Mobile App",
    "description": "Mobile app = something that runs on iPhone/Android. The modern path is React Native + Expo \u2014 write JavaScript/TypeScript once, runs on both platforms. You do NOT need to learn Swift and Kotlin separately. That's the old path.",
    "stackNodes": [
      "Expo",
      "Expo Router",
      "NativeWind",
      "Zustand",
      "MMKV",
      "Supabase",
      "EAS Build",
      "RevenueCat."
    ],
    "tools": [
      {
        "id": "expo",
        "rationale": "The single best decision you can make building a mobile app in 2025. Managed build system, OTA updates (push updates without an App Store review), 50+ built-in native APIs (camera, GPS, notifications), runs on iOS/Android/web from one codebase. Bare React Native without Expo is a full-time job."
      },
      {
        "id": "expo-router",
        "rationale": "File-based routing for React Native \u2014 same mental model as Next.js. Put a file in `app/profile.tsx`, you have a `/profile` screen. Deep linking works automatically. Navigation is solved."
      },
      {
        "id": "nativewind",
        "rationale": "Tailwind CSS for React Native. `className=\"flex-1 bg-black p-4\"` works exactly as you'd expect. If you know Tailwind on web, you know NativeWind. The alternative (StyleSheet) is verbose and painful."
      },
      {
        "id": "mmkv",
        "rationale": "Faster replacement for AsyncStorage (React Native's built-in local storage). Reads 30\u00d7 faster. For persisting small data (settings, tokens, cached responses) this is the correct choice, not AsyncStorage."
      },
      {
        "id": "zustand",
        "rationale": "Same state management you'd use on web. Works perfectly in React Native. No boilerplate. One file, one store, done."
      },
      {
        "id": "eas-build",
        "rationale": "Cloud build system for iOS/Android. No Mac required for iOS builds (huge). Handles certificates, provisioning profiles, signing. Submits to App Store / Play Store directly. What used to take a week of setup now takes one afternoon."
      },
      {
        "id": "revenuecat",
        "rationale": "In-app subscriptions and one-time purchases. Handles iOS, Android, and web. The alternative \u2014 implementing StoreKit directly \u2014 is months of work and bugs. RevenueCat's SDK is a few lines. Their free tier covers most indie apps."
      },
      {
        "id": "sentry",
        "rationale": "Crash reporting. Mobile apps crash in ways web apps don't. Without Sentry you find out about crashes from 1-star App Store reviews. With Sentry you find out with full stack traces before your users complain."
      }
    ],
    "insight": "Submit a TestFlight build before you submit to the App Store. Apple review takes 1\u20133 days. TestFlight is instant. Test on real hardware early \u2014 simulator lies to you about performance."
  },
  "osint": {
    "title": "Build a Cybersecurity / OSINT Tool",
    "description": "OSINT = Open Source Intelligence. Tools in this category collect, analyse, and visualise publicly available information. Everything here is legal and uses public data or legitimate APIs. These aren't hacking tools. Think: \"who owns this domain, what services are running on this IP, is this email address registered on breach databases.\"",
    "stackNodes": [
      "FastAPI",
      "PostgreSQL",
      "Neo4j",
      "Shodan API",
      "theHarvester",
      "Holehe",
      "Semgrep",
      "Wazuh."
    ],
    "tools": [
      {
        "id": "shodan",
        "rationale": "Shodan crawls the entire internet and indexes every open port, service banner, and device. Their API lets you query this programmatically \u2014 `shodan.host(\"1.2.3.4\")` returns every open service on that IP. For building recon tools, this is the highest-signal API available."
      },
      {
        "id": "holehe",
        "rationale": "Give it an email address, it checks 120+ services to see which ones that email is registered on. Fast, clean Python library, easy to integrate. Underused because most OSINT tool lists skip it."
      },
      {
        "id": "ghunt",
        "rationale": "Investigate a Google account from just an email address. Returns linked Google services, profile info, last seen dates. The kind of tool people don't know exists until they see it."
      },
      {
        "id": "theharvester",
        "rationale": "Collects emails, subdomains, IPs, and URLs from public sources (search engines, LinkedIn, DNS) automatically. Add it as a Python subprocess to your pipeline. Use it as the \"first sweep\" of any domain investigation."
      },
      {
        "id": "semgrep",
        "rationale": "Static analysis tool for finding security bugs in code. Free for open-source. Write a rule once (`pattern: exec($X)`) and it finds that pattern across an entire codebase in seconds. Better signal-to-noise than most commercial SAST tools."
      },
      {
        "id": "trufflehog",
        "rationale": "Scans git history for leaked API keys, secrets, and credentials. Catches things that shouldn't have been committed. Run it on your own repos before anyone else does."
      },
      {
        "id": "wazuh",
        "rationale": "Open-source SIEM (Security Information and Event Management). Replaces tools that cost $50k+/year. Collects logs from every system, detects anomalies, runs integrity checks, alerts on suspicious activity. If you're building a security monitoring platform, study Wazuh's architecture first."
      },
      {
        "id": "neo4j",
        "rationale": "Graph database. OSINT is fundamentally about relationships \u2014 this domain connects to this IP connects to this company connects to this person. A graph database makes this queryable. The Cypher query language is learnable in a day."
      }
    ],
    "insight": "Before writing any code, map the data sources manually first. Run theHarvester by hand, look at Shodan in the browser, use Holehe in the CLI. Understand what data looks like before you try to automate it."
  },
  "backend": {
    "title": "Build a Backend & API",
    "description": "The engine that runs your business logic and stores data. Start serverless.",
    "stackNodes": [
      "Supabase",
      "Neon",
      "Firebase",
      "FastAPI",
      "n8n"
    ],
    "tools": [
      {
        "id": "supabase",
        "rationale": "PostgreSQL with instant APIs."
      },
      {
        "id": "neon",
        "rationale": "Serverless Postgres built for the cloud."
      },
      {
        "id": "firebase",
        "rationale": "Googles complete backend-as-a-service."
      },
      {
        "id": "n8n",
        "rationale": "Free and open node based Workflow Automation Tool."
      }
    ],
    "insight": "Start with a Backend-as-a-Service like Supabase. Only write custom backend code when your BaaS literally cannot do it."
  }
};

export function BuildIntent({ params }: { params?: { intent?: string } }) {
  const intentId = params?.intent || "website";
  const data = SPECIALIZED_INTENTS[intentId] || SPECIALIZED_INTENTS["website"];
  
  // Format the title by removing any numbering like "Build a Website / Landing Page"
  usePageTitle(`Build a ${data.title}`);

  return (
    <div className="min-h-screen bg-transparent pt-32 pb-32">
      <div className="container max-w-5xl relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-white text-4xl md:text-6xl font-playfair italic mb-6 animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            Building a {data.title}
          </h1>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards]">
            <p className="text-foreground/90 text-lg leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>

        {/* Recommended Stack */}
        <div className="mb-24 animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
          <h2 className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-6">
            Recommended Starting Stack
          </h2>
          <div className="flex flex-wrap items-center gap-y-4 gap-x-2 md:gap-x-4">
            {data.stackNodes.map((node, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-4">
                <div className="bg-foreground text-background font-medium px-4 py-2 rounded-full text-sm shadow-sm">
                  {node}
                </div>
                {i < data.stackNodes.length - 1 && (
                  <ChevronRight className="text-white/30 w-5 h-5" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tool List */}
        <div className="mb-32">
          <h2 className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-8">
            The Specialized Toolkit
          </h2>
          <div className="flex flex-col gap-6">
            {data.tools.map((curated, index) => {
              const tool = tools.find(t => t.id === curated.id);
              if (!tool) return null;

              return (
                <div key={tool.id} className="flex flex-col md:flex-row gap-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-all animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]" style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}>
                  {/* Left: Tool Card */}
                  <div className="md:w-[45%] shrink-0">
                    <ToolCard tool={tool} />
                  </div>
                  
                  {/* Right: Rationale */}
                  <div className="md:w-[55%] flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                    <h3 className="text-white font-medium text-xl mb-4">
                      Why this one, not the obvious one
                    </h3>
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      {curated.rationale}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Insight Quote */}
        <div className="bg-gradient-to-r from-primary/20 via-transparent to-transparent border-l-4 border-primary p-8 md:p-12 rounded-r-3xl animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]">
          <div className="flex gap-4 items-start">
            <Lightbulb className="w-8 h-8 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-semibold text-xl mb-3">
                One thing nobody tells beginners
              </h4>
              <p className="text-foreground/90 text-lg leading-relaxed italic">
                "{data.insight}"
              </p>
            </div>
          </div>
        </div>

      </div>
      <SearchDock />
    </div>
  );
}
