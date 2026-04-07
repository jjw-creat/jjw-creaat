import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-accent text-white shadow-accent hover:bg-accent-bright hover:shadow-[0_0_0_1px_rgba(94,106,210,0.55),0_8px_24px_rgba(94,106,210,0.32),inset_0_1px_0_0_rgba(255,255,255,0.2)]",
  secondary:
    "bg-white/[0.05] text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(255,255,255,0.06)] hover:bg-white/[0.08] hover:text-white",
  ghost: "bg-transparent text-muted hover:bg-white/[0.05] hover:text-foreground"
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm sm:px-6"
};

const baseClasses =
  "focus-ring motion-safe-transition inline-flex items-center justify-center rounded-lg whitespace-nowrap font-medium active:scale-[0.98]";

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");

    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
