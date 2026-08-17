import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import TechnologyCard from "@/components/cards/TechnologyCard";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";
import { technologies } from "@/data/technologies";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("technologies");

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Testing Technologies"
        title="Laboratory methods for rigorous machinery verification"
        description="Eight testing domains with published protocols, ensuring consistent independent verification of equipment performance, safety, and compliance across the global laboratory network."
        breadcrumb={[{ label: "Testing Technologies" }]}
      />

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <SectionHeading
          eyebrow="Testing Methods"
          title="Comprehensive verification across the certification stack"
        />
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" amount={0.03}>
          {technologies.map((technology) => (
            <StaggerItem key={technology.slug} className="scroll-mt-32" >
              <TechnologyCard technology={technology} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <StatsSection />
      <CTASection
        title="Need guidance on applicable testing protocols?"
        description="Contact the Council for testing documentation, laboratory partner referrals, and certification support for your equipment."
      />
    </>
  );
}
