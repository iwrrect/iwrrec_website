import { MACHINERY_IMAGES } from "@/constants/machineryImages";

export const wasteTypes = [
  {
    slug: "material-handling",
    title: "Material Handling Equipment",
    description:
      "Testing standards for conveyors, feeders, balers, and transport systems used in waste collection and processing facilities, covering load capacity, durability, and contamination control performance.",
    image: MACHINERY_IMAGES.wasteManagement.materialHandling,
    icon: "Truck",
    highlights: ["IWRREC certificate", "Load capacity benchmarks", "Durability testing protocols"],
  },
  {
    slug: "sorting-separation",
    title: "Sorting & Separation Machinery",
    description:
      "Performance standards for optical sorters, magnetic separators, air classifiers, and screening equipment, defining separation efficiency, throughput rates, and contamination rejection benchmarks.",
    image: MACHINERY_IMAGES.wasteManagement.sortingSeparation,
    icon: "Filter",
    highlights: ["Separation efficiency benchmarks", "Throughput rate verification", "Contamination rejection testing"],
  },
  {
    slug: "size-reduction",
    title: "Shredding & Size Reduction",
    description:
      "Testing protocols for shredders, granulators, and pulverizers processing municipal, industrial, and organic waste streams, covering particle size distribution and energy consumption.",
    image: MACHINERY_IMAGES.wasteManagement.sizeReduction,
    icon: "Cog",
    highlights: ["Particle size distribution testing", "Energy consumption benchmarks", "Blade wear assessment"],
  },
  {
    slug: "biological-treatment",
    title: "Biological Treatment Equipment",
    description:
      "Standards for composting turners, in-vessel composters, and aerobic treatment systems, verifying process temperature control, pathogen reduction, and throughput performance.",
    image: MACHINERY_IMAGES.wasteManagement.biologicalTreatment,
    icon: "Leaf",
    highlights: ["Temperature profile verification", "Pathogen reduction testing", "Process stability benchmarks"],
  },
  {
    slug: "monitoring-control",
    title: "Monitoring & Control Systems",
    description:
      "Certification standards for weighbridge systems, fill-level sensors, SCADA platforms, and emissions monitoring equipment used in waste processing and energy facilities.",
    image: MACHINERY_IMAGES.wasteManagement.monitoringControl,
    icon: "MonitorCheck",
    highlights: ["Measurement accuracy verification", "Data logging compliance", "Calibration standards"],
  },
];

export const wasteServices = [
  {
    title: "Performance Benchmarking",
    description:
      "Standardized test protocols that measure machinery throughput, efficiency, energy consumption, and operational reliability under defined operating conditions.",
    icon: "Gauge",
  },
  {
    title: "Safety Verification",
    description:
      "Independent assessment of structural integrity, guarding systems, emergency stops, pressure equipment, and gas handling safety for waste processing machinery.",
    icon: "ShieldCheck",
  },
  {
    title: "Durability Testing",
    description:
      "Accelerated wear and load testing to verify equipment service life, component reliability, and maintenance interval compliance under continuous operation.",
    icon: "Wrench",
  },
  {
    title: "Emissions Assessment",
    description:
      "Laboratory verification of particulate, VOC, noise, and vibration emissions from waste processing equipment against IWRREC environmental limits.",
    icon: "CloudFog",
  },
  {
    title: "Compliance Documentation",
    description:
      "Generation of test reports, compliance certificates, and certification registry entries that support regulatory submissions and procurement tenders.",
    icon: "ClipboardCheck",
  },
];

export const wasteBenefits = [
  {
    title: "Verified Performance",
    description: "Independent laboratory testing provides objective proof of machinery throughput, efficiency, and reliability.",
    icon: "Gauge",
  },
  {
    title: "Safety Assurance",
    description: "Certified equipment meets IWRREC safety standards for structural integrity, gas handling, and emergency systems.",
    icon: "ShieldCheck",
  },
  {
    title: "Market Access",
    description: "IWRREC certification is recognized by procurement bodies and regulators, simplifying equipment approval processes.",
    icon: "Globe",
  },
  {
    title: "Competitive Advantage",
    description: "Certified machinery demonstrates verified quality, giving manufacturers an edge in tenders and international markets.",
    icon: "LineChart",
  },
  {
    title: "Regulatory Alignment",
    description: "Testing protocols harmonized with international environmental and safety frameworks reduce compliance complexity.",
    icon: "BadgeCheck",
  },
  {
    title: "Insurance Confidence",
    description: "Independent certification supports insurance underwriting and reduces liability risk for operators and manufacturers.",
    icon: "Award",
  },
];

export const environmentalImpact = [
  { value: 3500, suffix: "+", label: "Equipment models certified through IWRREC accredited laboratories" },
  { value: 98, suffix: "%", label: "First-submission certification pass rate for pre-assessed equipment" },
  { value: 105, suffix: "+", label: "Accredited laboratory partners conducting independent verification worldwide" },
  { value: 100, suffix: "%", label: "Of certified equipment tested under standardized IWRREC protocols" },
];
