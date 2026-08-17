import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/animations/Reveal";
import { SITE } from "@/constants/site";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("terms");

const sections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      `By accessing or using this website (${SITE.url}), you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these terms, please do not use the website.`,
    ],
  },
  {
    title: "2. About This Website",
    paragraphs: [
      `This website is operated by ${SITE.legalName} ("IWRREC", "the Council", "we", "us"). It provides information about our standards, IWRREC certificate, research publications, training, events, and membership. The content is for general information only and does not constitute a binding offer, technical certification, or professional advice of any kind.`,
    ],
  },
  {
    title: "3. Standards and Certification Information",
    paragraphs: [
      "Performance figures, certification criteria, and case study results published on this website reflect specific reference programs under their specific conditions. They are illustrative and do not guarantee results for any other organization or facility. Binding certification requirements and assessment criteria are provided only in official IWRREC program documentation and accredited audit reports.",
    ],
  },
  {
    title: "4. Intellectual Property",
    paragraphs: [
      `All content on this website, text, graphics, logos, illustrations, photographs, and page designs, is the property of ${SITE.legalName} or its licensors and is protected by copyright and trademark law. You may view, download, and print content for personal or internal business evaluation purposes. Reproduction, distribution, or commercial use without our prior written consent is prohibited.`,
      "The IWRREC name, logo, and program designations referenced on this site are trademarks of the International Waste Resource Recovery and Energy Council.",
    ],
  },
  {
    title: "5. Acceptable Use",
    paragraphs: [
      "You agree not to misuse this website, including by attempting unauthorized access to systems or data; introducing malware or performing denial-of-service attacks; scraping content at scale without permission; or using the site for any unlawful purpose. We may restrict or terminate access for violations.",
    ],
  },
  {
    title: "6. Third-Party Links and Content",
    paragraphs: [
      "This website may contain links to external websites operated by third parties. These links are provided for convenience; we do not control and are not responsible for the content, accuracy, or privacy practices of external sites.",
    ],
  },
  {
    title: "7. Disclaimer of Warranties",
    paragraphs: [
      "This website and its content are provided on an 'as is' and 'as available' basis. While we strive for accuracy, we make no warranties, express or implied, about the completeness, reliability, or availability of the website or its information. Standards references and regulatory information may change without notice.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    paragraphs: [
      `To the maximum extent permitted by law, ${SITE.legalName} shall not be liable for any indirect, incidental, consequential, or special damages arising from the use of, or inability to use, this website or reliance on its content. Nothing in these terms limits liability that cannot be limited under applicable law.`,
    ],
  },
  {
    title: "9. Governing Law and Jurisdiction",
    paragraphs: [
      "These Terms & Conditions are governed by the laws of England and Wales. Any dispute arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
    ],
  },
  {
    title: "10. Changes to These Terms",
    paragraphs: [
      "We may revise these Terms & Conditions at any time by updating this page. Continued use of the website after changes are posted constitutes acceptance of the revised terms. Last updated: July 1, 2026.",
    ],
  },
  {
    title: "11. Contact",
    paragraphs: [
      `Questions about these terms may be directed to ${SITE.email} or by post to ${SITE.legalName}, ${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.country}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The ground rules for using this website, written to be read, not skimmed. Last updated: July 1, 2026."
        breadcrumb={[{ label: "Terms & Conditions" }]}
      />
      <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-6 md:py-4">
        {sections.map((section) => (
          <Reveal key={section.title} className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-dark">
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 text-base leading-[1.85] text-muted"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        ))}
      </section>
    </>
  );
}
