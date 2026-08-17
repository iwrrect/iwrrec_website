"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE } from "@/constants/site";
import { MACHINERY_IMAGES } from "@/constants/machineryImages";

const HERO_IMAGE = MACHINERY_IMAGES.hero;

const stats = [
  { value: "105+", label: "Accredited Laboratories" },
  { value: "120+", label: "Machinery Standards" },
  { value: "3,500+", label: "Certified Equipment Models" },
];

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[420px] md:min-h-[480px] overflow-hidden text-white">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/80"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-gov-gold">
              {SITE.name} · Official website · Established {SITE.founded}
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.35)]">
              {SITE.name}: {SITE.tagline}
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-100">
              {SITE.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href="/about"
                variant="solid"
                size="lg"
                className="bg-white text-navy border-white hover:bg-section"
              >
                About the Council
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/iso-certifications" variant="outline" size="lg">
                Get Certified
              </Button>
            </div>
          </div>
        </div>

        <div className="relative h-1 bg-gov-gold" aria-hidden="true" />
      </section>

      <section className="bg-section border-b border-line">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="gov-card px-6 py-5 text-center border-l-4 border-l-gov-gold"
              >
                <dt className="sr-only">{item.label}</dt>
                <dd className="text-2xl md:text-3xl font-bold text-navy">{item.value}</dd>
                <dd className="mt-1 text-sm text-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
