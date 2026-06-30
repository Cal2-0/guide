export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  icon?: string;
  isCloneOf?: string;
  likes?: number;
  createdAt?: string;
}

export interface Stack {
  id: string;
  name: string;
  description: string;
  tools: string[];
  icon?: string;
}

export interface Clone {
  id: string;
  paid: string;
  free: string;
  paidUrl: string;
  freeUrl: string;
}

import { categories } from "./toolsDataArticle";

export const tools: Tool[] = (() => {
  const toolMap = new Map<string, Tool>();

  categories.forEach((cat, cIdx) => {
    cat.subcategories.forEach((sub, sIdx) => {
      sub.tools.forEach((tool, tIdx) => {
        // Deterministic random generation based on indexes
        const pseudoRandom = Math.sin(cIdx * 100 + sIdx * 10 + tIdx + 1) * 10000;
        const likes = Math.floor(Math.abs(pseudoRandom % 4000)) + 42;
        const createdAt = new Date(Date.now() - Math.floor(Math.abs(pseudoRandom % (1000 * 60 * 60 * 24 * 365 * 2)))).toISOString();
        
        const newTool = {
          ...tool,
          category: cat.name,
          likes,
          createdAt
        };

        if (toolMap.has(tool.id)) {
          const existingCat = toolMap.get(tool.id)!.category;
          const isCurrentGeneric = cat.name === "Curated Collections" || cat.name === "Open Source & Alternatives";
          const isExistingGeneric = existingCat === "Curated Collections" || existingCat === "Open Source & Alternatives";
          
          if (isExistingGeneric && !isCurrentGeneric) {
            toolMap.set(tool.id, newTool);
          }
        } else {
          toolMap.set(tool.id, newTool);
        }
      });
    });
  });

  return Array.from(toolMap.values());
})();

export const stacks: Stack[] = [
  {
    id: "stack-saas",
    name: "Beginner SaaS Stack",
    description: "The fastest path from idea to production SaaS — auth, DB, payments and email handled.",
    tools: ["nextjs", "supabase-db", "clerk-auth", "stripe", "resend", "vercel", "posthog"],
    icon: "🚀",
  },
  {
    id: "stack-ai-saas",
    name: "AI SaaS Stack",
    description: "Build LLM-powered products with agent workflows, vector search and streaming.",
    tools: ["nextjs", "openrouter", "qdrant", "langgraph", "stripe", "vercel", "sentry"],
    icon: "🤖",
  },
  {
    id: "stack-landing",
    name: "Landing Page Stack",
    description: "Ship a stunning, animated landing page in hours — no design agency needed.",
    tools: ["framer", "motionsites", "21st-dev", "magic-ui", "resend", "launchlist"],
    icon: "🎨",
  },
  {
    id: "stack-ai-agent",
    name: "AI Agent Stack",
    description: "Full autonomous agent system with memory, tools, RAG and orchestration.",
    tools: ["openai", "langgraph", "qdrant", "redis", "dify", "fastapi"],
    icon: "🧠",
  },
  {
    id: "stack-mobile",
    name: "Mobile App Stack",
    description: "Cross-platform mobile app with authentication, backend and payments.",
    tools: ["react-native", "expo", "supabase", "clerk", "stripe"],
    icon: "📱",
  },
  {
    id: "stack-blockchain",
    name: "Blockchain Forensics Stack",
    description: "On-chain intelligence platform with transaction tracing and wallet analysis.",
    tools: ["nextjs", "postgresql", "redis", "alchemy", "etherscan", "defi-llama", "neo4j"],
    icon: "⛓️",
  },
  {
    id: "stack-osint",
    name: "OSINT Platform Stack",
    description: "Open-source intelligence gathering system with automated reconnaissance.",
    tools: ["fastapi", "postgresql", "sherlock", "spiderfoot", "neo4j", "maltego"],
    icon: "🔍",
  },
];

export const clones: Clone[] = [
  {
    id: "perplexity-clone",
    paid: "Perplexity AI",
    free: "Perplexica",
    paidUrl: "https://www.perplexity.ai",
    freeUrl: "https://github.com/ItzCrazyKns/Perplexica",
  },
  {
    id: "chatgpt-clone",
    paid: "ChatGPT",
    free: "LibreChat",
    paidUrl: "https://chatgpt.com",
    freeUrl: "https://www.librechat.ai",
  },
  {
    id: "langsmith-clone",
    paid: "LangSmith",
    free: "Dify",
    paidUrl: "https://www.langchain.com/langsmith",
    freeUrl: "https://dify.ai",
  },
  {
    id: "calendly-clone",
    paid: "Calendly",
    free: "Cal.com",
    paidUrl: "https://calendly.com",
    freeUrl: "https://cal.com",
  },
  {
    id: "intercom-clone",
    paid: "Intercom",
    free: "Chatwoot",
    paidUrl: "https://www.intercom.com",
    freeUrl: "https://www.chatwoot.com",
  },
  {
    id: "google-analytics-clone",
    paid: "Google Analytics",
    free: "Plausible",
    paidUrl: "https://analytics.google.com",
    freeUrl: "https://plausible.io",
  },
  {
    id: "mixpanel-clone",
    paid: "Mixpanel",
    free: "PostHog",
    paidUrl: "https://mixpanel.com",
    freeUrl: "https://posthog.com",
  },
  {
    id: "firebase-clone",
    paid: "Firebase",
    free: "Supabase",
    paidUrl: "https://firebase.google.com",
    freeUrl: "https://supabase.com",
  },
  {
    id: "heroku-clone",
    paid: "Heroku",
    free: "Coolify",
    paidUrl: "https://www.heroku.com",
    freeUrl: "https://coolify.io",
  },
  {
    id: "figma-clone",
    paid: "Figma",
    free: "Penpot",
    paidUrl: "https://www.figma.com",
    freeUrl: "https://penpot.app",
  },
  {
    id: "zapier-clone",
    paid: "Zapier",
    free: "n8n",
    paidUrl: "https://zapier.com",
    freeUrl: "https://n8n.io",
  },
  {
    id: "algolia-clone",
    paid: "Algolia",
    free: "Meilisearch",
    paidUrl: "https://www.algolia.com",
    freeUrl: "https://www.meilisearch.com",
  },
  {
    id: "salesforce-clone",
    paid: "Salesforce",
    free: "Twenty CRM",
    paidUrl: "https://www.salesforce.com",
    freeUrl: "https://twenty.com",
  },
  {
    id: "github-clone",
    paid: "GitHub (self-hosted)",
    free: "Gitea",
    paidUrl: "https://github.com",
    freeUrl: "https://gitea.io",
  },
];
