import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionTag } from "@/components/ui/section-tag";

export default function NotFound() {
  return (
    <div className="container-shell flex min-h-[70vh] items-center justify-center py-20">
      <GlassCard className="max-w-xl p-10 text-center">
        <SectionTag>404</SectionTag>
        <h1 className="text-gradient mt-5 text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The page you requested doesn&apos;t exist, or the project slug is no longer available.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Return home</Button>
        </div>
      </GlassCard>
    </div>
  );
}
