import { ShieldCheck } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CertificationCard from "@/components/cards/CertificationCard";
import CTASection from "@/components/sections/CTASection";
import { certifications } from "@/data/certifications";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("isoCertifications");

export default function CertificationsPage() {
  const certificate = certifications[0];

  return (
    <>
      <PageHero
        eyebrow="Certificate"
        title="The official IWRREC machinery certificate"
        description="IWRREC issues one official certificate for waste recovery and energy machinery. Accredited laboratory partners test equipment independently; successful models receive a single IWRREC certificate recognized by procurement bodies and regulators worldwide."
        breadcrumb={[{ label: "Certificate" }]}
      />

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <SectionHeading
          eyebrow="Official Certificate"
          title="One certificate for verified machinery"
        />
        <div id={certificate.slug} className="mx-auto mt-14 max-w-xl scroll-mt-32">
          <CertificationCard certification={certificate} />
        </div>
      </section>

      <section className="bg-section py-4 md:py-6">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded border border-line bg-white p-8 md:p-10 text-center shadow-soft">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded bg-primary text-white">
              <ShieldCheck className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-navy">
              Certification Resource Center
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Need IWRREC certificate documentation for a tender, procurement specification, or
              compliance audit? Contact our certification desk for guidance.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded border-2 border-secondary bg-white px-6 py-3 font-semibold text-secondary hover:bg-section"
              >
                Request Certification Guidance
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Apply for the IWRREC certificate through an accredited laboratory partner"
        description="Our certification team responds to application inquiries and pre-assessment requests within two working days."
      />
    </>
  );
}
