# Build Intent — Specialized Tool Picks
### Only the best. Honest opinions. No fluff.

These aren't the tools that show up on every "top 10" list.
These are the ones senior devs actually use, recommend privately, and wish they'd found earlier.
Each category has **one recommended starting stack** at the top, then the tools unpacked below.

---

## 01 — Build a Website / Landing Page

> **If you're reading this as a beginner:** A "website" means something people visit in a browser.
> A landing page is a single page designed to get someone to click, sign up, or buy.
> Start here. It's the fastest thing to ship and shows you the whole build-deploy loop in one sitting.

**Recommended starting stack:**
`Framer` (design + host) → `Fontsource` (fonts) → `Haikei` (backgrounds) → `AutoAnimate` (motion) → `Umami` (analytics) → done.

| Tool | Why this one, not the obvious one |
|---|---|
| **Framer** | Not just a design tool — it *is* the website. You design it and it's live. No code needed to start, full code control when you're ready. Vercel/Webflow users switch to this and don't go back. |
| **MotionSites.ai** | Gives you premium animated "recipes" — copy the prompt, paste into Claude/Cursor, get a 3D animated hero in minutes. Saves 4–6 hours of animation work per page. |
| **Fontsource** — `npm install @fontsource/inter` | Self-hosted Google Fonts via npm. Zero latency, no GDPR cookie banner, 0ms font flash. This single change measurably improves your Lighthouse score. Most devs skip it and wonder why their fonts feel slow. |
| **Haikei** | Generates unique SVG blob shapes, wave dividers, and layered backgrounds. Free, browser-based, instant download. Replaces hiring a designer for background assets. |
| **AutoAnimate** — `useAutoAnimate()` | One hook. Adds smooth list/conditional animations to any React component with literally one line. No keyframes. No Framer Motion config. Just works. |
| **Cruip** | Pre-built React + Tailwind landing page templates. Clean, dark, premium. Not Bootstrap. Costs nothing. Cut your starting time by a day. |
| **Umami** | Open-source, self-hostable Google Analytics alternative. No cookies, no GDPR issues, no selling user data to Google. Deploy on Railway in 3 minutes. |
| **Shape Divider** | Browser tool that generates CSS wave/curve section separators. Paste the CSS, done. Replaces a Figma design session. |

**One thing nobody tells beginners:** Your website doesn't need to be custom-coded. Ship Framer first, validate that people care, then rebuild in code if the traffic warrants it.

---

## 02 — Build an AI App

> **If you're reading this as a beginner:** An "AI app" means you call an LLM (like Claude or GPT)
> from your code and build something around it — a chatbot, a document analyser, a coding tool, anything.
> You don't train a model. You use one that already exists.

**Recommended starting stack:**
`OpenRouter` (model API) → `Groq` (fast free inference) → `LlamaIndex` (if you need document search) → `pgvector` (vector storage in Postgres you already have) → `Pydantic AI` (agents) → `Dify` (if you want visual wiring first).

| Tool | Why this one, not the obvious one |
|---|---|
| **OpenRouter** | One API key, 100+ models (Claude, GPT, Gemini, Llama, Mistral). Automatic fallback if a model is down. Free tier requires no credit card. **Start every AI project here, not on OpenAI directly.** It future-proofs your model choice. |
| **Groq** | Free tier. Runs LLaMA 3.3 70B at 320 tokens/second — literally 10× faster than OpenAI in practice. For prototyping and demos where speed matters, nothing touches it. |
| **Cerebras** | Even less known than Groq. Free tier, 1M token context, LLaMA 3.3. Use this when Groq's free limits run out. |
| **LlamaIndex** | Better than LangChain for RAG (retrieval-augmented generation — making AI read your documents). Cleaner API, faster to prototype, easier to debug. LangChain is famous but confusing. Start with LlamaIndex. |
| **pgvector** | Postgres extension that adds vector similarity search. If you're already using Supabase, **you already have this**. Most beginners don't know pgvector exists and pay for a separate vector database they don't need yet. |
| **Pydantic AI** | Type-safe agent framework from the Pydantic team. If you know Python and type hints, this clicks immediately. Cleaner than CrewAI, less ceremony than AutoGen. |
| **Dify** | Visual drag-and-drop builder for LLM workflows. Great for: validating an idea before coding it, building a version for a non-technical client, wiring together RAG + agent + tool calls without writing glue code first. |
| **LiteLLM** | A gateway that normalizes 100+ LLM APIs into one OpenAI-compatible interface. Drop this in front of your AI calls so swapping models is one config change, not a code rewrite. |

**One thing nobody tells beginners:** Your first AI app should have a narrow, specific purpose. "I want to make ChatGPT but better" doesn't ship. "I want to let people upload a PDF and ask questions about it" ships in a weekend.

---

## 03 — Build a SaaS / Startup

> **If you're reading this as a beginner:** SaaS = Software as a Service.
> You build an app, you charge people monthly to use it.
> The goal is to ship something that works, get your first paying user, then improve.
> Most SaaS projects die because they over-engineer before validating. Ship in weeks, not months.

**Recommended starting stack:**
`Next.js` → `Supabase` → `Better Auth` → `Drizzle ORM` → `Resend` → `Lemon Squeezy` → `Railway` → `PostHog` → `Infisical`.

| Tool | Why this one, not the obvious one |
|---|---|
| **Better Auth** | TypeScript-native auth library. Free, self-hosted, no per-user billing (unlike Clerk which gets expensive fast). Full session management, OAuth, email/password, MFA — all included. Beginners choose Clerk, then get surprised by the bill at 1000 users. |
| **Drizzle ORM** | Lighter than Prisma, TypeScript-first, SQL-like syntax that actually makes sense. Schema migrations are fast. Type safety is automatic. If you know SQL already, Drizzle feels like SQL with superpowers. |
| **Resend** + **React Email** | The cleanest email API available. Write your emails in React components (actual JSX). `resend.send({ to, from, react: <WelcomeEmail /> })`. Done. Replaces hours of HTML email hell. |
| **Lemon Squeezy** | Handles payments AND acts as merchant of record — meaning they deal with EU VAT, sales tax, compliance. You don't. Stripe is more powerful but doesn't handle tax for you. For a solo founder shipping internationally, Lemon Squeezy saves weeks of legal headaches. |
| **Infisical** | Open-source secrets manager. Your `.env` file is a liability — leaked once on GitHub and you're rebuilding everything. Infisical syncs secrets across environments and team members, and it's self-hostable. |
| **PostHog** | Replaces Google Analytics + Mixpanel + Hotjar in one tool. Open source, self-hostable. Session replay, funnels, feature flags, A/B tests, all in one dashboard. Free tier is generous. Most beginners don't track anything; PostHog makes tracking easy enough to actually do. |
| **Railway** | Zero-config deployment. Push your repo, Railway detects the framework, deploys it, attaches a Postgres database, assigns a domain. Cheaper than Render at scale, faster to configure than AWS. Best first deployment platform. |
| **T3 Stack** — `npm create t3-app@latest` | Pre-wired Next.js + TypeScript + Tailwind + tRPC + Prisma + NextAuth boilerplate. Run one command, get a production-ready foundation. Saves 2–3 days of project setup. |

**One thing nobody tells beginners:** Launch with a waitlist before you build. Use Carrd ($19/yr) + Resend to collect emails. If nobody signs up, you saved 3 months of building. If 50 people sign up, now you know you're building something real.

---

## 04 — Build a Mobile App

> **If you're reading this as a beginner:** Mobile app = something that runs on iPhone/Android.
> The modern path is React Native + Expo — write JavaScript/TypeScript once, runs on both platforms.
> You do NOT need to learn Swift and Kotlin separately. That's the old path.

**Recommended starting stack:**
`Expo` → `Expo Router` → `NativeWind` → `Zustand` → `MMKV` → `Supabase` → `EAS Build` → `RevenueCat`.

| Tool | Why this one, not the obvious one |
|---|---|
| **Expo** | The single best decision you can make building a mobile app in 2025. Managed build system, OTA updates (push updates without an App Store review), 50+ built-in native APIs (camera, GPS, notifications), runs on iOS/Android/web from one codebase. Bare React Native without Expo is a full-time job. |
| **Expo Router** | File-based routing for React Native — same mental model as Next.js. Put a file in `app/profile.tsx`, you have a `/profile` screen. Deep linking works automatically. Navigation is solved. |
| **NativeWind** | Tailwind CSS for React Native. `className="flex-1 bg-black p-4"` works exactly as you'd expect. If you know Tailwind on web, you know NativeWind. The alternative (StyleSheet) is verbose and painful. |
| **MMKV** | Faster replacement for AsyncStorage (React Native's built-in local storage). Reads 30× faster. For persisting small data (settings, tokens, cached responses) this is the correct choice, not AsyncStorage. |
| **Zustand** | Same state management you'd use on web. Works perfectly in React Native. No boilerplate. One file, one store, done. |
| **EAS Build** — Expo Application Services | Cloud build system for iOS/Android. No Mac required for iOS builds (huge). Handles certificates, provisioning profiles, signing. Submits to App Store / Play Store directly. What used to take a week of setup now takes one afternoon. |
| **RevenueCat** | In-app subscriptions and one-time purchases. Handles iOS, Android, and web. The alternative — implementing StoreKit directly — is months of work and bugs. RevenueCat's SDK is a few lines. Their free tier covers most indie apps. |
| **Sentry** | Crash reporting. Mobile apps crash in ways web apps don't. Without Sentry you find out about crashes from 1-star App Store reviews. With Sentry you find out with full stack traces before your users complain. |

**One thing nobody tells beginners:** Submit a TestFlight build before you submit to the App Store. Apple review takes 1–3 days. TestFlight is instant. Test on real hardware early — simulator lies to you about performance.

---

## 05 — Build a Cybersecurity / OSINT Tool

> **If you're reading this as a beginner:** OSINT = Open Source Intelligence.
> Tools in this category collect, analyse, and visualise publicly available information.
> Everything here is legal and uses public data or legitimate APIs. These aren't hacking tools.
> Think: "who owns this domain, what services are running on this IP, is this email address
> registered on breach databases."

**Recommended starting stack:**
`FastAPI` → `PostgreSQL` → `Neo4j` → `Shodan API` → `theHarvester` → `Holehe` → `Semgrep` → `Wazuh`.

| Tool | Why this one, not the obvious one |
|---|---|
| **Shodan API** | Shodan crawls the entire internet and indexes every open port, service banner, and device. Their API lets you query this programmatically — `shodan.host("1.2.3.4")` returns every open service on that IP. For building recon tools, this is the highest-signal API available. |
| **Holehe** | Give it an email address, it checks 120+ services to see which ones that email is registered on. Fast, clean Python library, easy to integrate. Underused because most OSINT tool lists skip it. |
| **GHunt** | Investigate a Google account from just an email address. Returns linked Google services, profile info, last seen dates. The kind of tool people don't know exists until they see it. |
| **theHarvester** | Collects emails, subdomains, IPs, and URLs from public sources (search engines, LinkedIn, DNS) automatically. Add it as a Python subprocess to your pipeline. Use it as the "first sweep" of any domain investigation. |
| **Semgrep** | Static analysis tool for finding security bugs in code. Free for open-source. Write a rule once (`pattern: exec($X)`) and it finds that pattern across an entire codebase in seconds. Better signal-to-noise than most commercial SAST tools. |
| **TruffleHog** | Scans git history for leaked API keys, secrets, and credentials. Catches things that shouldn't have been committed. Run it on your own repos before anyone else does. |
| **Wazuh** | Open-source SIEM (Security Information and Event Management). Replaces tools that cost $50k+/year. Collects logs from every system, detects anomalies, runs integrity checks, alerts on suspicious activity. If you're building a security monitoring platform, study Wazuh's architecture first. |
| **Neo4j** | Graph database. OSINT is fundamentally about relationships — this domain connects to this IP connects to this company connects to this person. A graph database makes this queryable. The Cypher query language is learnable in a day. |

**One thing nobody tells beginners:** Before writing any code, map the data sources manually first. Run theHarvester by hand, look at Shodan in the browser, use Holehe in the CLI. Understand what data looks like before you try to automate it.

---

## 06 — Build a Blockchain / Web3 Project

> **If you're reading this as a beginner:** You don't need to build a token or NFT.
> The most valuable blockchain projects right now are forensics tools, on-chain analytics,
> portfolio trackers, and smart contract security scanners — not another coin.
> The tools below reflect that. This is the builder angle, not the speculator angle.

**Recommended starting stack:**
`Alchemy` → `Etherscan API` → `DefiLlama API` → `GoPlus` → `Wagmi` → `Viem` → `Blockscout` → `Hardhat`.

| Tool | Why this one, not the obvious one |
|---|---|
| **Alchemy** | The best node provider. Free tier gives you access to Ethereum, Polygon, Arbitrum, Optimism, Base, and more. Their enhanced APIs (`alchemy_getAssetTransfers`, token metadata, NFT data) return structured data that raw RPC calls don't. Most beginners waste time parsing raw blockchain data; Alchemy's APIs give you the structured version directly. |
| **Etherscan API** | The most complete transaction, contract, and token data API for Ethereum. Free tier is generous. Use `module=account&action=txlist` to pull full transaction history for any wallet. The foundation of every blockchain analytics project. |
| **DefiLlama API** | Free, no API key required. Returns TVL (Total Value Locked), protocol revenue, token prices, yields across every major DeFi protocol. If you're building anything analytics-related, DefiLlama is the data source. No authentication required to start. |
| **GoPlus Security API** | Free API that returns a security score for any token contract. Checks for honeypots, rug pull indicators, malicious functions, hidden minting. For a forensics or safety tool, this is the signal layer you can't easily replicate yourself. |
| **Viem** | Modern, TypeScript-first Ethereum library. Replaced Web3.js and is eating ethers.js's market share because it's faster, has better types, and tree-shakes to a tiny bundle. Start with Viem, not Web3.js. |
| **Wagmi** | React hooks for blockchain interaction — `useAccount()`, `useBalance()`, `useReadContract()`. If you're building a frontend that connects to wallets, Wagmi is the standard. Built on top of Viem. |
| **Blockscout** | Open-source blockchain explorer you can self-host or use their hosted instance. If you're building a forensics tool and need to let users drill into a transaction, Blockscout's API gives you the same data as Etherscan but it's open-source and you can run your own instance. |
| **Hardhat** | Local Ethereum development environment. Spin up a local blockchain, deploy contracts to it, write tests in TypeScript. The standard for smart contract development. Foundry is faster but Hardhat has better beginner documentation. |

**One thing nobody tells beginners:** You don't need to understand consensus mechanisms to build on-chain tools. You need to understand: wallets have addresses, addresses have transaction histories, transactions move tokens between addresses. Start there, the rest is data engineering.

---

## Across all 6: Universal truths

1. **Ship the ugly version first.** The tool you're embarrassed by in week 2 is the one people actually use. The polished version comes after you know what they actually need.
2. **One API key per category.** OpenRouter for AI, Alchemy for blockchain, Shodan for OSINT, Stripe/Lemon Squeezy for payments. Keep it simple until you have a reason to diversify.
3. **Railway or Render, not AWS.** AWS is for when you have DevOps headcount. Before that, you're just paying money to be confused.
4. **PostHog from day one.** You cannot improve what you cannot measure. Install it before your first real user.
5. **`.env` files are not secret management.** Use Infisical or Doppler the moment you have a second team member or a second environment.
