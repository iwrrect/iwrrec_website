import Counter from "@/components/ui/Counter";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="border-y border-line bg-section py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Global Impact"
          title="Five decades of advancing waste and energy standards"
          description="Every figure below represents progress toward a circular economy, waste diverted, energy enabled, professionals trained, and facilities certified worldwide."
        />

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <article className="gov-card h-full border-l-4 border-l-gov-gold px-5 py-6">
                <p className="text-3xl font-bold text-navy">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                </p>
                <p className="mt-2 text-sm font-semibold text-secondary">{stat.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{stat.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
