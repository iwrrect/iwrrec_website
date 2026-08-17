import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import IndustryCard from "@/components/cards/IndustryCard";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import CTASection from "@/components/sections/CTASection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { industries } from "@/data/industries";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("industries");

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipment Manufacturers"
        title="Certification standards across eight machinery categories"
        description="Eight equipment sectors with dedicated testing standards — from material handling and sorting to digestion, gas upgrading, and energy conversion machinery."
        breadcrumb={[{ label: "Equipment Manufacturers" }]}
      />

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <SectionHeading
          eyebrow="Machinery Categories"
          title="Testing and certification standards for every equipment type"
          description="Each category addresses the specific performance, safety, and compliance requirements relevant to its machinery class."
        />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" amount={0.03}>
          {industries.map((industry) => (
            <StaggerItem key={industry.slug}>
              <IndustryCard industry={industry} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <div className="bg-section">
        <TestimonialsSection />
      </div>

      <CTASection
        title="Ready to certify your equipment?"
        description="Contact IWRREC to identify the applicable testing standard and connect with an accredited laboratory partner in your region."
      />
    </>
  );
}
