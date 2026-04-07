import type { ReactNode } from "react";

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
      {children}
    </div>
  );
}
