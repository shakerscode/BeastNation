import ClientLogos from "@/components/home/ClientLogos";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
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
    </div>
  );
};

export default InfluencerMarketing;
