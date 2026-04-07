import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionTag } from "@/components/ui/section-tag";
import { getProjectBySlug, getRelatedProjects, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Jian Wang`,
    description: project.summary
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.slug);

  return (
    <div className="container-shell py-20 sm:py-24">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-6">
          <SectionTag>Project Case Study</SectionTag>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-gradient text-4xl font-semibold tracking-tight sm:text-6xl">
                {project.title}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {project.summary}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-subtle sm:min-w-[280px]">
              <div>
                <div className="font-mono text-xs tracking-[0.3em] text-accent">YEAR</div>
                <div className="mt-2 text-foreground">{project.year}</div>
              </div>
              <div>
                <div className="font-mono text-xs tracking-[0.3em] text-accent">ROLE</div>
                <div className="mt-2 text-foreground">{project.role}</div>
              </div>
            </div>
          </div>
        </div>

        <GlassCard className="overflow-hidden p-0">
          <div
            className="relative min-h-[360px] overflow-hidden rounded-[inherit] border border-white/[0.06] bg-[#08080b] sm:min-h-[460px]"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, ${project.heroAccent}33, transparent 28%), radial-gradient(circle at 80% 30%, ${project.heroSecondary}44, transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))`
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)]" />
            <div className="absolute left-[10%] top-[14%] h-52 w-52 rounded-full blur-[100px]" style={{ backgroundColor: `${project.heroAccent}66` }} />
            <div className="absolute bottom-[8%] right-[8%] h-56 w-56 rounded-full blur-[100px]" style={{ backgroundColor: `${project.heroSecondary}66` }} />
            <div className="absolute inset-x-8 top-8 rounded-2xl border border-white/[0.08] bg-black/20 p-5 shadow-card backdrop-blur-xl sm:inset-x-12 sm:top-12">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-subtle">
                <span>{project.metaLabel}</span>
                <span>{project.stack.slice(0, 2).join(" / ")}</span>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-[1.3fr_0.7fr]">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.06] p-5">
                  <div className="text-sm text-subtle">Primary objective</div>
                  <div className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                    {project.outcomes[0]}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5">
                  <div className="text-sm text-subtle">Launch status</div>
                  <div className="mt-3 text-lg font-medium text-foreground">{project.status}</div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <GlassCard className="p-8">
            <SectionTag>Challenge</SectionTag>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{project.challenge}</p>
          </GlassCard>
          <GlassCard className="p-8">
            <SectionTag>Approach</SectionTag>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{project.approach}</p>
          </GlassCard>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard className="p-8">
            <SectionTag>Stack & Responsibilities</SectionTag>
            <div className="mt-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Core stack</h2>
                <div className="mt-3 flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Key responsibilities</h2>
                <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <SectionTag>Results</SectionTag>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {project.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 shadow-card"
                >
                  <div className="text-sm leading-relaxed text-foreground">{outcome}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {project.links.map((link) => (
                <Button key={link.href} href={link.href} variant={link.primary ? "primary" : "secondary"}>
                  {link.label}
                </Button>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="grid gap-6 border-t border-white/[0.06] pt-8 sm:grid-cols-2">
          {relatedProjects.map((relatedProject) => (
            <Link
              key={relatedProject.slug}
              href={`/projects/${relatedProject.slug}`}
              className="focus-ring group rounded-[1.5rem] border border-white/[0.06] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-card transition-all duration-300 ease-expo hover:-translate-y-1 hover:border-white/[0.1] hover:shadow-card-hover"
            >
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                Next project
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                {relatedProject.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{relatedProject.summary}</p>
            </Link>
          ))}
        </div>

        <div className="flex justify-start pt-2">
          <Button href="/" variant="ghost">
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
}
