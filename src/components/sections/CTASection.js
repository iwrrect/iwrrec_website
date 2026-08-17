import { ArrowRight, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE } from "@/constants/site";

export default function CTASection({
  title = "Ready to certify your equipment through IWRREC?",
  description = "Whether you are a manufacturer seeking certification, a laboratory interested in accreditation, or an operator specifying certified machinery — our team will connect you with the right program and accredited laboratory partner.",
}) {
  return (
    <section className="border-t-4 border-gov-gold bg-navy text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <div>
            <p className="text-sm font-semibold text-gov-gold">Get involved</p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-white md:text-3xl [text-shadow:0_1px_10px_rgba(0,0,0,0.3)]">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-4 text-navy">
            <Button
              href="/contact"
              className="w-full justify-center border-white bg-white text-navy hover:bg-section"
              size="lg"
            >
              Contact the Council
              <ArrowRight className="h-4 w-4" />
            </Button>

            <div className="rounded border border-line bg-white p-5 shadow-soft">
              <h3 className="flex items-center gap-2 text-sm font-bold text-navy">
                <Mail className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                Contact by email
              </h3>
              <ul className="mt-4 space-y-3">
                {SITE.emails.map((item) => (
                  <li key={item.address}>
                    <a
                      href={`mailto:${item.address}`}
                      className="block rounded-sm px-0 py-0.5 hover:text-secondary"
                    >
                      <p className="text-sm font-semibold text-navy">{item.address}</p>
                      <p className="text-xs text-muted">{item.label}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
