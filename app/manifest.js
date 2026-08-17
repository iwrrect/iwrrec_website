import { SITE } from "@/constants/site";
import { DEFAULT_OG_IMAGE } from "@/constants/seo";

export default function manifest() {
  return {
    name: SITE.legalName,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b1f3a",
    lang: "en-GB",
    icons: [
      { src: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    screenshots: [
      {
        src: DEFAULT_OG_IMAGE,
        sizes: "1200x630",
        type: "image/jpeg",
        form_factor: "wide",
        label: `${SITE.name} official website`,
      },
    ],
  };
}
