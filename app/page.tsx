import Link from "next/link";
import { HomeHero } from "@/components/site/home-hero";
import { ProjectCard } from "@/components/site/project-card";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionTag } from "@/components/ui/section-tag";
import { projects } from "@/lib/projects";

const capabilities = [
  "Design systems that scale from launch to product maturity",
  "High-performance frontends with motion that feels intentional",
  "Product storytelling that turns complex work into clear value"
];

const workflow = [
  {
    step: "01",
    title: "Frame the problem",
    body: "I map product goals, user expectations, and system constraints before touching the UI."
  },
  {
    step: "02",
    title: "Build the system",
    body: "Tokens, layout primitives, and reusable components create a visual language that stays coherent."
  },
  {
    step: "03",
    title: "Polish the feel",
    body: "Animation, typography, and states get refined until the product feels precise instead of merely functional."
  }
];

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="pb-24 sm:pb-32">
      <HomeHero />

      <section id="projects" className="container-shell py-20 sm:py-24">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-4">
            <SectionTag>Featured Projects</SectionTag>
            <h2 className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
              A portfolio built like a premium product surface.
            </h2>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Three case studies show how strategy, interface systems, and implementation come
              together in shipped work.
            </p>
          </div>
          <Button href="#contact" variant="secondary">
            Start a conversation
          </Button>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 lg:grid-cols-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index === 0}
              className={index === 0 ? "lg:col-span-4 lg:row-span-2" : "lg:col-span-2"}
            />
          ))}
        </div>
      </section>

      <section id="about" className="border-t border-white/[0.06] py-20 sm:py-24">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard className="p-8 sm:p-10">
            <SectionTag>About</SectionTag>
            <div className="mt-5 max-w-2xl space-y-5">
              <h2 className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
                I design and build interfaces that feel expensive, fast, and trustworthy.
              </h2>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                My work sits between product thinking, UI systems, and frontend execution. I care
                about the first impression, but I care just as much about the maintainability
                underneath it.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm leading-relaxed text-subtle shadow-card"
                >
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 sm:p-10">
            <SectionTag>Workflow</SectionTag>
            <div className="mt-6 space-y-5">
              {workflow.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 shadow-card"
                >
                  <div className="font-mono text-xs tracking-[0.3em] text-accent">{item.step}</div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section id="contact" className="container-shell py-20 sm:py-24">
        <GlassCard variant="gradient" className="overflow-hidden p-8 sm:p-10">
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <SectionTag>Contact</SectionTag>
              <h2 className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
                Looking for a personal site, product surface, or frontend system with presence?
              </h2>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                I partner with founders and teams who want digital work that reads clearly and
                feels sharp the moment it opens.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="mailto:hello@jianwang.design">hello@jianwang.design</Button>
              <Button href="https://github.com" variant="ghost">
                View GitHub
              </Button>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="container-shell border-t border-white/[0.06] py-8">
        <div className="flex flex-col gap-3 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>Built with Next.js, Tailwind CSS, and a system-first approach to visual design.</p>
          <Link className="focus-ring motion-safe-transition hover:text-foreground" href="#top">
            Back to top
          </Link>
        </div>
      </section>
    </div>
  );
}
