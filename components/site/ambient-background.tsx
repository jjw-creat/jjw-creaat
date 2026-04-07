export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-10%] h-[900px] w-[1400px] -translate-x-1/2 rounded-full bg-[rgba(94,106,210,0.22)] blur-[150px] motion-safe:animate-float" />
      <div
        className="absolute left-[-10%] top-[18%] h-[600px] w-[800px] rounded-full bg-[rgba(123,89,211,0.18)] blur-[120px] motion-safe:animate-float"
        style={{ animationDelay: "-2.5s" }}
      />
      <div
        className="absolute right-[-8%] top-[12%] h-[520px] w-[720px] rounded-full bg-[rgba(81,103,228,0.14)] blur-[100px] motion-safe:animate-float"
        style={{ animationDelay: "-5s" }}
      />
      <div className="absolute bottom-[-12%] left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[rgba(94,106,210,0.12)] blur-[120px] motion-safe:animate-glow" />
    </div>
  );
}
