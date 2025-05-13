import ClientLogos from "@/components/home/ClientLogos";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
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
    </div>
  );
};

export default PerformanceMarketing;
