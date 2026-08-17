import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/animations/Reveal";
import { SITE } from "@/constants/site";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("privacyPolicy");

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "When you use our website or engage with IWRREC programs, we may collect: contact details you provide (name, organization, email address, phone number) through inquiry, membership, and newsletter forms; information you share when requesting certification guidance, standards documentation, or event registration; and technical data collected automatically, including IP address, browser type, pages visited, and referring URLs, gathered through standard server logs and analytics.",
      "We do not collect sensitive personal data such as financial account numbers, government identifiers, or health information through this website.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    paragraphs: [
      "We use the information we collect to respond to your inquiries and process membership, certification, and event requests; to deliver Council programs including standards access, training, and research publications; to send our newsletter and relevant updates where you have subscribed (you can unsubscribe at any time using the link in every email); to improve our website, content, and program offerings based on aggregate usage patterns; and to comply with legal and regulatory obligations.",
      "We do not sell, rent, or trade your personal information to third parties for marketing purposes. Ever.",
    ],
  },
  {
    title: "3. Legal Basis for Processing",
    paragraphs: [
      "We process personal data on the following bases: your consent (newsletter subscriptions, optional form fields); performance of a contract or steps prior to entering one (membership applications, certification inquiries, event registration); our legitimate interests in operating and improving the Council's programs, provided these are not overridden by your rights; and compliance with legal obligations applicable to our operations in the United Kingdom and other jurisdictions where we operate.",
    ],
  },
  {
    title: "4. Sharing and Disclosure",
    paragraphs: [
      "We may share information with trusted service providers who support our operations, such as cloud hosting, email delivery, and customer relationship systems, under contracts that restrict their use of your data to services performed for us. We may also share information with professional advisers, or when required by law, court order, or governmental authority.",
      "If IWRREC is involved in a merger, acquisition, or organizational restructuring, personal information may be transferred as part of that transaction, subject to equivalent protections.",
    ],
  },
  {
    title: "5. Data Retention",
    paragraphs: [
      "We retain inquiry data for up to three years from your last interaction, unless a longer period is required for contractual or legal reasons. Newsletter subscription data is retained until you unsubscribe. Project and contractual records are retained for the periods required by applicable commercial and tax law.",
    ],
  },
  {
    title: "6. Security",
    paragraphs: [
      "We apply administrative, technical, and physical safeguards appropriate to the sensitivity of the data we hold, including access controls, encrypted transmission (HTTPS), and staff confidentiality obligations. No internet transmission is entirely secure, and we cannot guarantee absolute security, but we work to protect your data using industry-accepted practices.",
    ],
  },
  {
    title: "7. Your Rights",
    paragraphs: [
      "Depending on your jurisdiction, you may have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion, object to or restrict certain processing, and withdraw consent where processing is based on consent. To exercise any of these rights, contact us using the details below. We respond to verified requests within 30 days.",
    ],
  },
  {
    title: "8. Cookies and Analytics",
    paragraphs: [
      "Our website uses strictly necessary cookies for core functionality and may use analytics cookies to understand aggregate visitor behaviour. You can control cookies through your browser settings; disabling them may affect some site features but will not prevent you from reading our content.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. The 'Last updated' date below reflects the latest revision. Material changes will be highlighted on this page.",
    ],
  },
  {
    title: "10. Contact",
    paragraphs: [
      `For privacy questions or requests, write to ${SITE.email} or by post to ${SITE.legalName}, ${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.country}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Plain-language answers about what we collect, why, and what we will never do with your data. Last updated: July 1, 2026."
        breadcrumb={[{ label: "Privacy Policy" }]}
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
