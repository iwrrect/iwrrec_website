import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="relative bg-section py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Council Programs"
          title="Standards, testing, certification, and compliance services"
          description="From machinery standards development to accredited laboratory testing and certification, eight programs supporting manufacturers, laboratories, and operators worldwide."
        />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" amount={0.05}>
          {services.slice(0, 6).map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal className="mt-12 text-center">
          <Button href="/services" variant="secondary">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
