import CommonCTA from "@/components/common/CommonCTA";
import CommonHeading from "@/components/common/CommonHeading";
import ClientLogos from "@/components/home/ClientLogos";
import { PlanetMedia } from "@/components/marketing_services/influencer/PlanetMedia";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import { PerformanceDriven } from "@/components/marketing_services/performance_marketing/PerformanceDriven";
import { ServicesShowcaseSection } from "@/components/marketing_services/performance_marketing/ServicesShowcaseSection";
import useScrollToTop from "@/hooks/useScrollToTop";
import { performanceDrivenData, servicesShowcase } from "@/utils/fakeData";
import PerformanceImg from "/img/services/performance_marketing.png";

const PerformanceMarketing = () => {
  useScrollToTop();
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection
        pageName="Performance Marketing"
        title={
          <h2 className="text-3xl md:text-6xl font-bold font-display mb-6 capitalize">
            <span className="text-beast-purple-light">Unparalleled</span> social
            commerce
          </h2>
        }
        description="Scale your growth with social-first paid media."
        img={PerformanceImg}
      />
      <ClientLogos />
      <PlanetMedia
        jsxTitle={
          <div className="mb-6">
            <CommonHeading
              beforeHighlight="Turn Stories"
              highlight=" into Sales"
            />
          </div>
        }
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
        title={
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize">
            <span className="text-beast-purple-light">Performance-Driven</span>{" "}
            And Social-First
          </h2>
        }
      />

      <CommonCTA
        title={
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-4 md:max-w-4xl mx-auto capitalize">
            Quantify Your Social
            <span className="text-beast-purple-light">
              -First Transformation
            </span>
          </h1>
        }
        subTitle="Ready to scale your brand’s influence in the marketplace?"
      />
    </div>
  );
};

export default PerformanceMarketing;
