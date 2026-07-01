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
        "rationale": "The ultimate UI inspiration library. Don't reinvent the wheel \u2014 see exactly how top-tier apps solve navigation, onboarding, and settings. Search by specific UI patterns instead of just pretty dribbble shots."
      },
      {
        "id": "land-book",
        "rationale": "The best curated gallery of landing pages. When you need inspiration for a high-converting, beautiful hero section or pricing page, start here. The quality bar is exceptionally high."
      },
      {
        "id": "21st-dev",
        "rationale": "The npm for UI components. It aggregates the best React and Tailwind components from across the web. Find a stunning micro-interaction, copy the code, and drop it in."
      },
      {
        "id": "magic-ui",
        "rationale": "Premium React components tailored for marketing sites and landing pages. Marquees, bento grids, and animated text that would take hours to build from scratch. Makes your site feel like a million bucks."
      },
      {
        "id": "lucide",
        "rationale": "The only icon library you need. Clean, consistent, and massive. It's the community successor to Feather Icons. Don't waste time mixing and matching different icon sets \u2014 just use Lucide."
      },
      {
        "id": "framer-motion",
        "rationale": "The industry standard for React animations. Add a `motion.` prefix to your elements and you instantly get spring physics, layout animations, and gesture support. It's how the web feels alive."
      },
      {
        "id": "motionsites-ai",
        "rationale": "Gives you premium animated \"recipes\" \u2014 copy the prompt, paste into Claude/Cursor, get a 3D animated hero in minutes. Saves 4\u20136 hours of animation work per page."
      },
      {
        "id": "haikei",
        "rationale": "Generates unique SVG blob shapes, wave dividers, and layered backgrounds. Free, browser-based, instant download. Replaces hiring a designer for background assets."
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
      "Better Auth",
      "Drizzle ORM",
      "Resend",
      "Stripe",
      "Cloudflare",
      "Firebase",
      "PostHog"
    ],
    "tools": [
      {
        "id": "better-auth",
        "rationale": "TypeScript-native auth library. Free, self-hosted, no per-user billing (unlike Clerk which gets expensive fast). Full session management, OAuth, email/password, MFA \u2014 all included. Beginners choose Clerk, then get surprised by the bill at 1000 users."
      },
      {
        "id": "drizzle-orm",
        "rationale": "Lighter than Prisma, TypeScript-first, SQL-like syntax that actually makes sense. Schema migrations are fast. Type safety is automatic. If you know SQL already, Drizzle feels like SQL with superpowers."
      },
      {
        "id": "resend",
        "rationale": "The cleanest email API available. Write your emails in React components (actual JSX). `resend.send({ to, from, react: <WelcomeEmail /> })`. Done. Replaces hours of HTML email hell."
      },
      {
        "id": "stripe",
        "rationale": "The industry standard for payments. Handles subscriptions, one-time payments, and billing portals effortlessly. If you're building a real business, you'll eventually need Stripe."
      },
      {
        "id": "cloudflare",
        "rationale": "DDoS protection, DNS, CDN, and Edge computing (Workers/Pages). It's essentially the front door to the modern internet. Most SaaS products use Cloudflare."
      },
      {
        "id": "firebase",
        "rationale": "Google's complete backend-as-a-service. If you need real-time data sync across thousands of clients, Firebase Firestore is still arguably the easiest way to do it. Supabase is the SQL alternative."
      },
      {
        "id": "lemon-squeezy",
        "rationale": "Handles payments AND acts as merchant of record \u2014 meaning they deal with EU VAT, sales tax, compliance. You don't. Stripe is more powerful but doesn't handle tax for you. For a solo founder shipping internationally, Lemon Squeezy saves weeks of legal headaches."
      },
      {
        "id": "infisical",
        "rationale": "Open-source secrets manager. Your `.env` file is a liability \u2014 leaked once on GitHub and you're rebuilding everything. Infisical syncs secrets across environments and team members, and it's self-hostable."
      },
      {
        "id": "posthog",
        "rationale": "Replaces Google Analytics + Mixpanel + Hotjar in one tool. Open source, self-hostable. Session replay, funnels, feature flags, A/B tests, all in one dashboard. Free tier is generous. Most beginners don't track anything; PostHog makes tracking easy enough to actually do."
      },
      {
        "id": "railway",
        "rationale": "Zero-config deployment. Push your repo, Railway detects the framework, deploys it, attaches a Postgres database, assigns a domain. Cheaper than Render at scale, faster to configure than AWS. Best first deployment platform."
      },
      {
        "id": "t3-app",
        "rationale": "Pre-wired Next.js + TypeScript + Tailwind + tRPC + Prisma + NextAuth boilerplate. Run one command, get a production-ready foundation. Saves 2\u20133 days of project setup."
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
  "web3": {
    "title": "Build a Blockchain / Web3 Project",
    "description": "You don't need to build a token or NFT. The most valuable blockchain projects right now are forensics tools, on-chain analytics, portfolio trackers, and smart contract security scanners \u2014 not another coin. The tools below reflect that. This is the builder angle, not the speculator angle.",
    "stackNodes": [
      "Alchemy",
      "Etherscan API",
      "DefiLlama API",
      "GoPlus",
      "Wagmi",
      "Viem",
      "Blockscout",
      "Hardhat."
    ],
    "tools": [
      {
        "id": "alchemy",
        "rationale": "The best node provider. Free tier gives you access to Ethereum, Polygon, Arbitrum, Optimism, Base, and more. Their enhanced APIs (`alchemy_getAssetTransfers`, token metadata, NFT data) return structured data that raw RPC calls don't. Most beginners waste time parsing raw blockchain data; Alchemy's APIs give you the structured version directly."
      },
      {
        "id": "etherscan",
        "rationale": "The most complete transaction, contract, and token data API for Ethereum. Free tier is generous. Use `module=account&action=txlist` to pull full transaction history for any wallet. The foundation of every blockchain analytics project."
      },
      {
        "id": "defillama",
        "rationale": "Free, no API key required. Returns TVL (Total Value Locked), protocol revenue, token prices, yields across every major DeFi protocol. If you're building anything analytics-related, DefiLlama is the data source. No authentication required to start."
      },
      {
        "id": "goplus",
        "rationale": "Free API that returns a security score for any token contract. Checks for honeypots, rug pull indicators, malicious functions, hidden minting. For a forensics or safety tool, this is the signal layer you can't easily replicate yourself."
      },
      {
        "id": "viem",
        "rationale": "Modern, TypeScript-first Ethereum library. Replaced Web3.js and is eating ethers.js's market share because it's faster, has better types, and tree-shakes to a tiny bundle. Start with Viem, not Web3.js."
      },
      {
        "id": "wagmi",
        "rationale": "React hooks for blockchain interaction \u2014 `useAccount()`, `useBalance()`, `useReadContract()`. If you're building a frontend that connects to wallets, Wagmi is the standard. Built on top of Viem."
      },
      {
        "id": "blockscout",
        "rationale": "Open-source blockchain explorer you can self-host or use their hosted instance. If you're building a forensics tool and need to let users drill into a transaction, Blockscout's API gives you the same data as Etherscan but it's open-source and you can run your own instance."
      },
      {
        "id": "hardhat",
        "rationale": "Local Ethereum development environment. Spin up a local blockchain, deploy contracts to it, write tests in TypeScript. The standard for smart contract development. Foundry is faster but Hardhat has better beginner documentation."
      }
    ],
    "insight": "You don't need to understand consensus mechanisms to build on-chain tools. You need to understand: wallets have addresses, addresses have transaction histories, transactions move tokens between addresses. Start there, the rest is data engineering."
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
