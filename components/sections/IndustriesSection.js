import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import IndustryCard from "@/components/cards/IndustryCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { industries } from "@/data/industries";

export default function IndustriesSection({ limit = 8, showLink = false }) {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
      <SectionHeading
        eyebrow="Equipment Manufacturers"
        title="Certification programs across eight machinery categories"
        description="Eight industry sectors with dedicated testing standards — from material handling and sorting to digestion, gas upgrading, and energy conversion equipment."
      />
      <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" amount={0.05}>
        {industries.slice(0, limit).map((industry) => (
          <StaggerItem key={industry.slug}>
            <IndustryCard industry={industry} />
          </StaggerItem>
        ))}
      </StaggerGroup>
      {showLink && (
        <Reveal className="mt-12 text-center">
          <Button href="/industries" variant="secondary">
            All Industries
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      )}
    </section>
  );
}
