import PageHero from "@/components/common/PageHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutContentBlock from "@/components/about/AboutContentBlock";
import StatementCards from "@/components/about/StatementCards";
import LaboratoriesSection from "@/components/sections/LaboratoriesSection";
import CTASection from "@/components/sections/CTASection";
import { whyWeExist } from "@/data/about";

import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="International Waste Resource Recovery and Energy Council"
        description="Global standards, testing, and certification for waste recovery and energy machinery."
        breadcrumb={[{ label: "About Us" }]}
      />

      <AboutIntro />
      <StatementCards />
      <AboutContentBlock section={whyWeExist} tinted />
      <LaboratoriesSection showDirectoryPreview={false} />

      <CTASection
        title="Certify your equipment through IWRREC"
        description="Manufacturers worldwide can have their machinery tested and certified through our accredited laboratory partners. Contact us to start your certification application."
      />
    </>
  );
}
