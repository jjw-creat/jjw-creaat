"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionTag } from "@/components/ui/section-tag";

export function HomeHero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      return;
    }

    const onScroll = () => {
      setProgress(Math.min(window.scrollY / 480, 1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="container-shell relative pt-24 sm:pt-28"
      style={{
        opacity: 1 - progress * 0.45,
        transform: `translate3d(0, ${progress * 56}px, 0) scale(${1 - progress * 0.04})`,
        transformOrigin: "top center"
      }}
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="max-w-3xl space-y-6">
          <SectionTag>Product Designer · Frontend Engineer</SectionTag>
          <div className="space-y-5">
            <h1 className="text-gradient text-5xl font-semibold tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              I build personal brands and digital products with depth.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Premium web experiences for founders, creators, and product teams who want a sharper
              visual system, cleaner interactions, and a presence that feels unmistakably crafted.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">Explore projects</Button>
            <Button href="#about" variant="secondary">
              See how I work
            </Button>
          </div>
        </div>

        <GlassCard variant="glass" className="overflow-hidden p-0">
          <div className="relative min-h-[420px] rounded-[inherit] p-6 sm:p-8">
            <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_15%_20%,rgba(94,106,210,0.18),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(95,132,255,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-8">
              <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-black/20 px-4 py-3 text-xs uppercase tracking-[0.3em] text-subtle backdrop-blur-xl">
                <span>Selected capabilities</span>
                <span>2026 Edition</span>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.06] p-5 shadow-card">
                  <div className="text-sm text-subtle">Current focus</div>
                  <div className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                    Cinematic portfolio systems with production-ready frontend architecture
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5">
                    <div className="text-sm text-subtle">Experience</div>
                    <div className="mt-3 text-lg font-medium text-foreground">
                      Brand sites, SaaS, design systems
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5">
                    <div className="text-sm text-subtle">Promise</div>
                    <div className="mt-3 text-lg font-medium text-foreground">
                      Fast, expressive, maintainable
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Next.js", "TypeScript", "Design Systems", "Motion"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
