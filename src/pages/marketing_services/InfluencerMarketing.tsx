import CommonCTA from "@/components/common/CommonCTA";
import ClientLogos from "@/components/home/ClientLogos";
import { AgencyValueSection } from "@/components/marketing_services/influencer/AgencyValueSection";
import { AICapabilitiesSection } from "@/components/marketing_services/influencer/AICapabilitiesSection";
import { PlanetMedia } from "@/components/marketing_services/influencer/PlanetMedia";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import OurWork from "@/components/marketing_services/OurWork";
import useScrollToTop from "@/hooks/useScrollToTop";
import { influencerWorkData } from "@/utils/fakeData";
import InfluencerMarketingImg from "/img/services/influencer_markting.png";

const InfluencerMarketing = () => {
  useScrollToTop();
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto pt-28 md:pt-0">
      <MarketingHeroSection
        pageName="Influencer marketing"
        title={
          <h2 className="text-3xl md:text-6xl font-bold font-display mb-6 capitalize">
            Transform Your
            <span className="text-beast-purple-light"> Marketing</span>
          </h2>
        }
        description="with the Leader in Influencer Innovation"
        quote="true"
        img={InfluencerMarketingImg}
      />
      <ClientLogos />
      <PlanetMedia
        title="Forge Authentic Connections That Drive Trust, Loyalty, And Measurable Growth"
        description="Creators are the new global media, shaping consumer trust and driving engagement.
              With over 200M+ professional creators, finding the perfect fit for your campaign can feel overwhelming. At Beast Nation, we take the
              guesswork out of influencer marketing. Our end-to-end solution
              identifies, curates, and activates the ideal creators to amplify
              your brand across global markets — ensuring impact, efficiency,
              and measurable success."
        cardTitle1="$100M+"
        cardPara1="Annual creator spend"
        cardTitle2="35+"
        cardPara2="Verticals"
        cardTitle3="7X"
        cardPara3="Avg ROAs increase"
        cardTitle4="-42%"
        cardPara4="Avg CAC reduction"
      />
      <AgencyValueSection />
      <OurWork data={influencerWorkData} />
      <AICapabilitiesSection />

      <CommonCTA
        title={
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-4 md:max-w-4xl mx-auto capitalize">
            Elevate your
            <span className="text-beast-purple-light"> influence</span>
          </h1>
        }
        subTitle="Ready to scale your brand’s influence in the marketplace?"
      />
    </div>
  );
};

export default InfluencerMarketing;
