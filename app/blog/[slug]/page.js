import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock, Tag, UserRound } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumb";
import BlogCard from "@/components/cards/BlogCard";
import Reveal from "@/components/animations/Reveal";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { SITE } from "@/constants/site";
import { buildMetadata } from "@/constants/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, "IWRREC research", "IWRREC publications"],
    image: post.image,
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const gallery = post.images?.length ? post.images : [post.image];
  const heroImage = gallery[0];

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const aScore = a.category === post.category ? 0 : 1;
      const bScore = b.category === post.category ? 0 : 1;
      return aScore - bScore || new Date(b.date) - new Date(a.date);
    })
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: gallery.map((src) => (src.startsWith("http") ? src : `${SITE.url}${src}`)),
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author, jobTitle: post.authorRole },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: `${SITE.url}/favicon.svg` },
    },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="relative bg-section border-b border-line pt-8 pb-8 md:pt-10 md:pb-10">
        <div className="absolute inset-x-0 top-0 h-1 bg-gov-gold" aria-hidden="true" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Research & Publications", href: "/blog" },
              { label: post.title },
            ]}
          />

          <Reveal className="relative mt-6 overflow-hidden rounded border border-line bg-white shadow-soft">
            <div className="relative h-[240px] md:h-[360px]">
              <Image
                src={heroImage}
                alt={post.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className="inline-flex items-center gap-1.5 rounded bg-white/15 px-3 py-1 text-xs font-semibold text-white border border-white/25">
                  <Tag className="h-3 w-3 text-gov-gold" />
                  {post.category}
                </span>
                <h1 className="mt-4 max-w-3xl text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
                  {post.title}
                </h1>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/90">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-gov-gold" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gov-gold" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-2">
                    <UserRound className="h-4 w-4 text-gov-gold" />
                    {post.author}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 rounded border border-line bg-white p-6 md:p-8 shadow-soft">
            <p className="text-base md:text-lg leading-relaxed text-muted border-b border-line pb-6">
              {post.excerpt}
            </p>

            <div className="mt-8">
              {post.content.map((section, index) => (
                <div key={index} className={index === 0 ? "" : "mt-10"}>
                  {section.heading && (
                    <h2 className="mb-4 text-xl md:text-2xl font-bold text-navy gov-accent-bar">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mb-4 text-sm md:text-base leading-[1.85] text-muted last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal className="h-fit rounded border border-line bg-white p-6 md:p-7 shadow-soft" delay={0.08}>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-navy">
                <UserRound className="h-5 w-5 text-secondary" />
                About the author
              </h3>
              <div className="mt-4 flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-section text-secondary">
                  <UserRound className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-navy">{post.author}</p>
                  <p className="mt-0.5 text-sm text-muted">{post.authorRole}</p>
                </div>
              </div>

              <dl className="mt-6 space-y-4 border-t border-line pt-5 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-soft">Category</dt>
                  <dd className="mt-1 font-semibold text-navy">{post.category}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-soft">Published</dt>
                  <dd className="mt-1 font-semibold text-navy">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-soft">Reading time</dt>
                  <dd className="mt-1 font-semibold text-navy">{post.readTime}</dd>
                </div>
              </dl>
            </Reveal>

            {related.length > 0 && (
              <Reveal className="h-fit rounded border border-line bg-white p-6 md:p-7 shadow-soft" delay={0.12}>
                <h3 className="text-lg font-semibold text-navy">Related reading</h3>
                <ul className="mt-4 space-y-4">
                  {related.map((item) => (
                    <li key={item.slug} className="border-b border-line pb-4 last:border-0 last:pb-0">
                      <Link
                        href={`/blog/${item.slug}`}
                        className="group block"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                          {item.category}
                        </p>
                        <p className="mt-1 text-sm font-semibold leading-snug text-navy transition-colors group-hover:text-secondary">
                          {item.title}
                        </p>
                        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-secondary">
                          Read article
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {gallery.length > 1 && (
        <section className="bg-section py-10 md:py-14 border-y border-line">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              align="left"
              eyebrow="Photo Gallery"
              title="Images from this article"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((src, index) => (
                <Reveal key={src} delay={index * 0.05}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded border border-line bg-white shadow-soft">
                    <Image
                      src={src}
                      alt={`${post.title} — photo ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-10 md:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Keep Reading" title="More publications" />
          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3" amount={0.05}>
            {related.map((relatedPost) => (
              <StaggerItem key={relatedPost.slug}>
                <BlogCard post={relatedPost} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTASection />
    </>
  );
}
