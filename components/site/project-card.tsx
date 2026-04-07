import Link from "next/link";
import { SpotlightSurface } from "@/components/ui/spotlight-surface";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
  priority?: boolean;
};

export function ProjectCard({ project, className, priority = false }: ProjectCardProps) {
  return (
    <SpotlightSurface
      asChild
      className={cn(
        "group min-h-[220px] rounded-[1.5rem] border border-white/[0.06] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 shadow-card",
        "motion-safe-transition hover:-translate-y-1.5 hover:border-white/[0.1] hover:shadow-card-hover",
        className
      )}
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative flex h-full flex-col justify-between overflow-hidden">
          <div
            className={cn(
              "absolute inset-x-0 bottom-0 h-40 rounded-full blur-3xl",
              priority ? "opacity-80" : "opacity-60"
            )}
            style={{ background: `radial-gradient(circle, ${project.heroAccent}55 0%, transparent 72%)` }}
          />
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                {project.metaLabel}
              </div>
              <h3 className="mt-4 max-w-md text-2xl font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
            </div>
            <span className="rounded-full border border-white/[0.08] bg-white/[0.06] px-3 py-1 text-xs text-subtle">
              {project.year}
            </span>
          </div>
          <div className="relative z-10 mt-6 space-y-5">
            <p className="max-w-lg text-sm leading-relaxed text-muted">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-1 text-xs text-subtle"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </SpotlightSurface>
  );
}
