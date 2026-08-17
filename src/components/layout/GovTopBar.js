import Link from "next/link";
import { Shield } from "lucide-react";
import { SITE } from "@/constants/site";

export default function GovTopBar() {
  return (
    <div className="bg-navy text-white text-xs md:text-sm">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Shield className="h-3.5 w-3.5 shrink-0 text-gov-gold" aria-hidden="true" />
          <span>
            An official website of the{" "}
            <strong className="font-semibold">{SITE.legalName}</strong>
          </span>
        </div>
        <div className="flex items-center gap-4 text-white/80">
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/faq" className="hover:text-white transition-colors">
            Help
          </Link>
        </div>
      </div>
    </div>
  );
}
