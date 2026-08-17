import Hero from "@/components/sections/Hero";
import CouncilStandardsIntro from "@/components/sections/CouncilStandardsIntro";
import MachineryCarousel from "@/components/sections/MachineryCarousel";
import CertificationProcessInfographic from "@/components/sections/CertificationProcessInfographic";
import WasteToEnergyFlowcharts from "@/components/sections/WasteToEnergyFlowcharts";
import RenewableEnergyShowcase from "@/components/sections/RenewableEnergyShowcase";
import LaboratoriesSection from "@/components/sections/LaboratoriesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CertificationsPreview from "@/components/sections/CertificationsPreview";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import EventsPreview from "@/components/sections/EventsPreview";
import LatestBlogs from "@/components/sections/LatestBlogs";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { faqs } from "@/data/faqs";
import { pageMetadata } from "@/constants/seo";

export const metadata = pageMetadata("home");

export default function HomePage() {
  return (
    <>
      <Hero />
      <CouncilStandardsIntro />
      <MachineryCarousel />
      <CertificationProcessInfographic />
      <WasteToEnergyFlowcharts />
      <RenewableEnergyShowcase />
      <LaboratoriesSection showProcess={false} showBenefits={false} />
      <ServicesSection />
      <CertificationsPreview />
      <StatsSection />
      <TestimonialsSection />
      <EventsPreview />
      <LatestBlogs />
      <FAQSection items={faqs.slice(0, 6)} />
      <CTASection />
    </>
  );
}
