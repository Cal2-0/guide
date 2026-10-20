# Lyra: The Definitive Developer OS & Directory

> **A fast, honest catalog of 1,098+ hand-curated developer tools, architectural recipes, and launch checklists across 28 verified categories. Zero fluff.**

[![CI & Security Quality Gate](https://github.com/Cal2-0/guide/actions/workflows/ci-security.yml/badge.svg)](https://github.com/Cal2-0/guide/actions/workflows/ci-security.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 💎 The Modern Builder UX

Lyra is engineered as a state-of-the-art, high-density developer platform:

*   **The Universal Directory (`/directory`)**: 1,098+ verified developer tools, engineering playbooks, autonomous agent skills, and GitHub radars across 28 categories. Browse the offline markdown index in [LYRA_SUPER_DIRECTORY.md](LYRA_SUPER_DIRECTORY.md).
*   **Mobile-First Ergonomics**: Single-row horizontal swipeable category ribbons, compact app icons (32×32px), zero overlap, and progressive 60fps rendering.
*   **Faceted Filtering**: Sub-millisecond multi-attribute filtering by Pricing (`Free`, `OSS`, `Free tier`, `Paid`), Ecosystem (`React`, `Node`, `Python`, `Rust`, `Go`, `TypeScript`), and Features (`AI`, `Cloud`, `CLI`, `API`).
*   **Fast Sub-Millisecond Search**: Client-side fuzzy search powered by Fuse.js.
*   **Blueprints (`/blueprints`)**: Validated build paths and curated 12-step launch checklists.
*   **My Stack (`/stack`)**: Persistent stack curation saved privately to local storage with one-click export.
*   **Keyboard First**: Press `⌘ + K` or `Ctrl + K` to open the search modal from anywhere.

---

## 🏗️ Architecture & Technology Stack

Lyra is built as an ultra-fast Single Page Application (SPA):

*   **Framework**: React 19 + Vite 7
*   **Routing**: `wouter` (minimalist, zero-overhead routing)
*   **Styling**: Tailwind CSS v4 + Radix UI Primitives + Lucide Icons
*   **Animations**: Framer Motion
*   **Search Engine**: Fuse.js client-side indexing
*   **State Management**: React Hooks + LocalStorage
*   **Theming**: `next-themes` (instant dark / light mode)
*   **Deployment**: Zero-configuration Netlify (`netlify.toml`) & Vercel (`vercel.json`)

---

## 🚀 Getting Started

### Prerequisites

*   Node.js 20+
*   pnpm (recommended) or npm

### Installation & Local Run

```bash
# 1. Clone the repository
git clone https://github.com/Cal2-0/guide.git
cd guide

# 2. Install dependencies
pnpm install

# 3. Start local development server
pnpm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🛡️ Security & Quality

*   **Security Policy**: Documented in [SECURITY.md](SECURITY.md) and exposed at `/.well-known/security.txt`.
*   **Secret Detection**: Gitleaks scanner enforced via CI (`.gitleaks.toml`).
*   **Vulnerability Scanning**: Automated Google OSV-Scanner for lockfile CVE detection.
*   **Link Verification**: Strict outbound link security auditor (`pnpm check:links`).

---

## 📄 License

MIT License © 2026 Lyra Authors
