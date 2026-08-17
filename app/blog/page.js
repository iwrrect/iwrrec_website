import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogExplorer from "@/components/blog/BlogExplorer";
import Reveal from "@/components/animations/Reveal";
import CTASection from "@/components/sections/CTASection";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("blog");

export default function BlogPage() {
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];

  return (
    <>
      <PageHero
        eyebrow="Research & Publications"
        title="Insights from the Council's research community"
        description="Every article is authored by IWRREC researchers, committee experts, and policy specialists, grounded in standards development and global field experience."
        breadcrumb={[{ label: "Research & Publications" }]}
      />

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded border border-line bg-white shadow-soft transition-all duration-300 hover:shadow-card lg:grid-cols-2"
          >
            <div className="relative h-72 lg:h-auto overflow-hidden bg-section">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-5 left-5 rounded bg-primary px-3 py-1.5 text-xs font-semibold text-white">
                Featured Publication
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-3 text-xs text-soft">
                <span className="rounded border border-line bg-section px-3 py-1 font-semibold text-secondary">
                  {featured.category}
                </span>
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {featured.readTime}
                </span>
              </div>
              <h2 className="mt-5 font-heading text-2xl md:text-3xl font-bold leading-tight text-navy transition-colors group-hover:text-secondary">
                {featured.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{featured.excerpt}</p>
              <div className="mt-7 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-navy">{featured.author}</p>
                  <p className="text-xs text-soft">{featured.authorRole}</p>
                </div>
                <span className="flex items-center gap-2 text-sm font-semibold text-secondary">
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-4">
        <SectionHeading
          eyebrow="All Publications"
          title="Browse by topic, scroll for more"
        />
        <div className="mt-12">
          <BlogExplorer />
        </div>
      </section>

      <CTASection
        title="Prefer research updates in your inbox?"
        description="Subscribe to the Council newsletter in the footer, monthly standards, policy, and research updates. Unsubscribe anytime."
      />
    </>
  );
}
