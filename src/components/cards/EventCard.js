import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function EventCard({ event }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded border border-line bg-white shadow-soft transition-shadow duration-300 hover:shadow-card">
      <Link href={`/events/${event.slug}`} className="flex h-full flex-col">
        <div className="relative h-48 overflow-hidden bg-section">
          <Image
            src={event.banner}
            alt={event.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded bg-white px-2.5 py-1 text-xs font-semibold text-secondary shadow-soft">
            <CalendarDays className="h-3.5 w-3.5" />
            {formatDate(event.date)}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <h3 className="text-lg font-semibold leading-snug text-navy transition-colors group-hover:text-secondary">
            {event.name}
          </h3>

          <p className="mt-2 flex items-center gap-1.5 text-xs text-soft">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-secondary" />
            {event.location}
          </p>

          <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
            {event.purpose}
          </p>

          <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4 mt-5">
            <span className="flex items-center gap-1.5 text-xs text-soft min-w-0">
              <Users className="h-3.5 w-3.5 shrink-0 text-secondary" />
              <span className="truncate">
                {event.participants.split(" ").slice(0, 3).join(" ")}
              </span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-secondary">
              View Event
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
