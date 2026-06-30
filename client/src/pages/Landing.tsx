import { useState, useRef, useEffect } from "react";
import { Menu, X, ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { categories } from "@/lib/toolsDataArticle";
import { CategoryCarousel } from "@/components/ui/CategoryCarousel";
import { SearchDock } from "@/components/ui/SearchDock";

// ── Asset URLs ──

const SPOTLIGHT_R = 260;



// ─────────────────────────────────────────────
// Landing — Builder OS
// ─────────────────────────────────────────────
export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <div className="relative min-h-screen tracking-[-0.02em] text-white">
      {/* ═══════════════════════════════════════════
           HERO — Full‑screen spotlight reveal
         ═══════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden min-h-screen"
        style={{ height: "100dvh" }}
      >


        {/* Layer 3 — Heading & Search */}
        <div className="absolute top-[18%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
          <h1 className="text-white leading-[1.05] flex flex-col items-center">
            <span
              className="block font-semibold text-[44px] sm:text-[64px] md:text-[80px] font-playfair italic"
              style={{ letterSpacing: "-0.02em" }}
            >
              Discover tools
            </span>
            <span
              className="block font-semibold text-[44px] sm:text-[64px] md:text-[80px] -mt-2 sm:-mt-4 font-sans not-italic"
              style={{ letterSpacing: "-0.04em" }}
            >
              that build the future
            </span>
          </h1>
          <p 
            className="mt-6 text-[15px] sm:text-[17px] text-white/65 font-medium max-w-lg mx-auto tracking-wide"
          >
            The curated OS for builders. 400+ tools, zero noise.
          </p>

          <div className="mt-12 w-full max-w-2xl mx-auto pointer-events-auto">
            <div className="relative group w-full">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-white/40 group-focus-within:text-[#e8702a] transition-colors">
                <Search className="w-6 h-6" />
              </div>
              <input
                type="text"
                readOnly
                onClick={() => window.dispatchEvent(new Event("open-search"))}
                placeholder="Search frameworks, databases, ui libraries..."
                className="w-full h-16 pl-16 pr-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white text-lg placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl cursor-pointer hover:bg-white/[0.08]"
              />
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 text-xs font-mono text-white/50 border border-white/10">
                  <span className="text-[10px]">⌘</span> K
                </kbd>
              </div>
            </div>
          </div>
          
          {/* Scroll Wheel Carousel */}
          <div className="w-full pointer-events-auto mt-20">
            <CategoryCarousel />
          </div>
        </div>

        {/* Layer 4 — Bottom‑left paragraph */}
        <div className="hidden sm:block absolute bottom-12 left-8 md:left-12 max-w-[280px] z-50">
          <p className="text-[14px] text-white/65 leading-[1.6]">
            Lyra is more than a directory; it is a specialized operating system for discovery, designed to streamline your stack with precision.
          </p>
        </div>

        {/* Layer 5 — Bottom‑right block + CTA */}
        <div className="absolute bottom-10 sm:bottom-12 left-5 right-5 sm:left-auto sm:right-8 md:right-12 flex flex-col items-start sm:items-end gap-5 z-50">
          <Link href="/discover">
            <a className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-[14px] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-95 hover:shadow-[0_0_24px_rgba(232,112,42,0.4)]">
              Start Exploring
            </a>
          </Link>
        </div>
      </section>
      
      {/* Floating Search overlay */}
      <SearchDock hideTrigger={true} />
    </div>
  );
}
