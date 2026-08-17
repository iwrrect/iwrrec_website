import { CheckCircle2 } from "lucide-react";
import IconBadge from "@/components/ui/IconBadge";

export default function ServiceCard({ service }) {
  return (
    <article className="group relative h-full overflow-hidden rounded border border-line bg-white p-7 md:p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card hover:border-primary/40">
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-section opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative">
        <IconBadge icon={service.icon} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
        <h3 className="mt-6 font-heading text-lg md:text-xl font-semibold text-dark">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {service.description}
        </p>
        <ul className="mt-5 space-y-2.5">
          {service.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
