import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/cards/FeatureCard";
import IconBadge from "@/components/ui/IconBadge";
import LaboratoryCard from "@/components/cards/LaboratoryCard";
import Reveal from "@/components/animations/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import {
  laboratoryNetwork,
  laboratoryRegions,
  laboratoryProcess,
  manufacturerBenefits,
} from "@/data/laboratories";
import { laboratoryPartners, TOTAL_LABORATORY_PARTNERS } from "@/data/laboratoryPartners";

export default function LaboratoriesSection({
  showProcess = true,
  showBenefits = true,
  showDirectoryPreview = true,
}) {
  const previewLabs = [...laboratoryPartners]
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    })
    .slice(0, 6);

  return (
    <section id="laboratory-partners" className="relative bg-section py-10 md:py-14 scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={laboratoryNetwork.eyebrow}
          title={laboratoryNetwork.title}
          description={laboratoryNetwork.description}
        />

        <Reveal className="mt-10">
          <ul className="grid gap-3 sm:grid-cols-2">
            {laboratoryNetwork.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm md:text-base text-muted">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gov-gold" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" amount={0.05}>
          {laboratoryRegions.map((region) => (
            <StaggerItem key={region.region}>
              <article className="h-full rounded border border-line bg-white p-6 shadow-soft">
                <IconBadge
                  icon={region.icon}
                  className="h-12 w-12 rounded bg-section text-secondary"
                  iconClassName="h-6 w-6"
                />
                <h3 className="mt-4 font-heading text-base font-semibold text-dark">
                  {region.region}
                </h3>
                <p
                  className="mt-1 text-2xl font-bold text-navy"
                  style={{ fontFamily: "var(--font-numeric)" }}
                >
                  {region.labs} labs
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {region.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {showDirectoryPreview && (
          <div className="mt-16">
            <SectionHeading
              align="left"
              eyebrow="Partner Directory"
              title="Featured accredited laboratory partners"
              description={`Browse all ${TOTAL_LABORATORY_PARTNERS}+ accredited laboratories with full contact details, testing capabilities, and IWRREC certificate authorization.`}
            />
            <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" amount={0.03}>
              {previewLabs.map((laboratory) => (
                <StaggerItem key={laboratory.slug}>
                  <LaboratoryCard laboratory={laboratory} />
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Reveal className="mt-8 text-center">
              <Button href="/laboratory-partners" variant="secondary">
                View All {TOTAL_LABORATORY_PARTNERS}+ Laboratory Partners
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>
        )}

        {showProcess && (
          <div className="mt-16">
            <SectionHeading
              align="left"
              eyebrow="Certification Pathway"
              title="Four steps from application to certification"
              description="Manufacturers worldwide follow the same transparent process to obtain IWRREC certification through accredited laboratory partners."
            />
            <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" amount={0.05}>
              {laboratoryProcess.map((step) => (
                <StaggerItem key={step.step}>
                  <article className="h-full rounded border border-line bg-white p-6 shadow-soft">
                    <span
                      className="text-xs font-bold text-primary"
                      style={{ fontFamily: "var(--font-numeric)" }}
                    >
                      Step {String(step.step).padStart(2, "0")}
                    </span>
                    <IconBadge
                      icon={step.icon}
                      className="mt-3 h-11 w-11 rounded bg-section text-secondary"
                      iconClassName="h-5 w-5"
                    />
                    <h3 className="mt-4 font-heading text-sm font-semibold text-dark">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        )}

        {showBenefits && (
          <div className="mt-16">
            <SectionHeading
              eyebrow="For Manufacturers"
              title="Why certify your equipment through IWRREC"
            />
            <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" amount={0.05}>
              {manufacturerBenefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <FeatureCard
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                  />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        )}

        <Reveal className="mt-12 text-center">
          <Button href="/contact">
            Start Your Certification Application
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
