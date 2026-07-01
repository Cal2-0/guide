# How to Start — The Honest Guide
### From "I have an idea" to "it's live and real people are using it"

Written as a senior dev talking to their younger self.
No jargon without explanation. No steps skipped. No assumed knowledge.

---

## Before you touch any code

### The one question that kills most projects

> "Am I solving a problem that already exists, or inventing a problem to justify my tool?"

Most projects that die in week 3 die here. The builder fell in love with the technology and forgot to ask whether anyone else cares about the output.

**How to answer it honestly:**

1. Describe the problem in one sentence without mentioning your solution.
   - ❌ "Developers need a faster way to use Claude Code"
   - ✅ "Developers lose hours setting up new projects from scratch every time they start something new"
2. Find 3 people who have that problem right now. Not people who might have it one day. People who have it today and are currently doing something annoying to solve it.
3. Ask them what they're currently using. If the answer is "nothing" — they don't actually have the problem. If the answer is "Google Sheets" or "a manual process I hate" — you're onto something.

**If you can't find 3 people in a week, pick a different problem.**

---

## Phase 1: Validate (before writing one line of code)

**Time budget: 1–3 days maximum**

### Step 1 — Build a waiting room, not a product

You need a page that says "this is coming, give me your email." Nothing else.

**Tools needed:**
- **Carrd** ($19/year) — build a one-page site in 20 minutes, no code
- **Resend** (free tier) — collects and stores the email addresses
- **Tally.so** (free) — if you want a waitlist form with more fields than just an email

**What to put on the page:**
```
[Product Name]
One sentence: what it does and who it's for.
One sentence: why now / why this matters.
[Email field] [Join waitlist button]
```

No screenshots. No feature lists. No pricing. Just the problem, the promise, and the email field.

### Step 2 — Get 50 people to see it

Not 50 signups. 50 people who see the URL. Then you measure the conversion.

- Post in 2–3 relevant subreddits (r/webdev, r/entrepreneur, r/SideProject, r/startups)
- Share in any Discord servers or Slack groups where your target user hangs out
- Post on Twitter/X with the problem framed as a question ("does anyone else spend hours doing X manually?")
- DM 10 people you think might have the problem, genuinely ask for feedback

**If fewer than 20% leave their email:** the idea needs rethinking or the page needs rewriting.
**If more than 20% leave their email:** start building.

---

## Phase 2: Choose Your Stack

### The rule before you choose anything

> Choose boring technology you understand over exciting technology you don't.

A working app built with "old" tools ships. A half-built app that uses every new framework doesn't.

---

### Path A: Building a Website or Landing Page

**Who this is for:** You want a public-facing page for a product, portfolio, blog, or campaign.

**The 30-minute path (no code):**
1. Go to **Framer** (framer.com)
2. Pick a template or start blank
3. Design it visually
4. Hit publish
5. Add your custom domain
6. Done. This is a real website. It's fast. It looks good.

**The code path (when Framer isn't enough):**
```bash
npm create vite@latest my-site -- --template react-ts
cd my-site
npm install
npm install -D tailwindcss @tailwindcss/vite
```
Then deploy to **Vercel** — `npx vercel` in your project folder, follow the prompts, live in 2 minutes.

**Add analytics on day one:**
- Sign up for **Umami** (free tier or self-hosted on Railway)
- Paste one `<script>` tag in your HTML
- Now you know if anyone is actually visiting

---

### Path B: Building an AI App

**Who this is for:** You want to build something that calls an LLM and does something with the response.

**The absolute minimum to get started:**

1. Get one API key from **OpenRouter** (openrouter.ai) — no credit card needed for free models
2. Create a Next.js app:
```bash
npx create-next-app@latest my-ai-app --typescript --tailwind
cd my-ai-app
npm install openai  # OpenRouter is OpenAI-compatible, so this SDK works
```

3. Create `app/api/chat/route.ts`:
```typescript
import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await client.chat.completions.create({
    model: 'meta-llama/llama-3.3-70b-instruct:free',  // free model
    messages: [{ role: 'user', content: message }],
  });

  return Response.json({ reply: response.choices[0].message.content });
}
```

4. Add a simple chat input in your frontend that calls this endpoint.
5. You now have a working AI app.

**When to add a database:** The moment you need to store conversations, user accounts, or any data that needs to persist. Use **Supabase** — it gives you Postgres, auth, and storage in one free tier.

**When to add RAG (making the AI read your documents):**
```bash
npm install llamaindex
```
LlamaIndex handles the chunking, embedding, and retrieval. Don't build this yourself from scratch.

---

### Path C: Building a SaaS (something you charge money for)

**Who this is for:** You want people to pay you monthly to use what you built.

**The stack that lets one person ship and charge within 2 weeks:**

```bash
npm create t3-app@latest
# Select: TypeScript, Tailwind, tRPC, NextAuth, Prisma, App Router
```

This gives you a full-stack foundation in one command.

**Add these on top:**

| Need | Tool | Why |
|---|---|---|
| Database | **Supabase** (free tier) | Postgres + auth + storage + realtime. One dashboard. |
| Auth | **Better Auth** | Free, TypeScript-native. No per-user bills. |
| Payments | **Lemon Squeezy** | They handle VAT/tax globally. You don't. |
| Email | **Resend** + React Email | Write email templates in JSX. Actually pleasant. |
| Secrets | **Infisical** | Stop putting keys in `.env` files. |
| Analytics | **PostHog** | One install. Replaces analytics + session replay + feature flags. |
| Deploy | **Railway** | Connect your GitHub repo. Push = deploy. |

**The checkout flow in plain English:**
1. User clicks "Subscribe"
2. Lemon Squeezy popup opens (their hosted checkout, no extra code)
3. User pays
4. Lemon Squeezy sends a webhook to your API
5. Your API receives the webhook, updates the user's `plan` field in Supabase to `"pro"`
6. User now has access to pro features

**The rule for what's behind a paywall:** Only put things behind the paywall once a free user would genuinely want them. If nothing in your free tier is valuable, users never reach the paywall.

---

### Path D: Building a Mobile App

**Who this is for:** You want an app on the App Store or Google Play.

**The only path that makes sense for one developer in 2025:**

```bash
npm install -g expo-cli
npx create-expo-app@latest MyApp --template
cd MyApp
npm start
```

Scan the QR code with the **Expo Go** app on your phone. Your app is running on your real device. No simulator, no build step, no waiting.

**The files you'll edit 90% of the time:**
- `app/(tabs)/index.tsx` — your home screen
- `app/(tabs)/explore.tsx` — a second screen
- `components/` — reusable pieces

**Add styling that works:**
```bash
npm install nativewind
```
Now `className="flex-1 bg-black p-4"` works exactly like Tailwind on web.

**When you're ready to submit to the App Store:**
1. Create an **Apple Developer account** ($99/year — there's no way around this)
2. Install **EAS CLI**: `npm install -g eas-cli`
3. Run `eas build --platform ios` — EAS builds it in the cloud, no Mac required
4. Run `eas submit --platform ios` — submits directly to App Store Connect
5. Wait 1–3 days for Apple review

**The most common mistake:** Not testing on a real device early enough. The simulator lies about performance. Borrow a friend's phone if you don't have one.

---

## Phase 3: Build It (the actual construction)

### Setting up your environment once, correctly

**The tools every developer needs before starting any project:**

1. **VS Code** or **Cursor** (Cursor if you want AI help while coding)
2. **Node.js** — install via `nvm` (Node Version Manager), not the Node website directly
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   nvm install 20
   nvm use 20
   ```
3. **Git** — for saving your work and deploying
   ```bash
   git init
   git add .
   git commit -m "first commit"
   ```
4. **A GitHub account** — free, where your code lives, connects to all deployment platforms
5. **A `.env` file** for secrets — never commit this to GitHub

**Your `.gitignore` must include at minimum:**
```
.env
.env.local
node_modules/
.next/
dist/
```

### How to use AI coding tools correctly

AI coding tools (Claude Code, Cursor, Copilot) are tools, not magic.
They work best when you:

1. **Give them context.** Don't say "make a login page." Say "using Next.js 14, Supabase auth, and shadcn/ui components, create a login page with email/password that redirects to /dashboard on success."
2. **Review everything they write.** You are the senior engineer. The AI is your junior. Review its PRs.
3. **Break big tasks into small ones.** "Build me a SaaS" doesn't work. "Create a Supabase client singleton" works.
4. **Tell it when it's wrong.** "That approach will cause issues with React's re-render cycle — use useCallback here instead."

**The `CLAUDE.md` trick:** Create a file at the root of your project called `CLAUDE.md` and fill it with your tech stack, conventions, and project context. Every Claude Code session reads this first. It's the difference between an AI that fights your codebase and one that extends it correctly.

---

## Phase 4: Deploy It

### The first deploy should happen before you think you're ready

Most beginners wait until everything is "done" to deploy. This is wrong.

Deploy on day 1, even with one feature working. You learn things from a real deployment (environment variables, build errors, domain config) that you can't learn locally. Get the pain out of the way early.

### The fastest deploy paths by platform

**Frontend / Full-stack Next.js:**
```bash
npm install -g vercel
vercel
# Follow the prompts. Done. Your app is live in 2 minutes.
```
Free tier includes HTTPS, automatic deployments on `git push`, serverless functions, and a `.vercel.app` domain.

**Backend (FastAPI / Express / any server):**
1. Go to railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway detects the framework and deploys it
5. Add environment variables in their dashboard
6. Done

**Database:**
- **Supabase** — go to supabase.com, create a project, copy the connection string into your `.env`
- **Railway Postgres** — when you add a PostgreSQL plugin to a Railway project, it's one click

**Custom domain:**
1. Buy a domain on **Namecheap** or **Cloudflare Registrar** (~$10–15/year for `.com`)
2. In Vercel/Railway, go to Settings → Domains → Add domain
3. They show you DNS records to add. Add them in your registrar's DNS settings.
4. Wait 5–30 minutes for DNS to propagate. Done.

---

## Phase 5: Get Your First Users

### The honest version of "launch strategy"

Product Hunt launches are overrated for early-stage products. They generate noise, not retention. Here's what actually works when you're just starting:

**Week 1 after launch — find 10 users manually:**
- Reach out to the 3 people who confirmed they had the problem (Phase 1)
- Ask them to use it right now, while you watch (even over a Zoom call)
- Watch where they get confused — that's your bug list

**Week 2 — be where the problem is discussed:**
- Go back to the subreddits and communities you posted in before launch
- Now you have something to show. Comment on threads where people are complaining about the problem you solve. Don't spam — add value, mention your tool once.

**Ongoing — the content flywheel (if you want organic growth):**
- Write one post per week about something you learned building the thing
- Post it on Dev.to, HackerNews (Show HN: format), and your own blog
- The goal is "people who have the problem find your post when they search for solutions"

---

## The decisions that matter most (and the ones that don't)

### Decisions that genuinely matter
- **Do people want this?** (Validate before building)
- **Can people find it?** (Distribution/marketing)
- **Does it work reliably?** (Quality over features)
- **Do paying users get more value?** (Monetization design)

### Decisions that feel important but aren't (yet)
- **Which framework?** — Use whatever you know. Ship first.
- **SQL vs NoSQL?** — Use Postgres (Supabase). 99% of apps never need anything else.
- **Microservices vs monolith?** — Monolith. Always start with a monolith.
- **Which cloud provider?** — Railway or Vercel until you're doing serious volume.
- **TypeScript or JavaScript?** — TypeScript. The autocomplete and error catching pay off within hours.
- **Which testing framework?** — Write tests for your critical paths only. Don't test everything before you ship.

---

## The mental model that changes everything

A senior developer doesn't know more syntax than a junior. They've just made more mistakes, so they've learned what to do early and what to do later.

The early list (do this before anything else):
- Validate the problem
- Ship something real, even if it's ugly
- Get one paying user
- Talk to them

The later list (do this after the above):
- Optimize performance
- Refactor the architecture
- Add tests
- Scale the infrastructure

Most beginners do the later list first and run out of energy before they get to the early list.

**Ship the thing. Then improve it.**

---

## Quick Reference: Costs for your first project

| Category | Tool | Cost |
|---|---|---|
| Domain | Cloudflare Registrar | ~$10/year |
| Frontend hosting | Vercel | Free tier |
| Backend hosting | Railway | Free tier (5$/mo after) |
| Database | Supabase | Free tier (500MB) |
| Auth | Better Auth | Free |
| Email | Resend | Free (3k emails/mo) |
| AI API | OpenRouter | Free models available |
| Analytics | PostHog | Free (1M events/mo) |
| Error tracking | Sentry | Free tier |
| Payments | Lemon Squeezy | 5% + $0.50 per transaction |
| **Total monthly until traction** | | **~$0–5/month** |

You can build and run a real product for the cost of a coffee until you have revenue. The tools have never been more generous. The only thing standing between you and a live product is starting.
