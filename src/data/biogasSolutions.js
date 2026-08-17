const BIOGAS = {
  digester: "/machinery/biogas-solutions/anaerobic-digester-certification.png",
  gasUpgrading: "/machinery/biogas-solutions/gas-upgrading-equipment.png",
  bioCng: "/machinery/biogas-solutions/bio-cng-cbg-equipment.png",
  chp: "/machinery/biogas-solutions/chp-power-generation.png",
  feedstock: "/machinery/biogas-solutions/feedstock-preparation-equipment.png",
  digestate: "/machinery/biogas-solutions/digestate-processing-equipment.png",
  modular: "/machinery/biogas-solutions/modular-containerized-systems.png",
  conformance: "/machinery/biogas-solutions/integrated-conformance-assessment.png",
};

export const biogasSolutions = [
  {
    slug: "digester-systems",
    title: "Anaerobic Digester Certification",
    description:
      "Performance and safety standards for anaerobic digestion reactors from 500 m³ to 25,000 m³, covering gas yield verification, process stability, mixing efficiency, and structural integrity testing.",
    image: BIOGAS.digester,
    icon: "FlaskConical",
    features: ["Gas yield verification protocols", "Process stability benchmarks", "Structural integrity testing"],
  },
  {
    slug: "gas-upgrading",
    title: "Gas Upgrading Equipment",
    description:
      "Testing standards for biogas cleaning, H₂S removal, moisture control, siloxane treatment, and membrane upgrading systems, defining methane purity and contaminant limit compliance.",
    image: BIOGAS.gasUpgrading,
    icon: "Wind",
    features: ["Methane purity verification", "Contaminant limit testing", "Upgrading efficiency benchmarks"],
  },
  {
    slug: "bio-cng",
    title: "Bio-CNG & CBG Equipment",
    description:
      "Certification for biogas compression, storage, and dispensing systems, verifying fuel quality, pressure safety, and dispensing infrastructure compliance for vehicle-grade renewable gas.",
    image: BIOGAS.bioCng,
    icon: "Fuel",
    features: ["Compression system safety testing", "Fuel quality verification", "Dispensing station compliance"],
  },
  {
    slug: "chp-systems",
    title: "CHP & Power Generation",
    description:
      "Performance standards for combined heat and power units and biogas engines from 100 kW to 10 MW, covering electrical efficiency, heat recovery, and grid synchronization compliance.",
    image: BIOGAS.chp,
    icon: "Zap",
    features: ["Electrical efficiency benchmarks", "Heat recovery verification", "Grid synchronization testing"],
  },
  {
    slug: "feedstock-preparation",
    title: "Feedstock Preparation Equipment",
    description:
      "Testing protocols for de-packaging systems, macerators, pasteurization units, and hygienization equipment used in organic waste processing and anaerobic digestion feedstock preparation.",
    image: BIOGAS.feedstock,
    icon: "Cog",
    features: ["De-packaging efficiency testing", "Hygienization compliance", "Contamination rejection benchmarks"],
  },
  {
    slug: "digestate-processing",
    title: "Digestate Processing Equipment",
    description:
      "Standards for digestate dewatering, separation, and treatment systems, verifying nutrient content, pathogen reduction, and output quality grade compliance.",
    image: BIOGAS.digestate,
    icon: "Leaf",
    features: ["Nutrient content verification", "Pathogen reduction testing", "Output quality grading"],
  },
  {
    slug: "modular-systems",
    title: "Modular & Containerized Systems",
    description:
      "Scaled testing standards for containerized digesters, modular upgrading skids, and mobile waste-to-energy units, enabling certification of decentralized processing equipment.",
    image: BIOGAS.modular,
    icon: "Package",
    features: ["Scaled performance testing", "Transport safety verification", "Rapid deployment compliance"],
  },
  {
    slug: "conformance-assessment",
    title: "Integrated Conformance Assessment",
    description:
      "End-to-end certification framework covering design review, laboratory testing, field commissioning verification, and ongoing surveillance for complete recovery and energy systems.",
    image: BIOGAS.conformance,
    icon: "HardHat",
    features: ["Design review protocols", "Commissioning verification", "Surveillance testing schedules"],
  },
];

export const biogasAdvantages = [
  { title: "Independent Verification", description: "Every certified machine tested by accredited laboratories under standardized IWRREC protocols.", icon: "FlaskConical" },
  { title: "Global Recognition", description: "IWRREC certification accepted by procurement bodies, regulators, and operators across 45+ countries.", icon: "Globe" },
  { title: "Safety Assurance", description: "Rigorous safety testing for gas handling, pressure systems, and emergency shutdown functionality.", icon: "ShieldCheck" },
  { title: "Performance Confidence", description: "Verified throughput, efficiency, and energy conversion data from independent laboratory testing.", icon: "Gauge" },
  { title: "Market Access", description: "Certified equipment qualifies for international tenders and regulatory approvals worldwide.", icon: "BadgeCheck" },
  { title: "Local Testing", description: "100+ accredited laboratories worldwide — manufacturers test equipment near their production facilities.", icon: "MapPin" },
];

export const caseStudies = [
  {
    title: "Industrial Shredder Certification, Germany",
    result: "IWRREC certified at 15 TPH throughput",
    description:
      "A European manufacturer achieved IWRREC certification for their industrial waste shredder through an accredited laboratory in Munich, enabling entry into municipal procurement tenders across the EU.",
    image: BIOGAS.digestate,
  },
  {
    title: "Anaerobic Digester Performance Verification, India",
    result: "IWRREC certified with 92% conversion efficiency",
    description:
      "An Indian digester manufacturer obtained IWRREC certification through an IWRREC laboratory partner in Pune, with verified gas yield data supporting deployment across 12 municipal projects.",
    image: BIOGAS.digester,
  },
  {
    title: "Bio-CNG Upgrading System Certification, Brazil",
    result: "IWRREC certified at 98.2% methane purity",
    description:
      "A South American gas upgrading manufacturer achieved IWRREC certification for their membrane upgrading skid, opening access to the growing Bio-CNG and CBG vehicle fuel market across Latin America.",
    image: BIOGAS.gasUpgrading,
  },
];
