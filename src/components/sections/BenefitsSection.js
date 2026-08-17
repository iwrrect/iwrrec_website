import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/cards/FeatureCard";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { biogasAdvantages } from "@/data/biogasSolutions";

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-section py-4 md:py-6">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Certification Matters"
          title="One framework, six dimensions of trust"
          description="IWRREC certification provides independent verification of machinery performance, safety, and compliance — tested by accredited laboratories and recognized worldwide."
        />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" amount={0.05}>
          {biogasAdvantages.map((advantage) => (
            <StaggerItem key={advantage.title}>
              <FeatureCard
                icon={advantage.icon}
                title={advantage.title}
                description={advantage.description}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
