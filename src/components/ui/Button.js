import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary text-white border border-primary hover:bg-secondary",
  solid: "bg-primary text-white border border-primary hover:bg-secondary",
  secondary:
    "bg-white text-secondary border-2 border-secondary hover:bg-section",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-secondary",
  ghost: "text-secondary hover:bg-section border border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm md:text-base",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded font-body font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
