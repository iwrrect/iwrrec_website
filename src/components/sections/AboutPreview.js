import { MACHINERY_IMAGES } from "@/constants/machineryImages";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { fadeLeft, fadeRight } from "@/lib/motion";

const points = [
  "120+ machinery standards for waste recovery and energy equipment",
  "105+ accredited laboratory partners testing and certifying worldwide",
  "3,500+ equipment models certified through independent laboratory testing",
  "Manufacturers from any country can obtain IWRREC certification locally",
];

export default function AboutPreview() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal variants={fadeLeft} className="relative">
          <div className="overflow-hidden rounded border border-line shadow-soft">
            <Image
              src={MACHINERY_IMAGES.about}
              alt="IWRREC accredited laboratory testing waste recovery machinery"
              width={800}
              height={600}
              className="h-[380px] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 md:left-6 gov-card px-5 py-4 border-l-4 border-l-gov-gold">
            <p className="text-3xl font-bold text-navy">105+</p>
            <p className="text-sm font-semibold text-muted leading-tight">
              Accredited Laboratory Partners
            </p>
          </div>
        </Reveal>

        <Reveal variants={fadeRight}>
          <SectionHeading
            align="left"
            eyebrow="About IWRREC"
            title="International standards, testing, and certification for recovery machinery"
            description="Established in 1975, IWRREC develops machinery standards and operates a global network of accredited laboratories that test, verify, and certify equipment for waste resource recovery and energy industries."
          />
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm md:text-base text-muted">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gov-gold" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/about">
              Read Our Mission
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
