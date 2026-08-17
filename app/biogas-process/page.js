import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessTimeline from "@/components/timeline/ProcessTimeline";
import Counter from "@/components/ui/Counter";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import CTASection from "@/components/sections/CTASection";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("biogasProcess");

const processFacts = [
  { value: 105, suffix: "+", label: "Accredited laboratories" },
  { value: 3500, suffix: "+", label: "Certified equipment models" },
  { value: 45, suffix: "+", label: "Member countries" },
  { value: 3, suffix: " yrs", label: "Certification cycle" },
];

export default function BiogasProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Certification Process"
        title="Eight stages from application to certified machinery"
        description="Follow the transparent certification pathway through which manufacturers worldwide obtain IWRREC certification via accredited laboratory partners."
        breadcrumb={[{ label: "Certification Process" }]}
      />

      {/* Compact stats strip */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-line" amount={0.05}>
            {processFacts.map((fact) => (
              <StaggerItem key={fact.label} className="px-4 py-5 text-center sm:px-6">
                <p className="text-2xl md:text-3xl font-bold text-navy">
                  <Counter value={fact.value} suffix={fact.suffix} />
                </p>
                <p className="mt-1 text-xs md:text-sm text-muted">{fact.label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <SectionHeading
          align="left"
          eyebrow="The Certification Process"
          title="Step by step, from application to certified equipment"
          description="Each stage represents a phase in the IWRREC machinery certification pathway — designed for transparency, independent testing, and verified compliance."
        />
        <div className="mt-6 md:mt-6">
          <ProcessTimeline detailed />
        </div>
      </section>

      <CTASection
        title="Ready to certify your equipment?"
        description="Manufacturers worldwide can apply for IWRREC certification through our accredited laboratory partners. Contact us to start your application."
      />
    </>
  );
}
