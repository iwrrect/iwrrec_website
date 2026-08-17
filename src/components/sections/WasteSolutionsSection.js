import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import IconBadge from "@/components/ui/IconBadge";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { wasteTypes } from "@/data/wasteManagement";

export default function WasteSolutionsSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
      <SectionHeading
        eyebrow="Equipment Testing Standards"
        title="Certification standards for waste processing machinery"
        description="Material handling, sorting, shredding, biological treatment, and monitoring equipment — IWRREC publishes the testing protocols and performance benchmarks verified by accredited laboratory partners."
      />
      <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" amount={0.05}>
        {wasteTypes.map((waste, index) => (
          <StaggerItem
            key={waste.slug}
            className={index === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
          >
            <Link
              href={`/waste-management#${waste.slug}`}
              className="group relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded border border-line text-white shadow-soft transition-shadow duration-300 hover:shadow-card"
            >
              <Image
                src={waste.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/55 to-navy/15" />
              <div className="relative p-6 md:p-7">
                <IconBadge icon={waste.icon} className="h-11 w-11 rounded" iconClassName="h-5 w-5" />
                <h3 className="mt-4 text-lg font-bold leading-snug text-white md:text-xl [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]">
                  {waste.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-100 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {waste.description}
                </p>
                <ul className="mt-3 hidden gap-2 group-hover:flex flex-wrap">
                  {waste.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-1 rounded border border-white/25 bg-white/10 px-2.5 py-1 text-[11px] text-white"
                    >
                      <CheckCircle2 className="h-3 w-3 text-gov-gold" />
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gov-gold">
                  Explore standards
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
