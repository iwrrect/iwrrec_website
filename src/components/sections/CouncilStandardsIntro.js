import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { councilPillars } from "@/data/certificationProcess";
import { getIcon } from "@/lib/icons";
import { TOTAL_LABORATORY_PARTNERS } from "@/data/laboratoryPartners";

const stats = [
  { value: "105+", label: "Accredited Laboratories" },
  { value: "120+", label: "International Standards" },
  { value: "3,500+", label: "Certified Equipment Models" },
  { value: "45+", label: "Member Countries" },
];

export default function CouncilStandardsIntro() {
  return (
    <section className="relative border-b border-line bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gov-gold">
            International Standards · Testing · Inspection · Certification
          </p>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold leading-tight text-navy">
            A global council for waste resource recovery and energy equipment
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
            IWRREC is an independent international standards body — not an equipment manufacturer.
            We develop harmonized standards, accredit {TOTAL_LABORATORY_PARTNERS}+ testing laboratories,
            and certify machinery for performance, environmental compliance, and safety worldwide.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {councilPillars.map((pillar) => {
            const Icon = getIcon(pillar.icon);
            return (
              <div
                key={pillar.label}
                className="flex flex-col items-center rounded-lg border border-line bg-section px-3 py-4 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gov-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <span className="mt-2 text-[11px] font-semibold leading-tight text-navy">
                  {pillar.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="gov-card border-l-4 border-l-gov-gold px-5 py-4 text-center"
            >
              <p
                className="text-2xl md:text-3xl font-bold text-navy"
                style={{ fontFamily: "var(--font-numeric)" }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-xs md:text-sm font-medium text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/laboratory-partners">
            Laboratory Partner Network
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/iso-certifications" variant="secondary">
            IWRREC Certificate
          </Button>
        </div>
      </div>
    </section>
  );
}
