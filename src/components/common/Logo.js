import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({ light = false, className }) {
  return (
    <Link
      href="/"
      aria-label="IWRREC, Home"
      className={cn("inline-flex items-center shrink-0", className)}
    >
      <span className={cn(light && "rounded bg-white px-2 py-1")}>
        <Image
          src="/logos/logo.png"
          alt="IWRREC, International Waste Resource Recovery and Energy Council"
          width={160}
          height={56}
          priority
          className="h-10 md:h-12 w-auto"
        />
      </span>
    </Link>
  );
}
