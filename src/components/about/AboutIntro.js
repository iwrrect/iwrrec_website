import Reveal from "@/components/animations/Reveal";
import { aboutIntro, focusSectors } from "@/data/about";

export default function AboutIntro() {
  return (
    <section className="bg-background py-4 md:py-6">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {aboutIntro.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-2xl md:text-[1.75rem] font-bold leading-snug text-dark">
            {aboutIntro.title}
          </h2>
        </Reveal>

        <div className="mt-7 space-y-4 border-t border-line pt-7">
          {aboutIntro.paragraphs.map((paragraph) => (
            <Reveal key={paragraph.slice(0, 48)} amount={0.05}>
              <p className="text-[15px] md:text-base leading-[1.8] text-muted">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded border border-line bg-white p-6 md:p-8 shadow-soft">
          <h3 className="font-heading text-base md:text-lg font-semibold text-dark">
            Sectors Our Work Extends Across
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {focusSectors.map((sector) => (
              <span
                key={sector}
                className="rounded border border-line bg-section px-3.5 py-1.5 text-xs font-medium text-secondary"
              >
                {sector}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
