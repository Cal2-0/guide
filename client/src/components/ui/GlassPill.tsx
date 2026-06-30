import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassPillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  active?: boolean;
  size?: "sm" | "md" | "lg";
}

export function GlassPill({
  children,
  icon,
  active,
  size = "md",
  className,
  ...props
}: GlassPillProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-pill whitespace-nowrap transition-all duration-300 ease-premium",
        "border backdrop-blur-md",
        size === "sm" && "h-6 px-2.5 text-[11px] gap-1",
        size === "md" && "h-8 px-3.5 text-[13px] gap-1.5",
        size === "lg" && "h-10 px-5 text-[14px] gap-2",
        active
          ? "bg-white text-gray-950 border-white/20 shadow-sm"
          : "bg-glass-bg border-glass-border text-text-secondary hover:bg-glass-strong hover:text-text-primary",
        className
      )}
      {...props}
    >
      {icon && (
        <span className={cn("inline-flex items-center", active ? "text-brand-accent" : "text-text-tertiary")}>
          {icon}
        </span>
      )}
      <span className="font-medium tracking-wide">{children}</span>
    </button>
  );
}
