import ClientLogos from "@/components/home/ClientLogos";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import BusinessImg from "/img/services/business_intelligence.png";

const BusinessIntelligence = () => {
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection
        pageName="Business Intelligence"
        title="Modernizing measurement"
        description="Get a read on social marketing campaign performance and ROAS."
        img={BusinessImg}
      />
      <ClientLogos />
    </div>
  );
};

export default BusinessIntelligence;
