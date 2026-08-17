import { ArrowDown } from "lucide-react";
import GovSectionHeading from "@/components/ui/GovSectionHeading";
import { getIcon } from "@/lib/icons";
import { certificationProcessSteps } from "@/data/certificationProcess";

export default function CertificationProcessInfographic() {
  return (
    <section className="relative bg-white py-12 md:py-16 border-y border-line">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <GovSectionHeading
          eyebrow="Certification Process"
          title="How manufacturers obtain IWRREC certification"
          description="A transparent, internationally recognized pathway from application through accredited laboratory testing to global certification and market recognition."
        />

        {/* Desktop horizontal flow */}
        <div className="mt-14 hidden xl:block overflow-x-auto overflow-y-visible pb-4 pt-3">
          <div className="flex min-w-max items-start gap-0 pt-1">
            {certificationProcessSteps.map((step, index) => {
              const Icon = getIcon(step.icon);
              const isLast = index === certificationProcessSteps.length - 1;
              return (
                <div key={step.step} className="flex items-start">
                  <div className="w-44 shrink-0">
                    <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-navy text-gov-gold border border-line">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                      <span
                        className="absolute -top-2 -right-2 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-gov-gold text-[10px] font-bold text-navy shadow-soft"
                        style={{ fontFamily: "var(--font-numeric)" }}
                      >
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mt-4 text-center text-sm font-bold text-navy leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-center text-xs leading-relaxed text-muted px-1">
                      {step.description}
                    </p>
                  </div>
                  {!isLast && (
                    <div className="flex w-8 shrink-0 items-center justify-center pt-8">
                      <div className="h-0.5 w-full bg-gov-gold/60" />
                      <ArrowDown className="h-4 w-4 rotate-[-90deg] text-gov-gold shrink-0 -ml-1" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet vertical flow */}
        <div className="mt-10 xl:hidden space-y-0 max-w-lg mx-auto pt-2">
          {certificationProcessSteps.map((step, index) => {
            const Icon = getIcon(step.icon);
            const isLast = index === certificationProcessSteps.length - 1;
            return (
              <div key={step.step} className="relative flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-navy text-gov-gold border border-line">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                    <span
                      className="absolute -top-1.5 -right-1.5 z-20 flex h-5 w-5 items-center justify-center rounded-full bg-gov-gold text-[9px] font-bold text-navy shadow-soft"
                      style={{ fontFamily: "var(--font-numeric)" }}
                    >
                      {step.step}
                    </span>
                  </div>
                  {!isLast && <div className="mt-2 h-full w-0.5 min-h-[2rem] bg-gov-gold/40" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
