import Image from "next/image";
import { Award, Gauge, Leaf, ShieldCheck } from "lucide-react";

const badgeIcons = {
  "IWRREC Certified": Award,
  "Performance Tested": Gauge,
  "Environmental Compliance": Leaf,
  "Safety Verified": ShieldCheck,
};

export default function MachineryItemCard({ item }) {
  return (
    <article className="gov-card overflow-hidden border-l-4 border-l-gov-gold">
      <div className="relative aspect-[16/10] border-b border-line">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 bg-navy px-2.5 py-1 text-[11px] font-bold text-gov-gold">
          {item.standard}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-navy">{item.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
        <ul className="mt-4 border-t border-line pt-4">
          {item.badges.map((badge) => {
            const Icon = badgeIcons[badge] ?? Award;
            return (
              <li
                key={badge}
                className="flex items-center gap-1.5 text-[10px] font-semibold text-navy"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-gov-gold" aria-hidden="true" />
                {badge}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
