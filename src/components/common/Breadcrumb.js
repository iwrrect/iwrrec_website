import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm text-muted">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-secondary transition-colors"
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-soft/60" />
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="hover:text-secondary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-secondary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
