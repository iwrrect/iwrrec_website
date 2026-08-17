import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("services");

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Council Programs"
        title="Standards, testing, certification, and compliance services"
        description="Eight Council programs supporting manufacturers, accredited laboratories, and operators — from machinery standards development to certification and laboratory accreditation."
        breadcrumb={[{ label: "Council Programs" }]}
      />

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <SectionHeading
          eyebrow="Our Programs"
          title="Supporting equipment manufacturers and laboratories at every stage"
        />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" amount={0.03}>
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <div className="bg-section">
        <FAQSection items={faqs.filter((f) => f.category === "Education" || f.category === "Certification" || f.category === "Laboratory Partners")} />
      </div>

      <CTASection
        title="Ready to certify your equipment or accredit your laboratory?"
        description="Whether you are a manufacturer seeking certification or a laboratory interested in accreditation, our team will connect you with the right program."
      />
    </>
  );
}
