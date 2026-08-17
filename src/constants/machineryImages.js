/** External machinery images (Unsplash) */
const u = (id) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`;

export const MACHINERY_IMAGES = {
  hero: u("1466611653911-95081537e5b7"),
  about: u("1576086213369-97a306d36557"),
  laboratory: u("1581094271901-8022df4466f9"),

  wasteManagement: {
    materialHandling: "/machinery/rdf-srf-preparation-plant.png",
    sortingSeparation: "/machinery/mixed-plastic-sorting-plant.png",
    sizeReduction:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Dornbirn-stationary_Wood_shredder_LR630_from_UNTHA-03ASD.jpg/1280px-Dornbirn-stationary_Wood_shredder_LR630_from_UNTHA-03ASD.jpg",
    biologicalTreatment: "/machinery/municipal-composting-plant.png",
    monitoringControl: "/machinery/fully-automated-recycling-plant.png",
    recyclingPlant: "/machinery/fully-autonomous-sorting-system.png",
  },

  biogasPlant: {
    digester: u("1615870216519-2f9fa575fa5c"),
    biogasPlant: u("1466611653911-95081537e5b7"),
    gasUpgrading: u("1581094271901-8022df4466f9"),
    bioCng: u("1497435334941-8c899ee9e8e9"),
    cbgPlant: u("1473341304170-971dccb5ac1e"),
    chp: u("1470071459604-3b5ec3a7fe05"),
    feedstock: u("1500382017468-9049fed747ef"),
    digestate: u("1416879595882-3373a0480b5b"),
    thermal: u("1566073771259-6a8506099945"),
    modular: u("1625246333195-78d9c38ad449"),
    automation: u("1591115765373-5207764f72e7"),
    conformance: u("1576086213369-97a306d36557"),
  },

  gallery: [
    {
      slug: "waste-recycling-plant",
      title: "Waste Recycling & Sorting Plant",
      description:
        "Material recovery facility with sorting lines, conveyors, and separation equipment for municipal solid waste processing.",
      image: u("1542601906990-b4d3fb778b09"),
      category: "Waste Management",
    },
    {
      slug: "waste-shredder",
      title: "Industrial Waste Shredder",
      description:
        "High-capacity dual-shaft shredder for municipal and industrial solid waste size reduction — IWRREC certified equipment category.",
      image: u("1581091226825-a6a2a5aee158"),
      category: "Waste Management",
    },
    {
      slug: "biogas-plant",
      title: "Anaerobic Biogas Plant",
      description:
        "Large-scale anaerobic digestion facility converting organic waste into biogas — tested under IWRREC energy conversion standards.",
      image: u("1466611653911-95081537e5b7"),
      category: "Biogas Plant",
    },
    {
      slug: "anaerobic-digester",
      title: "Anaerobic Digester System",
      description:
        "CSTR anaerobic digestion reactor with gas holder and mixing systems — certified for gas yield and process stability performance.",
      image: u("1615870216519-2f9fa575fa5c"),
      category: "Biogas Plant",
    },
    {
      slug: "cbg-plant",
      title: "CBG Production Plant",
      description:
        "Compressed Biogas (CBG) production facility with upgrading, compression, and storage systems for vehicle-grade renewable fuel.",
      image: u("1473341304170-971dccb5ac1e"),
      category: "CBG Plant",
    },
    {
      slug: "cbg-fuel-station",
      title: "Bio-CNG Dispensing Station",
      description:
        "Bio-CNG and CBG dispensing infrastructure with compression skids and fuel quality monitoring — IWRREC certified.",
      image: u("1497435334941-8c899ee9e8e9"),
      category: "CBG Plant",
    },
    {
      slug: "gas-upgrading",
      title: "Biogas Upgrading Equipment",
      description:
        "Membrane-based biogas cleaning and methane upgrading system achieving vehicle-grade purity above 96% CH₄.",
      image: u("1581094271901-8022df4466f9"),
      category: "Biogas Plant",
    },
    {
      slug: "chp-power-plant",
      title: "CHP Power Generation Unit",
      description:
        "Combined heat and power system converting biogas to electricity and thermal energy — IWRREC certified conversion equipment.",
      image: u("1470071459604-3b5ec3a7fe05"),
      category: "Energy Recovery",
    },
    {
      slug: "composting",
      title: "Composting & Biological Treatment",
      description:
        "In-vessel composting and aerobic treatment systems for organic waste processing with pathogen reduction verification.",
      image: u("1416879595882-3373a0480b5b"),
      category: "Waste Management",
    },
    {
      slug: "thermal-conversion",
      title: "Thermal Conversion Equipment",
      description:
        "Waste-to-energy thermal processing unit with emissions control — tested for conversion efficiency and IWRREC compliance.",
      image: u("1566073771259-6a8506099945"),
      category: "Energy Recovery",
    },
  ],
};
