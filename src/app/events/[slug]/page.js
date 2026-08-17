import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Award,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import InfiniteGallery from "@/components/gallery/InfiniteGallery";
import Reveal from "@/components/animations/Reveal";
import CTASection from "@/components/sections/CTASection";
import { events } from "@/data/events";
import { formatDate } from "@/lib/utils";
import { SITE } from "@/constants/site";
import { buildMetadata } from "@/constants/seo";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  return buildMetadata({
    title: event.name,
    description: event.purpose,
    path: `/events/${event.slug}`,
    image: event.banner,
    keywords: ["IWRREC events", event.location],
  });
}

export default async function EventDetailPage({ params }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const galleryItems = event.gallery.map((image, index) => ({
    id: `${event.slug}-${index}`,
    image,
    title: event.name,
    category: event.location.split(",")[0],
    alt: `${event.name} — photo ${index + 1}`,
  }));

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.purpose,
    startDate: event.date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "Place", name: event.location, address: event.location },
    image: event.banner?.startsWith("http") ? event.banner : `${SITE.url}${event.banner}`,
    organizer: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <section className="relative bg-section border-b border-line pt-8 pb-8 md:pt-10 md:pb-10">
        <div className="absolute inset-x-0 top-0 h-1 bg-gov-gold" aria-hidden="true" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Events & Conferences", href: "/events" },
              { label: event.name },
            ]}
          />

          <Reveal className="relative mt-6 overflow-hidden rounded border border-line bg-white shadow-soft">
            <div className="relative h-[240px] md:h-[360px]">
              <Image
                src={event.banner}
                alt={event.name}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <h1 className="max-w-3xl text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
                  {event.name}
                </h1>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/90">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-gov-gold" />
                    {formatDate(event.date)}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gov-gold" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gov-gold" />
                    {event.participants}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 rounded border border-line bg-white p-6 md:p-8 shadow-soft">
            <h2 className="text-xl md:text-2xl font-bold text-navy gov-accent-bar">
              About This Event
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{event.purpose}</p>

            <h3 className="mt-8 flex items-center gap-2 text-lg font-semibold text-navy">
              <Target className="h-5 w-5 text-secondary" />
              Objectives
            </h3>
            <ul className="mt-4 space-y-3">
              {event.objectives.map((objective) => (
                <li key={objective} className="flex items-start gap-3 text-sm md:text-base text-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {objective}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 flex items-center gap-2 text-lg font-semibold text-navy">
              <Sparkles className="h-5 w-5 text-secondary" />
              Event Highlights
            </h3>
            <ul className="mt-4 space-y-3">
              {event.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm md:text-base text-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="h-fit rounded border border-line bg-white p-6 md:p-7 shadow-soft" delay={0.1}>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-navy">
              <Award className="h-5 w-5 text-secondary" />
              Achievements
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{event.achievements}</p>
            <dl className="mt-6 space-y-4 border-t border-line pt-5 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-soft">Date</dt>
                <dd className="mt-1 font-semibold text-navy">{formatDate(event.date)}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-soft">Location</dt>
                <dd className="mt-1 font-semibold text-navy">{event.location}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-soft">Participation</dt>
                <dd className="mt-1 font-semibold text-navy">{event.participants}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-section py-10 md:py-14 border-y border-line">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" eyebrow="Photo Gallery" title="Moments from the day" />
          <div className="mt-10">
            <InfiniteGallery items={galleryItems} />
          </div>
        </div>
      </section>

      <CTASection
        title="Want to attend the next IWRREC event?"
        description="Contact us about upcoming conferences, training weeks, and manufacturer forums — or invite Council experts to your event."
      />
    </>
  );
}
