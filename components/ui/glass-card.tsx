import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "gradient";
};

const variants: Record<NonNullable<GlassCardProps["variant"]>, string> = {
  default: "bg-gradient-to-b from-white/[0.08] to-white/[0.02]",
  glass: "bg-white/[0.04] backdrop-blur-2xl",
  gradient:
    "bg-[radial-gradient(circle_at_top,rgba(94,106,210,0.18),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]"
};

export function GlassCard({ children, className, variant = "default" }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-border relative rounded-[1.5rem] border border-white/[0.06] shadow-card",
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
