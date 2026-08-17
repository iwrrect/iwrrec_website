import { SITE } from "@/constants/site";

export const DEFAULT_OG_IMAGE = "/machinery/hero-energy-plant.jpg";

export const BRAND_KEYWORDS = [
  "IWRREC",
  "iwrrec",
  "IWRREC Council",
  "International Waste Resource Recovery and Energy Council",
  "International Waste Resource Recovery & Energy Council",
  "waste recovery machinery certification",
  "energy equipment certification",
  "machinery testing standards",
  "accredited laboratories",
  "waste to energy",
  "biogas equipment certification",
  "machinery compliance",
];

export const PAGE_SEO = {
  home: {
    title: {
      absolute: `${SITE.name} | International Waste Resource Recovery & Energy Council`,
    },
    description: SITE.description,
    path: "/",
    keywords: [
      "official IWRREC website",
      "IWRREC certification",
      "IWRREC machinery standards",
      "IWRREC laboratory partners",
    ],
  },
  about: {
    title: "About IWRREC",
    description:
      "Learn about IWRREC — the International Waste Resource Recovery and Energy Council. We develop global machinery standards and accredit laboratories for waste recovery and energy equipment testing.",
    path: "/about",
    keywords: ["about IWRREC", "IWRREC history", "IWRREC mission"],
  },
  laboratoryPartners: {
    title: "IWRREC Laboratory Partners",
    description:
      "Find IWRREC accredited laboratory partners worldwide. 100+ authorized testing laboratories for waste recovery and energy machinery certification, including Gujarat Metal Lab in India.",
    path: "/laboratory-partners",
    keywords: ["IWRREC laboratories", "accredited testing labs", "Gujarat Metal Lab"],
  },
  machinery: {
    title: "IWRREC Certified Machinery",
    description:
      "Browse IWRREC certified machinery categories: biogas and bioenergy, waste processing, shredding, separation, waste treatment, and advanced processing equipment standards.",
    path: "/machinery",
    keywords: ["IWRREC certified machinery", "certified waste equipment"],
  },
  technologyPathways: {
    title: "IWRREC Technology Pathways",
    description:
      "IWRREC technology pathway standards for waste to biofuel, biomass to bio-methanol, e-methanol, ORC, power-to-gas, and carbon capture utilization certification.",
    path: "/technology-pathways",
    keywords: ["IWRREC technology pathways", "waste to biofuel standards"],
  },
  wasteManagement: {
    title: "IWRREC Equipment Testing Standards",
    description:
      "IWRREC equipment testing standards for material handling, sorting, shredding, biological treatment, and monitoring machinery in waste resource recovery operations.",
    path: "/waste-management",
    keywords: ["IWRREC testing standards", "waste machinery standards"],
  },
  biogasSolutions: {
    title: "IWRREC Recovery Machinery Standards",
    description:
      "IWRREC recovery machinery standards for anaerobic digesters, gas upgrading, Bio-CNG equipment, CHP systems, feedstock preparation, and modular waste-to-energy certification.",
    path: "/biogas-solutions",
    keywords: ["IWRREC biogas standards", "recovery equipment certification"],
  },
  biogasProcess: {
    title: "IWRREC Certification Process",
    description:
      "How IWRREC certifies waste recovery and energy machinery — application, laboratory assignment, performance testing, compliance verification, and certificate issuance.",
    path: "/biogas-process",
    keywords: ["IWRREC certification process", "how to get IWRREC certified"],
  },
  technologies: {
    title: "IWRREC Testing Technologies",
    description:
      "IWRREC testing technologies: performance testing, safety assessment, emissions measurement, durability testing, material analysis, calibration, and non-destructive testing.",
    path: "/technologies",
    keywords: ["IWRREC testing methods", "machinery performance testing"],
  },
  services: {
    title: "IWRREC Council Programs",
    description:
      "IWRREC programs: machinery standards development, testing and certification, laboratory accreditation, compliance verification, training, events, and publications.",
    path: "/services",
    keywords: ["IWRREC programs", "IWRREC training"],
  },
  industries: {
    title: "IWRREC Equipment Manufacturers",
    description:
      "IWRREC certification standards for material handling, sorting, shredding, digestion, gas upgrading, energy conversion, thermal processing, and composting equipment manufacturers.",
    path: "/industries",
    keywords: ["IWRREC manufacturers", "equipment manufacturer certification"],
  },
  isoCertifications: {
    title: "IWRREC Machinery Certificate",
    description:
      "IWRREC issues a single official machinery certificate. Independent laboratory testing verifies performance, safety, and environmental compliance for waste recovery and energy equipment.",
    path: "/iso-certifications",
    keywords: ["IWRREC certificate", "IWRREC machinery certificate", "IWRREC certification"],
  },
  events: {
    title: "IWRREC Events & Conferences",
    description:
      "IWRREC events and conferences: machinery standards summits, equipment certification expos, laboratory auditor training, manufacturer forums, and certification leadership conferences.",
    path: "/events",
    keywords: ["IWRREC events", "IWRREC conferences"],
  },
  blog: {
    title: "IWRREC Research & Publications",
    description:
      "IWRREC research, policy analysis, standards commentary, and technical publications from Council researchers, committee chairs, and technical experts.",
    path: "/blog",
    keywords: ["IWRREC research", "IWRREC publications", "IWRREC blog"],
  },
  faq: {
    title: "IWRREC FAQs",
    description:
      "Frequently asked questions about IWRREC machinery certification, accredited laboratory partners, testing standards, and the equipment certification process.",
    path: "/faq",
    keywords: ["IWRREC FAQ", "IWRREC questions"],
  },
  contact: {
    title: "Contact IWRREC",
    description:
      "Contact IWRREC about equipment certification, laboratory accreditation, machinery standards, or testing protocols. International Secretariat in London — responses within one working day.",
    path: "/contact",
    keywords: ["contact IWRREC", "IWRREC email", "IWRREC support"],
  },
  privacyPolicy: {
    title: "IWRREC Privacy Policy",
    description:
      "How IWRREC collects, uses, protects, and shares personal information across our website, membership programs, and certification services.",
    path: "/privacy-policy",
    keywords: ["IWRREC privacy policy"],
    noIndex: false,
  },
  terms: {
    title: "IWRREC Terms & Conditions",
    description:
      "Terms and conditions governing the use of the IWRREC website and the information published on it.",
    path: "/terms",
    keywords: ["IWRREC terms"],
    noIndex: false,
  },
  notFound: {
    title: "Page Not Found",
    description: "The page you are looking for could not be found on the IWRREC website.",
    path: "/404",
    noIndex: true,
  },
};

function canonicalUrl(path = "/") {
  if (!path || path === "/") return SITE.url;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  authors,
  noIndex = false,
}) {
  const canonical = canonicalUrl(path);
  const socialTitle =
    typeof title === "object" && title.absolute
      ? title.absolute
      : typeof title === "string"
        ? `${title} | ${SITE.name}`
        : `${SITE.name} | ${SITE.legalName}`;

  const metadata = {
    title,
    description,
    keywords: [...new Set([...BRAND_KEYWORDS, ...keywords])],
    alternates: { canonical },
    openGraph: {
      type,
      locale: "en_GB",
      url: canonical,
      siteName: SITE.name,
      title: socialTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };

  if (type === "article") {
    metadata.openGraph = {
      ...metadata.openGraph,
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors?.length ? { authors } : {}),
    };
  }

  return metadata;
}

export function pageMetadata(key) {
  const page = PAGE_SEO[key];
  if (!page) throw new Error(`Missing SEO config for page: ${key}`);
  return buildMetadata(page);
}

export function getSiteGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        legalName: SITE.legalName,
        alternateName: [SITE.legalName, "IWRREC Council"],
        url: SITE.url,
        email: SITE.email,
        foundingDate: String(SITE.founded),
        description: SITE.description,
        logo: `${SITE.url}/favicon.svg`,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        alternateName: SITE.legalName,
        description: SITE.description,
        inLanguage: "en-GB",
        publisher: { "@id": `${SITE.url}/#organization` },
      },
    ],
  };
}
