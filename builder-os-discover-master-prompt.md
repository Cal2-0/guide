# Builder OS — Discover Experience Master Prompt
### Extending the Lithos-grade hero into the full product

You already shipped the hero. It's the bar. Everything below exists so the *rest* of the
product reads like it was designed in the same room, by the same person, in the same
sitting — not bolted on afterward.

---

## 0. Why the rest felt blank

The hero earns its premium feel from four things working together: a restrained palette
(charcoal + one accent), a font pairing used with discipline (Playfair only as a rare
accent, Inter for everything load-bearing), motion that always has an `easing` curve and
a `delay`, and **progressive disclosure** — nothing dumps on screen at once.

Most "tool directory" UIs break all four immediately: they go full Bootstrap-grid, throw
every card on screen at mount, and use four competing accent colors. That's the gap.
Everything below is the fix, system-wide.

---

## 1. Continuity Tokens (carry these everywhere, no exceptions)

```css
/* Color */
--bg-canvas: #0a0a0a;          /* deeper than hero black, this is "app" not "hero" */
--bg-surface: #121212;
--accent: #e8702a;             /* same orange as Start Digging — the ONE accent */
--accent-hover: #d2611f;
--glass-bg: rgba(255,255,255,0.08);
--glass-bg-strong: rgba(255,255,255,0.14);
--glass-border: rgba(255,255,255,0.14);
--text-primary: rgba(255,255,255,0.95);
--text-secondary: rgba(255,255,255,0.65);
--text-tertiary: rgba(255,255,255,0.4);

/* Type */
font-ui: 'Inter', sans-serif;           /* everything: nav, cards, body, buttons */
font-display: 'Playfair Display', serif; /* italic only. Reserve for: page H1s that open
                                            a new "stage," never for UI chrome, never for
                                            card titles, never below the fold mid-scroll. */

/* Motion */
--ease-premium: cubic-bezier(0.16, 1, 0.3, 1);  /* the exact curve from hero-reveal */
--dur-fast: 0.3s;
--dur-base: 0.6s;
--dur-slow: 1s;

/* Radii */
--r-pill: 9999px;   /* buttons, chips, search bar, nav */
--r-card: 1.5rem;   /* tool cards, panels */
```

**Rule:** if a screen doesn't use `--accent` exactly once as the loudest color on the
page, it's wrong. No per-category rainbow. One orange, used sparingly, is what makes it
look expensive.

---

## 2. New Core Components

### 2.1 `GlassPill` — icon-badge + label toggle
*(Reference: the Think / Love pill pair you sent — that exact visual language, generalized.)*

```tsx
<button className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10
                    rounded-full pl-2 pr-5 py-2 hover:bg-white/[0.14] transition-all
                    duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
  <span className="w-9 h-9 rounded-full flex items-center justify-center"
        style={{ background: iconBgColor }}>
    <Icon size={16} className="text-white" />
  </span>
  <span className="text-white text-sm font-medium">{label}</span>
</button>
```

- Inactive: `bg-white/10 border-white/10`
- Active: `bg-white/[0.16] border-white/25`, icon badge gets a subtle `shadow-[0_0_16px_rgba(232,112,42,0.35)]` if accent-colored
- Icon badge colors are the **only** place per-category color shows up (e.g. a soft blue
  for "AI/LLM," the accent orange for anything CTA-adjacent, a green for "Backend") —
  everything else on the page stays neutral
- Used for: category filter chips, view-mode toggles, tag pills on tool cards

### 2.2 `SearchDock` — bottom-left, persistent, glass
*(Your ask: bottom-left, glassmorphism, type-or-scroll, present on every post-hero screen.)*

**Collapsed (default) state** — fixed `bottom-8 left-8 z-[100]`:
```tsx
<div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/15
                rounded-full pl-5 pr-3 py-3 w-[280px] shadow-2xl shadow-black/40
                transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:bg-white/[0.14] hover:w-[320px]">
  <Search size={16} className="text-white/60" />
  <span className="text-white/50 text-sm flex-1">Search 1,000+ tools…</span>
  <kbd className="text-[10px] text-white/40 bg-white/10 border border-white/10
                  rounded-md px-1.5 py-0.5">⌘K</kbd>
</div>
```

**Expanded (focus / ⌘K) state** — the dock morphs (`layoutId` shared-element transition,
not a separate modal popping in) into a centered command palette:
```tsx
<div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-start
                justify-center pt-[18vh]">
  <div className="w-full max-w-[640px] bg-[#161616]/90 backdrop-blur-2xl border
                  border-white/15 rounded-3xl shadow-2xl overflow-hidden
                  animate-[heroReveal_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]">
    {/* input row, identical font/size to dock, just bigger: text-lg px-6 py-5 */}
    {/* below: GlassPill row for quick filters — All / Frontend / AI / OSINT / Stacks */}
    {/* below: scrollable result list, each row = icon + name + one-line desc + category tag,
       hover:bg-white/5, arrow-key navigable, Enter to go to /tool/[slug] */}
  </div>
</div>
```

- Typing filters the full flattened tool index (every entry from your master list, by
  name + tag + category) client-side, fuzzy-matched
- Scrolling the page with the dock collapsed does nothing special to it — it just sits
  there, glassy, out of the way, exactly like a Spotlight bar
- Esc or click-outside collapses it back to the dock with the same morph, not a hard cut

### 2.3 `ScrollDial` — right-edge progress indicator
*(Reference: the dashed radial dial in your screenshot — exact same idea, repurposed as
a section-progress indicator instead of a settings dial.)*

Fixed `right-6 top-1/2 -translate-y-1/2 z-[90]`, hidden below `md`:
```tsx
<div className="flex flex-col items-end gap-[6px]">
  {sections.map((s, i) => (
    <span key={i}
      className={cn(
        "h-[2px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        i === activeIndex
          ? "w-7 bg-[var(--accent)]"
          : "w-4 bg-white/25"
      )}
    />
  ))}
</div>
```
- A tick per `SectionReveal` section on the page (so on `/build/website` with 5 sections,
  5 ticks). Active tick widens and turns accent-orange — same role as the triangle
  playhead in your reference image, just rebuilt as ticks instead of a dashed arc since
  it now needs to map 1:1 to scroll sections, not a continuous radial value
- Update `activeIndex` via `IntersectionObserver` on each section, threshold `0.5`
- Clicking a tick smooth-scrolls to that section

### 2.4 `SectionReveal` — scroll-triggered version of your hero keyframes
The hero used mount-time animation (`hero-reveal`, `hero-fade`, `hero-zoom`). Below the
fold, mount-time doesn't apply — so this is the same visual language, IntersectionObserver-
triggered instead:

```css
.reveal-on-view {
  opacity: 0;
  transform: translateY(32px);
  filter: blur(8px);
  transition: opacity 0.9s var(--ease-premium),
              transform 0.9s var(--ease-premium),
              filter 0.9s var(--ease-premium);
}
.reveal-on-view.is-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
```
- Wrap each section's kicker, heading, and card grid in this class with staggered
  `transition-delay`: kicker `0ms`, heading `80ms`, card grid `160ms`, then each card in
  the grid gets `+40ms * index` on top of that (capped at ~6 cards staggering, beyond
  that they animate together so it doesn't feel sluggish on long rows)
- `prefers-reduced-motion`: skip straight to `is-visible`, no transition

### 2.5 `ToolCard`
```tsx
<div className="group bg-white/[0.04] hover:bg-white/[0.07] border border-white/10
                hover:border-white/20 rounded-[1.5rem] p-5 transition-all duration-400
                ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 cursor-pointer">
  <div className="flex items-center justify-between mb-4">
    <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center
                     text-lg">{toolFavicon || toolEmoji}</span>
    <ArrowUpRight size={16} className="text-white/30 group-hover:text-white/70
                                       group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                                       transition-all duration-300" />
  </div>
  <h3 className="text-white text-[15px] font-medium mb-1">{name}</h3>
  <p className="text-white/50 text-[13px] leading-relaxed line-clamp-2">{description}</p>
</div>
```
Grid: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4`. Long category lists scroll
horizontally instead (`flex overflow-x-auto snap-x gap-4`, hidden scrollbar) when there
are more than ~8 items — keeps the "premium supermarket, never overwhelming" rule intact.

---

## 3. Information Architecture (the actual fix)

Your master tools list has ~19 categories and 400+ tools. Putting all of that in one
endless scroll-reveal page is the mistake that makes directories feel like spreadsheets.
Doc 5's own brief said it: *"never dump hundreds of cards, progressively reveal."* So the
gameplan is three layers, not one page:

```
/                    Landing — Lithos hero (done, untouched)
/discover            Intent-path selector — continues the hero's calm, NOT a tool list
/build/[intent]      Focused scroll-reveal showcase — 4-6 curated sections, this is
                     where SectionReveal + ScrollDial do their job
/library             The dense, searchable, full 400+ tool index — power-user mode,
                     SearchDock becomes the primary navigation here
/tool/[slug]         Single tool detail page
```

This mirrors Raycast/Linear: casual users never see the spreadsheet, they pick an intent
and get a curated 6-section story; power users hit ⌘K and go straight to `/library`.

---

## 4. Page Specs

### 4.1 `/discover`
Visually this is "hero, part two" — same `bg-black`, same Inter body, **Playfair allowed
once more** for the page H1 since this is still a "stage opening," not app chrome.

- Nav: identical fixed glass nav from Lithos, just swap the active pill state
- H1, `pt-[22vh]`: `font-playfair italic text-5xl md:text-7xl` — *"What are you building?"*
- Below it, a `grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto px-6 mt-16`
  of **10 intent cards** (Website, AI App, Startup, Mobile App, Portfolio, SaaS, Chrome
  Extension, AI Agent, Cybersecurity Tool, Blockchain Project) — each a tall glass card,
  icon centered, label below, `hover:-translate-y-2 hover:bg-white/10`
- `SearchDock` present, collapsed, bottom-left
- No `ScrollDial` here — single screen, nothing to track

### 4.2 `/build/[intent]` — e.g. `/build/website`
This is where the scroll-reveal mechanic lives.

- `bg-black`, body is `font-ui` only (no Playfair below the fold — reserve serif italic
  for the very top H1 of this page, never again after)
- Top: small back-link to `/discover`, then H1 `font-playfair italic text-4xl md:text-6xl`
  — *"Building a Website"*, one-line subhead in `text-white/60`
- Then 4-6 `SectionReveal`-wrapped stages, each pulling its tools straight from the
  matching category in your master list, e.g. for `/build/website`:
  1. **UI & Design** → Component Libraries + Icons (from doc 7)
  2. **Frontend** → Frameworks + CSS & Styling
  3. **Backend / Data** → BaaS + Databases
  4. **Ship It** → Hosting & Deployment + Domains
  5. **Inspiration** → Land-book, Awwwards, Godly (Idea/UI Inspiration sections)
- Each stage: kicker (`text-xs uppercase tracking-[0.2em] text-white/40 mb-3`), heading
  (`text-2xl md:text-3xl font-medium text-white mb-6`), then the `ToolCard` grid/rail
- `ScrollDial` fixed right edge, one tick per stage, syncs to whichever stage is in view
- `SearchDock` stays bottom-left throughout, unchanged from `/discover`

Repeat this template for each of the 10 intents — same component, different category
pulls. This is the single biggest leverage point: build `/build/[intent]` **once** as a
data-driven template, not ten hand-built pages.

### 4.3 `/library`
The honest, dense, searchable version for people who already know what they want.

- Top: `SearchDock` is **not collapsed here** — it's pinned open as a real search bar at
  the top of the page (`sticky top-20`), full width minus margins, same glass styling
- Left rail (`hidden lg:block w-56`): all 19 categories as a vertical list of `GlassPill`-
  style nav items, click to jump-scroll
- Right: every category as a **static** (non-reveal — too many sections to animate one by
  one without feeling slow) `ToolCard` grid under its heading, in the same visual language
  but no scroll-trigger choreography — this page is for speed, not theater
- This is also where the bottom-left `SearchDock` collapsed mini-version disappears,
  since the top search bar already serves that role

### 4.4 `/tool/[slug]`
- Hero strip: same nav, dark canvas, large icon + name + one-liner, accent-orange
  "Visit Site" pill button (`Start Digging` styling, reused verbatim)
- Body: `font-ui` description, a `GlassPill` row of tags/category, then a "Similar tools"
  `ToolCard` rail at the bottom pulling 4 tools from the same category

---

## 5. Paste-Ready Master Prompt (for Claude Code / Cursor)

```
Using the existing Lithos design system (Inter UI font, Playfair Display italic reserved
for page-opening H1s only, charcoal canvas #0a0a0a, single accent #e8702a, glass = 
bg-white/10 backdrop-blur-xl border-white/15 rounded-full/2xl, motion easing
cubic-bezier(0.16,1,0.3,1)):

1. Build five shared components first, exactly as specced in section 2 of this doc:
   GlassPill, SearchDock (collapsed dock + ⌘K command-palette morph via shared layoutId),
   ScrollDial, SectionReveal (IntersectionObserver-driven reveal-on-view), ToolCard.

2. Build /discover: Playfair italic H1 "What are you building?", 10 intent cards in a
   responsive grid, glass nav reused from the hero, SearchDock collapsed bottom-left.

3. Build /build/[intent] as a single data-driven template: Playfair italic H1 stating the
   intent, then 4-6 SectionReveal-wrapped stages each pulling tools from the matching
   category data, ScrollDial on the right tracking active stage, SearchDock persists
   bottom-left throughout.

4. Build /library: top-pinned full-width SearchDock (always expanded), left category rail,
   right side = static ToolCard grids per category, no reveal choreography — built for
   speed and density, not theater.

5. Build /tool/[slug] detail page per section 4.4.

6. Data: flatten the full tool master list into a single typed array (name, category,
   tags, description, url, accentColor) and drive /build/[intent], /library, and the
   SearchDock's fuzzy search off that one source of truth — do not hand-write per-page
   content.

7. Respect prefers-reduced-motion everywhere reveal/morph animation is used. Respect the
   one-accent-color rule: GlassPill icon badges are the only place secondary color may
   appear, and only in muted/desaturated tones — #e8702a stays the loudest color on every
   screen.

Ship all five components and all four routes complete — no placeholder sections, no
"TODO: populate later." Test responsive behavior down to 375px before calling it done.
```

---

## 6. Build Order (the actual gameplan)

1. Pull the five tokens above into `tailwind.config` + CSS vars — one source of truth so
   nothing drifts from the hero's palette
2. Build `GlassPill`, `ToolCard`, `SectionReveal` first — they're the cheapest, most reused
3. Build `SearchDock` next, including the morph transition — it's the riskiest piece
   (shared-element animation), get it solid before wiring real search logic
4. Build `ScrollDial` last among components — purely cosmetic, easy, low risk
5. Flatten your master tools doc into one JSON/TS data file — every other page reads from
   this, so do it before building `/build/[intent]` or `/library`
6. Ship `/discover` (cheapest page, no data wiring beyond 10 static intent cards)
7. Ship `/build/[intent]` as the single template, test it on 2-3 intents to confirm the
   reveal/dial choreography holds up before assuming it scales to all 10
8. Ship `/library` — straightforward once the data file exists
9. Ship `/tool/[slug]`
10. Full responsive + reduced-motion + keyboard-nav pass across all four routes
```
