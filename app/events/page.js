import { CalendarDays, Images, MapPin } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/cards/EventCard";
import InfiniteGallery from "@/components/gallery/InfiniteGallery";
import Reveal from "@/components/animations/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import CTASection from "@/components/sections/CTASection";
import { events, galleryItems } from "@/data/events";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("events");

const highlights = [
  {
    icon: CalendarDays,
    label: "Events listed",
    value: String(events.length),
  },
  {
    icon: Images,
    label: "Gallery photos",
    value: String(galleryItems.length),
  },
  {
    icon: MapPin,
    label: "Global venues",
    value: "Worldwide",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events & Conferences"
        title="Where manufacturers, laboratories, and regulators convene"
        description="Certification summits, laboratory training weeks, manufacturer forums, and standards launches — advancing machinery testing and certification worldwide."
        breadcrumb={[{ label: "Events & Conferences" }]}
      />

      {/* Quick highlights */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-0 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0 px-4 sm:px-6 lg:px-8">
          {highlights.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 py-5 sm:px-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-section text-secondary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-lg font-bold text-navy">{value}</p>
                <p className="text-xs text-muted">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event cards */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <SectionHeading
          align="left"
          eyebrow="Recent Events"
          title="Upcoming and recent Council events"
          description="Open any event for objectives, highlights, achievements, and its photo gallery."
        />
        <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3" amount={0.03}>
          {events.map((event) => (
            <StaggerItem key={event.slug}>
              <EventCard event={event} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Gallery */}
      <section className="bg-section py-10 md:py-14 border-y border-line">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Photo Gallery"
            title="Scenes from Council events"
            description="Keep scrolling — more photos load automatically as you go."
          />
          <Reveal className="mt-10">
            <InfiniteGallery items={galleryItems} />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Invite IWRREC to your certification or standards event"
        description="Council experts speak at conferences, lead laboratory training workshops, and participate in manufacturer forums worldwide. Tell us about your upcoming event."
      />
    </>
  );
}
