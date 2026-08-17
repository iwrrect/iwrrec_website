import PageHero from "@/components/common/PageHero";
import LaboratoriesExplorer from "@/components/sections/LaboratoriesExplorer";
import CTASection from "@/components/sections/CTASection";
import { TOTAL_LABORATORY_PARTNERS } from "@/data/laboratoryPartners";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("laboratoryPartners");

export default function LaboratoryPartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Accredited Laboratory Partners"
        title="100+ authorized laboratories for machinery testing and certification"
        description="Each laboratory below is accredited by IWRREC to test equipment, verify compliance, and issue the official IWRREC certificate to manufacturers worldwide — including Gujarat Metal Lab in Rajkot, Gujarat, India."
        breadcrumb={[{ label: "Laboratory Partners" }]}
      />

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <LaboratoriesExplorer />
      </section>

      <CTASection
        title="Find your nearest accredited laboratory"
        description={`With ${TOTAL_LABORATORY_PARTNERS}+ laboratory partners across six continents, manufacturers can test equipment locally. Contact us to identify the best laboratory for your equipment type and IWRREC certificate application.`}
      />
    </>
  );
}
