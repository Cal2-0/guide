# Lyra: The Definitive Developer OS & Directory

Lyra is a premium, high-performance directory of over **640+ hand-curated developer tools**, frameworks, databases, and APIs. Built for the modern builder, Lyra prioritizes a flawless user experience, extreme performance, and highly opinionated curation to eliminate decision fatigue.

## 💎 The "Billion-Dollar" UX

Lyra isn't just another directory; it's designed to feel like a premium, state-of-the-art native application:

*   **The Launchpad (Start Guide)**: An opinionated, step-by-step roadmap from Idea to Launch. Skip the paradox of choice and see exactly which tool to use for frontend, auth, and deployment.
*   **Semantic Fuzzy Search**: Powered by Fuse.js for instant, sub-millisecond filtering across tool names, tags, categories, and descriptions.
*   **The Honest Guide**: Curated mega-menus grouping tools by "Build Intent" (SaaS / Startup, Cybersecurity, Backend & API, etc.) for intuitive discovery.
*   **Flawless Dark Mode**: A stunning, high-contrast dark aesthetic featuring glassmorphism, 60fps framer-motion micro-animations, and perfect typography.
*   **My Stack**: A personalized, persistent list of your favorite tools saved instantly to local storage.
*   **Keyboard First**: Press `⌘ + K` to instantly open the Search Dock from anywhere on the site.

## 🏗️ Architecture

Lyra is built as a blazingly fast Single Page Application (SPA).

*   **Framework**: React 19 + Vite
*   **Routing**: `wouter` (Minimalist, fast routing)
*   **Styling**: Tailwind CSS v4 + Radix UI Primitives + Lucide Icons
*   **Animations**: Framer Motion
*   **Search**: Fuse.js (Client-side fuzzy search)
*   **State Management**: React Hooks + LocalStorage (for "My Stack")
*   **Theming**: `next-themes`

## 🚀 Getting Started

### Prerequisites

*   Node.js 18+
*   pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Cal2-0/guide.git
   cd guide
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm run dev
   ```

## 🛠️ Data Management

The backbone of Lyra is its highly structured data.
*   To add or modify tools, edit the `client/src/lib/toolsDataArticle.ts` file. 
*   The application automatically deduplicates tools and maps them to their respective UI components on load.

## 🤝 Contributing

Contributions to the Lyra directory are highly welcome! Whether you are submitting a new tool for the Honest Guide or fixing a typo, feel free to open a Pull Request. Check out `suggestions.txt` in this repo for our Version 2.0 Roadmap.

## 📄 License

MIT License
