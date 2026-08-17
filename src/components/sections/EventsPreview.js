import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/cards/EventCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { events } from "@/data/events";

export default function EventsPreview() {
  return (
    <section className="relative bg-section py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Events & Conferences"
          title="Where manufacturers, laboratories, and regulators convene"
          description="Certification summits, laboratory training weeks, manufacturer forums, and standards launches — advancing machinery testing and certification worldwide."
        />
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" amount={0.05}>
          {events.slice(0, 3).map((event) => (
            <StaggerItem key={event.slug}>
              <EventCard event={event} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal className="mt-12 text-center">
          <Button href="/events" variant="secondary">
            All Events & Gallery
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
