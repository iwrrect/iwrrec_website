export const SITE = {
  name: "IWRREC",
  legalName: "International Waste Resource Recovery and Energy Council",
  tagline: "Global Standards, Testing, Inspection & Certification for Waste Recovery & Energy Equipment",
  description:
    "IWRREC is an independent international council developing standards, accrediting laboratories, and certifying equipment for waste resource recovery and energy industries. Testing, inspection, and certification through 105+ authorized laboratory partners worldwide.",
  url: "https://www.iwrrec.org",
  email: "support@iwrrec.org",
  infoEmail: "info@iwrrec.org",
  emails: [
    {
      address: "info@iwrrec.org",
      label: "General enquiries",
      description: "Standards, publications, and public information",
    },
    {
      address: "support@iwrrec.org",
      label: "Certification support",
      description: "Equipment testing, certification, and laboratory coordination",
    },
  ],
  address: {
    line1: "International Secretariat, 10 Victoria Street",
    line2: "London, SW1H 0NB, United Kingdom",
    country: "United Kingdom",
  },
  hours: "Mon – Fri: 9:00 AM – 5:00 PM GMT",
  founded: 1975,
  developer: "IWRREC Digital Services Unit",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Programs",
    href: "/biogas-solutions",
    children: [
      { label: "Equipment Testing Standards", href: "/waste-management" },
      { label: "Recovery Equipment Standards", href: "/biogas-solutions" },
      { label: "Certification Process", href: "/biogas-process" },
      { label: "Testing Technologies", href: "/technologies" },
      { label: "Training & Education", href: "/services" },
    ],
  },
  { label: "Certified Equipment", href: "/machinery" },
  { label: "Industry Sectors", href: "/industries" },
  {
    label: "Council",
    href: "/about",
    children: [
      { label: "Certificate", href: "/iso-certifications" },
      { label: "Technology Pathways", href: "/technology-pathways" },
      { label: "Laboratory Partners", href: "/laboratory-partners" },
      { label: "Events & Conferences", href: "/events" },
      { label: "Research & Publications", href: "/blog" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Certified Equipment", href: "/machinery" },
    { label: "Technology Pathways", href: "/technology-pathways" },
    { label: "Laboratory Partners", href: "/laboratory-partners" },
    { label: "Industry Sectors", href: "/industries" },
    { label: "Certificate", href: "/iso-certifications" },
    { label: "Contact Us", href: "/contact" },
  ],
  solutions: [
    { label: "Equipment Testing Standards", href: "/waste-management" },
    { label: "Recovery Equipment Standards", href: "/biogas-solutions" },
    { label: "Certification Process", href: "/biogas-process" },
    { label: "Testing Technologies", href: "/technologies" },
    { label: "Training & Education", href: "/services" },
  ],
  resources: [
    { label: "Research & Publications", href: "/blog" },
    { label: "FAQs", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
