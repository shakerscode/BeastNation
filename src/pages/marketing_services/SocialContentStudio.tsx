import ClientLogos from "@/components/home/ClientLogos";
import MarketingHeroSection from "@/components/marketing_services/MarketingHeroSection";
import SocialContentImg from "/img/services/social_content_studio.png";

const SocialContentStudio = () => {
  return (
    <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto">
      <MarketingHeroSection
        pageName="Social Content Studio"
        title="Creating Award-Winning Moments"
        description="Light the spark on unforgettable cultural moments."
        img={SocialContentImg}
      />
      <ClientLogos />
    </div>
  );
};

export default SocialContentStudio;
