import IconBadge from "@/components/ui/IconBadge";
import { cn } from "@/lib/utils";

export default function FeatureCard({ icon, title, description, className }) {
  return (
    <article
      className={cn(
        "group h-full rounded border border-line bg-white p-6 md:p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card hover:border-primary/40",
        className
      )}
    >
      <IconBadge
        icon={icon}
        className="h-12 w-12 rounded transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
        iconClassName="h-6 w-6"
      />
      <h3 className="mt-5 font-heading text-base md:text-lg font-semibold text-dark">
        {title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
