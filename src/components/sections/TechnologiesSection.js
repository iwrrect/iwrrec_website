import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TechnologyCard from "@/components/cards/TechnologyCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { technologies } from "@/data/technologies";

export default function TechnologiesSection({ limit = 3, showLink = true }) {
  return (
    <section className="relative overflow-hidden bg-section py-4 md:py-6">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testing Technologies"
          title="Laboratory methods for rigorous machinery verification"
          description="Eight testing domains with published protocols, ensuring consistent, independent verification of equipment performance, safety, and compliance across the global laboratory network."
        />
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" amount={0.05}>
          {technologies.slice(0, limit).map((technology) => (
            <StaggerItem key={technology.slug}>
              <TechnologyCard technology={technology} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        {showLink && (
          <Reveal className="mt-12 text-center">
            <Button href="/technologies" variant="secondary">
              Explore All Technologies
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
