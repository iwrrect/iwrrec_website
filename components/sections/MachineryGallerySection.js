import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { MACHINERY_IMAGES } from "@/constants/machineryImages";

export default function MachineryGallerySection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
      <SectionHeading
        eyebrow="Certified Machinery"
        title="Waste management, biogas, and CBG plant equipment"
        description="IWRREC certifies the full range of machinery used in waste resource recovery and energy industries — from sorting and shredding to anaerobic digestion, gas upgrading, and CBG production."
      />

      <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" amount={0.05}>
        {MACHINERY_IMAGES.gallery.map((item) => (
          <StaggerItem key={item.slug}>
            <article className="group overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-navy">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-base font-semibold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
