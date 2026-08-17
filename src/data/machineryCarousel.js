const u = (id) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`;

/** Wikimedia Commons — shredding & scrap processing (verified URLs) */
const SHRED = {
  autoShredder:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/AUTO_SHREDDER_-_NARA_-_547468.jpg/1280px-AUTO_SHREDDER_-_NARA_-_547468.jpg",
  flattenedCarsShredder:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/AUTO_SHREDDER_ON_FIELDS_POINT_WILL_TURN_THESE_FLATTENED_CARS_INTO_SCRAP_METAL_FOR_EXPORT_-_NARA_-_547476.jpg/1280px-AUTO_SHREDDER_ON_FIELDS_POINT_WILL_TURN_THESE_FLATTENED_CARS_INTO_SCRAP_METAL_FOR_EXPORT_-_NARA_-_547476.jpg",
  industrialShredder:
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/How_industrial_shredder_works.jpg",
  mobileShredder:
    "https://upload.wikimedia.org/wikipedia/commons/8/86/Mobile_shredder_%281%29.jpg",
  twoShaftShredder:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Dornbirn-stationary_Wood_shredder_LR630_from_UNTHA-03ASD.jpg/1280px-Dornbirn-stationary_Wood_shredder_LR630_from_UNTHA-03ASD.jpg",
  rubbishShredder:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Renewi_Pottinger_rubbish_shredder%2C_Groningen_%282019%29.jpg/1280px-Renewi_Pottinger_rubbish_shredder%2C_Groningen_%282019%29.jpg",
  scrapProcessing:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/SA_Metal_Processing.jpg/1280px-SA_Metal_Processing.jpg",
  scrapYard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Schrottplatz_EMR_European_Metal_Recycling%2C_Ro%C3%9Fhafen%2C_Hambug-9371.jpg/1280px-Schrottplatz_EMR_European_Metal_Recycling%2C_Ro%C3%9Fhafen%2C_Hambug-9371.jpg",
  balingPress:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Downstroke_Baler_V-63.jpg/1280px-Downstroke_Baler_V-63.jpg",
};

/** Wikimedia Commons — waste processing & recycling (verified URLs) */
const RECYCLE = {
  mrfFacility:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Materials_recovery_facility.jpg/1280px-Materials_recovery_facility.jpg",
  wasteProcessingPlant:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Waste_processing_plant_-_geograph.org.uk_-_8064393.jpg/1280px-Waste_processing_plant_-_geograph.org.uk_-_8064393.jpg",
  sortingConveyors:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Recycling_sorting_conveyor_belts.jpg/1280px-Recycling_sorting_conveyor_belts.jpg",
  mswSortingPlant:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Materials_recovery_facility_2.jpg/1280px-Materials_recovery_facility_2.jpg",
  plasticSorting: "/machinery/mixed-plastic-sorting-plant.png",
  packagingSorting: "/machinery/packaging-waste-sorting-plant.png",
  rdfPreparation: "/machinery/rdf-srf-preparation-plant.png",
  mrfInterior:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Materials_recovery_facility_3.jpg/1280px-Materials_recovery_facility_3.jpg",
  autonomousSorting: "/machinery/fully-autonomous-sorting-system.png",
  automatedRecycling: "/machinery/fully-automated-recycling-plant.png",
};

/** Wikimedia Commons — biogas & bioenergy (verified URLs) */
const BIOGAS = {
  biogasPlant:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/GASAG_Biogas_plant_in_Schwedt_%28060%29.jpg/1280px-GASAG_Biogas_plant_in_Schwedt_%28060%29.jpg",
  anaerobicDigesters:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Gresham_Wastewater_Treatment_Plant_anaerobic_digesters_2025.jpg/1280px-Gresham_Wastewater_Treatment_Plant_anaerobic_digesters_2025.jpg",
  biogasCompressor:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/CNG_station_compressor_and_storage_unit.jpg/1280px-CNG_station_compressor_and_storage_unit.jpg",
  cbgStation: "/machinery/cbg-machinery-plant.png",
  mswPretreatment:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Dry_-_solid-state_anaerobic_digestion_AD_biogas_plant.jpg/1280px-Dry_-_solid-state_anaerobic_digestion_AD_biogas_plant.jpg",
  biomassEnergy: "/machinery/biomass-to-energy-systems.png",
  digesterInterior:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/View_into_anaerobic_digester_%286955945883%29.jpg/1280px-View_into_anaerobic_digester_%286955945883%29.jpg",
  biogasUpgrader:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Biogasupgrader.jpg/1280px-Biogasupgrader.jpg",
};

/** Wikimedia Commons — separation equipment (verified URLs) */
const SEPARATION = {
  magneticSeparatorLine:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Magnetic_separators_at_Karelsky_okatysh.jpg/1280px-Magnetic_separators_at_Karelsky_okatysh.jpg",
  conveyorMagneticSeparator:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Magnetic_separator_of_a_conveyor_belt_at_lafarge.jpg/1280px-Magnetic_separator_of_a_conveyor_belt_at_lafarge.jpg",
  overbandMagnet:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Overband_Magnet_%286256989378%29.jpg/1280px-Overband_Magnet_%286256989378%29.jpg",
  overbandOnConveyor:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Overband_magnet_on_feed_conveyor_%286256458675%29.jpg/1280px-Overband_magnet_on_feed_conveyor_%286256458675%29.jpg",
  vibratoryFeeder: "/machinery/vibratory-equipment.png",
  vibratingScreen:
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Circular_vibrating_screen.jpg",
  highGradientSeparator:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/High_Gradient_Magnetic_Separator_SALA.jpg/1280px-High_Gradient_Magnetic_Separator_SALA.jpg",
};

/** Waste treatment equipment images */
const WASTE_TREATMENT = {
  incineration: "/machinery/waste-incineration-plant.png",
  disposal: "/machinery/waste-disposal-system.png",
  composting: "/machinery/municipal-composting-plant.png",
  landfill: "/machinery/landfill-waste-management-system.png",
};

/** Advanced processing equipment images */
const ADVANCED = {
  torrefaction: "/machinery/torrefaction-plant.png",
  afrRdf: "/machinery/afr-rdf-production-line.png",
  wasteToFuel: "/machinery/waste-to-fuel-technology.png",
};

const badges = ["IWRREC Certified"];

function item(name, description, image, standard = "IWRREC") {
  return {
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    name,
    description,
    image,
    standard,
    badges,
  };
}

export const machineryCategoryGroups = [
  {
    id: "biogas-bioenergy",
    label: "Biogas & Bioenergy",
    image: BIOGAS.biogasPlant,
    overview:
      "IWRREC standards and laboratory testing for anaerobic digestion, biogas compression, CBG production, and biomass-to-energy conversion equipment.",
    items: [
      item(
        "Biogas Plants",
        "Anaerobic digestion facilities certified for gas yield, process stability, and structural integrity.",
        BIOGAS.anaerobicDigesters,
        "IWRREC"
      ),
      item(
        "Biogas Compressors",
        "Compression systems tested for pressure safety, efficiency, and contaminant limits.",
        BIOGAS.biogasCompressor,
        "IWRREC"
      ),
      item(
        "CBG Machinery",
        "Compressed Bio Gas production, storage, and dispensing equipment certification.",
        BIOGAS.cbgStation,
        "IWRREC"
      ),
      item(
        "MSW Pre-treatment for Bioenergy",
        "Municipal waste pre-treatment systems verified for feedstock quality and throughput.",
        BIOGAS.mswPretreatment,
        "IWRREC"
      ),
      item(
        "Biomass to Energy Systems",
        "Thermochemical and biological biomass conversion equipment performance standards.",
        BIOGAS.biomassEnergy,
        "IWRREC"
      ),
    ],
  },
  {
    id: "waste-recycling",
    label: "Waste Processing & Recycling",
    image: RECYCLE.mrfFacility,
    overview:
      "Certification protocols for sorting plants, MRF systems, RDF/SRF preparation, and automated recycling lines used in municipal and industrial waste processing.",
    items: [
      item(
        "Solid Waste Processing Machinery",
        "Integrated processing lines for municipal and industrial solid waste streams.",
        RECYCLE.wasteProcessingPlant,
        "IWRREC"
      ),
      item(
        "Waste Sorting Machines",
        "Optical, magnetic, and mechanical sorting equipment separation efficiency certification.",
        RECYCLE.sortingConveyors,
        "IWRREC"
      ),
      item(
        "MSW Sorting Plants",
        "Municipal solid waste sorting facilities with throughput and recovery rate benchmarks.",
        RECYCLE.mswSortingPlant,
        "IWRREC"
      ),
      item(
        "Mixed Plastic Sorting Plants",
        "Plastic fraction separation systems verified for purity grades and contamination rejection.",
        RECYCLE.plasticSorting,
        "IWRREC"
      ),
      item(
        "Packaging Waste Sorting Plants",
        "Packaging recovery lines certified for material separation and quality grades.",
        RECYCLE.packagingSorting,
        "IWRREC"
      ),
      item(
        "RDF/SRF Preparation Plants",
        "Refuse-derived and solid recovered fuel preparation equipment standards.",
        RECYCLE.rdfPreparation,
        "IWRREC"
      ),
      item(
        "Material Recovery Facilities (MRFs)",
        "Complete MRF systems certified for recovery rates and operational performance.",
        RECYCLE.mrfInterior,
        "IWRREC"
      ),
      item(
        "Fully Autonomous Sorting Systems",
        "AI-powered autonomous waste sorting with verified accuracy and uptime benchmarks.",
        RECYCLE.autonomousSorting,
        "IWRREC"
      ),
      item(
        "Fully Automated Recycling Plants",
        "End-to-end automated recycling lines with integrated conformance assessment.",
        RECYCLE.automatedRecycling,
        "IWRREC"
      ),
    ],
  },
  {
    id: "shredding-scrap",
    label: "Shredding & Scrap Processing",
    image: SHRED.autoShredder,
    overview:
      "Independent testing and certification for industrial shredders, mobile shredding units, scrap processing lines, and hydraulic baling equipment.",
    items: [
      item(
        "Heavy Duty Industrial Shredders",
        "High-capacity shredders tested for throughput, durability, and safety compliance.",
        SHRED.autoShredder,
        "IWRREC"
      ),
      item(
        "Mobile Shredders",
        "Portable shredding units certified for transport safety and field performance.",
        SHRED.mobileShredder,
        "IWRREC"
      ),
      item(
        "Two Shaft Shredders",
        "Dual-shaft shredding systems with particle size distribution verification.",
        SHRED.twoShaftShredder,
        "IWRREC"
      ),
      item(
        "Material Shredding Systems",
        "Integrated shredding lines for MSW, industrial, and organic waste streams.",
        SHRED.flattenedCarsShredder,
        "IWRREC"
      ),
      item(
        "Scrap Processing Machinery",
        "Metal and mixed scrap processing equipment performance certification.",
        SHRED.scrapProcessing,
        "IWRREC"
      ),
      item(
        "Vertical Hydraulic Baling Press",
        "Baling and compaction equipment tested for force capacity and bale density.",
        SHRED.balingPress,
        "IWRREC"
      ),
    ],
  },
  {
    id: "separation",
    label: "Separation Equipment",
    image: SEPARATION.magneticSeparatorLine,
    overview:
      "Performance verification for magnetic separators, industrial magnets, vibratory equipment, and multi-stage separation systems.",
    items: [
      item(
        "Magnetic Separators",
        "Ferrous and non-ferrous separation efficiency verified under IWRREC test protocols.",
        SEPARATION.conveyorMagneticSeparator,
        "IWRREC"
      ),
      item(
        "Industrial Magnets",
        "Overhead and drum magnet systems certified for separation performance.",
        SEPARATION.overbandMagnet,
        "IWRREC"
      ),
      item(
        "Vibratory Equipment",
        "Vibratory feeders and screens tested for amplitude, frequency, and material handling.",
        SEPARATION.vibratoryFeeder,
        "IWRREC"
      ),
      item(
        "Magnetic Separation Systems",
        "Multi-stage magnetic separation lines with documented recovery rates.",
        SEPARATION.highGradientSeparator,
        "IWRREC"
      ),
    ],
  },
  {
    id: "waste-treatment",
    label: "Waste Treatment",
    image: WASTE_TREATMENT.incineration,
    overview:
      "Environmental compliance and safety certification for incineration plants, composting systems, disposal equipment, and landfill management machinery.",
    items: [
      item(
        "Waste Incineration Plants",
        "Thermal treatment systems certified for emissions compliance and conversion efficiency.",
        WASTE_TREATMENT.incineration,
        "IWRREC"
      ),
      item(
        "Waste Disposal Systems",
        "Integrated disposal and treatment equipment safety and performance standards.",
        WASTE_TREATMENT.disposal,
        "IWRREC"
      ),
      item(
        "Municipal Composting Plants",
        "In-vessel and windrow composting systems with pathogen reduction verification.",
        WASTE_TREATMENT.composting,
        "IWRREC"
      ),
      item(
        "Landfill Waste Management Systems",
        "Leachate treatment and landfill gas recovery equipment certification.",
        WASTE_TREATMENT.landfill,
        "IWRREC"
      ),
    ],
  },
  {
    id: "advanced-processing",
    label: "Advanced Processing",
    image: ADVANCED.torrefaction,
    overview:
      "Standards and testing for torrefaction plants, AFR/RDF production lines, and waste-to-fuel conversion technologies.",
    items: [
      item(
        "Torrefaction Plants",
        "Biomass torrefaction reactors certified for energy density and process stability.",
        ADVANCED.torrefaction,
        "IWRREC"
      ),
      item(
        "AFR/RDF Production Lines",
        "Alternative fuel and RDF production equipment performance benchmarks.",
        ADVANCED.afrRdf,
        "IWRREC"
      ),
      item(
        "Waste-to-Fuel Technologies",
        "Waste-derived fuel conversion systems verified for output quality and emissions.",
        ADVANCED.wasteToFuel,
        "IWRREC"
      ),
    ],
  },
];

export const allMachineryItems = machineryCategoryGroups.flatMap((g) =>
  g.items.map((item) => ({ ...item, category: g.label, categoryId: g.id }))
);

export function getMachineryCategory(id) {
  return machineryCategoryGroups.find((g) => g.id === id) ?? null;
}

export const certificationBadges = badges;
