export const wasteToEnergyFlows = [
  {
    id: "waste-to-biofuel",
    title: "Waste to Biofuel",
    subtitle: "Municipal waste conversion pathway",
    steps: ["Municipal Waste", "Sorting", "Processing", "Biofuel Production"],
    description:
      "IWRREC standards govern each stage — from MSW sorting plant certification through processing equipment to biofuel output quality verification.",
    icon: "Fuel",
    color: "from-emerald-600 to-teal-700",
  },
  {
    id: "biomass-to-bio-methanol",
    title: "Biomass to Bio-Methanol",
    subtitle: "Thermochemical conversion pathway",
    steps: ["Biomass", "Gasification", "Syngas", "Bio-Methanol"],
    description:
      "Certification protocols for gasification reactors, syngas cleaning systems, and methanol synthesis equipment under IWRREC standards.",
    icon: "FlaskConical",
    color: "from-amber-600 to-orange-700",
  },
  {
    id: "e-methanol",
    title: "E-Methanol",
    subtitle: "Power-to-liquid pathway",
    steps: ["Renewable Electricity", "CO₂ + Green H₂", "Synthesis", "E-Methanol"],
    description:
      "Standards for electrolysis systems, CO₂ capture integration, and e-methanol synthesis equipment performance verification.",
    icon: "Zap",
    color: "from-sky-600 to-blue-700",
  },
  {
    id: "organic-rankine-cycle",
    title: "Organic Rankine Cycle (ORC)",
    subtitle: "Waste heat recovery pathway",
    steps: ["Industrial Waste Heat", "ORC System", "Electricity Generation"],
    description:
      "IWRREC certificate for ORC turbines and heat exchangers converting low-grade waste heat into electrical energy.",
    icon: "Flame",
    color: "from-rose-600 to-red-700",
  },
  {
    id: "power-to-gas",
    title: "Power-to-Gas",
    subtitle: "Renewable energy storage pathway",
    steps: ["Renewable Energy", "Electrolysis", "Hydrogen", "Methane / Syn-Gas"],
    description:
      "Testing standards for electrolyzers, methanation reactors, and synthetic gas compression systems.",
    icon: "Wind",
    color: "from-violet-600 to-purple-700",
  },
  {
    id: "ccu-co2-products",
    title: "Carbon Capture & Utilization",
    subtitle: "CO₂ valorization pathways",
    steps: ["CO₂ Capture", "Processing", "Valuable Products"],
    branches: ["CO₂ → Ethanol", "CO₂ → Methanol", "CO₂ → Methane"],
    description:
      "IWRREC standards for carbon capture equipment and CO₂-to-product conversion machinery across CCU technology chains.",
    icon: "CloudFog",
    color: "from-slate-600 to-slate-800",
  },
];
