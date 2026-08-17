import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/sections/CTASection";
import { machineryCategoryGroups, allMachineryItems } from "@/data/machineryCarousel";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("machinery");

export default function MachineryIndexPage() {
  return (
    <>
      <PageHero
        static
        eyebrow="Certified Machinery"
        title="Machinery categories under IWRREC certification"
        description="Browse all equipment categories for which IWRREC publishes standards, accredits laboratory testing, and issues performance, safety, and environmental compliance certification."
        breadcrumb={[{ label: "Certified Machinery" }]}
      />

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <p className="max-w-3xl text-base text-muted">
          {allMachineryItems.length} equipment types across {machineryCategoryGroups.length}{" "}
          certification categories. Each category links to detailed standards scope and accredited
          testing requirements.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {machineryCategoryGroups.map((group) => (
            <article
              key={group.id}
              className="gov-card flex flex-col overflow-hidden border-l-4 border-l-gov-gold"
            >
              <div className="relative aspect-[16/9] border-b border-line">
                <Image
                  src={group.image}
                  alt={group.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-bold text-navy">{group.label}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{group.overview}</p>
                <p className="mt-3 text-xs font-semibold text-secondary">
                  {group.items.length} equipment types certified
                </p>
                <Link
                  href={`/machinery/${group.id}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-navy"
                >
                  View category standards
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Apply for machinery certification"
        description="Contact IWRREC to identify the applicable standard and accredited laboratory partner for your equipment category."
      />
    </>
  );
}
