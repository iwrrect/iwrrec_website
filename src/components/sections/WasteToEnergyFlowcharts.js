import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GovSectionHeading from "@/components/ui/GovSectionHeading";
import { getIcon } from "@/lib/icons";
import { wasteToEnergyFlows } from "@/data/wasteToEnergyFlows";

function FlowDiagram({ flow }) {
  const Icon = getIcon(flow.icon);

  return (
    <article className="h-full overflow-hidden border border-line bg-white gov-card">
      <div className="border-b border-line bg-section px-6 py-5">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-gov-gold">
            <Icon className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <div>
            <h3 className="font-bold text-lg leading-snug text-navy">{flow.title}</h3>
            <p className="mt-0.5 text-sm text-muted">{flow.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-1">
          {flow.steps.map((step, i) => (
            <span key={step} className="flex items-center gap-1">
              <span className="rounded border border-line bg-section px-2.5 py-1.5 text-xs font-semibold text-navy">
                {step}
              </span>
              {i < flow.steps.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gov-gold" />
              )}
            </span>
          ))}
        </div>

        {flow.branches && (
          <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
            {flow.branches.map((branch) => (
              <span
                key={branch}
                className="rounded border border-gov-gold/40 bg-gov-gold/10 px-3 py-1 text-[11px] font-semibold text-navy"
              >
                {branch}
              </span>
            ))}
          </div>
        )}

        <p className="mt-4 text-sm leading-relaxed text-muted">{flow.description}</p>
      </div>
    </article>
  );
}

export default function WasteToEnergyFlowcharts() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <GovSectionHeading
        eyebrow="Technology Pathways"
        title="Waste-to-energy & renewable energy process flows"
        description="IWRREC standards and certification protocols cover each stage of modern waste resource recovery and clean energy conversion technologies."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {wasteToEnergyFlows.map((flow) => (
          <FlowDiagram key={flow.id} flow={flow} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/technology-pathways"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-navy"
        >
          View full technology pathway diagrams
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
