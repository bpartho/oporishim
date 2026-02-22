import CallToAction from "@/components/CallToAction";
import CareerSubscribeSection from "@/components/CareerSubscribeSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import HeroSection from "@/components/HeroSection";
import IndustryExpertise from "@/components/IndustryExpertise";
import OfferingsSection from "@/components/OfferingsSection";
import OporishimAdvantage from "@/components/OporishimAdvantage";
import PartnersSection from "@/components/PartnersSection";
import ProcessSection from "@/components/ProcessSection";
import RecommendedForYou from "@/components/RecommendedForYou";
import Testimonials from "@/components/Testimonials";
import ThinkingBreakthroughsSection from "@/components/ThinkingBreakthroughsSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ValuePropositionSection />
      <PartnersSection />
      <OfferingsSection />
      <ThinkingBreakthroughsSection />
      <ProcessSection />
      <IndustryExpertise />
      <CaseStudiesSection />
      <Testimonials />
      <OporishimAdvantage />
      <CareerSubscribeSection />
      <CallToAction />
      <RecommendedForYou />
    </div>
  );
}
