import { BadgeCheck, Mail, MapPin, Phone } from "lucide-react";

export default function LaboratoryCard({ laboratory }) {
  return (
    <article className={`group flex h-full flex-col rounded border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${laboratory.featured ? "border-gov-gold border-2" : "border-line"}`}>
      {laboratory.featured && (
        <span className="mb-3 inline-flex w-fit rounded bg-gov-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">
          Featured Partner
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p
            className="text-xs font-bold text-primary"
            style={{ fontFamily: "var(--font-numeric)" }}
          >
            {laboratory.code}
          </p>
          <h3 className="mt-1 font-heading text-base font-semibold text-dark leading-snug">
            {laboratory.name}
          </h3>
        </div>
        <BadgeCheck className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
      </div>

      <div className="mt-3 flex items-start gap-2 text-sm text-muted">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gov-gold" />
        <span>
          {laboratory.city}
          {laboratory.state ? `, ${laboratory.state}` : ""}, {laboratory.country}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
        {laboratory.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {laboratory.capabilities.map((cap) => (
          <span
            key={cap}
            className="rounded bg-section px-2.5 py-0.5 text-[10px] font-semibold text-secondary"
          >
            {cap}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-line pt-4">
        {laboratory.equipmentCategories.map((cat) => (
          <span
            key={cat}
            className="rounded border border-line px-2 py-0.5 text-[10px] text-muted"
          >
            {cat}
          </span>
        ))}
      </div>

      <dl className="mt-auto pt-5 space-y-2 text-xs text-muted">
        <div className="flex justify-between">
          <dt>Accredited since</dt>
          <dd className="font-semibold text-dark">{laboratory.accreditedSince}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Certificates issued</dt>
          <dd className="font-semibold text-dark">{laboratory.certificationsIssued}+</dd>
        </div>
      </dl>

      <div className="mt-4 space-y-1.5 border-t border-line pt-4 text-xs">
        <a
          href={`mailto:${laboratory.email}`}
          className="flex items-center gap-2 text-secondary hover:text-navy transition-colors"
        >
          <Mail className="h-3.5 w-3.5" />
          {laboratory.email}
        </a>
        <p className="flex items-center gap-2 text-muted">
          <Phone className="h-3.5 w-3.5" />
          {laboratory.phone}
        </p>
      </div>
    </article>
  );
}
