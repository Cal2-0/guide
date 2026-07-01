import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string, href: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <span className="text-foreground text-2xl font-playfair italic pr-1">
              Lyra
            </span>
        </Link>

        {/* Center — Mega Menu (desktop) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-background/50 backdrop-blur-md border border-border rounded-full px-4 py-1 items-center shadow-2xl">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-foreground">Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/discover"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Discover Tools
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Browse the curated library of over 400 developer tools, frameworks, and APIs.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/library" title="All Tools">
                      Search and filter the complete Lyra directory.
                    </ListItem>
                    <ListItem href="/stack" title="My Stack">
                      View your saved and bookmarked tools.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-foreground">Build Intent</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem title="Frontend & UI" href="/build/website">
                      React, Vue, Tailwind, Radix UI, Framer Motion.
                    </ListItem>
                    <ListItem title="Backend & APIs" href="/build/backend">
                      Node, Rust, Go, GraphQL, tRPC.
                    </ListItem>
                    <ListItem title="Databases" href="/build/database">
                      PostgreSQL, Redis, Supabase, Prisma.
                    </ListItem>
                    <ListItem title="Deploy & Scale" href="/build/deploy">
                      Vercel, AWS, Docker, Kubernetes.
                    </ListItem>
                    <ListItem title="AI & ML" href="/build/ai">
                      OpenAI, HuggingFace, LangChain, Pinecone.
                    </ListItem>
                    <ListItem title="Mobile Apps" href="/build/mobile">
                      React Native, Expo, Flutter, Swift.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right — Actions */}
        <div className="flex items-center gap-2 z-50">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full text-foreground/70 hover:text-foreground hover:bg-white/10 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
            </button>
          )}
          <Link href="/discover" className="hidden md:block bg-foreground text-background text-[13px] font-semibold px-5 py-2.5 rounded-full transition-transform hover:scale-105 shadow-sm">
              Start Exploring
          </Link>
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
            <Link href="/discover" onClick={() => setMobileMenuOpen(false)} className="text-foreground text-2xl font-light hover:opacity-70 transition-opacity">
              Discover
            </Link>
            <Link href="/library" onClick={() => setMobileMenuOpen(false)} className="text-foreground text-2xl font-light hover:opacity-70 transition-opacity">
              Library
            </Link>
            <Link href="/stack" onClick={() => setMobileMenuOpen(false)} className="text-foreground text-2xl font-light hover:opacity-70 transition-opacity">
              My Stack
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
