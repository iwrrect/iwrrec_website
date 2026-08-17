import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/animations/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { biogasSolutions } from "@/data/biogasSolutions";

export default function BiogasSolutionsSection() {
  return (
    <section className="relative overflow-hidden bg-section py-4 md:py-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 animate-blob-slow bg-sky-200/50 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recovery Machinery Standards"
          title="Biogas plants, CBG systems, and energy recovery equipment"
          description="Ten standard series covering anaerobic digesters, gas upgrading, CBG compression, CHP systems, and thermal conversion — all tested and certified through accredited laboratory partners."
        />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" amount={0.05}>
          {biogasSolutions.slice(0, 8).map((solution) => (
            <StaggerItem key={solution.slug}>
              <Link
                href={`/biogas-solutions#${solution.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card hover:border-primary/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <IconBadge
                      icon={solution.icon}
                      className="h-10 w-10 rounded-lg bg-white/90 text-secondary"
                      iconClassName="h-5 w-5"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-base font-semibold text-dark leading-snug">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
                    {solution.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal className="mt-12 text-center">
          <Button href="/biogas-solutions">
            Explore All Recovery Standards
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
