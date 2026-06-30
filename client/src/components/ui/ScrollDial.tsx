import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ScrollDialProps {
  sections: { id: string; label: string }[];
}

export function ScrollDial({ sections }: ScrollDialProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (sections.length === 0) return;

    const handleScroll = () => {
      // Find the section currently most visible in viewport
      let currentId = sections[0].id;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Distance from the middle of the viewport
          const distance = Math.abs(rect.top - window.innerHeight / 2);
          if (distance < minDistance) {
            minDistance = distance;
            currentId = section.id;
          }
        }
      });

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-end gap-3 z-40">
      {sections.map((section) => {
        const isActive = activeId === section.id;
        return (
          <button
            key={section.id}
            onClick={() => {
              document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-3 py-1"
          >
            <span
              className={cn(
                "text-[11px] font-medium tracking-widest uppercase transition-all duration-300",
                isActive 
                  ? "text-brand-accent opacity-100 translate-x-0" 
                  : "text-text-tertiary opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
              )}
            >
              {section.label}
            </span>
            <div
              className={cn(
                "h-[2px] rounded-full transition-all duration-300",
                isActive 
                  ? "w-8 bg-brand-accent shadow-[0_0_8px_rgba(232,112,42,0.6)]" 
                  : "w-3 bg-glass-border group-hover:w-5 group-hover:bg-text-tertiary"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
