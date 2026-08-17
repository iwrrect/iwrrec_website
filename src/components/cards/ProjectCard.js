import Image from "next/image";
import { CalendarCheck, Cpu, Gauge, MapPin, Trash2, Zap } from "lucide-react";

const specs = [
  { key: "capacity", label: "Capacity", Icon: Gauge },
  { key: "wasteType", label: "Waste Type", Icon: Trash2 },
  { key: "energyOutput", label: "Energy Output", Icon: Zap },
  { key: "completion", label: "Completed", Icon: CalendarCheck },
];

export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
          <MapPin className="h-4 w-4 shrink-0 text-sky-300" />
          <span className="text-sm font-medium">{project.location}</span>
        </div>
        {project.featured && (
          <span className="absolute top-4 left-4 rounded-full gradient-brand px-3 py-1 text-[11px] font-heading font-semibold uppercase tracking-wide text-white shadow-soft">
            Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-heading text-lg font-semibold text-dark leading-snug">
          {project.name}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <dl className="mt-5 grid grid-cols-2 gap-3">
          {specs.map(({ key, label, Icon }) => (
            <div key={key} className="rounded-xl bg-section px-3.5 py-3">
              <dt className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-soft">
                <Icon className="h-3.5 w-3.5 text-secondary" />
                {label}
              </dt>
              <dd
                className="mt-1 text-xs md:text-[13px] font-semibold text-dark"
                style={{ fontFamily: "var(--font-numeric)" }}
              >
                {project[key]}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-auto flex items-center gap-2 pt-5 text-xs text-soft">
          <Cpu className="h-3.5 w-3.5 text-secondary" />
          {project.technology}
        </p>
      </div>
    </article>
  );
}
