import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/animations/Reveal";
import CTASection from "@/components/sections/CTASection";
import { faqs } from "@/data/faqs";
import { SITE } from "@/constants/site";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("faq");

const categories = [...new Set(faqs.map((faq) => faq.category))];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: "IWRREC Frequently Asked Questions",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="FAQs"
        title="Answers about certification, testing, and laboratory partners"
        description={`Organized by topic and written by the Council's technical teams. Still have questions? Write to ${SITE.email}, we respond within one working day.`}
        breadcrumb={[{ label: "FAQs" }]}
      />

      {categories.map((category, index) => (
        <section
          key={category}
          className={index % 2 === 1 ? "bg-section py-6 md:py-18" : "py-6 md:py-18"}
        >
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading align="left" eyebrow={category} title={`${category} questions`} />
            <Reveal className="mt-8">
              <Accordion items={faqs.filter((faq) => faq.category === category)} />
            </Reveal>
          </div>
        </section>
      ))}

      <CTASection
        title="Didn't find your answer?"
        description="Contact the Council directly — certification inquiries go to our certification desk, and laboratory accreditation questions to our accreditation team."
      />
    </>
  );
}
