import { CheckCircle2 } from "lucide-react";
import IconBadge from "@/components/ui/IconBadge";

export default function TechnologyCard({ technology }) {
  return (
    <article className="group relative h-full overflow-hidden rounded border border-line bg-white p-7 md:p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card">
      <div className="flex items-start justify-between gap-4">
        <IconBadge icon={technology.icon} className="transition-transform duration-300 group-hover:scale-110" />
        <div className="text-right">
          <p
            className="text-xl md:text-2xl font-bold text-gradient"
            style={{ fontFamily: "var(--font-numeric)" }}
          >
            {technology.stat.value}
          </p>
          <p className="text-[11px] uppercase tracking-wide text-soft">
            {technology.stat.label}
          </p>
        </div>
      </div>
      <h3 className="mt-6 font-heading text-lg md:text-xl font-semibold text-dark">
        {technology.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {technology.description}
      </p>
      <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
        {technology.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
