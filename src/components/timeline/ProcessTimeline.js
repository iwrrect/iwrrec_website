"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

export default function ProcessTimeline({ detailed = false }) {
  return (
    <ol className="relative mx-auto max-w-7xl">
      <div
        aria-hidden="true"
        className="absolute left-[19px] top-3 bottom-3 w-px bg-line md:left-[23px]"
      />

      {processSteps.map((step, index) => {
        const Icon = getIcon(step.icon);
        const isLast = index === processSteps.length - 1;

        return (
          <li key={step.step} className={cn("relative", !isLast && "pb-4 md:pb-5")}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-4 md:gap-5"
            >
              {/* Step node */}
              <div className="relative z-10 flex shrink-0 flex-col items-center">
                <span className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded bg-primary text-white shadow-soft">
                  <Icon className="h-5 w-5 md:h-5.5 md:w-5.5" strokeWidth={1.8} />
                </span>
              </div>

              {/* Content card */}
              <div className="min-w-0 flex-1 rounded border border-line bg-white p-4 md:p-5 shadow-soft">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-secondary">
                    Step {String(step.step).padStart(2, "0")}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>

                {detailed && step.benefits?.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2 border-t border-line pt-3">
                    {step.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="inline-flex items-center gap-1.5 rounded bg-section px-2.5 py-1 text-xs text-muted"
                      >
                        <CheckCircle2 className="h-3 w-3 shrink-0 text-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}
