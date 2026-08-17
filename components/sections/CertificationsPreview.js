import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import IconBadge from "@/components/ui/IconBadge";
import { certifications } from "@/data/certifications";

export default function CertificationsPreview() {
  const certificate = certifications[0];

  return (
    <section className="relative bg-section py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Certificate"
              title="One official IWRREC certificate"
              description="IWRREC issues a single machinery certificate. Accredited laboratory partners independently test equipment for performance, safety, and environmental compliance."
            />
            <Link
              href="/iso-certifications"
              className="mt-8 inline-flex items-center gap-2 font-heading font-semibold text-secondary hover:text-dark"
            >
              View the IWRREC Certificate
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Link
            href="/iso-certifications"
            className="group flex items-start gap-4 rounded border border-line bg-white p-6 shadow-soft"
          >
            <IconBadge
              icon={certificate.icon}
              className="h-14 w-14 rounded shrink-0"
              iconClassName="h-6 w-6"
            />
            <span>
              <span
                className="flex items-center gap-1.5 font-bold text-dark text-lg"
                style={{ fontFamily: "var(--font-numeric)" }}
              >
                {certificate.code}
                <BadgeCheck className="h-5 w-5 text-accent" />
              </span>
              <span className="mt-1 block text-sm font-semibold text-secondary">
                {certificate.title}
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-muted">
                {certificate.purpose}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
