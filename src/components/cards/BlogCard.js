import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function BlogCard({ post }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative h-52 overflow-hidden bg-section">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute top-4 left-4 rounded border border-line bg-white px-3 py-1 text-[11px] font-semibold text-secondary">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-xs text-soft">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="h-1 w-1 rounded bg-line" />
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
          <h3 className="mt-3 font-heading text-base md:text-lg font-semibold leading-snug text-navy transition-colors group-hover:text-secondary">
            {post.title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted line-clamp-3">
            {post.excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between pt-5">
            <div>
              <p className="text-xs font-semibold text-navy">{post.author}</p>
              <p className="text-[11px] text-soft">{post.authorRole}</p>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded bg-section text-secondary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
