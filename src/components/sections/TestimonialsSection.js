import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialsSlider from "@/components/sections/TestimonialsSlider";

export default function TestimonialsSection() {
  return (
    <section className="border-y border-line bg-section py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industry Voices"
          title="Trusted by manufacturers, laboratories, and operators worldwide"
          description="Equipment manufacturers, accredited laboratory partners, and procurement professionals on how IWRREC certification supports their work."
        />
        <div className="mt-10">
          <TestimonialsSlider />
        </div>
      </div>
    </section>
  );
}
