"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import { getIcon } from "@/lib/icons";
import { processSteps } from "@/data/process";

export default function ProcessPreview() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
      <SectionHeading
        eyebrow="Certification Process"
        title="Eight stages from application to certified equipment"
        description="A transparent pathway — every piece of IWRREC-certified machinery follows this process from application through laboratory testing to certification and ongoing surveillance."
      />
      <div className="mt-14 overflow-x-auto pb-6 -mx-4 px-4 [scrollbar-width:thin]">
        <motion.ol
          className="flex items-stretch gap-4 min-w-max"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {processSteps.map((step, index) => {
            const Icon = getIcon(step.icon);
            return (
              <motion.li
                key={step.step}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="flex items-center gap-4"
              >
                <Link
                  href="/biogas-process"
                  className="group flex h-full w-44 flex-col rounded-3xl border border-line bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card hover:border-primary/40"
                >
                  <span
                    className="text-xs font-bold text-primary"
                    style={{ fontFamily: "var(--font-numeric)" }}
                  >
                    Step {String(step.step).padStart(2, "0")}
                  </span>
                  <span className="mt-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-section text-secondary transition-all duration-300 group-hover:gradient-brand group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <span className="mt-4 font-heading text-sm font-semibold text-dark leading-snug">
                    {step.title}
                  </span>
                </Link>
                {index < processSteps.length - 1 && (
                  <MoveRight className="h-5 w-5 shrink-0 text-primary/60" aria-hidden="true" />
                )}
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
      <Reveal className="mt-8 text-center">
        <Button href="/biogas-process" variant="secondary">
          See the Full Process in Detail
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Reveal>
    </section>
  );
}
