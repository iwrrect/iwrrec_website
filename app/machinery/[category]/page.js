import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import MachineryItemCard from "@/components/cards/MachineryItemCard";
import CTASection from "@/components/sections/CTASection";
import { machineryCategoryGroups, getMachineryCategory } from "@/data/machineryCarousel";
import { buildMetadata } from "@/constants/seo";

export function generateStaticParams() {
  return machineryCategoryGroups.map((group) => ({ category: group.id }));
}

export async function generateMetadata({ params }) {
  const { category: id } = await params;
  const group = getMachineryCategory(id);
  if (!group) return { title: "Category Not Found" };
  return buildMetadata({
    title: `${group.label} — IWRREC Certified Machinery`,
    description: group.overview,
    path: `/machinery/${group.id}`,
    image: group.image,
    keywords: [group.label, "IWRREC certified machinery"],
  });
}

export default async function MachineryCategoryPage({ params }) {
  const { category: id } = await params;
  const group = getMachineryCategory(id);
  if (!group) notFound();

  return (
    <>
      <PageHero
        static
        eyebrow="Certified Machinery"
        title={group.label}
        description={group.overview}
        breadcrumb={[
          { label: "Certified Machinery", href: "/machinery" },
          { label: group.label },
        ]}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 -mt-2">
        <div className="relative aspect-[21/7] overflow-hidden border border-line gov-card">
          <Image
            src={group.image}
            alt={group.label}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Link
          href="/machinery"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-navy"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All machinery categories
        </Link>

        <p className="mt-6 max-w-3xl text-sm text-muted">
          The following {group.items.length} equipment types are certified under IWRREC standards
          through accredited laboratory testing. Each item is evaluated for performance, environmental
          compliance, and safety verification.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {group.items.map((item) => (
            <MachineryItemCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <CTASection
        title={`Certify your ${group.label.toLowerCase()} equipment`}
        description="Submit a certification application and IWRREC will assign an accredited laboratory partner for independent testing."
      />
    </>
  );
}
