import ClientLogos from "@/components/home/ClientLogos";
import CommonSubFooter from "@/components/marketing_services/CommonSubFooter";
import { PlanetMedia } from "@/components/marketing_services/influencer/PlanetMedia";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import { PerformanceDriven } from "@/components/marketing_services/performance_marketing/PerformanceDriven";
import { ServicesShowcaseSection } from "@/components/marketing_services/performance_marketing/ServicesShowcaseSection";
import { performanceDrivenData, servicesShowcase } from "@/utils/fakeData";
import PerformanceImg from "/img/services/performance_marketing.png";

const PerformanceMarketing = () => {
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection
        pageName="Performance Marketing"
        title="Unparalleled social commerce"
        description="Scale your growth with social-first paid media."
        img={PerformanceImg}
      />
      <ClientLogos />
      <PlanetMedia
        title="Turn Stories into Sales"
        description="Trendy Nation blends audience-centric content with data-driven decision making to deliver higher ROAs and better conversion rates. Leverage influencer collaborations to go beyond your existing followers to new, relevant audiences."
        cardTitle1="1B+"
        cardPara1="Engaged Customers"
        cardTitle2="7x"
        cardPara2="Avg ROAS increase"
        cardTitle3="35"
        cardPara3="Awards"
        cardTitle4="-42%"
        cardPara4="Avg CAC reduction"
      />

      <ServicesShowcaseSection services={servicesShowcase} />
      <PerformanceDriven
        data={performanceDrivenData}
        title={"Performance-Driven And Social-First"}
      />
      <CommonSubFooter
        title="Quantify Your Social-First Transformation"
        description="Connect with Viral Nation today to take the first step in scaling your brand’s growth."
      />
    </div>
  );
};

export default PerformanceMarketing;
