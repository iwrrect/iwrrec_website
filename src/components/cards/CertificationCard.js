import { BadgeCheck, Building, CalendarClock, CheckCircle2 } from "lucide-react";
import IconBadge from "@/components/ui/IconBadge";

export default function CertificationCard({ certification }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded border border-line bg-white shadow-soft">
      <div className="relative flex items-center justify-center bg-section p-8">
        <div className="relative flex h-32 w-44 flex-col items-center justify-center rounded border-2 border-dashed border-primary/40 bg-white shadow-soft">
          <BadgeCheck className="h-8 w-8 text-secondary" />
          <p
            className="mt-2 font-bold text-dark text-sm"
            style={{ fontFamily: "var(--font-numeric)" }}
          >
            {certification.code}
          </p>
          <p className="text-xs text-soft">Certified</p>
        </div>
        <IconBadge
          icon={certification.icon}
          className="absolute top-4 right-4 h-10 w-10 rounded"
          iconClassName="h-5 w-5"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-lg font-semibold text-dark">{certification.code}</h3>
        <p className="text-sm font-medium text-secondary">{certification.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{certification.purpose}</p>
        <ul className="mt-4 space-y-2">
          {certification.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5 text-sm text-muted">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {benefit}
            </li>
          ))}
        </ul>
        <div className="mt-5 space-y-2 rounded bg-section px-4 py-3 text-xs text-muted">
          <p className="flex items-center gap-2">
            <Building className="h-3.5 w-3.5 text-secondary" />
            Issued by {certification.issuer}
          </p>
          <p className="flex items-center gap-2">
            <CalendarClock className="h-3.5 w-3.5 text-secondary" />
            {certification.validity}
          </p>
        </div>
      </div>
    </article>
  );
}
