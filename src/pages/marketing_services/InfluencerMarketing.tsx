import ClientLogos from "@/components/home/ClientLogos";
import CommonSubFooter from "@/components/marketing_services/CommonSubFooter";
import { AgencyValueSection } from "@/components/marketing_services/influencer/AgencyValueSection";
import { AICapabilitiesSection } from "@/components/marketing_services/influencer/AICapabilitiesSection";
import { PlanetMedia } from "@/components/marketing_services/influencer/PlanetMedia";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import OurWork from "@/components/marketing_services/OurWork";
import { influencerWorkData } from "@/utils/fakeData";
import InfluencerMarketingImg from "/img/services/influencer_markting.png";

const InfluencerMarketing = () => {
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection
        pageName="Influencer marketing"
        title="Transform Your Marketing"
        description="with the Leader in Influencer Innovation"
        quote="true"
        img={InfluencerMarketingImg}
      />
      <ClientLogos />
      <PlanetMedia />
      <div className="my-20">
        <video
          className="w-full"
          src="https://4291086.fs1.hubspotusercontent-na1.net/hubfs/4291086/Viral-Nation-Sizzle-No-Sound-2Mins-optimized.mp4"
          data-src="https://4291086.fs1.hubspotusercontent-na1.net/hubfs/4291086/Viral-Nation-Sizzle-No-Sound-2Mins-optimized.mp4"
          autoPlay={true}
          muted={true}
        ></video>
      </div>
      <AgencyValueSection />
      <OurWork data={influencerWorkData} />
      <AICapabilitiesSection />
      <CommonSubFooter
        title="Elevate your influence"
        description="Ready to scale your brand’s influence in the marketplace?"
      />
    </div>
  );
};

export default InfluencerMarketing;
