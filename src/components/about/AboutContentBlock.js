import Reveal from "@/components/animations/Reveal";
import IconBadge from "@/components/ui/IconBadge";
import { cn } from "@/lib/utils";

export default function AboutContentBlock({ section, tinted = false }) {
  return (
    <section className={cn(tinted ? "bg-section" : "bg-background", "py-12 md:py-16")}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-start gap-4">
            {section.icon && (
              <IconBadge
                icon={section.icon}
                className="h-12 w-12 shrink-0 rounded bg-secondary text-white"
                iconClassName="h-6 w-6"
              />
            )}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {section.eyebrow}
              </span>
              <h2 className="mt-3 font-heading text-2xl md:text-[1.75rem] font-bold leading-snug text-dark">
                {section.title}
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 space-y-4 border-t border-line pt-7">
          {section.paragraphs.map((paragraph) => (
            <Reveal key={paragraph.slice(0, 48)} amount={0.05}>
              <p className="text-[15px] md:text-base leading-[1.8] text-muted">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
