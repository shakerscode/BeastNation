import BlogSection from "@/components/home/Blogs";
import CaseStudy from "@/components/home/CaseStudy";
import ClientLogos from "@/components/home/ClientLogos";
import Contact from "@/components/home/Contact";
import FeaturedContent from "@/components/home/FeaturedContent";
import HeroSection from "@/components/home/HeroSection";
import ProductFeatures from "@/components/home/ProductFeatures";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import TalentSection from "@/components/home/TalentSection";
import TeamSection from "@/components/home/TeamSection";

export const HomePage = () => {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <ClientLogos />
      <FeaturedContent />
      <StatsSection />
      <ServicesSection />
      <CaseStudy />
      <TalentSection />
      <ProductFeatures />
      <BlogSection />
      <TeamSection/>
      <Contact />
    </div>
  );
};
