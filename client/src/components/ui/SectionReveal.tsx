import { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  triggerOnce?: boolean;
}

export function SectionReveal({
  children,
  className,
  delay = 0,
  triggerOnce = true,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: triggerOnce, margin: "-10% 0px" });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-premium",
        isInView ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-8 blur-md",
        className
      )}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
