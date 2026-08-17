import { Clock, Mail, MapPin } from "lucide-react";
// import {
//   FacebookIcon,
//   InstagramIcon,
//   LinkedinIcon,
//   TwitterIcon,
//   YoutubeIcon,
// } from "@/components/common/SocialIcons";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/animations/Reveal";
import { fadeLeft, fadeRight } from "@/lib/motion";
import { faqs } from "@/data/faqs";
import { SITE } from "@/constants/site";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("contact");

const contactCards = [
  {
    Icon: Mail,
    title: "Email",
    emails: SITE.emails,
  },
  {
    Icon: MapPin,
    title: "Headquarters",
    lines: [SITE.address.line1, SITE.address.line2],
  },
  {
    Icon: Clock,
    title: "Office Hours",
    lines: [SITE.hours, "Regional liaison offices by appointment"],
  },
];

// const socials = [
//   { label: "LinkedIn", href: SITE.social.linkedin, Icon: LinkedinIcon },
//   { label: "Twitter", href: SITE.social.twitter, Icon: TwitterIcon },
//   { label: "Facebook", href: SITE.social.facebook, Icon: FacebookIcon },
//   { label: "Instagram", href: SITE.social.instagram, Icon: InstagramIcon },
//   { label: "YouTube", href: SITE.social.youtube, Icon: YoutubeIcon },
// ];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Official Contact Information"
        description="For equipment certification, laboratory accreditation, machinery standards, or general inquiries, use the channels below to reach the International Secretariat."
        breadcrumb={[{ label: "Contact" }]}
      />

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map(({ Icon, title, lines, emails }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <article className="gov-card h-full border-l-4 border-l-gov-gold p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded bg-primary text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-3 font-heading text-sm font-bold text-navy">{title}</h2>
                {emails ? (
                  <ul className="mt-3 space-y-3">
                    {emails.map((item) => (
                      <li key={item.address}>
                        <a
                          href={`mailto:${item.address}`}
                          className="block text-sm font-semibold text-secondary hover:text-navy transition-colors"
                        >
                          {item.address}
                        </a>
                        <p className="text-xs text-muted">{item.label}</p>
                        <p className="text-xs text-muted">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  lines.map((line) => (
                    <p key={line} className="mt-1 text-sm text-muted">
                      {line}
                    </p>
                  ))
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="grid gap-8 lg:grid-cols-1 lg:gap-10">
          <Reveal variants={fadeLeft}>
            <SectionHeading
              align="left"
              eyebrow="Official Inquiry Form"
              title="Submit a formal inquiry"
              description="Complete the form below and a representative of the Council will respond within one working day."
            />
            <div className="mt-6 gov-card p-6 md:p-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal variants={fadeRight} className="flex flex-col gap-6">
            {/* <div className="gov-card p-5">
              <h3 className="font-heading text-sm font-bold text-navy">
                International Secretariat
              </h3>
              <p className="mt-2 text-sm text-muted">
                {SITE.address.line1}, {SITE.address.line2}
              </p>
            </div> */}

            {/* <div className="gov-card p-5">
              <h3 className="font-heading text-sm font-bold text-navy">Official Social Channels</h3>
              <p className="mt-1 text-sm text-muted">
                Standards updates, research releases, and Council announcements.
              </p>
              <div className="mt-4 flex gap-2">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded border border-line bg-section text-secondary transition-colors hover:bg-primary hover:text-white hover:border-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div> */}
          </Reveal>
        </div>
      </section>

      <section className="bg-section py-8 md:py-10 border-t border-line">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Common Questions"
            title="Before you submit an inquiry"
          />
          <Reveal className="mt-8">
            <Accordion items={faqs.filter((faq) => faq.category === "Membership" || faq.category === "General").slice(0, 5)} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
