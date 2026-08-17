import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Logo from "@/components/common/Logo";
import NewsletterForm from "@/components/forms/NewsletterForm";
// import {
//   FacebookIcon,
//   InstagramIcon,
//   LinkedinIcon,
//   TwitterIcon,
//   YoutubeIcon,
// } from "@/components/common/SocialIcons";
import { FOOTER_LINKS, SITE } from "@/constants/site";

// const socials = [
//   { label: "LinkedIn", href: SITE.social.linkedin, Icon: LinkedinIcon },
//   { label: "Twitter", href: SITE.social.twitter, Icon: TwitterIcon },
//   { label: "Facebook", href: SITE.social.facebook, Icon: FacebookIcon },
//   { label: "Instagram", href: SITE.social.instagram, Icon: InstagramIcon },
//   { label: "YouTube", href: SITE.social.youtube, Icon: YoutubeIcon },
// ];

function LinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-heading text-sm font-semibold text-white border-b border-white/20 pb-2">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-white hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="h-1 bg-gov-gold" aria-hidden="true" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-14 pb-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {SITE.description}
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gov-gold" />
                <span>
                  {SITE.address.line1}, {SITE.address.line2}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gov-gold" />
                <ul className="space-y-1">
                  {SITE.emails.map((item) => (
                    <li key={item.address}>
                      <a
                        href={`mailto:${item.address}`}
                        className="hover:text-white transition-colors"
                      >
                        {item.address}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            <LinkColumn title="Organization" links={FOOTER_LINKS.company} />
            <LinkColumn title="Programs" links={FOOTER_LINKS.solutions} />
            <LinkColumn title="Resources" links={FOOTER_LINKS.resources} />
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-semibold text-white border-b border-white/20 pb-2">
              Official Updates
            </h3>
            <p className="mt-4 text-sm text-slate-400">
              Subscribe for certification updates, new standards, and laboratory partner announcements.
            </p>
            <NewsletterForm />
            {/* <div className="mt-6 flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded border border-white/20 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div> */}
          </div>
        </div>

        {/* <div className="mt-10 rounded border border-white/15 bg-white/5 p-4 text-xs leading-relaxed text-slate-400">
          <strong className="text-slate-300">Official Use Notice:</strong> This is an official
          website of the {SITE.legalName}. Information published on this site is for public
          reference. For official correspondence, please use the contact channels listed above.
        </div> */}

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Website developed and maintained by {SITE.developer}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQs
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
