import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import IconBadge from "@/components/ui/IconBadge";
import FeatureCard from "@/components/cards/FeatureCard";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/animations/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import CTASection from "@/components/sections/CTASection";
import { fadeLeft, fadeRight } from "@/lib/motion";
import {
  wasteTypes,
  wasteServices,
  wasteBenefits,
  environmentalImpact,
} from "@/data/wasteManagement";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("wasteManagement");

export default function WasteManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipment Testing Standards"
        title="Testing and certification standards for waste processing machinery"
        description="IWRREC publishes performance benchmarks, safety requirements, and testing protocols for material handling, sorting, shredding, and monitoring equipment — verified by accredited laboratory partners."
        breadcrumb={[{ label: "Equipment Testing Standards" }]}
      />

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <SectionHeading
          eyebrow="Equipment Categories"
          title="Five machinery categories, five testing standard series"
        />
        <div className="mt-16 space-y-20">
          {wasteTypes.map((waste, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={waste.slug}
                id={waste.slug}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 scroll-mt-32"
              >
                <Reveal
                  variants={reversed ? fadeRight : fadeLeft}
                  className={reversed ? "lg:order-2" : ""}
                >
                  <div className="group relative overflow-hidden rounded-md shadow-card">
                    <Image
                      src={waste.image}
                      alt={waste.title}
                      width={800}
                      height={520}
                      className="h-[320px] md:h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                  </div>
                </Reveal>
                <Reveal
                  variants={reversed ? fadeLeft : fadeRight}
                  className={reversed ? "lg:order-1" : ""}
                >
                  <IconBadge icon={waste.icon} />
                  <h3 className="mt-5 font-heading text-2xl md:text-3xl font-bold text-dark">
                    {waste.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">{waste.description}</p>
                  <ul className="mt-6 space-y-3">
                    {waste.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3 text-sm md:text-base text-muted">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-section py-4 md:py-6">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Standards Framework"
            title="From collection to recovery, one integrated system"
            description="Five standard domains, each building on the previous to maximize resource recovery and environmental performance."
          />
          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" amount={0.05}>
            {wasteServices.map((service, index) => (
              <StaggerItem key={service.title} className="relative">
                <article className="group h-full rounded-md border border-line bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card">
                  <span
                    className="text-xs font-bold text-primary"
                    style={{ fontFamily: "var(--font-numeric)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <IconBadge
                    icon={service.icon}
                    className="mx-auto mt-3 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="mt-5 font-heading text-base font-semibold text-dark">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{service.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <SectionHeading
          eyebrow="Benefits of Conformance"
          title="Why integrated standards outperform fragmented approaches"
          description="When collection, treatment, and recovery standards are applied together, every stage compounds the environmental and economic value of the system."
        />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" amount={0.05}>
          {wasteBenefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <FeatureCard icon={benefit.icon} title={benefit.title} description={benefit.description} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="border-y border-line bg-section py-10 md:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Environmental Impact"
            title="The global case for standardized waste management"
            description="Key indicators showing why integrated waste standards matter for climate, emissions, and resource recovery."
          />
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" amount={0.05}>
            {environmentalImpact.map((impact) => (
              <StaggerItem key={impact.label}>
                <article className="gov-card h-full border-l-4 border-l-gov-gold px-5 py-6">
                  <p className="text-3xl font-bold text-navy">
                    <Counter
                      value={impact.value}
                      suffix={impact.suffix}
                      decimals={impact.decimals ?? 0}
                    />
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{impact.label}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTASection
        title="Ready to align your waste management program with international standards?"
        description="Contact the Council to access standards documentation, pursue facility certification, or join a technical committee developing the next generation of waste management guidance."
      />
    </>
  );
}
