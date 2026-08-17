import { laboratoryRegionCounts, TOTAL_LABORATORY_PARTNERS } from "@/data/laboratoryPartners";

export const laboratoryNetwork = {
  eyebrow: "Accredited Laboratory Partners",
  title: "A global network for independent machinery testing and certification",
  description:
    "IWRREC maintains a worldwide network of 100+ accredited laboratory partners authorized to test waste recovery and energy machinery, verify compliance with international standards, and issue the official IWRREC certificate. Manufacturers from any country can submit equipment to their nearest authorized laboratory for testing and certification.",
  highlights: [
    `${TOTAL_LABORATORY_PARTNERS}+ accredited laboratory partners across six continents with full directory`,
    "Authorized to test, verify compliance, and issue the official IWRREC certificate",
    "Performance, safety, and emissions testing under Council protocols",
    "Manufacturers worldwide can access certification through local partners",
  ],
};

export const laboratoryRegions = [
  {
    region: "Europe & Middle East",
    labs: laboratoryRegionCounts["Europe & Middle East"],
    description: "Full-capability testing for sorting, digestion, gas upgrading, and WtE equipment",
    icon: "Globe",
  },
  {
    region: "Asia-Pacific",
    labs: laboratoryRegionCounts["Asia-Pacific"],
    description: "High-volume testing for material handling, biological treatment, and energy conversion machinery",
    icon: "Building2",
  },
  {
    region: "Americas",
    labs: laboratoryRegionCounts["Americas"],
    description: "Certification testing for industrial recovery equipment and emissions control systems",
    icon: "Factory",
  },
  {
    region: "Africa",
    labs: laboratoryRegionCounts["Africa"],
    description: "Regional laboratories supporting municipal and agricultural waste processing equipment",
    icon: "Landmark",
  },
];

export const laboratoryProcess = [
  {
    step: 1,
    title: "Submit Application",
    description: "Manufacturer identifies the applicable IWRREC standard and submits a certification application with equipment specifications.",
    icon: "ClipboardCheck",
  },
  {
    step: 2,
    title: "Laboratory Assignment",
    description: "IWRREC assigns an accredited laboratory partner based on equipment type, testing requirements, and manufacturer location.",
    icon: "MapPin",
  },
  {
    step: 3,
    title: "Performance Testing",
    description: "The authorized laboratory conducts rigorous testing — performance benchmarks, safety verification, and emissions compliance.",
    icon: "FlaskConical",
  },
  {
    step: 4,
    title: "Certification Issued",
    description: "Upon successful verification, IWRREC certification is issued and the equipment is listed in the public certification registry.",
    icon: "Award",
  },
];

export const manufacturerBenefits = [
  {
    title: "Global Market Access",
    description: "IWRREC certification is recognized by procurement bodies, regulators, and operators worldwide, opening doors to international markets.",
    icon: "Globe",
  },
  {
    title: "Independent Verification",
    description: "Third-party testing by accredited laboratories provides objective proof of performance, safety, and standards compliance.",
    icon: "ShieldCheck",
  },
  {
    title: "Local Testing Options",
    description: "With 100+ laboratories across six continents, manufacturers can test equipment near their production facilities without shipping overseas.",
    icon: "MapPin",
  },
  {
    title: "Regulatory Confidence",
    description: "Certified equipment meets harmonized international standards, simplifying regulatory approvals and tender submissions.",
    icon: "BadgeCheck",
  },
];
