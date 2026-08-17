import Accordion from "@/components/ui/Accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function FAQSection({ items, showAllLink = true }) {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Frequently Asked Questions"
            title="Answers about membership, standards, and certification"
            description="The questions organizations, municipalities, and facility operators ask most, answered by the Council's technical and membership teams."
          />
          {showAllLink && (
            <Reveal className="mt-8">
              <Button href="/faq" variant="secondary">
                Browse All FAQs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          )}
        </div>
        <Reveal>
          <Accordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
