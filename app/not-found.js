import Button from "@/components/ui/Button";
import { Home, AlertTriangle } from "lucide-react";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("notFound");

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-section px-4 py-16 border-b border-line">
      <div className="max-w-lg text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded bg-primary text-white">
          <AlertTriangle className="h-8 w-8" />
        </span>
        <p className="mt-6 text-6xl md:text-7xl font-bold text-navy">404</p>
        <h1 className="mt-4 font-heading text-2xl md:text-3xl font-bold text-navy">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 text-base text-muted leading-relaxed">
          The page you requested is not available on this official IWRREC website.
          It may have been moved, renamed, or removed.
        </p>
        <div className="mt-8">
          <Button href="/">
            <Home className="h-4 w-4" />
            Return to Homepage
          </Button>
        </div>
      </div>
    </section>
  );
}
