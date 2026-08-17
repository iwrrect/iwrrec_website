import PageHero from "@/components/common/PageHero";
import TechnologyFlowSvg from "@/components/diagrams/TechnologyFlowSvg";
import CTASection from "@/components/sections/CTASection";
import { wasteToEnergyFlows } from "@/data/wasteToEnergyFlows";
import { renewableEnergyGroups } from "@/data/renewableEnergyTech";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("technologyPathways");

export default function TechnologyPathwaysPage() {
  return (
    <>
      <PageHero
        static
        eyebrow="Technology Pathways"
        title="Waste-to-energy and renewable energy process flows"
        description="Official IWRREC reference diagrams for modern waste resource recovery and clean energy conversion pathways. Each stage represents equipment and systems subject to standards, testing, and certification."
        breadcrumb={[{ label: "Technology Pathways" }]}
      />

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h2 className="gov-accent-bar text-xl font-bold text-navy border-gov-gold">
          Process flow diagrams
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-muted">
          Static reference diagrams showing certified technology chains. IWRREC standards apply at
          each stage of these pathways.
        </p>

        <div className="mt-10 space-y-8">
          {wasteToEnergyFlows.map((flow) => (
            <div key={flow.id}>
              <p className="mb-2 text-sm font-semibold text-secondary">{flow.subtitle}</p>
              <TechnologyFlowSvg
                title={flow.title}
                steps={flow.steps}
                branches={flow.branches}
              />
              <p className="mt-3 text-sm leading-relaxed text-muted pl-1">{flow.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-section border-y border-line py-10 md:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="gov-accent-bar text-xl font-bold text-navy border-gov-gold">
            Supported clean-energy technologies
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {renewableEnergyGroups.map((group) => (
              <article key={group.group} className="gov-card p-5 border-l-4 border-l-gov-gold">
                <h3 className="font-bold text-navy">{group.group}</h3>
                <ul className="mt-4 space-y-3">
                  {group.technologies.map((tech) => (
                    <li key={tech.name}>
                      <p className="text-sm font-semibold text-secondary">{tech.name}</p>
                      <p className="mt-1 text-sm text-muted">{tech.description}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Standards guidance for technology pathways"
        description="Contact IWRREC for standards documentation applicable to equipment within these technology chains."
      />
    </>
  );
}
