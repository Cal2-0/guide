import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Discover", href: "/discover" },
    { label: "Library", href: "/library" },
    { label: "My Stack", href: "/stack" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 transition-all duration-300",
          scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
        )}
      >
        {/* Left — Logo + Wordmark */}
        <Link href="/">
          <a className="flex items-center gap-2.5 group cursor-pointer">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:rotate-90 transition-transform duration-700 ease-premium"
            >
              <path
                d="M12 2L2 12L12 22L22 12L12 2Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="2.5" fill="white" />
            </svg>
            <span className="text-white text-2xl font-playfair italic pr-1">
              Lyra
            </span>
          </a>
        </Link>

        {/* Center — Pill Nav (desktop) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-2 py-2 items-center gap-1 shadow-2xl">
          {navItems.map((item) => {
            const isActive = location === item.href || (location.startsWith("/build") && item.href === "/discover");
            return (
              <Link key={item.label} href={item.href}>
                <a
                  className={cn(
                    "px-5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300",
                    isActive
                      ? "bg-white text-gray-950 shadow-sm"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            );
          })}
        </div>

        {/* Right — Get Started (desktop) / Hamburger (mobile) */}
        <div className="flex items-center">
          <Link href="/discover">
            <a className="hidden md:block bg-brand-accent hover:bg-brand-accent-hover text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm">
              Start Exploring
            </a>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-2xl font-light hover:text-white/70 transition-colors"
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/discover">
              <a 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 bg-brand-accent text-white text-sm font-semibold px-8 py-3 rounded-full"
              >
                Start Exploring
              </a>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
