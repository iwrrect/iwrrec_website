import { SITE } from "@/constants/site";
import { blogPosts } from "@/data/blog";
import { events } from "@/data/events";
import { machineryCategoryGroups } from "@/data/machineryCarousel";

export default function sitemap() {
  const staticPages = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/laboratory-partners", priority: 0.9, changeFrequency: "monthly" },
    { path: "/machinery", priority: 0.9, changeFrequency: "monthly" },
    { path: "/technology-pathways", priority: 0.8, changeFrequency: "monthly" },
    { path: "/waste-management", priority: 0.9, changeFrequency: "monthly" },
    { path: "/biogas-solutions", priority: 0.9, changeFrequency: "monthly" },
    { path: "/biogas-process", priority: 0.8, changeFrequency: "monthly" },
    { path: "/technologies", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
    { path: "/iso-certifications", priority: 0.7, changeFrequency: "yearly" },
    { path: "/events", priority: 0.7, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ].map((page) => ({
    url: `${SITE.url}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const eventPages = events.map((event) => ({
    url: `${SITE.url}/events/${event.slug}`,
    lastModified: new Date(event.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const machineryPages = machineryCategoryGroups.map((group) => ({
    url: `${SITE.url}/machinery/${group.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...machineryPages, ...blogPages, ...eventPages];
}
