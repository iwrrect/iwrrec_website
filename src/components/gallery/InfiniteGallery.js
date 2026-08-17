"use client";

import { useState } from "react";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader2 } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";

const BATCH_SIZE = 8;

export default function InfiniteGallery({ items }) {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const visible = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  return (
    <InfiniteScroll
      dataLength={visible.length}
      next={() => setVisibleCount((count) => count + BATCH_SIZE)}
      hasMore={hasMore}
      scrollThreshold={0.9}
      style={{ overflow: "visible" }}
      loader={
        <div className="mt-10 flex justify-center" aria-live="polite">
          <Loader2 className="h-7 w-7 animate-spin text-primary" />
          <span className="sr-only">Loading more photos</span>
        </div>
      }
      endMessage={
        <p className="mt-12 text-center text-sm text-soft">
          That&apos;s every photo from our recent events.
        </p>
      }
    >
      <StaggerGroup
        className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        amount={0.02}
      >
        {visible.map((item, index) => (
          <StaggerItem key={item.id ?? `${item.image}-${index}`}>
            <figure className="group relative aspect-[4/3] overflow-hidden rounded border border-line bg-white shadow-soft">
              <Image
                src={item.image}
                alt={item.alt || item.title || "Event gallery photo"}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy/80 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-semibold text-white line-clamp-1">
                  {item.title}
                </p>
                {item.category ? (
                  <p className="text-xs text-white/80">{item.category}</p>
                ) : null}
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </InfiniteScroll>
  );
}
