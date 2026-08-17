import Reveal from "@/components/animations/Reveal";
import IconBadge from "@/components/ui/IconBadge";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { missionVisionCards } from "@/data/about";

export default function StatementCards() {
  return (
    <section className="bg-section py-4 md:py-6">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Mission & Vision
          </span>
          <h2 className="mt-3 font-heading text-2xl md:text-[1.75rem] font-bold text-dark">
            What guides our work
          </h2>
        </Reveal>

        <StaggerGroup className="grid gap-5 md:grid-cols-2" amount={0.1}>
          {missionVisionCards.map((card) => (
            <StaggerItem key={card.label}>
              <article className="flex h-full flex-col rounded border border-line bg-white p-6 md:p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <IconBadge
                  icon={card.icon}
                  className="h-12 w-12 rounded bg-secondary text-white"
                  iconClassName="h-6 w-6"
                />
                <p className="mt-5 text-xs font-heading font-semibold uppercase tracking-wider text-secondary">
                  {card.label}
                </p>
                <h3 className="mt-2 font-heading text-lg md:text-xl font-bold text-dark">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm md:text-[15px] leading-[1.7] text-muted">
                  {card.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
