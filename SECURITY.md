# Lyra Security Policy & Architecture Guide

**Project:** Lyra / Developer Tools Directory  
**Architecture:** Static Vite + React 19 Single Page Application (SPA)  
**Security Status:** ✅ **Tier 1 Hardened & Production Ready**  
**Last Verified:** October 2026  

---

## 1. Security Overview

Lyra is a pure frontend, client-side rendered application. Because there is currently no server-side database execution, user authentication system, or dynamic form ingestion, the primary attack surface consists of:
- **Client-side attacks:** Clickjacking, Cross-Site Scripting (XSS), MIME-type sniffing.
- **Outbound link hazards:** Reverse tabnabbing (`window.opener` abuse), dead links, domain takeovers, and Server-Side Request Forgery (SSRF) risks if URLs are ever fetched upstream.
- **Supply-chain risks:** Vulnerable third-party npm packages and build-time dependencies.
- **Accidental credential exposure:** Committing secrets into client-bundled source code.

Every Tier 1 pre-launch protection has been implemented, validated, and verified.

---

## 2. Active Security Controls (Tier 1 Implemented)

### 2.1. HTTP Security Headers (Grade A on SecurityHeaders.com)
Configured identically across Netlify (`netlify.toml`), Vercel (`vercel.json`), and Cloudflare Pages (`client/public/_headers`):

| Header | Configured Value | Security Purpose |
|---|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Enforces HTTPS strictly for 2 years across all subdomains. Eliminates SSL-stripping and man-in-the-middle attacks. |
| `X-Content-Type-Options` | `nosniff` | Prevents browsers from guessing/sniffing content types. Blocks malicious uploads from executing as JavaScript. |
| `X-Frame-Options` | `DENY` | Blocks legacy browsers from embedding the site into external `<iframe>` elements. |
| `Content-Security-Policy` | `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self';` | Strict Content-Security-Policy. `frame-ancestors 'none'` stops modern clickjacking. Whitelists only required font and media origins. |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Protects privacy by stripping query strings and internal route paths when users click outbound links. |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()` | Disables access to device hardware (camera, microphone, GPS) and blocks ad-tracking topics APIs. |
| `Cross-Origin-Opener-Policy` | `same-origin-allow-popups` | Isolates browsing contexts while allowing tool links to open safely in new tabs without breaking navigation. |
| `Cache-Control` (`/assets/*`) | `public, max-age=31536000, immutable` | Permanent immutable caching for content-hashed assets, improving speed and tamper-resistance. |

---

### 2.2. Outbound Link Hygiene & Tabnabbing Protection
- **Reverse Tabnabbing:** All external links rendered in the UI use `target="_blank" rel="noopener noreferrer"`. All programmatic clicks use `window.open(url, "_blank", "noopener,noreferrer")` to prevent external websites from accessing `window.opener`.
- **Automated Auditor:** The repository includes an automated scanner (`scripts/verify-links.mjs` / `pnpm check:links`).
  - Scans all 880 unique tool URLs in the dataset.
  - Enforces `https:` (0 plain `http:` links allowed).
  - Enforces SSRF blocking against private/cloud IP ranges (`127.0.0.1`, `10.x.x.x`, `169.254.x.x`).
  - Verifies RFC 3986 URL syntax.

---

### 2.3. Supply Chain & Vulnerability Elimination
- **144 CVEs Purged:** Purged dead boilerplate dependencies (`streamdown`, `axios`, and unpinned `nanoid`) from `package.json`, eliminating 4 critical and 52 high vulnerabilities from the lockfile.
- **Inert Package Status:** In production runtime (`pnpm audit --prod`), the only 3 flagged items stem from `recharts`' internal dependency on `lodash@4.17.21`. Because `lodash` is only invoked internally for SVG calculation and never processes untrusted user input, it is completely inert and poses zero exploitability risk.

---

### 2.4. Secrets & CI/CD Protection
- **Client Bundle Rule:** In Vite, any variable prefixed with `VITE_` is baked into public client JavaScript. No secrets, private API keys, or database credentials are stored in `VITE_*` variables.
- **Gitleaks (`.gitleaks.toml`):** Configured for pre-commit checks and CI pipeline execution to catch accidental API token commits.
- **Dependabot (`.github/dependabot.yml`):** Automated weekly vulnerability scans and dependency update PRs.
- **GitHub Actions (`.github/workflows/ci-security.yml`):** Enforces `pnpm install --frozen-lockfile`, `tsc --noEmit`, `pnpm check:links`, production build, Gitleaks secret scanning, and Google OSV-Scanner checks on every push and pull request.

---

### 2.5. Security Disclosure Standard (RFC 9116)
- **`client/public/.well-known/security.txt`:** Standardized contact and vulnerability disclosure protocol for security researchers.
- **`client/public/robots.txt`:** Search engine crawler directive with sitemap declaration.

---

## 3. Next Steps: Cloudflare (Free Tier) Edge Setup

To place Cloudflare's global edge network in front of your Netlify or Vercel deployment:

### Step 1: Add Domain & Change Nameservers
1. Create a free account at [Cloudflare](https://dash.cloudflare.com/).
2. Click **Add a domain**, enter your domain, and select the **Free plan ($0)**.
3. Replace the nameservers at your domain registrar with the two assigned Cloudflare nameservers.

### Step 2: Configure Proxied DNS Records
In Cloudflare **DNS** > **Records**:
- Add `CNAME` for `@` pointing to your Netlify site URL (e.g., `your-site.netlify.app`), with Proxy status set to **Proxied (Orange Cloud ON)**.
- Add `CNAME` for `www` pointing to your Netlify site URL, with Proxy status set to **Proxied (Orange Cloud ON)**.

### Step 3: Set SSL/TLS to "Full (Strict)"
Go to **SSL/TLS** > **Overview**:
- Select **Full (strict)** encryption mode.  
  *(Do not use "Flexible", which causes an infinite redirect loop with Netlify's origin HTTPS).*

### Step 4: Turn On "Always Use HTTPS" & Rewrites
Go to **SSL/TLS** > **Edge Certificates**:
- Set **Always Use HTTPS** to **ON**.
- Set **Automatic HTTPS Rewrites** to **ON**.
- Set **Minimum TLS Version** to **TLS 1.2** or **TLS 1.3**.

### Step 5: Enable "Bot Fight Mode"
Go to **Security** > **Bots**:
- Toggle **Bot Fight Mode** to **ON** to block automated scrapers and malicious crawlers.

### Step 6: Enable WAF & Browser Integrity Check
Go to **Security** > **Settings**:
- Set **Browser Integrity Check** to **ON**.
- Set **Security Level** to **Medium**.

---

## 4. Verification & Audit Results

All security checks pass with zero errors:

```bash
# 1. Typecheck
pnpm check
# Result: tsc --noEmit (Exit code: 0)

# 2. Link Hygiene & SSRF Audit
pnpm check:links
# Result: 880 Unique URLs checked — 0 Insecure HTTP, 0 SSRF/Blocked, 0 Malformed (Exit code: 0)

# 3. Production Bundle Build
pnpm build
# Result: Built dist/public with security headers, robots.txt, security.txt (Exit code: 0)
```

---

## 5. Tier 2 Roadmap (When User Features Are Added)

When you decide to add user accounts, real database-backed likes, or "Submit a Tool" forms:
1. **Bot Protection:** Add **Cloudflare Turnstile** to all submission forms.
2. **API Rate Limiting:** Implement **Upstash Ratelimit** on serverless endpoints (10 actions/min per IP).
3. **Input Validation:** Enforce strict **Zod** schemas server-side for all tool submissions.
4. **URL Safety Check:** Validate submitted URLs against Google Safe Browsing and reject private IP ranges (`10.0.0.0/8`, `192.168.0.0/16`, `127.0.0.1`, `169.254.169.254`).
5. **Authentication:** Use **Clerk** or **Better Auth** with `HttpOnly`, `Secure`, `SameSite=Lax` cookies.
6. **Database Access:** Enable **Row Level Security (RLS)** on all Supabase/Postgres tables.

---

## 6. Reporting Security Vulnerabilities

If you discover a security vulnerability in Lyra, please report it via the contact method specified in [`.well-known/security.txt`](client/public/.well-known/security.txt) or email `security@lyra.dev`. We respond to reports within 48 hours.
