import GovSectionHeading from "@/components/ui/GovSectionHeading";
import { getIcon } from "@/lib/icons";
import { renewableEnergyGroups } from "@/data/renewableEnergyTech";

export default function RenewableEnergyShowcase() {
  return (
    <section className="border-y border-line bg-section py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <GovSectionHeading
          eyebrow="Clean Energy Technologies"
          title="Emerging technologies supported by IWRREC standards"
          description="From green hydrogen and power-to-gas to carbon capture and circular economy systems — IWRREC develops testing protocols and certification frameworks for the technologies shaping the energy transition."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {renewableEnergyGroups.map((group) => {
            const Icon = getIcon(group.icon);
            return (
              <article key={group.group} className="gov-card h-full border-l-4 border-l-gov-gold p-6">
                <div className="flex items-center gap-3 border-b border-line pb-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gov-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-bold text-navy">{group.group}</h3>
                </div>
                <ul className="mt-4 space-y-4">
                  {group.technologies.map((tech) => (
                    <li key={tech.name}>
                      <p className="font-semibold text-secondary text-sm">{tech.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {tech.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
