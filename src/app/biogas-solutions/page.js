import Image from "next/image";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import IconBadge from "@/components/ui/IconBadge";
import FeatureCard from "@/components/cards/FeatureCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";
import { biogasSolutions, biogasAdvantages, caseStudies } from "@/data/biogasSolutions";
import { industries } from "@/data/industries";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("biogasSolutions");

export default function BiogasSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Recovery Machinery Standards"
        title="Testing and certification for waste-to-energy and recovery equipment"
        description="Eight standard series covering anaerobic digesters, gas upgrading, CHP systems, feedstock preparation, and modular equipment — all tested and certified through accredited laboratory partners."
        breadcrumb={[{ label: "Recovery Machinery Standards" }]}
      />

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <SectionHeading
          eyebrow="Standard Series"
          title="Comprehensive coverage across the recovery value chain"
        />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" amount={0.03}>
          {biogasSolutions.map((solution) => (
            <StaggerItem key={solution.slug}>
              <article
                id={solution.slug}
                className="group h-full overflow-hidden rounded border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card hover:border-primary/40 scroll-mt-32"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <IconBadge
                      icon={solution.icon}
                      className="h-11 w-11 rounded bg-white/90 text-secondary transition-transform duration-300 group-hover:scale-110"
                      iconClassName="h-5 w-5"
                    />
                  </div>
                </div>
                <div className="p-7">
                <h3 className="font-heading text-lg md:text-xl font-semibold text-dark">
                  {solution.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{solution.description}</p>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="bg-section py-4 md:py-6">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Standards Matter"
            title="Six dimensions of impact from a unified conformance framework"
            description="IWRREC standards deliver environmental integrity, market confidence, and regulatory alignment through a single integrated approach."
          />
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" amount={0.05}>
            {biogasAdvantages.map((advantage) => (
              <StaggerItem key={advantage.title}>
                <FeatureCard
                  icon={advantage.icon}
                  title={advantage.title}
                  description={advantage.description}
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <SectionHeading
          eyebrow="Sector Applications"
          title="Standards applied across eight industry sectors"
        />
        <StaggerGroup className="mt-14 grid gap-4 grid-cols-2 md:grid-cols-4" amount={0.05}>
          {industries.map((industry) => (
            <StaggerItem key={industry.slug}>
              <div className="group flex h-full flex-col items-center gap-3 rounded border border-line bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <IconBadge
                  icon={industry.icon}
                  className="h-12 w-12 rounded bg-none bg-section text-secondary group-hover:gradient-brand group-hover:text-white transition-all duration-300"
                  iconClassName="h-6 w-6"
                />
                <span className="font-heading text-sm font-semibold text-dark">
                  {industry.title}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="bg-section py-4 md:py-6">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Reference Programs"
            title="Certified programs demonstrating standards in practice"
          />
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3" amount={0.05}>
            {caseStudies.map((study) => (
              <StaggerItem key={study.title}>
                <article className="group flex h-full flex-col overflow-hidden rounded border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-2 text-sm font-heading font-semibold text-accent">
                      <TrendingUp className="h-4 w-4" />
                      {study.result}
                    </p>
                    <h3 className="mt-2.5 font-heading text-lg font-semibold text-dark">
                      {study.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{study.description}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-12 text-center">
            <Button href="/machinery">
              Browse All Certified Machinery
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      <StatsSection />
      <CTASection
        title="Which standards apply to your organization?"
        description="Contact the Council for guidance on applicable standard series, certification pathways, and participation in ongoing standards development."
      />
    </>
  );
}
