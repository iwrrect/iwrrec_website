"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GovSectionHeading from "@/components/ui/GovSectionHeading";
import MachineryItemCard from "@/components/cards/MachineryItemCard";
import { cn } from "@/lib/utils";
import { machineryCategoryGroups } from "@/data/machineryCarousel";

export default function MachineryCarousel() {
  const [activeGroup, setActiveGroup] = useState(machineryCategoryGroups[0].id);

  const activeCategory = useMemo(
    () => machineryCategoryGroups.find((g) => g.id === activeGroup),
    [activeGroup]
  );

  const previewItems = activeCategory?.items.slice(0, 3) ?? [];

  return (
    <section className="border-y border-line bg-section py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <GovSectionHeading
          eyebrow="Certified Machinery Categories"
          title="Standards, testing & certification for industrial equipment"
          description="IWRREC certifies machinery across waste processing, recycling, bioenergy, and advanced recovery — each category tested by accredited laboratories under international standards."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {machineryCategoryGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActiveGroup(group.id)}
              className={cn(
                "rounded border px-4 py-2 text-sm font-semibold cursor-pointer",
                activeGroup === group.id
                  ? "border-navy bg-navy text-white"
                  : "border-line bg-white text-navy hover:border-secondary"
              )}
            >
              {group.label}
            </button>
          ))}
        </div>

        {activeCategory && (
          <>
            <p className="mt-6 max-w-3xl mx-auto text-center text-sm text-muted">
              {activeCategory.overview}
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {previewItems.map((item) => (
                <MachineryItemCard key={item.slug} item={item} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href={`/machinery/${activeCategory.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-navy"
              >
                View all {activeCategory.label.toLowerCase()} standards
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </>
        )}

        <div className="mt-10 border-t border-line pt-6 text-center">
          <Link
            href="/machinery"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-navy"
          >
            Browse all machinery categories
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
