import CommonCTA from "@/components/common/CommonCTA";
import ClientLogos from "@/components/home/ClientLogos";
import { DataPartners } from "@/components/marketing_services/DataPartners";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import { PerformanceDriven } from "@/components/marketing_services/performance_marketing/PerformanceDriven";
import { ServicesShowcaseSection } from "@/components/marketing_services/performance_marketing/ServicesShowcaseSection";
import useScrollToTop from "@/hooks/useScrollToTop";
import { analyticsStrategyData, measurementGoalsData } from "@/utils/fakeData";
import BusinessImg from "/img/services/business_intelligence.png";

const BusinessIntelligence = () => {
  useScrollToTop();
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection
        pageName="Business Intelligence"
        title={
          <h2 className="text-3xl md:text-6xl font-bold font-display mb-6 capitalize">
            Modernizing
            <span className="text-beast-purple-light"> measurement</span>
          </h2>
        }
        description="Get a read on social marketing campaign performance and ROAS."
        img={BusinessImg}
      />
      <ClientLogos />
      <section>
        <h2 className="text-3xl pt-16 md:pt-24 -pb-16 md:-pb-14  text-center md:text-5xl lg:text-6xl font-bold mb-6">
          Track, Study, Optimize, Repeat
        </h2>
        <p className="text-lg text-center w-full">
          Each campaign presents an opportunity to learn. Trendy Nation builds
          upon custom brand playbooks through a continuous cycle of reporting
          and studies, to drive better future campaign performance.
        </p>
        <ServicesShowcaseSection services={analyticsStrategyData} />
      </section>

      <DataPartners />

      <PerformanceDriven
        data={measurementGoalsData}
        title={
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize">
            Strategies For Every{" "}
            <span className="text-beast-purple-light">Business Goal</span>
          </h2>
        }
      />

      <CommonCTA
        title={
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-4 md:max-w-5xl mx-auto capitalize">
            Modernize Your
            <span className="text-beast-purple-light"> Measurement</span>
          </h1>
        }
        subTitle="Go beyond vanity metrics with the best-in-class business intelligence team."
      />
    </div>
  );
};

export default BusinessIntelligence;
