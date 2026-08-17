import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/cards/BlogCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { blogPosts } from "@/data/blog";

export default function LatestBlogs() {
  const latest = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <SectionHeading
        eyebrow="Research & Publications"
        title="Insights from the Council's research community"
        description="Policy analysis, standards commentary, technical deep-dives, and industry outlook reports from IWRREC researchers and committee experts."
      />
      <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" amount={0.05}>
        {latest.map((post) => (
          <StaggerItem key={post.slug}>
            <BlogCard post={post} />
          </StaggerItem>
        ))}
      </StaggerGroup>
      <Reveal className="mt-12 text-center">
        <Button href="/blog" variant="secondary">
          Read All Articles
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Reveal>
    </section>
  );
}
