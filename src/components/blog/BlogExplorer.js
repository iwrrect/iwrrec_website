"use client";

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader2 } from "lucide-react";
import BlogCard from "@/components/cards/BlogCard";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { blogPosts, blogCategories } from "@/data/blog";
import { cn } from "@/lib/utils";

const BATCH_SIZE = 6;

export default function BlogExplorer() {
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const filtered = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter((post) => category === "All" || post.category === category);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const selectCategory = (next) => {
    setCategory(next);
    setVisibleCount(BATCH_SIZE);
  };

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-3"
        role="group"
        aria-label="Filter articles by category"
      >
        {blogCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => selectCategory(item)}
            aria-pressed={category === item}
            className={cn(
              "rounded px-5 py-2 text-sm font-semibold transition-colors duration-200 cursor-pointer",
              category === item
                ? "bg-primary text-white border border-primary"
                : "bg-white text-muted border border-line hover:border-primary hover:text-secondary"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-12">
        <InfiniteScroll
          dataLength={visible.length}
          next={() => setVisibleCount((count) => count + BATCH_SIZE)}
          hasMore={hasMore}
          scrollThreshold={0.9}
          style={{ overflow: "visible" }}
          loader={
            <div className="mt-10 flex justify-center" aria-live="polite">
              <Loader2 className="h-7 w-7 animate-spin text-primary" />
              <span className="sr-only">Loading more articles</span>
            </div>
          }
          endMessage={
            <p className="mt-12 text-center text-sm text-soft">
              You&apos;re all caught up, new articles publish every two weeks.
            </p>
          }
        >
          <StaggerGroup
            key={category}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            amount={0.02}
          >
            {visible.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </InfiniteScroll>
      </div>
    </div>
  );
}
