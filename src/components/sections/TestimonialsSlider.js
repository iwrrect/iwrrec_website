import Image from "next/image";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSlider() {
  return (
    <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <StaggerItem key={testimonial.name}>
          <figure className="gov-card flex h-full flex-col border-l-4 border-l-gov-gold px-5 py-6">
            <blockquote className="flex-1 text-sm leading-relaxed text-secondary">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-start gap-3 border-t border-line pt-4">
              <Image
                src={testimonial.image}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 rounded-sm border border-line object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-navy">{testimonial.name}</p>
                <p className="mt-0.5 text-xs text-muted">{testimonial.role}</p>
                <p className="text-xs text-muted">{testimonial.company}</p>
              </div>
            </figcaption>
          </figure>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
