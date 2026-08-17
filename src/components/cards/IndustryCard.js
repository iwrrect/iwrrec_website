import IconBadge from "@/components/ui/IconBadge";

export default function IndustryCard({ industry }) {
  return (
    <article className="group relative h-full overflow-hidden rounded border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 gradient-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <IconBadge
        icon={industry.icon}
        className="bg-none bg-section text-secondary group-hover:gradient-brand group-hover:text-white transition-all duration-300"
      />
      <h3 className="mt-5 font-heading text-lg font-semibold text-dark">
        {industry.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted">
        {industry.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {industry.wasteTypes.map((type) => (
          <span
            key={type}
            className="rounded bg-section px-3 py-1 text-[11px] font-medium text-secondary"
          >
            {type}
          </span>
        ))}
      </div>
    </article>
  );
}
