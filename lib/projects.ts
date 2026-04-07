export type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  stack: string[];
  heroImage?: string;
  heroAccent: string;
  heroSecondary: string;
  challenge: string;
  approach: string;
  outcomes: string[];
  responsibilities: string[];
  links: ProjectLink[];
  featured: boolean;
  metaLabel: string;
  status: string;
};

export const projects: Project[] = [
  {
    slug: "aurora-personal-brand",
    title: "Aurora Personal Brand Platform",
    summary:
      "A cinematic portfolio experience for a founder who needed their story, proof, and product thinking to land in under 30 seconds.",
    year: "2026",
    role: "Design Lead / Frontend Engineer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    heroAccent: "#5E6AD2",
    heroSecondary: "#8B5CF6",
    challenge:
      "The previous site looked generic and failed to explain why the founder was different. Traffic arrived from investor and partnership conversations, but the experience had no narrative hierarchy and no sense of technical quality.",
    approach:
      "I rebuilt the site around a product-grade interface system: editorial hero messaging, modular proof sections, motion-led transitions, and a reusable visual language that could scale into launch pages and writing surfaces.",
    outcomes: [
      "Clearer first-screen positioning for high-intent visitors",
      "A component system ready for future content expansion",
      "Stronger visual trust through premium interaction details"
    ],
    responsibilities: [
      "Defined information architecture and messaging hierarchy",
      "Built responsive UI primitives and page-level layout patterns",
      "Implemented motion, hover states, and polished dark-theme visual tokens"
    ],
    links: [
      { label: "View live concept", href: "https://example.com", primary: true },
      { label: "Discuss a similar build", href: "mailto:hello@jianwang.design" }
    ],
    featured: true,
    metaLabel: "Brand Platform",
    status: "Shipped concept"
  },
  {
    slug: "northstar-saas-redesign",
    title: "Northstar SaaS Marketing Redesign",
    summary:
      "A conversion-focused redesign that merged product clarity with a richer visual system for a developer-facing SaaS homepage.",
    year: "2025",
    role: "Product Designer / UI Engineer",
    stack: ["Next.js", "Design Tokens", "Storybook", "Analytics"],
    heroAccent: "#6872D9",
    heroSecondary: "#3B82F6",
    challenge:
      "The team had strong product depth, but the marketing surface felt shallow and fragmented. Every new section introduced another one-off style, which slowed shipping and diluted the product story.",
    approach:
      "I introduced shared tokens, glass-layer card variants, and a tighter section rhythm so new pages could be assembled quickly without losing visual coherence. The redesign focused on fewer but stronger messages, supported by controlled motion and better CTA framing.",
    outcomes: [
      "Reduced visual inconsistency across landing sections",
      "Improved design-to-code handoff through reusable primitives",
      "A more credible, product-led first impression"
    ],
    responsibilities: [
      "Created the token architecture for color, spacing, and shadow layers",
      "Refactored hero, feature grid, and CTA modules into reusable components",
      "Collaborated with growth stakeholders on copy hierarchy and CTA placement"
    ],
    links: [
      { label: "Open project brief", href: "https://example.com", primary: true },
      { label: "Email for details", href: "mailto:hello@jianwang.design" }
    ],
    featured: true,
    metaLabel: "SaaS Surface",
    status: "Released"
  },
  {
    slug: "signal-design-system",
    title: "Signal Design System Foundation",
    summary:
      "A compact design system initiative that aligned design and engineering around shared tokens, cards, buttons, and layout primitives.",
    year: "2024",
    role: "Frontend Systems Engineer",
    stack: ["React", "TypeScript", "Tailwind CSS", "Figma Tokens"],
    heroAccent: "#5B8CFF",
    heroSecondary: "#5E6AD2",
    challenge:
      "Feature teams were shipping quickly, but the interface quality drifted because the product lacked a stable design vocabulary. Small inconsistencies compounded into a trust problem.",
    approach:
      "I established a practical starting layer: semantic tokens, buttons, cards, and documentation patterns that could support both designers and engineers without over-engineering the rollout.",
    outcomes: [
      "Shared UI language for shipping new screens faster",
      "Lower duplication in styling logic and component variants",
      "A maintainable base for future product surfaces"
    ],
    responsibilities: [
      "Defined token naming conventions and implementation strategy",
      "Built foundational UI primitives and example compositions",
      "Documented usage boundaries to keep the system coherent"
    ],
    links: [
      { label: "See system notes", href: "https://example.com", primary: true },
      { label: "Ask about the process", href: "mailto:hello@jianwang.design" }
    ],
    featured: true,
    metaLabel: "Design System",
    status: "Adopted internally"
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(currentSlug: string) {
  return projects.filter((project) => project.slug !== currentSlug).slice(0, 2);
}
