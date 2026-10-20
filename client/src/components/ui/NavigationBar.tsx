import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Search } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [stackCount, setStackCount] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track My Stack count from localStorage
  useEffect(() => {
    const updateCount = () => {
      try {
        const savedIds = JSON.parse(localStorage.getItem("my_stack_saves") || "[]");
        const likedIds = JSON.parse(localStorage.getItem("my_stack_likes") || "[]");
        const combined = new Set([...savedIds, ...likedIds]);
        setStackCount(combined.size);
      } catch {
        setStackCount(0);
      }
    };
    updateCount();
    window.addEventListener("stack-change", updateCount);
    window.addEventListener("storage", updateCount);
    return () => {
      window.removeEventListener("stack-change", updateCount);
      window.removeEventListener("storage", updateCount);
    };
  }, []);

  const navLinks = [
    { href: "/directory", label: "Directory" },
    { href: "/blueprints", label: "Blueprints" },
    { href: "/stack", label: "My Stack" },
  ];

  const isActive = (href: string) => {
    if (href === "/directory") return location.startsWith("/directory") || location.startsWith("/library") || location.startsWith("/tool/");
    if (href === "/blueprints") return location.startsWith("/blueprints") || location.startsWith("/build") || location === "/guide";
    if (href === "/stack") return location === "/stack";
    return location === href;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 transition-all duration-300",
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
        )}
      >
        {/* Left — Logo + Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group cursor-pointer z-50">
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
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            </svg>
            <span className="text-foreground text-2xl font-playfair italic font-light pr-1">
              Lyra
            </span>
        </Link>

        {/* Center — Clean direct links (desktop) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-background/50 backdrop-blur-md border border-border rounded-full px-2 py-1.5 items-center gap-1 shadow-2xl">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300",
                isActive(link.href)
                  ? "text-foreground bg-white/10"
                  : "text-foreground/60 hover:text-foreground hover:bg-white/5"
              )}
            >
              {link.label}
              {link.label === "My Stack" && stackCount > 0 && (
                <span className="ml-1.5 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-bold bg-[#e8702a] text-white animate-[heroFadeUp_0.3s_ease-out]">
                  {stackCount}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Right — Actions */}
        <div className="flex items-center gap-2 z-50">
          {/* Search trigger */}
          <button
            onClick={() => window.dispatchEvent(new Event("open-search"))}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full text-foreground/50 hover:text-foreground hover:bg-white/10 transition-colors text-[12px] font-medium"
            aria-label="Search tools"
          >
            <Search className="w-3.5 h-3.5" />
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono border border-white/5">
              {typeof navigator !== 'undefined' && navigator.platform?.includes('Mac') ? '⌘' : 'Ctrl'}K
            </kbd>
          </button>

          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full text-foreground/70 hover:text-foreground hover:bg-white/10 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-white/10 transition"
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
            className="fixed inset-0 z-[99] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-light transition-opacity",
                  isActive(link.href) ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                )}
              >
                {link.label}
                {link.label === "My Stack" && stackCount > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center min-w-[24px] h-[24px] px-1.5 rounded-full text-[12px] font-bold bg-[#e8702a] text-white">
                    {stackCount}
                  </span>
                )}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setTimeout(() => window.dispatchEvent(new Event("open-search")), 100);
              }}
              className="text-foreground/40 text-lg font-light hover:text-foreground transition-opacity mt-4"
            >
              Search tools...
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
