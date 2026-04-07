"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050506]/70 backdrop-blur-2xl">
      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <Link className="focus-ring flex items-center gap-3" href="/">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.06] text-sm font-semibold text-foreground shadow-card">
            JW
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight text-foreground">Jian Wang</div>
            <div className="text-xs text-subtle">Product systems & frontend craft</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="focus-ring motion-safe-transition rounded-lg px-4 py-2 text-sm text-muted hover:bg-white/[0.05] hover:text-foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Button href="mailto:hello@jianwang.design" size="sm">
            Let&apos;s talk
          </Button>
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.05] text-foreground shadow-card md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <div className="relative h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 block h-[1.5px] w-5 bg-current transition-all duration-300 ease-expo",
                open && "top-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] block h-[1.5px] w-5 bg-current transition-all duration-300 ease-expo",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[14px] block h-[1.5px] w-5 bg-current transition-all duration-300 ease-expo",
                open && "top-[7px] -rotate-45"
              )}
            />
          </div>
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-white/[0.06] bg-[#050506]/95 backdrop-blur-xl transition-all duration-300 ease-expo md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container-shell flex flex-col gap-2 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="focus-ring rounded-xl px-4 py-3 text-sm text-muted transition-colors duration-200 hover:bg-white/[0.05] hover:text-foreground"
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button href="mailto:hello@jianwang.design" className="mt-2 w-full justify-center">
            Let&apos;s talk
          </Button>
        </div>
      </div>
    </header>
  );
}
