import ClientLogos from "@/components/home/ClientLogos";
import CommonSubFooter from "@/components/marketing_services/CommonSubFooter";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import { PerformanceDriven } from "@/components/marketing_services/performance_marketing/PerformanceDriven";
import { ServicesShowcaseSection } from "@/components/marketing_services/performance_marketing/ServicesShowcaseSection";
import {
  experienceExecutionData,
  experientialMarketingData,
} from "@/utils/fakeData";
import ExperientialImg from "/img/services/experiential_marketing.png";
import CommonCTA from "@/components/common/CommonCTA";

const ExperientialMarketing = () => {
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection
        pageName="Experiential Marketing"
        title={
          <h2 className="text-3xl md:text-6xl font-bold font-display mb-6 capitalize">
            Turn Stories
            <span className="text-beast-purple-light"> Into Sentiment</span>
          </h2>
        }
        description="Drive revenue before, during, and after the experience has wrapped up."
        img={ExperientialImg}
      />
      <ClientLogos />

      <section>
        <h2 className="text-3xl pt-16 md:pt-24 -pb-16 md:-pb-14  text-center md:text-5xl lg:text-6xl font-bold mb-6">
          Shattering Traditional Experiential
        </h2>
        <p className="text-lg text-center w-full">
          Leverage the world’s largest influencer network to bring the offline
          and online world together with events primed for social amplification.
        </p>
        <ServicesShowcaseSection services={experientialMarketingData} />
      </section>

      <PerformanceDriven
        data={experienceExecutionData}
        title={
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 capitalize">
            Award-Winning Experiences,{" "}
            <span className="text-beast-purple-light">Record-Breaking ROI</span>
          </h2>
        }
      />

      <CommonCTA
        title={
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-4 md:max-w-4xl mx-auto capitalize">
            Extend Your
            <span className="text-beast-purple-light"> Brand Footprint</span>
          </h1>
        }
        subTitle="Partner with the global creative service experts in original content, experiences, and collaborations."
      />
    </div>
  );
};

export default ExperientialMarketing;
