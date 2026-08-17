import { EVENT_IMAGES as IMG } from "@/constants/eventImages";

export const events = [
  {
    slug: "machinery-standards-summit-2026",
    name: "IWRREC Machinery Standards Summit 2026",
    location: "IWRREC Geneva Secretariat",
    date: "2026-06-05",
    banner: IMG.unGenevaConference,
    purpose:
      "Annual Council summit convening equipment manufacturers, accredited laboratory partners, and regulators to advance global machinery testing, certification, and compliance standards for waste recovery and energy industries.",
    objectives: [
      "Launch the 2026 Global Machinery Certification Report",
      "Announce five new accredited laboratory partnerships",
      "Present updated testing protocols for anaerobic digestion equipment",
    ],
    participants: "800+ attendees including manufacturers, laboratory directors, regulators, and certification auditors",
    highlights: [
      "Publication of the Global Machinery Certification Report 2026",
      "Live demonstration of emissions compliance testing protocols",
      "Manufacturer certification showcase with 20 newly certified equipment models",
    ],
    achievements:
      "Summit outcomes included eight new laboratory accreditation agreements and expanded testing capacity across three continents.",
    gallery: [
      IMG.unGenevaConference,
      IMG.palexpoExterior,
      IMG.leadershipConference,
      IMG.businessConference,
    ],
  },
  {
    slug: "equipment-certification-expo-2026",
    name: "Global Equipment Certification Expo 2026",
    location: "Palexpo, Geneva, Switzerland",
    date: "2026-03-12",
    banner: IMG.palexpoExpoHall,
    purpose:
      "IWRREC's flagship exhibition showcasing certified machinery, testing protocols, laboratory partner network, and the IWRREC certificate to an international audience of manufacturers and procurement professionals.",
    objectives: [
      "Present the updated IWRREC machinery certificate framework",
      "Launch the Equipment Testing Standards Compendium",
      "Connect manufacturers with accredited laboratory partners",
    ],
    participants: "Over 6,000 expo visitors; 280 qualified visits to the IWRREC pavilion",
    highlights: [
      "Testing standards compendium unveiled by the Council Secretary-General",
      "Panel: 'Certifying Equipment for Global Markets' with leading manufacturers",
      "Live laboratory testing demonstration with accredited partners",
    ],
    achievements:
      "Fifteen new certification applications and four laboratory accreditation MoUs signed during the three-day expo.",
    gallery: [
      IMG.palexpoExpoHall,
      IMG.palexpoExterior,
      IMG.equipmentExpo,
      IMG.tradeExpoHall,
    ],
  },
  {
    slug: "digester-certification-launch",
    name: "Anaerobic Digester Certification Launch, India",
    location: "Pune, Maharashtra, India",
    date: "2025-10-24",
    banner: IMG.biogasPlant,
    purpose:
      "Regional launch event for updated IWRREC anaerobic digester testing standards, celebrating the first batch of IWRREC certified digester systems tested at accredited laboratories in India.",
    objectives: [
      "Formally launch the IWRREC Energy Conversion Equipment Standards Series",
      "Recognize five manufacturers with newly certified digester systems",
      "Demonstrate laboratory testing protocols for gas yield verification",
    ],
    participants: "400 guests including state officials, manufacturers, and laboratory partners",
    highlights: [
      "First batch of IWRREC certified digesters presented",
      "Live gas yield verification testing demonstration",
      "Laboratory partner accreditation ceremony for three new Indian labs",
    ],
    achievements:
      "Three new laboratory accreditations expanded IWRREC testing capacity in South Asia, enabling local certification for regional manufacturers.",
    gallery: [
      IMG.biogasPlant,
      IMG.biogasDigesters,
      IMG.digesterInterior,
      IMG.biogasUpgrader,
    ],
  },
  {
    slug: "laboratory-auditor-training-2026",
    name: "Laboratory Auditor Training Week 2026",
    location: "IWRREC London Secretariat",
    date: "2026-04-14",
    banner: IMG.labObservationRoom,
    purpose:
      "Intensive training program for laboratory technicians and certification auditors on IWRREC testing methodologies, compliance assessment, and accreditation requirements.",
    objectives: [
      "Train 60 laboratory auditors on updated testing protocols",
      "Conduct hands-on equipment testing workshops",
      "Certify 25 new IWRREC-qualified testing technicians",
    ],
    participants: "60 laboratory professionals from 18 accredited partner laboratories",
    highlights: [
      "Hands-on performance testing workshop with sample equipment",
      "Safety assessment protocol training with live demonstrations",
      "Accreditation requirements briefing for new laboratory partners",
    ],
    achievements:
      "25 new IWRREC-qualified testing technicians certified, expanding the global pool of authorized certification assessors.",
    gallery: [
      IMG.labObservationRoom,
      IMG.labDataLogger,
      IMG.fireTestTechnician,
      IMG.materialsRecoveryFacility,
    ],
  },
  {
    slug: "manufacturer-certification-forum-2026",
    name: "Manufacturer Certification Forum 2026",
    location: "Frankfurt, Germany",
    date: "2026-05-20",
    banner: IMG.businessConference,
    purpose:
      "Regional forum connecting European equipment manufacturers with IWRREC accredited laboratory partners, covering certification pathways, testing requirements, and market access strategies.",
    objectives: [
      "Guide 40 manufacturers through the certification application process",
      "Match manufacturers with nearest accredited laboratory partners",
      "Present updated material handling equipment testing standards",
    ],
    participants: "120 manufacturer representatives and 15 laboratory partner delegates",
    highlights: [
      "One-on-one certification consultation sessions",
      "Material handling equipment testing standard walkthrough",
      "Manufacturer success stories from recent IWRREC certificate awards",
    ],
    achievements:
      "22 new certification applications initiated and two new laboratory accreditations announced for Central Europe.",
    gallery: [
      IMG.businessConference,
      IMG.wasteProcessingPlant,
      IMG.sortingConveyor,
      IMG.equipmentExpo,
    ],
  },
  {
    slug: "certification-leadership-conference-2025",
    name: "IWRREC Certification Leadership Conference 2025",
    location: "London, United Kingdom",
    date: "2025-11-15",
    banner: IMG.leadershipConference,
    purpose:
      "Annual leadership conference reviewing global machinery certification progress, laboratory network expansion, and standards development priorities for the coming year.",
    objectives: [
      "Review 2025 certification statistics and laboratory network growth",
      "Set 2026 priorities for machinery standards development",
      "Recognize outstanding laboratory partners and certified manufacturers",
    ],
    participants: "300 Council delegates, laboratory directors, and manufacturer executives",
    highlights: [
      "2025 certification report: 350+ new equipment models certified",
      "Laboratory Partner Excellence Awards ceremony",
      "Standards roadmap presentation for 2026–2027",
    ],
    achievements:
      "Conference endorsed expanded testing protocols for modular and containerized equipment, addressing growing demand for decentralized processing solutions.",
    gallery: [
      IMG.leadershipConference,
      IMG.unGenevaConference,
      IMG.businessConference,
      IMG.tradeExpoHall,
    ],
  },
];

export const galleryItems = [
  {
    id: "gallery-1",
    image: IMG.fireTestTechnician,
    title: "Laboratory performance testing",
    category: "Testing",
    alt: "Technician conducting fire-resistance performance testing in an accredited laboratory",
  },
  {
    id: "gallery-2",
    image: IMG.leadershipConference,
    title: "Certification ceremony",
    category: "Certification",
    alt: "Conference hall prepared for a certification awards ceremony",
  },
  {
    id: "gallery-3",
    image: IMG.palexpoExpoHall,
    title: "Equipment certification expo",
    category: "Expo",
    alt: "Exhibition hall at Palexpo during an international equipment expo",
  },
  {
    id: "gallery-4",
    image: IMG.labDataLogger,
    title: "Laboratory auditor training",
    category: "Training",
    alt: "Laboratory instrumentation and data logging during auditor training",
  },
  {
    id: "gallery-5",
    image: IMG.materialsRecoveryFacility,
    title: "Machinery testing equipment",
    category: "Laboratory",
    alt: "Materials recovery facility used for machinery performance evaluation",
  },
  {
    id: "gallery-6",
    image: IMG.businessConference,
    title: "Manufacturer certification forum",
    category: "Forum",
    alt: "Business conference venue hosting a manufacturer certification forum",
  },
];
