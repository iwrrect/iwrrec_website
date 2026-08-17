import { cn } from "@/lib/utils";

export default function GovSectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-7xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-2 text-sm font-semibold uppercase tracking-wide",
            light ? "text-gov-gold" : "text-secondary"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-2xl md:text-3xl font-bold leading-tight",
          align === "left" && !light && "gov-accent-bar border-gov-gold",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed max-w-3xl",
            align === "center" && "mx-auto",
            light ? "text-slate-200" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
